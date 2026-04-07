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
const STYLES = `
  :host {
    display: inline-block;
  }
  .count {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 15px;
    color: var(--tek-color-input-character-count-default, #cccccc);
    white-space: nowrap;
  }
  :host([state="focus"])   .count { color: var(--tek-color-input-character-count-focus,   #ffffff); }
  :host([state="filled"])  .count { color: var(--tek-color-input-character-count-filled,  #afafaf); }
  :host([state="error"])   .count { color: var(--tek-color-input-character-count-error,   #e74848); }
  :host([state="warning"]) .count { color: var(--tek-color-input-character-count-warning, #e0b732); }
`;

export class TekCharacterCount extends HTMLElement {
  static get observedAttributes() { return ['current','max','state']; }

  get current() { return parseInt(this.getAttribute('current') || '0', 10); }
  get max()     { return parseInt(this.getAttribute('max') || '0', 10); }
  get state()   { return this.getAttribute('state') || 'default'; }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback()    { this._render(); }
  attributeChangedCallback() { this._render(); }

  private _render() {
    const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <span class="count" part="count" aria-live="polite">${text}</span>
    `;
  }
}
customElements.define('tek-character-count', TekCharacterCount);
