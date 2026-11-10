// scripts/fonografico/03-extrair-relacoes.mjs
import fs from 'node:fs/promises';
import path from 'node:path';
import { slugify, parseCSV, splitArtists, parseArgs } from './utils.mjs';

const RELACOES_CSV = path.resolve('dados/relacoes.csv');
const LISTA_MESTRA_CSV = path.resolve('dados/lista-mestra.csv');
const DISCOS_CSV = path.resolve('dados/memoria-fonografica/acervo_discos_ms.csv');
const FAIXAS_CSV = path.resolve('dados/memoria-fonografica/acervo_completo_ms.csv');
const PROPOSTAS_RELACOES_OUT = path.resolve('dados/propostas/relacoes-fonografico.csv');

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

async function main() {
  const { dryRun } = parseArgs();
  console.log(`[ETAPA 3] Iniciando Extração de Grafo Cultural (dryRun: ${dryRun})`);

  // 1. Carrega relações existentes para desduplicação
  let relacoesRaw = '';
  try {
    relacoesRaw = await fs.readFile(RELACOES_CSV, 'utf-8');
  } catch {
    relacoesRaw = 'origem,relacao,destino,fonte,url_fonte,observacoes\n';
  }
  const relacoesExistentes = parseCSV(relacoesRaw, ',');
  const chavesExistentes = new Set(
    relacoesExistentes.map(r => `${r.origem}|${r.relacao}|${r.destino}`)
  );

  // 2. Carrega entidades conhecidas da lista-mestra para busca segura em Ficha Técnica
  const mestraRaw = await fs.readFile(LISTA_MESTRA_CSV, 'utf-8');
  const delimiterMestra = mestraRaw.split('\n')[0].includes(';') ? ';' : ',';
  const mestra = parseCSV(mestraRaw, delimiterMestra);
  const entidadesConhecidas = mestra
    .filter(e => e.nome && e.nome.length > 4)
    .map(e => ({ id: e.id || slugify(e.nome), nome: e.nome.trim() }));

  const faixas = parseCSV(await fs.readFile(FAIXAS_CSV, 'utf-8'));
  const discos = parseCSV(await fs.readFile(DISCOS_CSV, 'utf-8'));

  // Acumulador de novas relações com contagem de recorrência
  const candidatasMap = new Map();

  function registrarRelacao(origemId, destinoId, tipo, fonteDesc, url, observacoes = '') {
    if (!origemId || !destinoId || origemId === destinoId) return;
    if (STOP_IDS.has(origemId) || STOP_IDS.has(destinoId)) return;
    const chave = `${origemId}|${tipo}|${destinoId}`;
    if (chavesExistentes.has(chave)) return;

    if (!candidatasMap.has(chave)) {
      candidatasMap.set(chave, {
        origem: origemId,
        relacao: tipo,
        destino: destinoId,
        fonte: fonteDesc,
        url_fonte: url || 'https://www.youtube.com/@memoriafonograficadeMS',
        observacoes,
        ocorrencias: 1
      });
    } else {
      candidatasMap.get(chave).ocorrencias++;
    }
  }

  // A. Extração via Faixas (parceria-com e compos-para)
  for (const f of faixas) {
    const interpreteId = slugify(f['Intérprete']);
    if (STOP_IDS.has(interpreteId)) continue;

    const autorRaw = (f['Autor(es)'] || '').trim();
    const isMesmo = /mesmo\s+que\s+o\s+int[eé]rprete|^o\s+mesmo$|^o\s+int[eé]rprete$/i.test(autorRaw);
    if (isMesmo) continue;

    const autores = splitArtists(autorRaw);
    const autoresIds = autores
      .map(a => slugify(a))
      .filter(a => Boolean(a) && !STOP_IDS.has(a));

    const discoTitulo = f['Disco'] || 'Álbum catalogado';
    const musicaTitulo = f['Música'] || 'Faixa';
    const url = f['Link'] || '';
    const fonteStr = 'Acervo Digital Memória Fonográfica de MS';
    const obsStr = `Álbum "${discoTitulo}", faixa "${musicaTitulo}"`;

    // 1. Parcerias entre coautores da mesma música
    if (autoresIds.length >= 2) {
      for (let i = 0; i < autoresIds.length; i++) {
        for (let j = i + 1; j < autoresIds.length; j++) {
          const [a1, a2] = [autoresIds[i], autoresIds[j]].sort();
          registrarRelacao(a1, a2, 'parceria-com', fonteStr, url, obsStr);
        }
      }
    }

    // 2. Compositor -> Intérprete (compos-para)
    if (interpreteId && !['varios-interpretes', 'coletanea'].includes(interpreteId)) {
      for (const autorId of autoresIds) {
        if (autorId !== interpreteId) {
          registrarRelacao(autorId, interpreteId, 'compos-para', fonteStr, url, obsStr);
        }
      }
    }
  }

  // B. Extração via Ficha Técnica dos Álbuns (participou-de)
  for (const d of discos) {
    const ficha = d['Ficha Técnica e Histórico'] || '';
    if (!ficha || ficha.length < 10) continue;

    const titularId = slugify(d['Artista']);
    if (STOP_IDS.has(titularId)) continue;

    const discoTitulo = d['Disco'] || 'Álbum';
    const url = d['Link da Playlist'] || '';
    const fonteStr = 'Acervo Digital Memória Fonográfica de MS';
    const obsStr = `Ficha técnica do álbum "${discoTitulo}"`;

    for (const ent of entidadesConhecidas) {
      if (ent.id === titularId || STOP_IDS.has(ent.id)) continue;
      const escapedName = ent.nome.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`\\b${escapedName}\\b`, 'i');
      if (regex.test(ficha)) {
        registrarRelacao(ent.id, titularId, 'participou-de', fonteStr, url, obsStr);
      }
    }
  }

  // Filtra relações: mantém as de ficha técnica ou parcerias/composições que envolvam ao menos 1 ID da lista-mestra OU tenham >= 2 ocorrências
  const idsMestraSet = new Set(entidadesConhecidas.map(e => e.id));
  const novasRelacoes = [];

  for (const rel of candidatasMap.values()) {
    const envolveMestra = idsMestraSet.has(rel.origem) || idsMestraSet.has(rel.destino);
    if (envolveMestra || rel.ocorrencias >= 2) {
      novasRelacoes.push(rel);
    }
  }

  console.log(`[ETAPA 3] Extraídas ${novasRelacoes.length} novas relações culturais qualificadas.`);

  const headers = ['origem', 'relacao', 'destino', 'fonte', 'url_fonte', 'observacoes'];
  const delimiterOut = ',';
  const csvLines = [headers.join(delimiterOut)];

  for (const r of novasRelacoes) {
    const row = headers.map(h => {
      const val = String(r[h] ?? '');
      return val.includes(delimiterOut) || val.includes('"') || val.includes('\n')
        ? `"${val.replace(/"/g, '""')}"`
        : val;
    });
    csvLines.push(row.join(delimiterOut));
  }

  if (!dryRun && novasRelacoes.length > 0) {
    await fs.mkdir(path.dirname(PROPOSTAS_RELACOES_OUT), { recursive: true });
    await fs.writeFile(PROPOSTAS_RELACOES_OUT, csvLines.join('\n') + '\n', 'utf-8');
    console.log(`[ARQUIVO GERADO] ${PROPOSTAS_RELACOES_OUT} (pronto para ser integrado via 'node scripts/integrar-propostas.mjs')`);
  }
}

main().catch(err => {
  console.error('[ERRO FATAL ETAPA 3]:', err);
  process.exit(1);
});
