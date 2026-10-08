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

/** Identificadores citados com [[...]] no corpo de um verbete. */
export function citados(corpo: string | undefined) {
  const ids = new Map<string, string>();
  for (const m of (corpo ?? '').matchAll(PADRAO)) {
    const id = m[1].trim();
    if (!ids.has(id)) ids.set(id, (m[2] ?? m[1]).trim());
  }
  return ids;
}
