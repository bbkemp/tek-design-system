/**
 * Shared base for the selector-family controls (tek-checkbox, tek-radio,
 * tek-toggle): checked/error/disabled attribute reflection, click-to-toggle,
 * and the `tek-change` dispatch. Not a custom element itself — subclasses
 * document their own API for the manifest.
 */
export abstract class TekBaseSelector extends HTMLElement {
  static get observedAttributes() { return ['checked','error','disabled']; }
  get checked()  { return this.hasAttribute('checked'); }
  set checked(v) { v ? this.setAttribute('checked','') : this.removeAttribute('checked'); }
  get error()    { return this.hasAttribute('error'); }
  set error(v)   { v ? this.setAttribute('error','')   : this.removeAttribute('error'); }
  get disabled() { return this.hasAttribute('disabled'); }
  set disabled(v){ v ? this.setAttribute('disabled',''):this.removeAttribute('disabled'); }

  connectedCallback() {
    this.render();
    if (!this.disabled) this.addEventListener('click', this._click);
  }
  disconnectedCallback() { this.removeEventListener('click', this._click); }
  attributeChangedCallback(_n: string, o: string|null, n: string|null) {
    if (o !== n) this.render();
  }

  protected _click = () => {
    if (this.disabled || this.error) return;
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('tek-change', {
      bubbles: true, composed: true, detail: { checked: this.checked }
    }));
  };

  protected abstract render(): void;
}
