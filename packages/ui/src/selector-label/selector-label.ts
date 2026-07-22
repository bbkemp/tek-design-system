import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TekSelectorLabel extends LitElement {
  static styles = css`
    :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .text { display:flex; flex:1 0 0; flex-direction:column; font-family:var(--tek-fonts-family-geist,system-ui,sans-serif); font-size:12px; font-weight:400; font-style:normal; justify-content:center; line-height:12px; min-height:1px; min-width:1px; color:var(--tek-color-selector-label-unchecked,#cccccc); }
    :host([checked]) .text { color:var(--tek-color-selector-label-checked,#ffffff); }
    :host([error])   .text { color:var(--tek-color-selector-label-error,#ffffff); }
  `;

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  render() {
    return html`<div class="text" part="text"><slot></slot></div>`;
  }
}
customElements.define('tek-selector-label', TekSelectorLabel);
