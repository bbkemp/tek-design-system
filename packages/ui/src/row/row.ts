/**
 * tek-row
 *
 * Figma: DS-v2 → v2.02 → Row (node 8377:373)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Horizontal layout primitive. `gap` accepts spacing token steps ONLY
 * (never raw px) — the same steps as the Figma Gap variant axis.
 *
 * Tokens:
 *   --tek-spacing-s02 | s03 | s04 | s05 | s06 | s07 | s08 | s09 | s11
 *
 * Usage:
 *   <tek-row gap="s05">
 *     <tek-stack gap="s04">…</tek-stack>
 *     <tek-stack gap="s04">…</tek-stack>
 *   </tek-row>
 *   <tek-row gap="s02" justify="center">…</tek-row>
 *   <tek-row justify="between" align="center">…</tek-row>
 *
 * @summary Horizontal layout primitive. `gap` is a spacing-token-only variant axis.
 *
 * @attr {("s02"|"s03"|"s04"|"s05"|"s06"|"s07"|"s08"|"s09"|"s11")} [gap="s05"] - Gap between children, as a spacing token step. Non-token values fall back to s05.
 * @attr {("start"|"center"|"end"|"stretch")} [align="stretch"] - Cross-axis (vertical) alignment.
 * @attr {("start"|"center"|"end"|"between")} [justify="start"] - Main-axis (horizontal) alignment.
 *
 * @slot - Row items.
 *
 * @cssprop --tek-spacing-s02 - Gap, gap="s02".
 * @cssprop --tek-spacing-s03 - Gap, gap="s03".
 * @cssprop --tek-spacing-s04 - Gap, gap="s04".
 * @cssprop --tek-spacing-s05 - Gap, gap="s05" (default).
 * @cssprop --tek-spacing-s06 - Gap, gap="s06".
 * @cssprop --tek-spacing-s07 - Gap, gap="s07".
 * @cssprop --tek-spacing-s08 - Gap, gap="s08".
 * @cssprop --tek-spacing-s09 - Gap, gap="s09".
 * @cssprop --tek-spacing-s11 - Gap, gap="s11".
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export const ROW_GAP_STEPS = ['s02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's11'] as const;
export type RowGapStep = (typeof ROW_GAP_STEPS)[number];

export class TekRow extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      box-sizing: border-box;
      gap: var(--tek-spacing-s05, 8px);
    }

    :host([gap='s02']) { gap: var(--tek-spacing-s02, 2px); }
    :host([gap='s03']) { gap: var(--tek-spacing-s03, 4px); }
    :host([gap='s04']) { gap: var(--tek-spacing-s04, 6px); }
    :host([gap='s05']) { gap: var(--tek-spacing-s05, 8px); }
    :host([gap='s06']) { gap: var(--tek-spacing-s06, 10px); }
    :host([gap='s07']) { gap: var(--tek-spacing-s07, 12px); }
    :host([gap='s08']) { gap: var(--tek-spacing-s08, 14px); }
    :host([gap='s09']) { gap: var(--tek-spacing-s09, 16px); }
    :host([gap='s11']) { gap: var(--tek-spacing-s11, 24px); }

    :host([align='start'])   { align-items: flex-start; }
    :host([align='center'])  { align-items: center; }
    :host([align='end'])     { align-items: flex-end; }
    :host([align='stretch']) { align-items: stretch; }

    :host([justify='start'])   { justify-content: flex-start; }
    :host([justify='center'])  { justify-content: center; }
    :host([justify='end'])     { justify-content: flex-end; }
    :host([justify='between']) { justify-content: space-between; }
  `;

  @property({ reflect: true }) gap: RowGapStep = 's05';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';
  @property({ reflect: true }) justify: 'start' | 'center' | 'end' | 'between' = 'start';

  willUpdate(): void {
    if (this.gap && !(ROW_GAP_STEPS as readonly string[]).includes(this.gap)) {
      console.warn(`<tek-row> gap="${this.gap}" is not a spacing token step (${ROW_GAP_STEPS.join(', ')}); falling back to s05.`);
      this.gap = 's05';
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-row', TekRow);
