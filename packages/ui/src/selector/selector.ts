const STYLES = `
  :host { display:inline-flex; gap:0; align-items:center; width:129px; padding:0; cursor:pointer; }
  :host([type="toggle"]) { padding-top:1px; padding-bottom:1px; }
  .inner { display:flex; flex:1 0 0; gap:8px; align-items:center; min-height:1px; min-width:1px; padding:0; }
`;

export class TekSelector extends HTMLElement {
  static get observedAttributes() { return ['checked','error','disabled']; }
  get checked()  { return this.hasAttribute('checked'); }
  set checked(v: boolean) { v ? this.setAttribute('checked','') : this.removeAttribute('checked'); }
  get error()    { return this.hasAttribute('error'); }
  get disabled() { return this.hasAttribute('disabled'); }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() {
    this._render();
    requestAnimationFrame(() => {
      if (this.querySelector('tek-toggle')) this.setAttribute('type','toggle');
    });
    this.addEventListener('tek-change', (e: Event) => {
      const { checked } = (e as CustomEvent<{checked:boolean}>).detail;
      this._sync(checked);
    });
    this.addEventListener('click', this._onClick);
  }
  disconnectedCallback() { this.removeEventListener('click', this._onClick); }

  attributeChangedCallback(_n: string, o: string|null, v: string|null) {
    if (o !== v) this._syncChildren();
  }

  private _onClick = (e: Event) => {
    const t = e.target as HTMLElement;
    if (t.matches('tek-checkbox,tek-radio,tek-toggle')) return;
    const ctrl = this.querySelector('tek-checkbox,tek-radio,tek-toggle') as any;
    if (!ctrl || ctrl.disabled || ctrl.error) return;
    ctrl.checked = !ctrl.checked;
    this._sync(ctrl.checked);
    ctrl.dispatchEvent(new CustomEvent('tek-change', { bubbles:true, composed:true, detail:{ checked:ctrl.checked } }));
  };

  private _sync(checked: boolean) {
    const label = this.querySelector('tek-selector-label') as any;
    if (label) { checked ? label.setAttribute('checked','') : label.removeAttribute('checked'); }
    checked ? this.setAttribute('checked','') : this.removeAttribute('checked');
  }

  private _syncChildren() {
    const ctrl  = this.querySelector('tek-checkbox,tek-radio,tek-toggle') as HTMLElement;
    const label = this.querySelector('tek-selector-label') as HTMLElement;
    ['checked','error','disabled'].forEach(attr => {
      const has = this.hasAttribute(attr);
      [ctrl,label].forEach(el => { if (!el) return; has ? el.setAttribute(attr,'') : el.removeAttribute(attr); });
    });
  }

  private _render() {
    this._shadow.innerHTML = `<style>${STYLES}</style><div class="inner" part="inner"><slot></slot></div>`;
  }
}
customElements.define('tek-selector', TekSelector);
