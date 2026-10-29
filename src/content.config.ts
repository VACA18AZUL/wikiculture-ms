import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TIPOS_LINK } from './lib/links.mjs';

// Ficha de cada verbete. O build falha se um verbete não seguir este modelo.
const verbetes = defineCollection({
  loader: glob({ pattern: '*.md', base: './verbetes' }),
  schema: z.object({
    titulo: z.string(),
    tipo: z.enum(['pessoa', 'grupo', 'obra', 'espaco', 'evento']),
    areas: z
      .array(
        z.enum([
          'teatro',
          'danca',
          'circo',
          'literatura',
          'artes-plasticas',
          'audiovisual',
          'musica',
        ]),
      )
      .min(1),
    resumo: z.string().max(240),
    cidade: z.string().optional(),
    // Linhas da caixa lateral (infobox), na ordem em que aparecem.
    ficha: z.record(z.string(), z.string()).optional(),
    // Ligações externas: sites, portfólios e perfis mantidos pelo próprio verbetado, ou páginas de referência.
    links: z
      .array(
        z.object({
          tipo: z.enum(Object.keys(TIPOS_LINK) as [string, ...string[]]),
          url: z.string().url().startsWith('https://'),
          rotulo: z.string().optional(),
          acesso: z.coerce.date(),
        }),
      )
      .optional(),
    status: z.enum(['rascunho', 'revisado']).default('rascunho'),
    atualizado: z.coerce.date(),
  }),
});

export const collections = { verbetes };
