// Confere as regras editoriais em todos os verbetes. Uso: npm run conferir
//   ERRO  -> impede a publicação (o comando termina com falha)
//   AVISO -> não impede, mas merece atenção
import { readdirSync, readFileSync } from 'node:fs';
import { TIPOS_LINK, DOMINIOS_MIDIA, SECOES_MIDIA, RASTREIO, dominioAceito } from '../src/lib/links.mjs';

const PASTA = './verbetes';
const arquivos = readdirSync(PASTA).filter((f) => f.endsWith('.md'));
const ids = new Set(arquivos.map((f) => f.replace(/\.md$/, '')));
const erros = [];
const avisos = [];
const desejados = new Set();
// Produções audiovisuais e suas equipes, para conferir os verbetes de quem fez cada obra.
const producoes = new Map();
const obrasNaTrajetoria = new Map();

for (const arquivo of arquivos) {
  const texto = readFileSync(`${PASTA}/${arquivo}`, 'utf8');
  const partes = texto.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!partes) {
    erros.push(`${arquivo}: ficha (bloco entre ---) ausente ou mal formada`);
    continue;
  }
  const ficha = partes[1];
  const corpo = partes[2];

  const id = arquivo.replace(/\.md$/, '');
  const videos = [];
  const equipe = new Map();
  let trechoObras = '';

  // Ligações externas da ficha (campo links).
  const blocoLinks = ficha.match(/^links:\n((?:[ \t]+.*\n?)*)/m);
  if (blocoLinks) {
    const itens = blocoLinks[1].split(/^\s*-\s+/m).filter((x) => x.trim());
    for (const item of itens) {
      const campo = (nome) => item.match(new RegExp(`(?:^|\\n)\\s*${nome}:\\s*(.+)`))?.[1].trim().replace(/^["']|["']$/g, '');
      const tipo = campo('tipo');
      const endereco = campo('url');
      if (!tipo || !endereco) continue; // o build acusa campos ausentes
      if (!campo('acesso')) erros.push(`${arquivo}: link ${endereco} sem data de acesso`);
      if (tipo === 'video') {
        if (!dominioAceito(endereco, DOMINIOS_MIDIA)) erros.push(`${arquivo}: link do tipo "video" fora das plataformas de vídeo -> ${endereco}`);
        videos.push(endereco);
      }
      const regra = TIPOS_LINK[tipo];
      if (regra?.dominios && !dominioAceito(endereco, regra.dominios)) {
        erros.push(`${arquivo}: link do tipo "${tipo}" aponta para outro domínio -> ${endereco}`);
      }
    }
  }
  for (const m of texto.matchAll(/https?:\/\/[^\s)"'>\]]+/g)) {
    if (RASTREIO.test(m[0])) avisos.push(`${arquivo}: link com parâmetro de rastreamento (remova) -> ${m[0]}`);
  }
  if (/^##\s+Ligações externas/m.test(corpo)) {
    avisos.push(`${arquivo}: use o campo links da ficha em vez de uma seção "Ligações externas" no texto`);
  }

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
    if (secao === 'Filmografia' || secao === 'Videografia') trechoObras += b + '\n';
    if (ehLista && secao === 'Ficha técnica') {
      for (const item of b.split(/\n(?=[-*]\s|\d+\.\s)/)) {
        if (!/\[\^[^\]]+\]/.test(item)) erros.push(`${arquivo}: item da Ficha técnica sem fonte -> "${item.slice(0, 70)}..."`);
        const funcao = item.replace(/^[-*]\s+/, '').split(':')[0].trim();
        for (const m of item.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) equipe.set(m[1].trim(), funcao);
      }
      continue;
    }
    if (ehLista && SECOES_MIDIA.includes(secao)) {
      // Cada disco, espetáculo, filme ou vídeo precisa da própria nota de fonte.
      for (const item of b.split(/\n(?=[-*]\s|\d+\.\s)/)) {
        if (!/\[\^[^\]]+\]/.test(item)) erros.push(`${arquivo}: item de ${secao} sem fonte -> "${item.slice(0, 70)}..."`);
        for (const m of item.matchAll(/\]\((https?:[^)\s]+)\)/g)) {
          if (!m[1].startsWith('https://')) erros.push(`${arquivo}: link de ${secao} sem https -> ${m[1]}`);
          else if (!dominioAceito(m[1], DOMINIOS_MIDIA)) avisos.push(`${arquivo}: link de ${secao} fora das plataformas de escuta e vídeo -> ${m[1]}`);
        }
      }
      continue;
    }
    if (!ehLista && !/\[\^[^\]]+\]/.test(b)) {
      erros.push(`${arquivo}: parágrafo sem fonte -> "${b.slice(0, 70)}..."`);
    }
  }
  for (const n of usadas) if (!definidas.has(n)) erros.push(`${arquivo}: nota [^${n}] usada mas não definida`);
  for (const n of definidas) if (!usadas.has(n)) avisos.push(`${arquivo}: nota [^${n}] definida mas não usada`);
  if (definidas.size === 0) erros.push(`${arquivo}: nenhuma fonte citada`);

  const titulo = ficha.match(/^titulo:\s*(.+)$/m)?.[1].trim().replace(/^["']|["']$/g, '') ?? id;
  if (equipe.size) producoes.set(id, { titulo, equipe, videos });
  obrasNaTrajetoria.set(id, trechoObras);

  // Links internos.
  for (const m of corpo.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const id = m[1].trim();
    if (!ids.has(id)) desejados.add(id);
  }
}

// Cada pessoa ou grupo da ficha técnica que já tem verbete deve listar a produção, com o mesmo link de vídeo.
for (const [obra, { titulo, equipe, videos }] of producoes) {
  for (const [pessoa, funcao] of equipe) {
    if (!ids.has(pessoa)) continue;
    const trecho = obrasNaTrajetoria.get(pessoa) ?? '';
    const sugestao = `- [[${obra}|${titulo}]] (ano) — ${funcao.toLowerCase()}.[^fonte]${videos.map((v) => ` [Assistir](${v})`).join('')}`;
    if (!new RegExp(`\\[\\[${obra}(\\||\\]\\])`).test(trecho)) {
      avisos.push(`${pessoa}.md: falta "${titulo}" em Filmografia ou Videografia (está na ficha técnica de ${obra}.md). Sugestão: ${sugestao}`);
      continue;
    }
    for (const v of videos) {
      if (!trecho.includes(v)) avisos.push(`${pessoa}.md: "${titulo}" está sem o link de vídeo da produção -> ${v}`);
    }
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
