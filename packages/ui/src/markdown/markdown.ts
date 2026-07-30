/**
 * tek-markdown
 *
 * Token-driven Markdown viewer — the readable surface for corpus files,
 * docs, and README-style content. Wraps `marked` (GFM) for the body and
 * `yaml` for frontmatter. YAML frontmatter renders as a structured spec
 * card: title, badge row, frontmatter image, key/value grid, and any
 * array-of-objects field (e.g. a corpus `controls:` inventory) as a
 * tek-data-table.
 *
 * Figma: none yet — new component; typography binds to the shipped ramps
 * (Archivo headings, Geist body, Geist Mono code) and colors to existing
 * semantic tokens. A dedicated color/markdown/* token family is flagged
 * for the design-additions audit; until it lands, the nearest existing
 * semantic tokens are used (table/text, table/divider, canvas, text-link).
 *
 * TRUSTED CONTENT ONLY: the markdown body is rendered without a
 * sanitizer. Point this at repo-owned files (corpus/, docs/), never at
 * user-supplied input.
 *
 * Usage:
 * ```html
 * <tek-markdown src="corpus/sources/2450-ec/index.md"></tek-markdown>
 * <tek-markdown content="# Inline markdown"></tek-markdown>
 * ```
 *
 * Relative `.md` links navigate in place (cancelable
 * `tek-markdown-navigate` event, then `tek-markdown-load` once fetched);
 * relative images resolve against `src`; absolute http(s) links open in a
 * new tab. `back()` walks the internal navigation history.
 *
 * @attr {string} [src] - URL of a markdown file to fetch and render.
 * @attr {string} [content] - Raw markdown to render (takes precedence over src).
 * @attr {'card'|'hidden'} [frontmatter="card"] - Render YAML frontmatter as a spec card, or hide it.
 *
 * @fires tek-markdown-navigate - Cancelable. detail: { href, url } — an internal relative link was clicked.
 * @fires tek-markdown-load - detail: { url } — a document fetched via src finished loading.
 *
 * @cssprop --tek-markdown-max-width - Content column width (default spacing/c05, 768px).
 */
