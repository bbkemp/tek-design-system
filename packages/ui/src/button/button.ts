/**
 * tek-button
 * Figma: DS-v2 → Button (node 202:2605)
 * Variants: Type=Primary|Secondary × State=Default|Hover|Inactive
 *
 * Tokens:
 *   --tek-color-button-background-default|hover|inactive
 *   --tek-color-button-border-default|hover|inactive
 *   --tek-color-button-text-default|hover|inactive
 *
 * Primary:   px-24 py-12, Archivo Medium 16px, ls 2, lh 18, radius full, border 1px
 * Secondary: px-14 py-6,  Archivo Regular 13px, ls 1, lh 15, radius full, no border width token
 *
 * Usage:
 *   <tek-button>Sign In</tek-button>
 *   <tek-button variant="secondary">Cancel</tek-button>
 *   <tek-button inactive>Sign In</tek-button>
 */
const STYLES = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid var(--tek-color-button-border-default, #33baea);
    background: var(--tek-color-button-background-default, #1e1e1e);
    padding: 12px 24px;
    cursor: pointer;
    outline: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
    box-sizing: border-box;
    width: 100%;
  }

  :host([variant="secondary"]) {
    padding: 6px 14px;
  }

  .label {
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
    font-weight: 578;
    font-style: normal;
    font-variation-settings: 'wdth' 106;
    line-height: 18px;
    letter-spacing: 0.32px;
    color: var(--tek-color-button-text-default, #cccccc);
    text-align: center;
    white-space: nowrap;
    transition: color 0.15s;
  }

  :host([variant="secondary"]) .label {
    font-size: 13px;
    font-weight: 534;
    line-height: 15px;
    letter-spacing: 0.13px;
  }

  :host(:hover:not([inactive]):not([disabled])) {
    background: var(--tek-color-button-background-hover, #000000);
    border-color: var(--tek-color-button-border-hover, #33baea);
  }
  :host(:hover:not([inactive]):not([disabled])) .label {
    color: var(--tek-color-button-text-hover, #ffffff);
  }

  :host([inactive]),
  :host([disabled]) {
    background: var(--tek-color-button-background-inactive, #181818);
    border-color: var(--tek-color-button-border-inactive, #454545);
    cursor: not-allowed;
    pointer-events: none;
  }
  :host([inactive]) .label,
  :host([disabled]) .label {
    color: var(--tek-color-button-text-inactive, #454545);
  }

  :host(:focus-visible) {
    box-shadow: 0 0 0 2px var(--tek-color-button-border-default, #33baea);
  }
`;

export class TekButton extends HTMLElement {
  static get observedAttributes() { return ['variant','inactive','disabled']; }

  get variant()  { return this.getAttribute('variant') || 'primary'; }
  get inactive() { return this.hasAttribute('inactive'); }
  get disabled() { return this.hasAttribute('disabled'); }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() {
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', (this.inactive || this.disabled) ? '-1' : '0');
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        if (!this.inactive && !this.disabled) {
          this.dispatchEvent(new CustomEvent('tek-click', { bubbles: true, composed: true }));
        }
      }
    });
    this.addEventListener('click', () => {
      if (!this.inactive && !this.disabled) {
        this.dispatchEvent(new CustomEvent('tek-click', { bubbles: true, composed: true }));
      }
    });
    this._render();
  }

  attributeChangedCallback() { this._render(); }

  private _render() {
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <span class="label" part="label"><slot></slot></span>
    `;
  }
}
customElements.define('tek-button', TekButton);
