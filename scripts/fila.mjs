// Fila de trabalho dos agentes, lida de dados/lista-mestra.csv.
//
//   node scripts/fila.mjs                      resumo por situação
//   node scripts/fila.mjs --json [--pesquisa N] [--redacao N] [--reforco N] [--fechamento N]
//                                              listas de identificadores para cada papel
//   node scripts/fila.mjs marcar <id> <situacao> [observação]
//                                              muda a situação de uma linha (CSV seguro)
//
// Situações (coluna `situacao`), na ordem do fluxo:
//   a-pesquisar      nome registrado, sem dossiê            -> pesquisador
//   sem-fonte        pesquisador não achou fonte que sirva  (fica parado; Helton decide)
//   dossie           dossiê pronto, sem verbete             -> redator
//   rascunho         verbete escrito, aguardando fechamento -> ligador + revisor
//   devolvido        revisor achou PROBLEMA                 -> redator (lê dados/revisao/<id>.md)
//   reforcar         só fonte única; tentar segunda fonte   -> atualizador
//   pronto-para-lote passou na revisão                      -> empacotar
//   em-lote          está em uma branch lote-NN             (aguarda pull request e revisão humana)
//   revisado         Helton aprovou e mesclou
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const LISTA = './dados/lista-mestra.csv';
const RELACOES = './dados/relacoes.csv';
const PESO = { alta: 0, media: 1, baixa: 2, '': 3 };

const args = process.argv.slice(2);

if (args[0] === 'marcar') {
  const [, id, situacao, obs] = args;
  if (!id || !situacao) sair('uso: fila.mjs marcar <id> <situacao> [observação]');
  const { cabecalho, linhas } = lerCsv(LISTA);
  const linha = linhas.find((l) => l.id === id);
  if (!linha) sair(`id não encontrado na lista-mestra: ${id}`);
  linha.situacao = situacao;
  if (obs) linha.observacoes = linha.observacoes ? `${linha.observacoes}; ${obs}` : obs;
  writeFileSync(LISTA, escreverCsv(cabecalho, linhas));
  console.log(`${id}: ${situacao}`);
  process.exit(0);
}

const { linhas } = lerCsv(LISTA);
const relacoes = existsSync(RELACOES) ? lerCsv(RELACOES).linhas : [];
const grau = new Map();
for (const r of relacoes) {
  grau.set(r.origem, (grau.get(r.origem) ?? 0) + 1);
  grau.set(r.destino, (grau.get(r.destino) ?? 0) + 1);
}

// Situação efetiva: o que os arquivos dizem vence o que a coluna diz.
for (const l of linhas) {
  const temVerbete = existsSync(`./verbetes/${l.id}.md`);
  const temDossie = existsSync(`./dados/dossies/${l.id}.md`);
  if (l.situacao === 'a-pesquisar' && temDossie) l.situacao = 'dossie';
  if (l.situacao === 'dossie' && temVerbete) l.situacao = 'rascunho';
  if (l.situacao === 'a-pesquisar' && temVerbete) l.situacao = 'rascunho';
}

// Prioridade alta primeiro; entre iguais, o nome mais conectado em relacoes.csv.
const ordenar = (a, b) =>
  (PESO[a.prioridade] ?? 3) - (PESO[b.prioridade] ?? 3) || (grau.get(b.id) ?? 0) - (grau.get(a.id) ?? 0);

const por = (s) => linhas.filter((l) => l.situacao === s).sort(ordenar);

const duplicados = linhas.map((l) => l.id).filter((id, i, arr) => arr.indexOf(id) !== i);

if (args.includes('--json')) {
  const n = (flag, padrao) => {
    const i = args.indexOf(flag);
    return i >= 0 ? Number(args[i + 1]) : padrao;
  };
  const saida = {
    pesquisa: por('a-pesquisar').slice(0, n('--pesquisa', 4)).map((l) => l.id),
    redacao: [...por('devolvido'), ...por('dossie')].slice(0, n('--redacao', 4)).map((l) => l.id),
    reforco: por('reforcar').slice(0, n('--reforco', 2)).map((l) => l.id),
    fechamento: por('rascunho').slice(0, n('--fechamento', 10)).map((l) => l.id),
    prontos: por('pronto-para-lote').map((l) => l.id),
    duplicados,
  };
  console.log(JSON.stringify(saida));
  process.exit(0);
}

const contagem = {};
for (const l of linhas) contagem[l.situacao || '(vazio)'] = (contagem[l.situacao || '(vazio)'] ?? 0) + 1;
console.log(`${linhas.length} nomes na lista-mestra.`);
for (const [s, c] of Object.entries(contagem).sort()) console.log(`  ${s.padEnd(18)} ${c}`);
const top = [...grau.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
if (top.length) console.log(`Mais conectados: ${top.map(([id, g]) => `${id} (${g})`).join(', ')}`);
if (duplicados.length) console.log(`AVISO  ids duplicados na lista-mestra: ${[...new Set(duplicados)].join(', ')}`);

// --- utilitários ---------------------------------------------------------
function sair(msg) {
  console.error(msg);
  process.exit(1);
}

function lerCsv(caminho) {
  const texto = readFileSync(caminho, 'utf8');
  const registros = [];
  let campo = '';
  let linha = [];
  let aspas = false;
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i];
    if (aspas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') aspas = false;
      else campo += c;
    } else if (c === '"') aspas = true;
    else if (c === ',') { linha.push(campo); campo = ''; }
    else if (c === '\n') { linha.push(campo); registros.push(linha); linha = []; campo = ''; }
    else if (c !== '\r') campo += c;
  }
  if (campo || linha.length) { linha.push(campo); registros.push(linha); }
  const [cabecalho, ...resto] = registros;
  const linhas = resto
    .filter((r) => r.some((v) => v.trim()))
    .map((r) => Object.fromEntries(cabecalho.map((k, i) => [k.trim(), (r[i] ?? '').trim()])));
  return { cabecalho: cabecalho.map((k) => k.trim()), linhas };
}

function escreverCsv(cabecalho, linhas) {
  const campo = (v = '') => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
  return [cabecalho.join(','), ...linhas.map((l) => cabecalho.map((k) => campo(l[k])).join(','))].join('\n') + '\n';
}
