#!/usr/bin/env node
// Scaffold a new Tek Web Component with every convention pre-encoded.
//   npm run new:component <name>
// Creates packages/ui/src/<name>/<name>.ts and registers it in src/index.ts.
// Vanilla Node, no deps — matches build.js / export-skills.mjs.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'packages/ui/src');

const raw = process.argv[2];
if (!raw) {
  console.error('Usage: npm run new:component <name>   (e.g. tooltip, status-badge)');
  process.exit(1);
}

// Normalize: drop a leading tek-, lowercase, validate kebab-case.
const name = raw.replace(/^tek-/, '').toLowerCase();
if (!/^[a-z][a-z0-9]*(-[a-z0-9]+)*$/.test(name)) {
  console.error(`✗ "${raw}" is not valid. Use lowercase kebab-case, e.g. status-badge.`);
  process.exit(1);
}

const pascal = 'Tek' + name.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
const tag = `tek-${name}`;
const dir = join(SRC, name);
const file = join(dir, `${name}.ts`);

if (existsSync(dir)) {
  console.error(`✗ ${dir} already exists. Edit the existing component instead of recreating it.`);
  process.exit(1);
}

const component = `/**
 * ${tag}
 * Figma: DS-v2 → TODO (node …)   ← cite the real node before shipping; Figma is the source of truth.
 * Variants: TODO
 *
 * Tokens:
 *   TODO — every value below must be a var(--tek-*, fallback). No raw hex/px/font/radius.
 *
 * Usage:
 *   <${tag}>Label</${tag}>
 */
const STYLES = \`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    /* TODO: replace with the real tokens from the Figma node. */
    padding: var(--tek-spacing-s05, 8px);
    border-radius: var(--tek-borders-radius-02, 3px);
    background: var(--tek-color-surface-default, #1e1e1e);
    color: var(--tek-color-text-default, #cccccc);
    font-family: var(--tek-fonts-family-archivo, sans-serif);
    font-size: var(--tek-fonts-text-size-md, 13px);
    line-height: var(--tek-fonts-text-line-height-md, 16px);
    outline: none;
  }

  :host([disabled]) {
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.4;
  }

  :host(:focus-visible) {
    box-shadow: 0 0 0 2px var(--tek-color-button-border-default, #33baea);
  }
\`;

export class ${pascal} extends HTMLElement {
  static get observedAttributes() { return ['variant', 'disabled']; }

  get variant()  { return this.getAttribute('variant') || 'default'; }
  get disabled() { return this.hasAttribute('disabled'); }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() {
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    this.addEventListener('click', () => {
      if (!this.disabled) {
        this.dispatchEvent(new CustomEvent('tek-click', { bubbles: true, composed: true }));
      }
    });
    this._render();
  }

  attributeChangedCallback() {
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
    this._render();
  }

  private _render() {
    this._shadow.innerHTML = \`
      <style>\${STYLES}</style>
      <slot></slot>
    \`;
  }
}
customElements.define('${tag}', ${pascal});
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, component);

// Register in the barrel, matching the aligned column style.
const indexPath = join(SRC, 'index.ts');
const index = readFileSync(indexPath, 'utf8');
const exportLine = `export { ${pascal} }`.padEnd(32) + ` from './${name}/${name}.js';`;
if (!index.includes(`./${name}/${name}.js`)) {
  writeFileSync(indexPath, index.replace(/\n$/, '') + '\n' + exportLine + '\n');
}

console.log(`✓ Created ${tag}`);
console.log(`  packages/ui/src/${name}/${name}.ts`);
console.log(`  registered in packages/ui/src/index.ts`);
console.log('');
console.log('Next:');
console.log(`  1. Open the Figma node and replace every TODO token with the real value.`);
console.log(`  2. npm run build:ui`);
console.log(`  3. Verify in component-library.html (dark + light).`);
console.log(`  4. Add the Figma Code Connect mapping (see the code-connect skill).`);
