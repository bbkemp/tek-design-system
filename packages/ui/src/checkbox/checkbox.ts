import { TekBaseSelector } from '../base-selector.js';

const STYLES = `
  :host { display:inline-block; position:relative; width:16px; height:16px; flex-shrink:0; cursor:pointer; outline:none; }
  :host([disabled]) { cursor:not-allowed; opacity:0.4; }
  .box { position:absolute; inset:0; background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); border-radius:3px; transition:border-color 0.1s; }
  :host([checked]) .box { border-color:var(--tek-color-selector-border-checked,#979797); }
  :host([error])   .box { border-color:var(--tek-color-selector-border-error,#e74848); }
  .icon { position:absolute; inset:0; overflow:hidden; display:none; }
  :host([checked]) .icon { display:block; }
  .mark { position:absolute; left:15.63%; right:15.62%; height:9.001px; top:50%; transform:translateY(-50%); }
  .mark svg { width:100%; height:100%; overflow:visible; }
  :host(:focus-visible) .box { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
`;

export class TekCheckbox extends TekBaseSelector {
  private _shadow = this.attachShadow({ mode: 'open' });
  connectedCallback() {
    this.setAttribute('role','checkbox');
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    this.setAttribute('aria-checked', String(this.checked));
    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this._click(); }
    });
    super.connectedCallback();
  }
  attributeChangedCallback(n: string, o: string|null, v: string|null) {
    super.attributeChangedCallback(n,o,v);
    if (n === 'checked') this.setAttribute('aria-checked', String(this.checked));
  }
  protected render() {
    this._shadow.innerHTML = `<style>${STYLES}</style>
      <div class="box" part="box"></div>
      <div class="icon" part="icon">
        <div class="mark" part="mark">
          <svg viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 4L4 7.5L10 1" stroke="var(--tek-color-icons-default,#ffffff)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>`;
  }
}
customElements.define('tek-checkbox', TekCheckbox);
