const STYLES = `
  :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; }
  :host([disabled]) { cursor:not-allowed; opacity:0.4; }
  .text { display:flex; flex:1 0 0; flex-direction:column; font-family:var(--tek-fonts-family-geist,system-ui,sans-serif); font-size:12px; font-weight:400; font-style:normal; justify-content:center; line-height:12px; min-height:1px; min-width:1px; color:var(--tek-color-selector-label-unchecked,#cccccc); }
  :host([checked]) .text { color:var(--tek-color-selector-label-checked,#ffffff); }
  :host([error])   .text { color:var(--tek-color-selector-label-error,#ffffff); }
`;

/**
 * Text label for a selector control, color-synced to the control's
 * checked/error/disabled state. `<tek-selector>` keeps these attributes in
 * sync automatically when used inside it.
 *
 * Figma: DS-v2 → Selector (node 7002:378), label. Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-selector-label checked>Enable feature</tek-selector-label>
 * ```
 *
 * @summary State-aware text label for checkbox/radio/toggle controls.
 *
 * @attr {boolean} checked - Mirrors the paired control; brightens the text.
 * @attr {boolean} error - Mirrors the paired control; error text color.
 * @attr {boolean} disabled - Mirrors the paired control; dims the label.
 *
 * @slot - Label text.
 *
 * @csspart text - The text container div.
 *
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-color-selector-label-unchecked - Text color when unchecked.
 * @cssprop --tek-color-selector-label-checked - Text color when checked.
 * @cssprop --tek-color-selector-label-error - Text color in error state.
 */
export class TekSelectorLabel extends HTMLElement {
  static get observedAttributes() { return ['checked','error','disabled']; }
  get checked()  { return this.hasAttribute('checked'); }
  set checked(v: boolean) { v ? this.setAttribute('checked','') : this.removeAttribute('checked'); }
  get error()    { return this.hasAttribute('error'); }
  set error(v: boolean)   { v ? this.setAttribute('error','')   : this.removeAttribute('error'); }
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(v: boolean){ v ? this.setAttribute('disabled',''):this.removeAttribute('disabled'); }

  private _shadow = this.attachShadow({ mode: 'open' });
  connectedCallback()    { this._render(); }
  attributeChangedCallback() { this._render(); }
  private _render() {
    this._shadow.innerHTML = `<style>${STYLES}</style><div class="text" part="text"><slot></slot></div>`;
  }
}
customElements.define('tek-selector-label', TekSelectorLabel);
