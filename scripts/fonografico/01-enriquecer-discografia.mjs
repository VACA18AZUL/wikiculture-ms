// scripts/fonografico/01-enriquecer-discografia.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { slugify, parseCSV, parseMarkdownFrontmatter, parseArgs } from './utils.mjs';

const VERBETES_DIR = path.resolve('verbetes');
const DISCOS_CSV = path.resolve('dados/memoria-fonografica/acervo_discos_ms.csv');
const FAIXAS_CSV = path.resolve('dados/memoria-fonografica/acervo_completo_ms.csv');

async function main() {
  const { dryRun, limit, verbose } = parseArgs();
  console.log(`[ETAPA 1] Iniciando Enriquecimento de Discografia (dryRun: ${dryRun}, lote máx: ${limit})`);

  const discosRaw = await fs.readFile(DISCOS_CSV, 'utf-8');
  const discos = parseCSV(discosRaw);

  // Indexa discos por slug do artista principal
  const discosPorArtista = new Map();
  for (const d of discos) {
    const slug = slugify(d['Artista']);
    if (!slug) continue;
    if (!discosPorArtista.has(slug)) discosPorArtista.set(slug, []);
    discosPorArtista.get(slug).push(d);
  }

  // Fallback: agrupa álbuns a partir de acervo_completo_ms.csv caso não constem na tabela de discos
  const faixasRaw = await fs.readFile(FAIXAS_CSV, 'utf-8');
  const faixas = parseCSV(faixasRaw);
  for (const f of faixas) {
    const slug = slugify(f['Intérprete']);
    const tituloDisco = f['Disco']?.trim();
    if (!slug || !tituloDisco) continue;

    const listaAtual = discosPorArtista.get(slug) || [];
    const jaExiste = listaAtual.some(d => slugify(d['Disco']) === slugify(tituloDisco));
    if (!jaExiste) {
      listaAtual.push({
        Artista: f['Intérprete'],
        Disco: tituloDisco,
        Formato: f['Formato'] || 'N/I',
        Ano: f['Ano'] || 'N/I',
        Gravadora: f['Gravadora'] || 'N/I',
        Catálogo: f['Catálogo'] || '',
        'Fonte (Acervo)': f['Fonte (Acervo)'] || 'Acervo Digital Memória Fonográfica de MS',
        'Link da Playlist': f['Link'] || ''
      });
      discosPorArtista.set(slug, listaAtual);
    }
  }

  const arquivos = (await fs.readdir(VERBETES_DIR)).filter(f => f.endsWith('.md'));
  let modificadosCount = 0;

  for (const arquivo of arquivos) {
    if (modificadosCount >= limit) {
      console.log(`[LIMITE DE LOTE] Atingido o limite de ${limit} verbetes modificados. Parando execução.`);
      break;
    }

    const filePath = path.join(VERBETES_DIR, arquivo);
    const content = await fs.readFile(filePath, 'utf-8');
    const { frontmatterRaw, data, body } = parseMarkdownFrontmatter(content);

    // Filtra apenas área de música
    const areaStr = (data.areas || data.area || '').toLowerCase();
    const isMusica = areaStr.includes('musica') || areaStr.includes('música');
    if (!isMusica) continue;

    const slugVerbete = path.basename(arquivo, '.md');
    const nomeArtista = data.nome || data.titulo || data.title || slugVerbete;
    const albunsEncontrados = discosPorArtista.get(slugVerbete) || discosPorArtista.get(slugify(nomeArtista)) || [];

    if (albunsEncontrados.length === 0) continue;

    // Ordena cronologicamente (anos válidos primeiro, N/I por último)
    albunsEncontrados.sort((a, b) => {
      const anoA = parseInt(a['Ano'], 10) || 9999;
      const anoB = parseInt(b['Ano'], 10) || 9999;
      return anoA - anoB;
    });

    let novoBody = body;
    let novasNotas = [];
    let insercoesNoVerbete = 0;

    for (const album of albunsEncontrados) {
      const titulo = album['Disco']?.trim();
      if (!titulo) continue;

      const slugAlbum = slugify(titulo);
      // Idempotência: verifica se o título do álbum já consta no corpo do Markdown
      const regexExistencia = new RegExp(`\\*${titulo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\*`, 'i');
      if (regexExistencia.test(novoBody)) {
        if (verbose) console.log(`  [SKIP] Álbum "${titulo}" já existe em ${arquivo}`);
        continue;
      }

      const formato = album['Formato']?.trim() || 'N/I';
      const ano = album['Ano']?.trim() || 'N/I';
      const gravadora = album['Gravadora']?.trim() || 'N/I';
      const link = album['Link da Playlist']?.trim();
      const acervoFisico = album['Fonte (Acervo)']?.trim() || 'Acervo Digital Memória Fonográfica de MS';

      // Regra 1: Sem fonte, sem frase. Se não houver link, ainda assim referenciamos o catálogo documental
      const notaId = `fn-fonografico-${slugAlbum.slice(0, 20)}-${ano !== 'N/I' ? ano : 'ni'}`;
      const escutaStr = link ? `[Escuta oficial](${link}). ` : '';

      const linhaDiscografia = `- *${titulo}* (${formato}, ${ano}, ${gravadora}). ${escutaStr}[^${notaId}]`;
      const textoNota = link
        ? `[^${notaId}]: Acervo Digital Memória Fonográfica de MS (Curadoria: Idemar Sprandel). Álbum *${titulo}* (${formato}, ${ano}, ${gravadora}). Fonte física: ${acervoFisico}. Disponível em: ${link}.`
        : `[^${notaId}]: Catalogação do Acervo Digital Memória Fonográfica de MS (Curadoria: Idemar Sprandel). Álbum *${titulo}* (${formato}, ${ano}, ${gravadora}). Fonte física: ${acervoFisico}.`;

      novasNotas.push({ linhaDiscografia, textoNota, notaId });
      insercoesNoVerbete++;
    }

    if (insercoesNoVerbete === 0) continue;

    // Inserção não-destrutiva na seção ## Discografia
    const linhasDiscografiaBloco = novasNotas.map(n => n.linhaDiscografia).join('\n');
    const linhasReferenciasBloco = novasNotas.map(n => n.textoNota).join('\n');

    if (/^##\s+Discografia/im.test(novoBody)) {
      // Insere logo após o cabeçalho ## Discografia existente
      novoBody = novoBody.replace(
        /(^##\s+Discografia[^\r\n]*\r?\n)/im,
        `$1\n${linhasDiscografiaBloco}\n`
      );
    } else {
      // Insere antes de ## Referências ou ## Notas, ou no final do arquivo
      if (/^##\s+(Referências|Notas)/im.test(novoBody)) {
        novoBody = novoBody.replace(
          /(^##\s+(?:Referências|Notas))/im,
          `## Discografia\n\n${linhasDiscografiaBloco}\n\n$1`
        );
      } else {
        novoBody = `${novoBody.trimEnd()}\n\n## Discografia\n\n${linhasDiscografiaBloco}\n`;
      }
    }

    // Adiciona as definições das notas de rodapé ao final do documento
    novoBody = `${novoBody.trimEnd()}\n\n${linhasReferenciasBloco}\n`;

    // Regra 3: Garante que o status no frontmatter volte ou permaneça como 'rascunho'
    let novoFrontmatter = frontmatterRaw;
    if (/^status\s*:/im.test(novoFrontmatter)) {
      novoFrontmatter = novoFrontmatter.replace(/^status\s*:.*$/im, 'status: rascunho');
    } else {
      novoFrontmatter += '\nstatus: rascunho';
    }

    const conteudoFinal = `---\n${novoFrontmatter}\n---\n${novoBody}`;

    console.log(`[ATUALIZADO] ${arquivo}: +${insercoesNoVerbete} álbuns adicionados.`);
    if (!dryRun) {
      await fs.writeFile(filePath, conteudoFinal, 'utf-8');
    }
    modificadosCount++;
  }

  console.log(`[ETAPA 1 CONCLUÍDA] Total de verbetes processados neste lote: ${modificadosCount}`);
}

main().catch(err => {
  console.error('[ERRO FATAL ETAPA 1]:', err);
  process.exit(1);
});
