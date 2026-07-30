/* Tek Bench — tool registry.
 *
 * This file is the single source of truth for what appears in the Bench.
 * Adding a tool = adding one entry here. Paths are repo-root-relative so
 * the registry works from any server rooted at the repo (Live Server,
 * `npx serve`, GitHub Pages).
 *
 * kind:
 *   'tool'      — hand-editable micro tool (lives in this repo as source)
 *   'reference' — canonical reference page wired to the real built packages
 *   'drop'      — bundled Claude Design prototype drop (self-contained,
 *                 multi-MB single file; treat as opaque — do not hand-edit)
 */

export const GROUPS = [
  { id: 'tools',     label: 'Micro tools' },
  { id: 'reference', label: 'Reference' },
  { id: 'drops',     label: 'Prototype drops' },
];

export const TOOLS = [
  // ── Micro tools ────────────────────────────────────────────────────────
  {
    id: 'font-lab',
    group: 'tools',
    kind: 'tool',
    name: 'Font Lab',
    desc: 'Mono Type Builder — Iosevka widths, weights, stylistic sets, character variants, and the proposed fonts.mono.* scale.',
    path: 'prototypes/font-lab/index.html',
    source: 'prototypes/font-lab/',
  },
  {
    id: 'corpus-browser',
    group: 'tools',
    kind: 'tool',
    name: 'Corpus Browser',
    desc: 'Read the RAG corpus like a wiki — tek-markdown renders each file with its frontmatter as a spec card; relative links navigate in place.',
    path: 'prototypes/corpus-browser/index.html',
    source: 'prototypes/corpus-browser/',
  },
  {
    id: 'type-annotation',
    group: 'tools',
    kind: 'tool',
    name: 'Dragonstorm Type Annotation',
    desc: 'Interactive typography annotation overlay for the Dragonstorm screen — the as-built type spec, hoverable.',
    path: 'prototypes/dragonstorm/type-annotation.html',
    source: 'prototypes/dragonstorm/type-annotation.html',
  },

  // ── Reference pages ────────────────────────────────────────────────────
  {
    id: 'component-library',
    group: 'reference',
    kind: 'reference',
    name: 'Component Library',
    desc: 'Live reference for every @bbkemp/ui component — states, variants, and token annotations. Dark/light preview.',
    path: 'prototypes/component-library/index.html',
    source: 'prototypes/component-library/',
  },
  {
    id: 'sign-in',
    group: 'reference',
    kind: 'reference',
    name: 'Sign In',
    desc: 'Pixel-perfect sign-in page importing the real built packages (tokens + ui dist). Functions as an integration test.',
    path: 'prototypes/sign-in/index.html',
    source: 'prototypes/sign-in/',
    note: 'Requires npm run build:tokens && npm run build:ui',
  },
  {
    id: 'create-account',
    group: 'reference',
    kind: 'reference',
    name: 'Create Account',
    desc: 'Sign-up flow companion to the Sign In reference page. Same real-built-package imports.',
    path: 'prototypes/sign-in/signup.html',
    source: 'prototypes/sign-in/',
    note: 'Requires npm run build:tokens && npm run build:ui',
  },

  // ── Bundled prototype drops ────────────────────────────────────────────
  {
    id: 'bench-instrument',
    group: 'drops',
    kind: 'drop',
    name: 'Bench (instrument prototype)',
    desc: 'Interactive bench-instrument prototype — channel cards, live traces, viewport simulation. Claude Design drop.',
    path: 'prototypes/bench/index.html',
    source: 'prototypes/bench/',
  },
  {
    id: 'my-tek',
    group: 'drops',
    kind: 'drop',
    name: 'my.tek',
    desc: 'Asset Hub prototype. Claude Design drop.',
    path: 'prototypes/my-tek/index.html',
    source: 'prototypes/my-tek/',
  },
  {
    id: 'tek-express',
    group: 'drops',
    kind: 'drop',
    name: 'Tek Express',
    desc: 'Tek Express prototype. Claude Design drop.',
    path: 'prototypes/tek-express/index.html',
    source: 'prototypes/tek-express/',
  },
  {
    id: 'dragonstorm',
    group: 'drops',
    kind: 'drop',
    name: 'Dragonstorm',
    desc: 'Dragonstorm instrument UI prototype. Claude Design drop (~14 MB — loads on demand).',
    path: 'prototypes/dragonstorm/index.html',
    source: 'prototypes/dragonstorm/',
  },
];
