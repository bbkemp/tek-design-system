import { LitElement } from 'lit';
/**
 * Data table container: bordered, rounded shell that slots
 * `<tek-data-table-head>` and `<tek-data-table-body>`. v1 ships READONLY only,
 * per the spec's own scoping note — `selectable` / `editable` are v2 (the attr
 * warns and falls back). Unvirtualized per the §11 decision (Tek Express worst
 * case ~30 rows). tek-status-pill is tek-badge — cells slot badges; no
 * separate pill component. Fixed columns are the contract (users scan by
 * position — corpus 17:30): set `--tek-table-columns` on the table (a single
 * columns prop rather than the spec's per-column --col-N sketch — one prop,
 * same idea, flagged).
 *
 * Figma: DS-v2 → DataTable (node 8415:513).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §2.
 *
 * Usage:
 * ```html
 * <tek-data-table style="--tek-table-columns: 2fr 1fr 1.5fr 0.6fr">
 *   <tek-data-table-head>
 *     <tek-data-table-row>
 *       <tek-data-table-cell>Name</tek-data-table-cell>
 *     </tek-data-table-row>
 *   </tek-data-table-head>
 *   <tek-data-table-body>
 *     <tek-data-table-row>
 *       <tek-data-table-cell>PSU-2231A</tek-data-table-cell>
 *     </tek-data-table-row>
 *   </tek-data-table-body>
 * </tek-data-table>
 * ```
 *
 * @summary Read-only data table container composed of head/body/row/cell sub-elements.
 *
 * @attr {("readonly"|"selectable"|"editable")} [variant="readonly"] - Table mode. Only `readonly` ships in v1; other values warn and fall back.
 *
 * @slot - `tek-data-table-head` and `tek-data-table-body` sections.
 *
 * @cssprop --tek-table-columns - Grid template columns, consumed by slotted rows (e.g. "2fr 1fr 1.5fr 0.6fr").
 * @cssprop --tek-borders-width-01 - Outer border width.
 * @cssprop --tek-color-table-divider-default - Outer border color.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 */
export declare class TekDataTable extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'readonly' | 'selectable' | 'editable';
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Header section of `<tek-data-table>` — a `rowgroup` wrapping header rows.
 * Rows inside it detect the head context and render with header background,
 * padding, and XS type.
 *
 * @summary Header rowgroup of the data table.
 *
 * @slot - Header `tek-data-table-row` elements.
 */
export declare class TekDataTableHead extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Body section of `<tek-data-table>` — a `rowgroup` wrapping data rows.
 * Rows inside it detect the body context and gain hover/state tints.
 *
 * @summary Body rowgroup of the data table.
 *
 * @slot - Body `tek-data-table-row` elements.
 */
export declare class TekDataTableBody extends LitElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Single table row — a CSS grid whose columns come from `--tek-table-columns`
 * set on the table. Detects head/body context on connect (`data-context`);
 * body rows layer hover/selected/error/success tints over the default
 * background, matching the Figma fills.
 *
 * Figma: DS-v2 → TableRow (node 8415:512).
 *
 * @summary Grid row of the data table with selection and state tints.
 *
 * @attr {boolean} selected - Selected tint plus a left accent bar.
 * @attr {("default"|"disabled"|"error"|"success")} [state="default"] - Row state; `disabled` mutes text and blocks pointer events.
 *
 * @slot - `tek-data-table-cell` elements.
 *
 * @cssprop --tek-table-columns - Grid template columns (set on the table).
 * @cssprop --tek-color-table-* - Row/header backgrounds, hover/selected/error/success tints, divider, selected accent, and text colors.
 * @cssprop --tek-spacing-s06 - Column gap; also header row vertical padding.
 * @cssprop --tek-spacing-s07 - Row padding.
 * @cssprop --tek-borders-width-01 - Row divider width.
 * @cssprop --tek-borders-width-05 - Selected accent bar width.
 * @cssprop --tek-fonts-family-geist - Row font family.
 * @cssprop --tek-fonts-text-size-md - Body row type size (xs in header rows).
 */
export declare class TekDataTableRow extends LitElement {
    static styles: import("lit").CSSResult;
    selected: boolean;
    state: 'default' | 'disabled' | 'error' | 'success';
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
/**
 * Single cell — one grid column of its row. Truncates overflow with an
 * ellipsis. Renders as `columnheader` inside the head, `cell` in the body.
 *
 * @summary Data table cell with alignment and ellipsis truncation.
 *
 * @attr {("start"|"center"|"end")} [align="start"] - Text alignment.
 *
 * @slot - Cell content (text, or slotted components such as `tek-badge`).
 */
export declare class TekDataTableCell extends LitElement {
    static styles: import("lit").CSSResult;
    align: 'start' | 'center' | 'end';
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
