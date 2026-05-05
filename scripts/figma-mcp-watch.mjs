#!/usr/bin/env node
// Detect new Figma MCP capabilities and announcements.
//
// Two signals:
//   1. Tools listed at developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
//      (statically rendered HTML — authoritative list of MCP tools)
//   2. Release-notes entries that mention MCP-relevant keywords
//      (best-effort; only the top 1–2 entries appear in raw HTML, but Figma
//      typically posts often enough that a weekly check will catch them)
//
// State file at .github/figma-mcp-state.json:
//   { tools: [...], releaseNoteSigs: [...], lastChecked: ISO }
//
// Outputs JSON delta to stdout and /tmp/figma-mcp-delta.json. Updates state
// only when something new is detected, so quiet weeks produce no commits.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const STATE_PATH = resolve(ROOT, '.github/figma-mcp-state.json');
const DELTA_PATH = '/tmp/figma-mcp-delta.json';

const TOOLS_URL = 'https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/';
const RELEASE_NOTES_URL = 'https://www.figma.com/release-notes/';

const UA =
  'Mozilla/5.0 (compatible; tek-design-system-mcp-watch/1.0; +https://github.com/bbkemp/tek-design-system)';

const RELEASE_KEYWORDS = [
  'MCP',
  'mcp.figma.com',
  'generate_figma_design',
  'use_figma',
  'get_design_context',
  'create_new_file',
  'upload_assets',
  'Code Connect',
  'code-to-design',
  'design-to-code',
  'Dev Mode MCP',
  'Claude Code',
  'Codex',
  'Cursor',
  'Windsurf',
];

const MONTHS =
  '(?:January|February|March|April|May|June|July|August|September|October|November|December)';
const DATE_RE = new RegExp(`\\b${MONTHS}\\s+\\d{1,2},?\\s+\\d{4}\\b`, 'g');

const TOOL_NAME_RE = /\b([a-z][a-z0-9_]{2,40})\b/g;

function loadState() {
  if (!existsSync(STATE_PATH)) return { tools: [], releaseNoteSigs: [], lastChecked: null };
  try {
    const s = JSON.parse(readFileSync(STATE_PATH, 'utf8'));
    return {
      tools: s.tools || [],
      releaseNoteSigs: s.releaseNoteSigs || [],
      lastChecked: s.lastChecked || null,
    };
  } catch {
    return { tools: [], releaseNoteSigs: [], lastChecked: null };
  }
}

function saveState(state) {
  mkdirSync(dirname(STATE_PATH), { recursive: true });
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2) + '\n');
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#?\w+;/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n+/g, '\n')
    .trim();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'user-agent': UA } });
  if (!res.ok) throw new Error(`fetch ${url} failed: ${res.status} ${res.statusText}`);
  return res.text();
}

// Heuristic: extract MCP tool names from the developer docs page.
// All current tools are snake_case identifiers. We anchor on a known seed list
// and accept any snake_case identifier that appears multiple times in the page
// (genuine tool names appear in headings and body) and isn't a generic word.
function extractTools(html) {
  const text = stripHtml(html);
  const SEED = new Set([
    'use_figma',
    'get_design_context',
    'get_metadata',
    'get_screenshot',
    'get_variable_defs',
    'get_libraries',
    'search_design_system',
    'create_new_file',
    'upload_assets',
    'generate_diagram',
    'get_figjam',
    'create_design_system_rules',
    'whoami',
    'add_code_connect_map',
    'get_code_connect_map',
    'get_code_connect_suggestions',
    'get_context_for_code_connect',
    'send_code_connect_mappings',
    'generate_figma_design',
  ]);
  const counts = new Map();
  for (const m of text.matchAll(TOOL_NAME_RE)) {
    const name = m[1];
    counts.set(name, (counts.get(name) || 0) + 1);
  }
  const found = new Set();
  for (const [name, n] of counts) {
    if (SEED.has(name)) {
      found.add(name);
      continue;
    }
    if (n >= 2 && /^[a-z]+(_[a-z0-9]+)+$/.test(name) && name.length <= 40) {
      found.add(name);
    }
  }
  return [...found].sort();
}

function chunksByDate(text) {
  const matches = [...text.matchAll(DATE_RE)];
  if (matches.length === 0) return [];
  const chunks = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index;
    const end = i + 1 < matches.length ? matches[i + 1].index : text.length;
    chunks.push({ date: matches[i][0], body: text.slice(start, end).trim() });
  }
  return chunks;
}

function matchedKeywords(body) {
  const lower = body.toLowerCase();
  return RELEASE_KEYWORDS.filter((k) => lower.includes(k.toLowerCase()));
}

function releaseSignature(chunk) {
  const norm = chunk.body.replace(/\s+/g, ' ').slice(0, 200);
  return `${chunk.date}::${norm.slice(0, 120)}`;
}

async function main() {
  const state = loadState();

  // 1. Tools signal
  let toolsHtml;
  try {
    toolsHtml = await fetchText(TOOLS_URL);
  } catch (err) {
    console.error('tools fetch failed:', err.message);
    process.exit(2);
  }
  const currentTools = extractTools(toolsHtml);
  const knownTools = new Set(state.tools);
  const newTools = currentTools.filter((t) => !knownTools.has(t));
  const removedTools = state.tools.filter((t) => !currentTools.includes(t));

  // 2. Release-notes signal
  let rnHtml = '';
  try {
    rnHtml = await fetchText(RELEASE_NOTES_URL);
  } catch (err) {
    console.error('release-notes fetch failed:', err.message);
  }
  const rnText = stripHtml(rnHtml);
  const rnChunks = chunksByDate(rnText);
  const rnMatches = rnChunks
    .map((c) => ({ ...c, keywords: matchedKeywords(c.body) }))
    .filter((c) => c.keywords.length > 0)
    .map((c) => ({ ...c, sig: releaseSignature(c) }));
  const seenSigs = new Set(state.releaseNoteSigs);
  const newReleaseNotes = rnMatches.filter((m) => !seenSigs.has(m.sig));

  const changed =
    newTools.length > 0 || removedTools.length > 0 || newReleaseNotes.length > 0;

  if (changed) {
    state.tools = currentTools;
    state.releaseNoteSigs = [
      ...new Set([...state.releaseNoteSigs, ...rnMatches.map((m) => m.sig)]),
    ].slice(-200);
    state.lastChecked = new Date().toISOString();
    saveState(state);
  }

  const out = {
    changed,
    summary: {
      newTools: newTools.length,
      removedTools: removedTools.length,
      newReleaseNotes: newReleaseNotes.length,
      currentToolCount: currentTools.length,
      releaseChunksFound: rnChunks.length,
    },
    newTools,
    removedTools,
    currentTools,
    newReleaseNotes: newReleaseNotes.map((n) => ({
      date: n.date,
      keywords: n.keywords,
      excerpt: n.body.replace(/\s+/g, ' ').slice(0, 400),
    })),
  };

  console.log(JSON.stringify(out, null, 2));
  writeFileSync(DELTA_PATH, JSON.stringify(out, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
