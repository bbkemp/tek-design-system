/**
 * tek-input
 * Figma: DS-v2 → Input (node 7003:495)
 * States: Default | Focus | Filled | Disabled | Error
 * Heights: Single (31px) | Double (48px) | Triple (64px)
 *
 * Tokens:
 *   --tek-color-input-background-default
 *   --tek-color-input-border-default|focus|filled|disabled|error
 *   --tek-color-input-text-default|focus|filled|disabled|error
 */
const STYLES = `
  :host {
    display: block;
    background: var(--tek-color-input-background-default, #252525);
    border: 0.5px solid var(--tek-color-input-border-default, #7b7b7b);
    border-radius: var(--tek-borders-radius-03, 5px);
    padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s02, 4px) var(--tek-spacing-s05, 8px) var(--tek-spacing-s06, 10px);
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.1s;
  }
  :host([state="focus"])    { border-color: var(--tek-color-input-border-focus,   #ffffff); }
  :host([state="filled"])   { border-color: var(--tek-color-input-border-filled,  #afafaf); }
  :host([state="disabled"]) { border-color: var(--tek-color-input-border-disabled,#454545); }
  :host([state="error"])    { border-color: var(--tek-color-input-border-error,   #e74848); }
  :host([height="double"])  { min-height: 48px; }
  :host([height="triple"])  { min-height: 64px; }

  input, textarea {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-lg, 14px);
    line-height: var(--tek-fonts-text-line-height-lg, 20px);
    color: var(--tek-color-input-text-default, #979797);
    resize: none;
    padding: 0;
  }
  :host([state="focus"])    input, :host([state="focus"])    textarea { color: var(--tek-color-input-text-focus,   #ffffff); }
  :host([state="filled"])   input, :host([state="filled"])   textarea { color: var(--tek-color-input-text-filled,  #cccccc); }
  :host([state="disabled"]) input, :host([state="disabled"]) textarea { color: var(--tek-color-input-text-disabled,#454545); }
  :host([state="error"])    input, :host([state="error"])    textarea  { color: var(--tek-color-input-text-error,   #ffffff); }

  input::placeholder, textarea::placeholder { color: inherit; }
  :host([state="disabled"]) { pointer-events: none; }
`;

export class TekInput extends HTMLElement {
  static get observedAttributes() { return ['state','height','placeholder','value','type']; }

  get state()       { return this.getAttribute('state') || 'default'; }
  get height()      { return this.getAttribute('height') || 'single'; }
  get placeholder() { return this.getAttribute('placeholder') || ''; }
  get value()       { return this.getAttribute('value') || ''; }
  set value(v: string) {
    this.setAttribute('value', v);
    const el = this._shadow.querySelector('input, textarea') as HTMLInputElement;
    if (el) el.value = v;
  }
  get type()        { return this.getAttribute('type') || 'text'; }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback()    { this._render(); }
  attributeChangedCallback(name: string) {
    // 'state' changes are handled entirely by CSS (:host([state=...]) selectors).
    // Re-rendering on state change destroys the focused <input> element, making
    // typing impossible. Only re-render for structural attribute changes.
    if (name !== 'state') this._render();
  }

  private _esc(s: string) {
    return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  private _render() {
    const isMulti = this.height === 'double' || this.height === 'triple';
    const rows = this.height === 'double' ? 2 : this.height === 'triple' ? 3 : 1;
    const isDisabled = this.state === 'disabled';
    const disAttr = isDisabled ? ' disabled' : '';
    const field = isMulti
      ? `<textarea rows="${rows}" placeholder="${this._esc(this.placeholder)}"${disAttr}></textarea>`
      : `<input type="${this._esc(this.type)}" placeholder="${this._esc(this.placeholder)}" value="${this._esc(this.value)}"${disAttr}>`;
    this._shadow.innerHTML = `<style>${STYLES}</style>${field}`;

    // Set textarea value via property (not interpolated into innerHTML) to prevent XSS
    if (isMulti) {
      const ta = this._shadow.querySelector('textarea') as HTMLTextAreaElement;
      if (ta) ta.value = this.value;
    }

    if (isDisabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');

    const el = this._shadow.querySelector('input, textarea') as HTMLElement;
    el?.addEventListener('focus', () => {
      if (this.state === 'default') this.setAttribute('state','focus');
    });
    el?.addEventListener('blur', () => {
      const inp = el as HTMLInputElement;
      if (inp.value) this.setAttribute('state','filled');
      else this.setAttribute('state','default');
    });
    el?.addEventListener('input', () => {
      this.dispatchEvent(new CustomEvent('tek-input', { bubbles:true, composed:true,
        detail: { value: (el as HTMLInputElement).value }
      }));
    });
  }
}
customElements.define('tek-input', TekInput);
