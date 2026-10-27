// Tipos de link externo aceitos no campo `links` da ficha e domínios esperados para cada um.
// Usado pelo site (rótulos e ordem) e por scripts/conferir.mjs (validação).
export const TIPOS_LINK = {
  site: { rotulo: 'Site oficial', dominios: null },
  portfolio: { rotulo: 'Portfólio', dominios: null },
  instagram: { rotulo: 'Instagram', dominios: ['instagram.com'] },
  facebook: { rotulo: 'Facebook', dominios: ['facebook.com'] },
  youtube: { rotulo: 'Canal no YouTube', dominios: ['youtube.com'] },
  vimeo: { rotulo: 'Vimeo', dominios: ['vimeo.com'] },
  spotify: { rotulo: 'Spotify', dominios: ['open.spotify.com'] },
  deezer: { rotulo: 'Deezer', dominios: ['deezer.com'] },
  'apple-music': { rotulo: 'Apple Music', dominios: ['music.apple.com'] },
  bandcamp: { rotulo: 'Bandcamp', dominios: ['bandcamp.com'] },
  soundcloud: { rotulo: 'SoundCloud', dominios: ['soundcloud.com'] },
  'mapas-cultura': { rotulo: 'Mapas da Cultura', dominios: ['mapas.cultura.gov.br'] },
  'itau-cultural': { rotulo: 'Enciclopédia Itaú Cultural', dominios: ['enciclopedia.itaucultural.org.br'] },
  wikipedia: { rotulo: 'Wikipédia', dominios: ['pt.wikipedia.org'] },
  outro: { rotulo: null, dominios: null },
};

// Domínios aceitos para escuta e vídeo dentro das seções Discografia, Espetáculos e Filmografia.
export const DOMINIOS_MIDIA = [
  'youtube.com', 'youtu.be', 'vimeo.com', 'open.spotify.com', 'deezer.com',
  'music.apple.com', 'bandcamp.com', 'soundcloud.com', 'archive.org',
];

export const SECOES_MIDIA = ['Discografia', 'Espetáculos', 'Filmografia'];

// Parâmetros de rastreamento que não devem ficar nos links publicados.
export const RASTREIO = /[?&](si|igsh|igshid|utm_[a-z]+|fbclid|feature|pp)=/i;

export function dominioDe(endereco) {
  try {
    return new URL(endereco).hostname.replace(/^(www|m)\./, '');
  } catch {
    return null;
  }
}

export function dominioAceito(endereco, lista) {
  const d = dominioDe(endereco);
  return !!d && lista.some((x) => d === x || d.endsWith('.' + x));
}
