import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export abstract class TekBaseSelector extends LitElement {
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._click);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this._click);
  }

  protected _click = () => {
    if (this.disabled || this.error) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('tek-change', {
      bubbles: true, composed: true, detail: { checked: this.checked }
    }));
  };
}
