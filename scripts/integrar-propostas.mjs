// Integra as propostas dos agentes na lista-mestra e em relacoes.csv.
// Uso: node scripts/integrar-propostas.mjs
//
// Pesquisador, redator, ligador, revisor e atualizador não editam
// dados/lista-mestra.csv nem dados/relacoes.csv diretamente quando rodam em
// paralelo: cada um deixa um arquivo em dados/propostas/:
//   nomes-<quem>.csv     mesmas colunas da lista-mestra
//   relacoes-<quem>.csv  mesmas colunas de relacoes.csv
// Este script acrescenta o que ainda não existe (por id; por origem+relacao+destino),
// sobe a prioridade de nomes que apareceram de novo e apaga os arquivos integrados.
import { readdirSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';

const PASTA = './dados/propostas';
const LISTA = './dados/lista-mestra.csv';
const RELACOES = './dados/relacoes.csv';
const PESO = { alta: 0, media: 1, baixa: 2, '': 3 };

const lista = lerCsv(LISTA);
const relacoes = lerCsv(RELACOES);
const ids = new Map(lista.linhas.map((l) => [l.id, l]));
const chaves = new Set(relacoes.linhas.map((r) => `${r.origem}|${r.relacao}|${r.destino}`));

let nomesNovos = 0;
let relacoesNovas = 0;
let promovidos = 0;
const arquivos = readdirSync(PASTA).filter((f) => f.endsWith('.csv'));

for (const f of arquivos) {
  const { linhas } = lerCsv(`${PASTA}/${f}`);
  if (f.startsWith('nomes-')) {
    for (const l of linhas) {
      if (!l.id || !l.nome) continue;
      const existente = ids.get(l.id);
      if (!existente) {
        const nova = Object.fromEntries(lista.cabecalho.map((k) => [k, l[k] ?? '']));
        if (!nova.situacao) nova.situacao = 'a-pesquisar';
        lista.linhas.push(nova);
        ids.set(l.id, nova);
        nomesNovos++;
      } else {
        // Apareceu de novo em outra fonte: sobe a prioridade e guarda a pista.
        if (PESO[l.prioridade] < PESO[existente.prioridade ?? '']) {
          existente.prioridade = l.prioridade;
          promovidos++;
        }
        if (l.url_fonte && !existente.observacoes.includes(l.url_fonte)) {
          existente.observacoes = [existente.observacoes, `também em ${l.url_fonte}`].filter(Boolean).join('; ');
        }
      }
    }
  } else if (f.startsWith('relacoes-')) {
    for (const r of linhas) {
      if (!r.origem || !r.relacao || !r.destino) continue;
      const chave = `${r.origem}|${r.relacao}|${r.destino}`;
      if (chaves.has(chave)) continue;
      relacoes.linhas.push(Object.fromEntries(relacoes.cabecalho.map((k) => [k, r[k] ?? ''])));
      chaves.add(chave);
      relacoesNovas++;
    }
  } else {
    console.log(`ignorado (nome fora do padrão nomes-*/relacoes-*): ${f}`);
    continue;
  }
  unlinkSync(`${PASTA}/${f}`);
}

writeFileSync(LISTA, escreverCsv(lista.cabecalho, lista.linhas));
writeFileSync(RELACOES, escreverCsv(relacoes.cabecalho, relacoes.linhas));
console.log(`${arquivos.length} arquivo(s) de propostas; +${nomesNovos} nomes, +${relacoesNovas} relações, ${promovidos} prioridade(s) elevada(s).`);

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
