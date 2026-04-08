/**
 * tek-text-link
 * Figma: DS-v2 → TextLink (node 7011:150)
 * States: Default | Hover
 * Font: Geist Regular 10px, lh 12px (text/size/xs)
 *
 * Tokens:
 *   --tek-color-text-link-default
 *
 * Usage:
 *   <tek-text-link href="/forgot">Forgot password?</tek-text-link>
 */
const STYLES = `
  :host {
    display: inline;
  }
  a {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-text-link-default, #33baea);
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.1s;
  }
  a:hover {
    opacity: 0.8;
    text-decoration: underline;
    text-underline-offset: 2px;
    text-decoration-thickness: 0.5px;
    text-decoration-color: var(--tek-color-text-link-default, #33baea);
  }
  a:focus-visible {
    outline: 1px solid var(--tek-color-text-link-default, #33baea);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

export class TekTextLink extends HTMLElement {
  static get observedAttributes() { return ['href','target']; }

  get href()   { return this.getAttribute('href') || '#'; }
  get target() { return this.getAttribute('target') || '_self'; }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback()    { this._render(); }
  attributeChangedCallback() { this._render(); }

  private _render() {
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <a href="${this.href}" target="${this.target}" part="link"><slot></slot></a>
    `;
  }
}
customElements.define('tek-text-link', TekTextLink);
