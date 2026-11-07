// scripts/fonografico/utils.mjs
import fs from 'node:fs/promises';
import path from 'node:path';

/**
 * Normaliza string para ID padrão WikiCulture MS (ex: "Almir Sater" -> "almir-sater")
 */
export function slugify(text) {
  if (!text) return '';
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')    // Remove caracteres especiais
    .replace(/[\s_]+/g, '-')         // Espaços para hifens
    .replace(/-+/g, '-')             // Remove hifens duplicados
    .replace(/^-|-$/g, '');
}

/**
 * Sanitiza texto livre removendo padrões de CPF, RG, e-mail e telefones (Regra 4 - CLAUDE.md)
 */
export function sanitizePersonalData(text) {
  if (!text) return '';
  return text
    .replace(/\b\d{3}\.?\d{3}\.?\d{3}-?\d{2}\b/g, '[DADO OMITIDO]') // CPF
    .replace(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g, '[EMAIL OMITIDO]') // Email
    .replace(/(?:\+?55\s?)?(?:\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}\b/g, '[TEL OMITIDO]'); // Telefone
}

/**
 * Parser CSV RFC-4180 nativo (suporta campos entre aspas com vírgulas/ponto-e-vírgula e quebras de linha)
 * Auto-detecta delimitador (, ou ;) se não for informado explicitamente.
 */
export function parseCSV(content, delimiter = null) {
  const cleanContent = content.replace(/^\uFEFF/, '');
  if (!cleanContent.trim()) return [];

  if (!delimiter) {
    const firstLine = cleanContent.split(/\r?\n/)[0];
    const commas = (firstLine.match(/,/g) || []).length;
    const semicolons = (firstLine.match(/;/g) || []).length;
    delimiter = semicolons > commas ? ';' : ',';
  }

  const rows = [];
  let currentRow = [];
  let currentCell = '';
  let inQuotes = false;

  for (let i = 0; i < cleanContent.length; i++) {
    const char = cleanContent[i];
    const nextChar = cleanContent[i + 1];

    if (inQuotes) {
      if (char === '"' && nextChar === '"') {
        currentCell += '"';
        i++; // Pula a próxima aspa
      } else if (char === '"') {
        inQuotes = false;
      } else {
        currentCell += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === delimiter) {
        currentRow.push(currentCell.trim());
        currentCell = '';
      } else if (char === '\n' || (char === '\r' && nextChar === '\n')) {
        if (char === '\r') i++;
        currentRow.push(currentCell.trim());
        if (currentRow.some(cell => cell !== '')) {
          rows.push(currentRow);
        }
        currentRow = [];
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
  }

  if (currentCell !== '' || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(cell => cell !== '')) {
      rows.push(currentRow);
    }
  }

  if (rows.length === 0) return [];
  const headers = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    headers.forEach((header, idx) => {
      obj[header] = row[idx] !== undefined ? row[idx] : '';
    });
    return obj;
  });
}

/**
 * Extrai e separa frontmatter YAML e corpo de um arquivo Markdown
 */
export function parseMarkdownFrontmatter(mdContent) {
  const match = mdContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { frontmatterRaw: '', data: {}, body: mdContent };

  const frontmatterRaw = match[1];
  const body = match[2];
  const data = {};

  frontmatterRaw.split(/\r?\n/).forEach(line => {
    const colonIdx = line.indexOf(':');
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim();
      const val = line.slice(colonIdx + 1).trim().replace(/^['"]|['"]$/g, '');
      data[key] = val;
    }
  });

  return { frontmatterRaw, data, body };
}

/**
 * Divide string de múltiplos artistas/autores em nomes individuais
 * Ex: "Paulo Simões / Geraldo Roca" -> ["Paulo Simões", "Geraldo Roca"]
 */
export function splitArtists(rawString) {
  if (!rawString || rawString === 'N/I' || rawString === 'Tradicional') return [];
  return rawString
    .split(/[\/;]|(?:\s+e\s+)(?!Delinha|Dino|Zé|Cacique|Pajé|Teodoro|Sampaio)/i)
    .map(s => s.replace(/\([^)]*\)/g, '').trim()) // Remove "(Arpón)" ou "(Adap.)"
    .filter(s => s.length > 2 && !['d.r.', 'dr', 'tradicional', 'desconhecido'].includes(s.toLowerCase()));
}

/**
 * Parseia argumentos de CLI (--dry-run, --limit=10, etc.)
 */
export function parseArgs() {
  const args = process.argv.slice(2);
  const limitArg = args.find(a => a.startsWith('--limit='));
  return {
    dryRun: args.includes('--dry-run'),
    limit: limitArg ? parseInt(limitArg.split('=')[1], 10) : 10,
    verbose: args.includes('--verbose')
  };
}
