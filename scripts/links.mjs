// Testa se os links externos dos verbetes ainda respondem. Uso: npm run links [identificador ...]
// Depende de rede, por isso não roda no conferir nem no GitHub. Rode antes de um lote e a cada poucos meses.
//   QUEBRADO   -> responde com erro ou não existe: corrija, troque por cópia em archive.org ou remova
//   VERIFICAR  -> a plataforma bloqueia acesso automático (Instagram, Facebook): abra no navegador
import { readdirSync, readFileSync } from 'node:fs';
import { dominioAceito, CANAIS_ACERVO } from '../src/lib/links.mjs';

const PASTA = './verbetes';
const BLOQUEIAM = ['instagram.com', 'facebook.com'];
const pedidos = process.argv.slice(2);
const arquivos = readdirSync(PASTA)
  .filter((f) => f.endsWith('.md'))
  .filter((f) => !pedidos.length || pedidos.includes(f.replace(/\.md$/, '')));

const enderecos = new Map();
for (const arquivo of arquivos) {
  const texto = readFileSync(`${PASTA}/${arquivo}`, 'utf8');
  for (const m of texto.matchAll(/https?:\/\/[^\s)"'>\]]+/g)) {
    const u = m[0].replace(/[.,;]+$/, '');
    if (u.includes('exemplo.org')) continue;
    if (!enderecos.has(u)) enderecos.set(u, new Set());
    enderecos.get(u).add(arquivo.replace(/\.md$/, ''));
  }
}

async function testar(u) {
  if (dominioAceito(u, BLOQUEIAM)) return 'VERIFICAR';
  for (const metodo of ['HEAD', 'GET']) {
    try {
      const r = await fetch(u, {
        method: metodo,
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: { 'user-agent': 'Mozilla/5.0 (WikiCulture MS; conferencia de links)' },
      });
      if (r.ok) return 'ok';
      if (metodo === 'GET') return r.status === 403 || r.status === 429 ? 'VERIFICAR' : `QUEBRADO (${r.status})`;
    } catch (e) {
      if (metodo === 'GET') return `QUEBRADO (${e.cause?.code ?? e.name})`;
    }
  }
}

let quebrados = 0;
const lista = [...enderecos];
for (let i = 0; i < lista.length; i += 6) {
  const lote = lista.slice(i, i + 6);
  const resultados = await Promise.all(lote.map(([u]) => testar(u)));
  lote.forEach(([u, onde], j) => {
    const r = resultados[j];
    if (r.startsWith('QUEBRADO')) quebrados++;
    if (r !== 'ok') console.log(`${r.padEnd(22)} ${u}  [${[...onde].join(', ')}]`);
  });
}
// De que canal é cada vídeo do YouTube: acervo aceito ou canal a confirmar como oficial.
const videos = lista.filter(([u]) => /youtube\.com\/(watch|shorts|playlist)|youtu\.be\//.test(u));
if (videos.length) console.log('\nCanais dos vídeos do YouTube:');
for (const [u, onde] of videos) {
  let autor = '?';
  let situacao = 'NÃO IDENTIFICADO';
  try {
    const r = await fetch(`https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(u)}`, { signal: AbortSignal.timeout(15000) });
    if (r.ok) {
      const j = await r.json();
      autor = `${j.author_name} (${j.author_url})`;
      const acervo = CANAIS_ACERVO.some((c) => j.author_url.toLowerCase().endsWith('/' + c.handle.toLowerCase()) || j.author_url.endsWith('/channel/' + c.canal));
      situacao = acervo ? 'acervo aceito' : 'CONFIRMAR OFICIAL';
    }
  } catch {}
  console.log(`${situacao.padEnd(18)} ${autor}  ${u}  [${[...onde].join(', ')}]`);
}

console.log(`\n${lista.length} links testados em ${arquivos.length} verbetes; ${quebrados} quebrado(s).`);
if (quebrados) process.exit(1);
