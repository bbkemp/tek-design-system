/**
 * tek-stack
 *
 * Figma: DS-v2 → v2.02 → Stack (node 8376:373)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Vertical layout primitive. `gap` accepts spacing token steps ONLY
 * (never raw px) — the same steps as the Figma Gap variant axis.
 *
 * Tokens:
 *   --tek-spacing-s02 | s03 | s04 | s05 | s06 | s07 | s08 | s09 | s11
 *
 * Usage:
 *   <tek-stack gap="s04">
 *     <tek-label>Email</tek-label>
 *     <tek-input></tek-input>
 *   </tek-stack>
 *   <tek-stack gap="s05" align="center">…</tek-stack>
 *
 * @summary Vertical layout primitive. `gap` is a spacing-token-only variant axis.
 *
 * @attr {("s02"|"s03"|"s04"|"s05"|"s06"|"s07"|"s08"|"s09"|"s11")} [gap="s05"] - Gap between children, as a spacing token step. Non-token values fall back to s05.
 * @attr {("start"|"center"|"end"|"stretch")} [align="stretch"] - Cross-axis (horizontal) alignment.
 *
 * @slot - Stack items.
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

export const STACK_GAP_STEPS = ['s02', 's03', 's04', 's05', 's06', 's07', 's08', 's09', 's11'] as const;
export type StackGapStep = (typeof STACK_GAP_STEPS)[number];

export class TekStack extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
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
  `;

  @property({ reflect: true }) gap: StackGapStep = 's05';
  @property({ reflect: true }) align: 'start' | 'center' | 'end' | 'stretch' = 'stretch';

  willUpdate(): void {
    if (this.gap && !(STACK_GAP_STEPS as readonly string[]).includes(this.gap)) {
      console.warn(`<tek-stack> gap="${this.gap}" is not a spacing token step (${STACK_GAP_STEPS.join(', ')}); falling back to s05.`);
      this.gap = 's05';
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-stack', TekStack);
