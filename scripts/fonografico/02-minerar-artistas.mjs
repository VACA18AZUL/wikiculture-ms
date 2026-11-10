// scripts/fonografico/02-minerar-artistas.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { slugify, parseCSV, splitArtists, parseArgs } from './utils.mjs';

const LISTA_MESTRA_CSV = path.resolve('dados/lista-mestra.csv');
const DISCOS_CSV = path.resolve('dados/memoria-fonografica/acervo_discos_ms.csv');
const FAIXAS_CSV = path.resolve('dados/memoria-fonografica/acervo_completo_ms.csv');
const PROPOSTAS_OUT = path.resolve('dados/propostas/nomes-fonografico.csv');

const STOP_IDS = new Set([
  'mesmo-que-o-interprete',
  'mesmo-interprete',
  'o-mesmo',
  'mesmo',
  'dominio-publico',
  'd-p',
  'dp',
  'd-r',
  'dr',
  'tradicional',
  'nao-informado',
  'n-i',
  'ni',
  'desconhecido',
  'diversos',
  'varios',
  'varios-interpretes',
  'coletanea',
  'instrumental',
  'sem-autor',
  'autoria-desconhecida',
  'popular',
  'direito-reservado',
  'direitos-reservados',
  'folclore',
  'shorts',
  'curadoria'
]);

// Heurística para classificar tipo (pessoa vs grupo)
function inferirTipo(nome) {
  const n = nome.toLowerCase();
  if (
    n.includes(' e ') ||
    n.includes(' & ') ||
    /^(grupo|banda|conjunto|trio|quarteto|dupla|orquestra|os\s|as\s|familia|família)/i.test(n)
  ) {
    return 'grupo';
  }
  return 'pessoa';
}

