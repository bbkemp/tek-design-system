import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type TekCharacterCountState = 'default' | 'focus' | 'filled' | 'error' | 'warning';

/**
 * Character counter for text fields, rendered as `current/max` (or just `current` when no max).
 *
 * Figma: DS-v2 → CharacterCount (node 7011:143). Geist Regular 10px.
 *
 * Usage:
 * ```html
 * <tek-character-count current="10" max="52"></tek-character-count>
 * <tek-character-count current="50" max="52" state="warning"></tek-character-count>
 * <tek-character-count current="53" max="52" state="error"></tek-character-count>
 * ```
 *
 * @summary Character counter (current/max) with default/focus/filled/error/warning states.
 *
 * @attr {number} [current=0] - Characters typed so far.
 * @attr {number} [max=0] - Character limit. When 0 or absent, only `current` is shown.
 * @attr {("default"|"focus"|"filled"|"error"|"warning")} [state="default"] - Visual state; colors the count.
 *
 * @csspart count - The count span.
 *
 * @cssprop --tek-fonts-family-geist - Count font family.
 * @cssprop --tek-fonts-text-size-xs - Count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Count line height.
 * @cssprop --tek-color-input-character-count-default - Count color, default state.
 * @cssprop --tek-color-input-character-count-focus - Count color, focus state.
 * @cssprop --tek-color-input-character-count-filled - Count color, filled state.
 * @cssprop --tek-color-input-character-count-error - Count color, error state.
 * @cssprop --tek-color-input-character-count-warning - Count color, warning state.
 */
export class TekCharacterCount extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    .count {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      font-style: normal;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-character-count-default, #cccccc);
      white-space: nowrap;
    }
    :host([state="focus"])   .count { color: var(--tek-color-input-character-count-focus,   #ffffff); }
    :host([state="filled"])  .count { color: var(--tek-color-input-character-count-filled,  #afafaf); }
    :host([state="error"])   .count { color: var(--tek-color-input-character-count-error,   #e74848); }
    :host([state="warning"]) .count { color: var(--tek-color-input-character-count-warning, #e0b732); }
  `;

  @property({ type: Number }) current = 0;
  @property({ type: Number }) max = 0;
  @property() state: TekCharacterCountState = 'default';

  render() {
    const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
    return html`<span class="count" part="count" aria-live="polite">${text}</span>`;
  }
}
customElements.define('tek-character-count', TekCharacterCount);
