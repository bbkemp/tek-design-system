/**
 * tek-data-table (+ -head / -body / -row / -cell)
 *
 * Figma: DS-v2 → v2.02 → DataTable (8415:513), TableRow (8415:512)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §2
 *
 * v1 ships READONLY only, per the spec's own scoping note — `selectable` /
 * `editable` are v2 (the attr warns and falls back). Unvirtualized per §11
 * decision (Tek Express worst case ~30 rows). tek-status-pill is tek-badge —
 * cells slot badges; no separate pill component.
 *
 * Fixed columns are the contract (users scan by position — corpus 17:30):
 * set `--tek-table-columns` on the table, e.g. "2fr 1fr 1.5fr 0.6fr".
 * (Adopted §11 decision "CSS custom property"; a single columns prop rather
 * than the spec's per-column --col-N sketch — one prop, same idea, flagged.)
 *
 * Tokens: color/table/* · spacing s06/s07 · borders/width/01 · radius/05 ·
 * text/regular/xs (header) · text/regular/md (body)
 */
import { LitElement } from 'lit';
export declare class TekDataTable extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'readonly' | 'selectable' | 'editable';
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class TekDataTableHead extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class TekDataTableBody extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class TekDataTableRow extends LitElement {
    static styles: import("lit").CSSResult;
    selected: boolean;
    state: 'default' | 'disabled' | 'error' | 'success';
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
export declare class TekDataTableCell extends LitElement {
    static styles: import("lit").CSSResult;
    align: 'start' | 'center' | 'end';
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