async function main() {
  const { dryRun } = parseArgs();
  console.log(`[ETAPA 2] Iniciando Mineração de Artistas e Compositores (dryRun: ${dryRun})`);

  // 1. Carrega lista-mestra atual para exclusão de já cadastrados
  const mestraRaw = await fs.readFile(LISTA_MESTRA_CSV, 'utf-8');
  const delimiterMestra = mestraRaw.split('\n')[0].includes(';') ? ';' : ',';
  const mestra = parseCSV(mestraRaw, delimiterMestra);
  const idsExistentes = new Set(mestra.map(r => r.id || slugify(r.nome)));

  // 2. Carrega bases fonográficas
  const discos = parseCSV(await fs.readFile(DISCOS_CSV, 'utf-8'));
  const faixas = parseCSV(await fs.readFile(FAIXAS_CSV, 'utf-8'));

  // Mapa de candidatos: slug -> objeto de métricas
  const candidatos = new Map();

  function getOrCreate(nomeOriginal) {
    const nomeLimpo = nomeOriginal.trim();
    const id = slugify(nomeLimpo);
    if (!id || id.length < 3 || idsExistentes.has(id) || STOP_IDS.has(id)) return null;

    if (!candidatos.has(id)) {
      candidatos.set(id, {
        id,
        nome: nomeLimpo,
        tipo: inferirTipo(nomeLimpo),
        albunsCount: 0,
        lpsHistoricosCount: 0,
        faixasInterpreteCount: 0,
        composicoesGravadasCount: 0,
        generos: new Set(),
        anos: [],
        urlFonte: '',
        selos: new Set()
      });
    }
    return candidatos.get(id);
  }

  // Processa Álbuns
  for (const d of discos) {
    const artistaRaw = d['Artista'] || '';
    if (STOP_IDS.has(slugify(artistaRaw))) continue;

    const c = getOrCreate(artistaRaw);
    if (!c) continue;

    c.albunsCount++;
    const formato = (d['Formato'] || '').toUpperCase();
    const ano = parseInt(d['Ano'], 10);
    if (formato.includes('LP') || (ano >= 1950 && ano <= 1995)) {
      c.lpsHistoricosCount++;
    }
    if (ano && !isNaN(ano)) c.anos.push(ano);
    if (d['Gravadora'] && d['Gravadora'] !== 'N/I') c.selos.add(d['Gravadora']);
    if (!c.urlFonte && d['Link da Playlist']) c.urlFonte = d['Link da Playlist'];
  }

  // Processa Faixas (Intérpretes e Compositores)
  for (const f of faixas) {
    const interpreteNome = f['Intérprete'] || '';
    const cInterp = getOrCreate(interpreteNome);
    if (cInterp) {
      cInterp.faixasInterpreteCount++;
      if (f['Gênero'] && f['Gênero'] !== 'N/I') cInterp.generos.add(f['Gênero']);
      if (!cInterp.urlFonte && f['Link']) cInterp.urlFonte = f['Link'];
    }

    const autorRaw = (f['Autor(es)'] || '').trim();
    const isMesmo = /mesmo\s+que\s+o\s+int[eé]rprete|^o\s+mesmo$|^o\s+int[eé]rprete$/i.test(autorRaw);

    if (isMesmo) {
      if (cInterp) {
        cInterp.composicoesGravadasCount++;
      }
    } else {
      const autores = splitArtists(autorRaw);
      for (const autor of autores) {
        const cAutor = getOrCreate(autor);
        if (cAutor) {
          cAutor.composicoesGravadasCount++;
          if (f['Gênero'] && f['Gênero'] !== 'N/I') cAutor.generos.add(f['Gênero']);
          if (!cAutor.urlFonte && f['Link']) cAutor.urlFonte = f['Link'];
        }
      }
    }
  }

  // Calcula Score e filtra propostas relevantes
  const propostas = [];
  for (const c of candidatos.values()) {
    const score =
      c.albunsCount * 15 +
      c.lpsHistoricosCount * 10 +
      c.faixasInterpreteCount * 2 +
      c.composicoesGravadasCount * 4;

    // Limiar mínimo para entrar na triagem: pelo menos 1 álbum OU 5 faixas/composições (Score >= 12)
    if (score < 12) continue;

    let prioridade = 'baixa';
    if (score >= 45) prioridade = 'alta';
    else if (score >= 20) prioridade = 'media';

    const generosArr = Array.from(c.generos).slice(0, 3).join('/');
    const minAno = c.anos.length > 0 ? Math.min(...c.anos) : 'N/I';
    const resumoMetricas = [
      `Score:${score}`,
      c.albunsCount > 0 ? `${c.albunsCount} álbuns (${c.lpsHistoricosCount} históricos)` : null,
      c.faixasInterpreteCount > 0 ? `${c.faixasInterpreteCount} faixas` : null,
      c.composicoesGravadasCount > 0 ? `${c.composicoesGravadasCount} composições` : null,
      generosArr ? `Gêneros: ${generosArr}` : null,
      minAno !== 'N/I' ? `Ativo desde: ${minAno}` : null
    ].filter(Boolean).join(' | ');

    // Regra 5 - Prevenção de alucinação (cidade fica vazia se não puder ser comprovada documentalmente)
    propostas.push({
      score,
      id: c.id,
      nome: c.nome,
      tipo: c.tipo,
      areas: 'musica',
      cidade: '',
      prioridade,
      fonte_de_origem: 'Acervo Digital Memória Fonográfica de MS',
      url_fonte: c.urlFonte || 'https://www.youtube.com/@memoriafonograficadeMS',
      situacao: 'a-pesquisar',
      observacoes: resumoMetricas,
      wikipedia_pt: ''
    });
  }

  // Ordena por maior relevância histórica
  propostas.sort((a, b) => b.score - a.score);

  const headers = [
    'id', 'nome', 'tipo', 'areas', 'cidade', 'prioridade',
    'fonte_de_origem', 'url_fonte', 'situacao', 'observacoes', 'wikipedia_pt'
  ];

  const delimiterOut = ',';
  const csvLines = [headers.join(delimiterOut)];
  for (const p of propostas) {
    const row = headers.map(h => {
      const val = String(p[h] ?? '');
      return val.includes(delimiterOut) || val.includes('"') || val.includes('\n')
        ? `"${val.replace(/"/g, '""')}"`
        : val;
    });
    csvLines.push(row.join(delimiterOut));
  }

  console.log(`[ETAPA 2] Minerados ${propostas.length} novos agentes musicais qualificados (Alta: ${propostas.filter(p => p.prioridade === 'alta').length}, Média: ${propostas.filter(p => p.prioridade === 'media').length}, Baixa: ${propostas.filter(p => p.prioridade === 'baixa').length}).`);

  if (!dryRun) {
    await fs.mkdir(path.dirname(PROPOSTAS_OUT), { recursive: true });
    await fs.writeFile(PROPOSTAS_OUT, csvLines.join('\n') + '\n', 'utf-8');
    console.log(`[ARQUIVO GERADO] ${PROPOSTAS_OUT}`);
  }
}

main().catch(err => {
  console.error('[ERRO FATAL ETAPA 2]:', err);
  process.exit(1);
});
