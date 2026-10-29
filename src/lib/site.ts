import { getCollection } from 'astro:content';

export const NOME = 'WikiCulture MS';
export const REPO = 'https://github.com/VACA18AZUL/wikiculture-ms';

export const AREAS: Record<string, string> = {
  teatro: 'Teatro',
  danca: 'Dança',
  circo: 'Circo',
  literatura: 'Literatura',
  'artes-plasticas': 'Artes plásticas',
  audiovisual: 'Audiovisual',
  musica: 'Música',
  ilustracao: 'Ilustração',
  quadrinhos: 'Quadrinhos',
  fotografia: 'Fotografia',
};

export const TIPOS: Record<string, string> = {
  pessoa: 'Pessoa',
  grupo: 'Grupo ou coletivo',
  obra: 'Obra ou produção',
  espaco: 'Espaço ou instituição',
  evento: 'Evento ou festival',
};

const PADRAO = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export function url(caminho: string) {
  return import.meta.env.BASE_URL.replace(/\/$/, '') + caminho;
}

export function slug(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function todos() {
  const lista = await getCollection('verbetes');
  return lista.sort((a, b) => a.data.titulo.localeCompare(b.data.titulo, 'pt-BR'));
}

/** Identificadores citados com [[...]] no corpo de um verbete e nos valores da ficha. */
export function citados(corpo: string | undefined, ficha?: Record<string, string>) {
  const ids = new Map<string, string>();
  const textos = [corpo ?? '', ...Object.values(ficha ?? {})];
  for (const texto of textos) {
    for (const m of texto.matchAll(PADRAO)) {
      const id = m[1].trim();
      if (!ids.has(id)) ids.set(id, (m[2] ?? m[1]).trim());
    }
  }
  return ids;
}

function escapar(texto: string) {
  return texto.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Valor da ficha em HTML: texto escapado, com [[id|texto]] virando link (ou link vermelho). */
export function fichaHtml(valor: string, existentes: Set<string>) {
  let html = '';
  let ultimo = 0;
  for (const m of valor.matchAll(PADRAO)) {
    html += escapar(valor.slice(ultimo, m.index));
    const id = m[1].trim();
    const rotulo = escapar((m[2] ?? m[1]).trim());
    html += existentes.has(id)
      ? `<a class="interno" href="${url(`/verbetes/${id}/`)}">${rotulo}</a>`
      : `<span class="inexistente" title="Verbete ainda não escrito: ${escapar(id)}">${rotulo}</span>`;
    ultimo = m.index! + m[0].length;
  }
  return html + escapar(valor.slice(ultimo));
}
