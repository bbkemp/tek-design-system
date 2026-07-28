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
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * @summary Bordered table container. v1 ships readonly only; selectable/editable are v2 and fall back with a warning.
 *
 * @attr {("readonly"|"selectable"|"editable")} [variant="readonly"] - Table interaction mode. Non-readonly values are v2 and fall back to readonly.
 *
 * @slot - `tek-data-table-head` and `tek-data-table-body`.
 *
 * @cssprop --tek-table-columns - Grid column widths for every row, e.g. "2fr 1fr 1.5fr 0.6fr" (set on the table, consumed by `tek-data-table-row`).
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
 * @summary Header rowgroup for `tek-data-table` — wraps the header `tek-data-table-row`.
 *
 * @slot - `tek-data-table-row` elements with `data-context="head"` styling.
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
 * @summary Body rowgroup for `tek-data-table` — wraps the data `tek-data-table-row` elements.
 *
 * @slot - `tek-data-table-row` elements.
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
 * @summary One row of `tek-data-table` — grid columns are set by `--tek-table-columns` on the parent table. State tints layer over the default background.
 *
 * @attr {boolean} selected - Marks the row selected; adds a left accent bar and background tint.
 * @attr {("default"|"disabled"|"error"|"success")} [state="default"] - Row visual state.
 *
 * @slot - `tek-data-table-cell` elements.
 *
 * @cssprop --tek-table-columns - Grid column widths, e.g. "2fr 1fr 1.5fr 0.6fr".
 * @cssprop --tek-spacing-s06 - Column gap; header vertical padding.
 * @cssprop --tek-spacing-s07 - Row padding.
 * @cssprop --tek-color-table-row-background-default - Body row background.
 * @cssprop --tek-color-table-row-background-hover - Body row background on hover.
 * @cssprop --tek-color-table-row-background-error - Body row background, error state.
 * @cssprop --tek-color-table-row-background-success - Body row background, success state.
 * @cssprop --tek-color-table-row-background-selected - Body row background, selected.
 * @cssprop --tek-color-table-row-border-selected - Left accent bar color, selected.
 * @cssprop --tek-borders-width-01 - Row divider width.
 * @cssprop --tek-borders-width-05 - Selected accent bar width.
 * @cssprop --tek-color-table-divider-default - Row divider color.
 * @cssprop --tek-color-table-header-background - Header row background.
 * @cssprop --tek-color-table-header-text - Header row text color.
 * @cssprop --tek-color-table-text-default - Body row text color.
 * @cssprop --tek-color-table-text-muted - Text color, disabled state.
 * @cssprop --tek-fonts-family-geist - Row font family.
 * @cssprop --tek-fonts-text-size-md - Body row font size.
 * @cssprop --tek-fonts-text-line-height-md - Body row line height.
 * @cssprop --tek-fonts-text-size-xs - Header row font size.
 * @cssprop --tek-fonts-text-line-height-xs - Header row line height.
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
 * @summary One cell of a `tek-data-table-row`. Overflows with ellipsis; role is derived from whether it's inside a `tek-data-table-head`.
 *
 * @attr {("start"|"center"|"end")} [align="start"] - Text alignment within the cell.
 *
 * @slot - Cell content, including a slotted `tek-badge` for status pills.
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
