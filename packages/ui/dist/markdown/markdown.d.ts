import { LitElement } from 'lit';
import type { PropertyValues, TemplateResult } from 'lit';
import '../badge/badge.js';
import '../data-table/data-table.js';
import '../spinner/spinner.js';
/**
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
export declare class TekMarkdown extends LitElement {
    static styles: import("lit").CSSResult;
    src?: string;
    content?: string;
    frontmatter: 'card' | 'hidden';
    private _doc;
    private _loading;
    private _error;
    private _history;
    private _fetchSeq;
    /** True when back() has somewhere to go. */
    get canGoBack(): boolean;
    /** Navigate to the previously viewed document, if any. */
    back(): boolean;
    protected willUpdate(changed: PropertyValues<this>): void;
    protected updated(changed: PropertyValues<this>): void;
    private _fetch;
    private _parse;
    private _isRelative;
    private _resolve;
    /** Resolve relative image srcs against `src`; external links open in a new tab. */
    private _fixupRendered;
    private _onBodyClick;
    private _badgeType;
    private _renderMeta;
    private _renderObjectTable;
    render(): TemplateResult<1>;
}
