// Confere as regras editoriais em todos os verbetes. Uso: npm run conferir
//   ERRO  -> impede a publicação (o comando termina com falha)
//   AVISO -> não impede, mas merece atenção
import { readdirSync, readFileSync } from 'node:fs';

const PASTA = './verbetes';
const arquivos = readdirSync(PASTA).filter((f) => f.endsWith('.md'));
const ids = new Set(arquivos.map((f) => f.replace(/\.md$/, '')));
const erros = [];
const avisos = [];
const desejados = new Set();

for (const arquivo of arquivos) {
  const texto = readFileSync(`${PASTA}/${arquivo}`, 'utf8');
  const partes = texto.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!partes) {
    erros.push(`${arquivo}: ficha (bloco entre ---) ausente ou mal formada`);
    continue;
  }
  const corpo = partes[2];

  if (!/^[a-z0-9]+(-[a-z0-9]+)*\.md$/.test(arquivo)) {
    erros.push(`${arquivo}: nome de arquivo deve ter só minúsculas, números e hífens, sem acentos`);
  }

  // Dados pessoais que nunca entram no site.
  if (/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/.test(texto)) erros.push(`${arquivo}: parece conter um CPF`);
  if (/\b\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}\b/.test(texto)) erros.push(`${arquivo}: parece conter um CNPJ`);
  if (/\(?\b\d{2}\)?\s?9?\d{4}-?\d{4}\b/.test(corpo)) avisos.push(`${arquivo}: parece conter um telefone`);
  if (/[\w.+-]+@[\w-]+\.[\w.]+/.test(corpo)) avisos.push(`${arquivo}: parece conter um e-mail`);

  // Sem fonte, sem frase: todo parágrafo de texto precisa de uma nota [^x].
  const definidas = new Set([...corpo.matchAll(/^\[\^([^\]]+)\]:/gm)].map((m) => m[1]));
  const usadas = new Set();
  let secao = '';
  for (const bloco of corpo.split(/\n\s*\n/)) {
    const b = bloco.trim();
    if (!b) continue;
    if (b.startsWith('#')) {
      secao = b.replace(/^#+\s*/, '');
      continue;
    }
    if (/^\[\^[^\]]+\]:/.test(b)) continue; // definição de nota
    for (const m of b.matchAll(/\[\^([^\]]+)\](?!:)/g)) usadas.add(m[1]);
    if (secao === 'Para saber mais') continue; // lista de links, não de afirmações
    const ehLista = /^([-*]|\d+\.)\s/.test(b);
    if (!ehLista && !/\[\^[^\]]+\]/.test(b)) {
      erros.push(`${arquivo}: parágrafo sem fonte -> "${b.slice(0, 70)}..."`);
    }
  }
  for (const n of usadas) if (!definidas.has(n)) erros.push(`${arquivo}: nota [^${n}] usada mas não definida`);
  for (const n of definidas) if (!usadas.has(n)) avisos.push(`${arquivo}: nota [^${n}] definida mas não usada`);
  if (definidas.size === 0) erros.push(`${arquivo}: nenhuma fonte citada`);

  // Links internos.
  for (const m of corpo.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const id = m[1].trim();
    if (!ids.has(id)) desejados.add(id);
  }
}

console.log(`${arquivos.length} verbetes conferidos.`);
if (desejados.size) console.log(`Verbetes desejados (citados, ainda sem página): ${[...desejados].sort().join(', ')}`);
for (const a of avisos) console.log(`AVISO  ${a}`);
for (const e of erros) console.log(`ERRO   ${e}`);
if (erros.length) {
  console.log(`\n${erros.length} erro(s). Corrija antes de publicar.`);
  process.exit(1);
}
console.log('Nenhum erro.');
