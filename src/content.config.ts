import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
          'ilustracao',
          'quadrinhos',
          'fotografia',
        ]),
      )
      .min(1),
    resumo: z.string().max(240),
    cidade: z.string().optional(),
    // Linhas da caixa lateral (infobox), na ordem em que aparecem.
    ficha: z.record(z.string(), z.string()).optional(),
    status: z.enum(['rascunho', 'revisado']).default('rascunho'),
    atualizado: z.coerce.date(),
  }),
});

export const collections = { verbetes };
