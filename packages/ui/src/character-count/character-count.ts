/**
 * tek-character-count
 * Figma: DS-v2 → CharacterCount (node 7011:143)
 * States: Default | Focus | Filled | Error | Warning
 * Font: Geist Regular 10px, lh 15px
 *
 * Tokens:
 *   --tek-color-input-character-count-default|focus|filled|error|warning
 *
 * Usage:
 *   <tek-character-count current="10" max="52"></tek-character-count>
 *   <tek-character-count current="50" max="52" state="warning"></tek-character-count>
 *   <tek-character-count current="53" max="52" state="error"></tek-character-count>
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
  @property() state = 'default';

  render() {
    const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
    return html`<span class="count" part="count" aria-live="polite">${text}</span>`;
  }
}
customElements.define('tek-character-count', TekCharacterCount);
