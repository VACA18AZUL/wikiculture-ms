// Aponta menções a nomes conhecidos que ainda não viraram link interno.
// Uso: node scripts/ligacoes.mjs
//
// "Nome conhecido" é o título de um verbete em verbetes/ ou o nome de uma
// linha em dados/lista-mestra.csv. O script procura esses nomes no corpo de
// cada verbete, fora de [[...]], fora das notas de fonte e fora da ficha,
// e lista o que encontrar. Também lista os verbetes desejados (citados em
// [[...]] sem arquivo) que ainda não estão na lista-mestra.
//
// Só aponta; não altera arquivo. Quem decide se a menção vira link é o
// agente ligador, depois de conferir que não é homônimo.
import { readdirSync, readFileSync } from 'node:fs';

const PASTA = './verbetes';
const LISTA = './dados/lista-mestra.csv';

// --- nomes conhecidos -> identificador -----------------------------------
const nomes = new Map(); // nome visível -> id
const ids = new Set();

for (const arquivo of readdirSync(PASTA).filter((f) => f.endsWith('.md'))) {
  const id = arquivo.replace(/\.md$/, '');
  ids.add(id);
  const m = readFileSync(`${PASTA}/${arquivo}`, 'utf8').match(/^titulo:\s*(.+)$/m);
  if (m) registrar(m[1].trim(), id);
}

for (const linha of csv(readFileSync(LISTA, 'utf8'))) {
  if (linha.id && linha.nome) registrar(linha.nome, linha.id);
}

function registrar(nome, id) {
  nome = nome.replace(/^["']|["']$/g, '');
  const semParenteses = nome.replace(/\s*\([^)]*\)\s*$/, '').trim();
  if (semParenteses.length >= 4) nomes.set(semParenteses, id);
  // "Museu de Arte Contemporânea de Mato Grosso do Sul (MARCO)" -> também "MARCO"
  const sigla = nome.match(/\(([A-ZÀ-Ú][A-ZÀ-Ú0-9-]{2,})\)\s*$/);
  if (sigla) nomes.set(sigla[1], id);
}

// --- varredura -----------------------------------------------------------
const desejados = new Set();
let total = 0;

for (const arquivo of readdirSync(PASTA).filter((f) => f.endsWith('.md')).sort()) {
  const proprio = arquivo.replace(/\.md$/, '');
  const texto = readFileSync(`${PASTA}/${arquivo}`, 'utf8');
  const partes = texto.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  if (!partes) continue;

  let corpo = partes[1];
  const deslocamento = texto.slice(0, texto.length - corpo.length).split('\n').length - 1;
  for (const m of corpo.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const id = m[1].trim();
    if (!ids.has(id)) desejados.add(id);
  }

  // Apaga o que não deve ser analisado, preservando o número de linhas.
  corpo = corpo
    .replace(/^\[\^[^\]]+\]:.*$/gm, '') // definições de nota
    .replace(/\[\[[^\]]*\]\]/g, (s) => ' '.repeat(s.length)) // links já feitos
    .replace(/\[([^\]]*)\]\([^)]*\)/g, (s) => ' '.repeat(s.length)); // links externos

  const linhas = corpo.split('\n');
  const achados = [];
  let secao = '';
  linhas.forEach((linha, i) => {
    if (/^#+\s/.test(linha)) secao = linha.replace(/^#+\s*/, '');
    if (secao === 'Para saber mais') return;
    for (const [nome, id] of nomes) {
      if (id === proprio) continue;
      const re = new RegExp(`(^|[^\\p{L}\\p{N}-])${escapar(nome)}(?=$|[^\\p{L}\\p{N}-])`, 'u');
      if (re.test(linha)) achados.push({ linha: i + 1 + deslocamento, nome, id });
    }
  });

  if (achados.length) {
    console.log(`\n${arquivo}`);
    for (const a of achados) console.log(`  linha ${a.linha}: "${a.nome}" -> [[${a.id}|${a.nome}]]`);
    total += achados.length;
  }
}

const foraDaLista = [...desejados].filter((id) => ![...nomes.values()].includes(id)).sort();

console.log(`\n${total} menção(ões) sem link.`);
if (foraDaLista.length) {
  console.log(`Verbetes desejados fora da lista-mestra: ${foraDaLista.join(', ')}`);
}

// --- utilitários ---------------------------------------------------------
function escapar(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Leitor mínimo de CSV com aspas duplas. Devolve objetos pelo cabeçalho. */
function csv(texto) {
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
  const [cab, ...resto] = registros;
  return resto
    .filter((r) => r.some((v) => v.trim()))
    .map((r) => Object.fromEntries(cab.map((k, i) => [k.trim(), (r[i] ?? '').trim()])));
}
