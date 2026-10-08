// Links internos no estilo wiki.
//   [[lidia-bais]]                -> link com o próprio identificador como texto
//   [[lidia-bais|Lídia Baís]]     -> link com texto próprio
// Se o verbete ainda não existe, vira um "link vermelho" (sem destino),
// e aparece na página "Verbetes desejados".
import { readdirSync } from 'node:fs';

export const PADRAO = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export default function wikilinks({ base = '', pasta = './verbetes' } = {}) {
  const prefixo = base.replace(/\/$/, '');
  return (arvore) => {
    const existentes = new Set(
      readdirSync(pasta)
        .filter((f) => f.endsWith('.md'))
        .map((f) => f.replace(/\.md$/, '')),
    );
    percorrer(arvore, existentes, prefixo);
  };
}

function percorrer(no, existentes, prefixo) {
  if (!no.children) return;
  const novos = [];
  for (const filho of no.children) {
    if (filho.type === 'text' && filho.value.includes('[[')) {
      novos.push(...converter(filho.value, existentes, prefixo));
    } else {
      if (filho.type !== 'code' && filho.type !== 'inlineCode') {
        percorrer(filho, existentes, prefixo);
      }
      novos.push(filho);
    }
  }
  no.children = novos;
}

function converter(texto, existentes, prefixo) {
  const partes = [];
  let ultimo = 0;
  for (const m of texto.matchAll(PADRAO)) {
    if (m.index > ultimo) partes.push({ type: 'text', value: texto.slice(ultimo, m.index) });
    const id = m[1].trim();
    const rotulo = (m[2] ?? m[1]).trim();
    if (existentes.has(id)) {
      partes.push({
        type: 'link',
        url: `${prefixo}/verbetes/${id}/`,
        data: { hProperties: { className: ['interno'] } },
        children: [{ type: 'text', value: rotulo }],
      });
    } else {
      partes.push({
        type: 'html',
        value: `<span class="inexistente" title="Verbete ainda não escrito: ${id}">${escapar(rotulo)}</span>`,
      });
    }
    ultimo = m.index + m[0].length;
  }
  if (ultimo < texto.length) partes.push({ type: 'text', value: texto.slice(ultimo) });
  return partes;
}

function escapar(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
