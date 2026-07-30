import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export const GRID_GAP_STEPS = ['s05', 's09', 's11'] as const;
export type GridGapStep = (typeof GRID_GAP_STEPS)[number];
export const GRID_COLUMNS = ['2', '3', '4'] as const;
export type GridColumns = (typeof GRID_COLUMNS)[number];

/**
 * Column-grid layout primitive (ADR-0002: layout primitives — always start
 * with layout). Equal-width columns; `columns` and `gap` mirror the Figma
 * variant axes, and `gap` accepts spacing token steps ONLY (never raw px) —
 * unknown values warn and fall back to the defaults.
 *
 * Figma: DS-v2 → v2.02 → Grid (node 8377:446).
 *
 * Usage:
 * ```html
 * <tek-grid columns="3" gap="s09">
 *   <div>…</div><div>…</div><div>…</div>
 * </tek-grid>
 * ```
 *
 * @summary Column-grid layout primitive with token-step gap.
 *
 * @attr {'s05'|'s09'|'s11'} gap - Spacing token step between cells (default s09).
 * @attr {'2'|'3'|'4'} columns - Number of equal-width columns (default 3).
 *
 * @slot - Grid cells.
 *
 * @cssprop --tek-spacing-s05 - Gap for gap="s05"; --tek-spacing-s09 and --tek-spacing-s11 likewise.
 */
export class TekGrid extends LitElement {
  static styles = css`
    :host {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      box-sizing: border-box;
      gap: var(--tek-spacing-s09, 16px);
    }

    :host([gap='s05']) { gap: var(--tek-spacing-s05, 8px); }
    :host([gap='s09']) { gap: var(--tek-spacing-s09, 16px); }
    :host([gap='s11']) { gap: var(--tek-spacing-s11, 24px); }

    :host([columns='2']) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    :host([columns='3']) { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    :host([columns='4']) { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  `;

  @property({ reflect: true }) gap: GridGapStep = 's09';
  @property({ reflect: true }) columns: GridColumns = '3';

  willUpdate(): void {
    if (this.gap && !(GRID_GAP_STEPS as readonly string[]).includes(this.gap)) {
      console.warn(`<tek-grid> gap="${this.gap}" is not a spacing token step (${GRID_GAP_STEPS.join(', ')}); falling back to s09.`);
      this.gap = 's09';
    }
    if (this.columns && !(GRID_COLUMNS as readonly string[]).includes(this.columns)) {
      console.warn(`<tek-grid> columns="${this.columns}" must be one of ${GRID_COLUMNS.join(', ')}; falling back to 3.`);
      this.columns = '3';
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-grid', TekGrid);