import { css, html, LitElement, nothing } from 'lit';
import type { PropertyValues, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';
import { parse as parseYaml } from 'yaml';
import type { BadgeType } from '../badge/badge.js';
import '../badge/badge.js';
import '../data-table/data-table.js';
import '../spinner/spinner.js';

type Meta = Record<string, unknown>;
type Scalar = string | number | boolean;

interface ParsedDoc {
  meta: Meta | null;
  bodyHtml: string;
}

const FRONTMATTER_RE = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;
/** Frontmatter keys shown as badges rather than key/value rows. */
const BADGE_KEYS = ['provenance', 'class', 'screen_type', 'software', 'software_version'] as const;
/** Frontmatter keys whose value is the document title. */
const TITLE_KEYS = ['screen_title', 'title', 'name'] as const;
/** Object-table columns that hold prose and get a wider track. */
const WIDE_COLUMNS = new Set(['action', 'description', 'notes', 'summary']);

const isScalar = (v: unknown): v is Scalar =>
  typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean';
const isScalarArray = (v: unknown): v is Scalar[] => Array.isArray(v) && v.every(isScalar);
const isRecordArray = (v: unknown): v is Meta[] =>
  Array.isArray(v) && v.length > 0 && v.every((i) => typeof i === 'object' && i !== null && !Array.isArray(i));

export class TekMarkdown extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    article {
      max-width: var(--tek-markdown-max-width, var(--tek-spacing-c05, 768px));
      margin: 0 auto;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
      font-weight: 400;
      color: var(--tek-color-table-text-default, #ffffff);
    }

    /* ── frontmatter spec card ─────────────────────────────────────── */
    .meta {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s07, 12px);
      padding: var(--tek-spacing-s11, 24px);
      margin: 0 0 var(--tek-spacing-s13, 32px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
    }
    .meta-title {
      margin: 0;
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-sm, 20px);
      line-height: var(--tek-fonts-heading-line-height-sm, 26px);
    }
    .meta-badges {
      display: flex;
      flex-wrap: wrap;
      gap: var(--tek-spacing-s03, 4px);
    }
    .meta-image {
      max-width: 100%;
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
    }
    .meta-grid {
      display: grid;
      grid-template-columns: max-content 1fr;
      gap: var(--tek-spacing-s03, 4px) var(--tek-spacing-s09, 16px);
      margin: 0;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }
    .meta-grid dt {
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      color: var(--tek-color-table-text-muted, #979797);
    }
    .meta-grid dd {
      display: flex;
      flex-wrap: wrap;
      gap: var(--tek-spacing-s03, 4px);
      margin: 0;
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .meta-table h2 {
      margin: 0 0 var(--tek-spacing-s05, 8px);
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
    }

    /* ── status ────────────────────────────────────────────────────── */
    .loading {
      display: flex;
      justify-content: center;
      padding: var(--tek-spacing-s13, 32px);
    }
    .error {
      padding: var(--tek-spacing-s07, 12px);
      margin: 0 0 var(--tek-spacing-s09, 16px);
      color: var(--tek-color-statusbar-text-error, #e74848);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-statusbar-text-error, #e74848);
      border-radius: var(--tek-borders-radius-03, 5px);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }

    /* ── markdown body ─────────────────────────────────────────────── */
    .body h1,
    .body h2,
    .body h3,
    .body h4,
    .body h5,
    .body h6 {
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      color: inherit;
    }
    .body h1 {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      font-size: var(--tek-fonts-heading-size-md, 24px);
      line-height: var(--tek-fonts-heading-line-height-md, 32px);
    }
    .body h2 {
      margin: var(--tek-spacing-s13, 32px) 0 var(--tek-spacing-s05, 8px);
      font-size: var(--tek-fonts-heading-size-sm, 20px);
      line-height: var(--tek-fonts-heading-line-height-sm, 26px);
    }
    .body h3 {
      margin: var(--tek-spacing-s11, 24px) 0 var(--tek-spacing-s05, 8px);
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
    }
    .body h4,
    .body h5,
    .body h6 {
      margin: var(--tek-spacing-s09, 16px) 0 var(--tek-spacing-s03, 4px);
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
    }
    .body p {
      margin: 0 0 var(--tek-spacing-s07, 12px);
    }
    .body a {
      color: var(--tek-color-text-link-default, #33baea);
      text-decoration: none;
      transition: opacity 0.1s;
    }
    .body a:hover {
      opacity: 0.8;
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-thickness: 0.5px;
    }
    .body strong {
      font-weight: 600;
    }
    .body ul,
    .body ol {
      margin: 0 0 var(--tek-spacing-s07, 12px);
      padding-left: var(--tek-spacing-s11, 24px);
    }
    .body li {
      margin-bottom: var(--tek-spacing-s02, 2px);
    }
    .body code {
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-02, 3px);
      padding: var(--tek-spacing-s01, 1px) var(--tek-spacing-s03, 4px);
    }
    .body pre {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      padding: var(--tek-spacing-s09, 16px);
      background: var(--tek-color-canvas-background-raised, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      overflow-x: auto;
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
    }
    .body pre code {
      background: none;
      border: none;
      padding: 0;
    }
    .body blockquote {
      margin: 0 0 var(--tek-spacing-s09, 16px);
      padding: var(--tek-spacing-s03, 4px) 0 var(--tek-spacing-s03, 4px) var(--tek-spacing-s09, 16px);
      border-left: var(--tek-borders-width-05, 3px) solid var(--tek-color-table-divider-default, #7b7b7b);
      color: var(--tek-color-table-text-muted, #979797);
    }
    .body table {
      width: 100%;
      margin: 0 0 var(--tek-spacing-s09, 16px);
      border-collapse: collapse;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
    }
    .body th {
      padding: var(--tek-spacing-s06, 10px) var(--tek-spacing-s07, 12px);
      background: var(--tek-color-table-header-background, #252525);
      color: var(--tek-color-table-header-text, #ffffff);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      font-weight: 400;
      text-align: left;
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
    }
    .body td {
      padding: var(--tek-spacing-s07, 12px);
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      vertical-align: top;
    }
    .body hr {
      margin: var(--tek-spacing-s13, 32px) 0;
      border: none;
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
    }
    .body img {
      max-width: 100%;
      border-radius: var(--tek-borders-radius-03, 5px);
    }
    .body > :last-child {
      margin-bottom: 0;
    }
  `;

  @property() src?: string;
  @property() content?: string;
  @property({ reflect: true }) frontmatter: 'card' | 'hidden' = 'card';

  @state() private _doc: ParsedDoc | null = null;
  @state() private _loading = false;
  @state() private _error = '';

  private _history: string[] = [];
  private _fetchSeq = 0;

  /** True when back() has somewhere to go. */
  get canGoBack(): boolean {
    return this._history.length > 0;
  }

  /** Navigate to the previously viewed document, if any. */
  back(): boolean {
    const prev = this._history.pop();
    if (prev === undefined) return false;
    this.src = prev;
    return true;
  }

  protected willUpdate(changed: PropertyValues<this>): void {
    if (changed.has('content') && this.content != null) {
      this._doc = this._parse(this.content);
      this._error = '';
    }
  }

  protected updated(changed: PropertyValues<this>): void {
    if (changed.has('src') && this.src && this.content == null) {
      void this._fetch(this.src);
    }
    this._fixupRendered();
  }

  private async _fetch(url: string): Promise<void> {
    const seq = ++this._fetchSeq;
    this._loading = true;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      const text = await res.text();
      if (seq !== this._fetchSeq) return;
      this._doc = this._parse(text);
      this._error = '';
      this.dispatchEvent(
        new CustomEvent('tek-markdown-load', { detail: { url }, bubbles: true, composed: true })
      );
    } catch (err) {
      if (seq !== this._fetchSeq) return;
      this._error = err instanceof Error ? err.message : String(err);
    } finally {
      if (seq === this._fetchSeq) this._loading = false;
    }
  }

  private _parse(text: string): ParsedDoc {
    let meta: Meta | null = null;
    let body = text;
    const m = FRONTMATTER_RE.exec(text);
    if (m) {
      try {
        const parsed: unknown = parseYaml(m[1]);
        if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
          meta = parsed as Meta;
          body = text.slice(m[0].length);
        }
      } catch {
        // Not valid YAML — treat the whole file as markdown body.
      }
    }
    const bodyHtml = marked.parse(body, { gfm: true, async: false }) as string;
    return { meta, bodyHtml };
  }

  private _isRelative(url: string): boolean {
    return !/^([a-z][a-z0-9+.-]*:|\/|#)/i.test(url);
  }

  private _resolve(rel: string): string {
    return this.src ? new URL(rel, new URL(this.src, document.baseURI)).href : rel;
  }

  /** Resolve relative image srcs against `src`; external links open in a new tab. */
  private _fixupRendered(): void {
    const root = this.renderRoot.querySelector('.body');
    if (!root) return;
    root.querySelectorAll('img').forEach((img) => {
      const raw = img.getAttribute('src') ?? '';
      if (this._isRelative(raw)) img.src = this._resolve(raw);
    });
    root.querySelectorAll('a').forEach((a) => {
      const raw = a.getAttribute('href') ?? '';
      if (/^https?:/i.test(raw)) {
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
      }
    });
  }

  private _onBodyClick(e: Event): void {
    const anchor = e
      .composedPath()
      .find((el): el is HTMLAnchorElement => el instanceof HTMLAnchorElement);
    if (!anchor) return;
    const raw = anchor.getAttribute('href') ?? '';
    if (!this._isRelative(raw)) return;
    e.preventDefault();
    const url = this._resolve(raw);
    const proceed = this.dispatchEvent(
      new CustomEvent('tek-markdown-navigate', {
        detail: { href: raw, url },
        bubbles: true,
        composed: true,
        cancelable: true,
      })
    );
    if (!proceed) return;
    if (/\.md$/i.test(new URL(url).pathname) && this.src) {
      this._history.push(this.src);
      this.src = url;
    } else {
      window.open(url, '_blank', 'noopener');
    }
  }

  private _badgeType(key: string, value: string): BadgeType {
    if (key === 'provenance') return value === 'observed' ? 'success' : 'warning';
    if (key === 'class' || key === 'screen_type') return 'blue';
    return 'neutral';
  }

  private _renderMeta(meta: Meta): TemplateResult {
    const titleKey = TITLE_KEYS.find((k) => typeof meta[k] === 'string');
    const title = titleKey ? (meta[titleKey] as string) : null;
    const badges = BADGE_KEYS.filter((k) => isScalar(meta[k])).map((k) => ({
      key: k,
      label: String(meta[k]),
    }));
    const image = typeof meta['image'] === 'string' ? this._resolve(meta['image']) : null;
    const used = new Set<string>([...(titleKey ? [titleKey] : []), ...badges.map((b) => b.key), 'image']);
    const rows = Object.entries(meta).filter(
      ([k, v]) => !used.has(k) && (isScalar(v) || isScalarArray(v))
    );
    const tables = Object.entries(meta).filter((e): e is [string, Meta[]] => isRecordArray(e[1]));

    return html`
      <header class="meta" part="frontmatter">
        ${title ? html`<h1 class="meta-title">${title}</h1>` : nothing}
        ${badges.length
          ? html`<div class="meta-badges">
              ${badges.map(
                (b) => html`<tek-badge type=${this._badgeType(b.key, b.label)}>${b.label}</tek-badge>`
              )}
            </div>`
          : nothing}
        ${image ? html`<img class="meta-image" src=${image} alt=${title ?? 'document image'} />` : nothing}
        ${rows.length
          ? html`<dl class="meta-grid">
              ${rows.map(
                ([k, v]) => html`
                  <dt>${k}</dt>
                  <dd>
                    ${isScalarArray(v) && v.length
                      ? v.map((item) => html`<tek-badge type="neutral">${String(item)}</tek-badge>`)
                      : String(Array.isArray(v) ? '—' : v)}
                  </dd>
                `
              )}
            </dl>`
          : nothing}
        ${tables.map(([k, records]) => this._renderObjectTable(k, records))}
      </header>
    `;
  }

  private _renderObjectTable(key: string, records: Meta[]): TemplateResult {
    const cols: string[] = [];
    records.forEach((r) => {
      Object.keys(r).forEach((k) => {
        if (!cols.includes(k)) cols.push(k);
      });
    });
    const columns = cols.map((c) => (WIDE_COLUMNS.has(c) ? '2.5fr' : '1fr')).join(' ');
    const cell = (v: unknown): string => (v == null ? '' : isScalar(v) ? String(v) : JSON.stringify(v));

    return html`
      <section class="meta-table">
        <h2>${key}</h2>
        <tek-data-table style="--tek-table-columns: ${columns}">
          <tek-data-table-head>
            <tek-data-table-row>
              ${cols.map((c) => html`<tek-data-table-cell>${c}</tek-data-table-cell>`)}
            </tek-data-table-row>
          </tek-data-table-head>
          <tek-data-table-body>
            ${records.map(
              (r) => html`
                <tek-data-table-row>
                  ${cols.map(
                    (c) => html`<tek-data-table-cell title=${cell(r[c])}>${cell(r[c])}</tek-data-table-cell>`
                  )}
                </tek-data-table-row>
              `
            )}
          </tek-data-table-body>
        </tek-data-table>
      </section>
    `;
  }

  render() {
    return html`
      <article part="document">
        ${this._error
          ? html`<div class="error" role="alert">Couldn't load ${this.src}: ${this._error}</div>`
          : nothing}
        ${this._loading && !this._doc
          ? html`<div class="loading"><tek-spinner></tek-spinner></div>`
          : nothing}
        ${this._doc?.meta && this.frontmatter !== 'hidden' ? this._renderMeta(this._doc.meta) : nothing}
        <div class="body" @click=${this._onBodyClick}>${unsafeHTML(this._doc?.bodyHtml ?? '')}</div>
      </article>
    `;
  }
}

customElements.define('tek-markdown', TekMarkdown);
