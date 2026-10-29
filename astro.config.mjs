import { defineConfig } from 'astro/config';
import wikilinks from './src/plugins/wikilinks.mjs';
import notas from './src/plugins/notas.mjs';

// Endereço público do site (GitHub Pages). Se um domínio próprio for
// configurado depois, troque `site` e defina `base` como '/'.
const base = '/wikiculture-ms';

export default defineConfig({
  site: 'https://vaca18azul.github.io',
  base,
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [[wikilinks, { base, pasta: './verbetes' }], notas],
    // As notas de rodapé do Markdown ([^1]) viram a seção "Fontes" do verbete.
    remarkRehype: { footnoteLabel: 'Fontes', footnoteBackLabel: 'Voltar ao texto' },
  },
});
