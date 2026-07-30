import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
export class TekDataTable extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      overflow: hidden;
    }
  `;

  @property({ reflect: true }) variant: 'readonly' | 'selectable' | 'editable' = 'readonly';

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'table');
  }

  willUpdate(): void {
    if (this.variant !== 'readonly') {
      console.warn(`<tek-data-table> variant="${this.variant}" is v2 (rr-audit §2 ships readonly first); falling back.`);
      this.variant = 'readonly';
    }
  }

  render() {
    return html`<slot></slot>`;
  }
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
export class TekDataTableHead extends LitElement {
  static styles = css`:host { display: block; }`;
  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'rowgroup');
  }
  render() { return html`<slot></slot>`; }
}

/**
 * Body section of `<tek-data-table>` — a `rowgroup` wrapping data rows.
 * Rows inside it detect the body context and gain hover/state tints.
 *
 * @summary Body rowgroup of the data table.
 *
 * @slot - Body `tek-data-table-row` elements.
 */
export class TekDataTableBody extends LitElement {
  static styles = css`:host { display: block; }`;
  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'rowgroup');
  }
  render() { return html`<slot></slot>`; }
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
export class TekDataTableRow extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: grid;
      grid-template-columns: var(--tek-table-columns, repeat(4, 1fr));
      align-items: center;
      column-gap: var(--tek-spacing-s06, 10px);
      padding: var(--tek-spacing-s07, 12px);
      background-color: var(--tek-color-table-row-background-default, #252525);
      border-bottom: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-table-divider-default, #7b7b7b);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-table-text-default, #ffffff);
      box-sizing: border-box;
    }
    :host(:last-child) { border-bottom: none; }

    /* header rows */
    :host([data-context='head']) {
      padding-top: var(--tek-spacing-s06, 10px);
      padding-bottom: var(--tek-spacing-s06, 10px);
      background-color: var(--tek-color-table-header-background, #252525);
      color: var(--tek-color-table-header-text, #ffffff);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
    }

    /* body row states — tints layer over the default bg, like the Figma fills */
    :host([data-context='body']:hover) {
      background-image: linear-gradient(var(--tek-color-table-row-background-hover, rgba(255,255,255,0.06)),
                                        var(--tek-color-table-row-background-hover, rgba(255,255,255,0.06)));
    }
    :host([state='error']) {
      background-image: linear-gradient(var(--tek-color-table-row-background-error, rgba(231,72,72,0.1)),
                                        var(--tek-color-table-row-background-error, rgba(231,72,72,0.1)));
    }
    :host([state='success']) {
      background-image: linear-gradient(var(--tek-color-table-row-background-success, rgba(66,181,76,0.1)),
                                        var(--tek-color-table-row-background-success, rgba(66,181,76,0.1)));
    }
    :host([selected]) {
      background-image: linear-gradient(var(--tek-color-table-row-background-selected, rgba(51,186,234,0.12)),
                                        var(--tek-color-table-row-background-selected, rgba(51,186,234,0.12)));
    }
    :host([selected])::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: var(--tek-borders-width-05, 3px);
      background: var(--tek-color-table-row-border-selected, #33baea);
    }
    :host([state='disabled']) {
      color: var(--tek-color-table-text-muted, #979797);
      opacity: 0.5;
      pointer-events: none;
    }
  `;

  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ reflect: true }) state: 'default' | 'disabled' | 'error' | 'success' = 'default';

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'row');
    const ctx = this.closest('tek-data-table-head') ? 'head' : 'body';
    this.setAttribute('data-context', ctx);
  }

  render() { return html`<slot></slot>`; }
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
export class TekDataTableCell extends LitElement {
  static styles = css`
    :host {
      display: block;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    :host([align='center']) { text-align: center; }
    :host([align='end']) { text-align: end; }
  `;

  @property({ reflect: true }) align: 'start' | 'center' | 'end' = 'start';

  connectedCallback(): void {
    super.connectedCallback();
    const inHead = this.closest('tek-data-table-head');
    this.setAttribute('role', inHead ? 'columnheader' : 'cell');
  }

  render() { return html`<slot></slot>`; }
}

customElements.define('tek-data-table', TekDataTable);
customElements.define('tek-data-table-head', TekDataTableHead);
customElements.define('tek-data-table-body', TekDataTableBody);
customElements.define('tek-data-table-row', TekDataTableRow);
customElements.define('tek-data-table-cell', TekDataTableCell);
