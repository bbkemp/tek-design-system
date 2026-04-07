/**
 * tek-selector
 * Figma: DS-v2 → Selector (node 7002:378)
 *
 * Tokens:
 *   (inherits from tek-checkbox / tek-radio / tek-toggle / tek-selector-label)
 *
 * Usage — self-contained (label attribute):
 *   <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 *   <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 *   <tek-selector type="toggle" label="Live mode"></tek-selector>
 *
 * Usage — slot-based (bring your own children):
 *   <tek-selector>
 *     <tek-checkbox></tek-checkbox>
 *     <tek-selector-label>Enable feature</tek-selector-label>
 *   </tek-selector>
 */
const STYLES = `
  :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; user-select:none; }
  :host([type="toggle"]) { padding-top:1px; padding-bottom:1px; }
  .inner { display:flex; gap:var(--tek-spacing-s05,8px); align-items:center; min-height:1px; min-width:1px; padding:0; }
`;

export class TekSelector extends HTMLElement {
  static get observedAttributes() { return ['checked','error','disabled','label','type','name']; }

  get checked()  { return this.hasAttribute('checked'); }
  set checked(v: boolean) { v ? this.setAttribute('checked','') : this.removeAttribute('checked'); }
  get error()    { return this.hasAttribute('error'); }
  get disabled() { return this.hasAttribute('disabled'); }

  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() {
    this._render();
    // tek-change from children (composed:true) bubbles up to here — sync host state
    this.addEventListener('tek-change', (e: Event) => {
      const { checked } = (e as CustomEvent<{checked:boolean}>).detail;
      this._sync(checked);
    });
    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() { this.removeEventListener('click', this._onClick); }

  attributeChangedCallback(n: string, o: string|null, v: string|null) {
    if (o === v) return;
    // label/type/name changes require a full re-render
    if (n === 'label' || n === 'type' || n === 'name') { this._render(); }
    else { this._syncChildren(); }
  }

  private _getCtrl(): HTMLElement | null {
    // Check shadow DOM first (self-contained mode), then light DOM (slot mode)
    return (this._shadow.querySelector('tek-checkbox,tek-radio,tek-toggle') ||
            this.querySelector('tek-checkbox,tek-radio,tek-toggle')) as HTMLElement | null;
  }

  private _getLbl(): HTMLElement | null {
    return (this._shadow.querySelector('tek-selector-label') ||
            this.querySelector('tek-selector-label')) as HTMLElement | null;
  }

  private _onClick = (e: Event) => {
    const ctrl = this._getCtrl() as any;
    if (!ctrl || ctrl.disabled || ctrl.error) return;
    // If click originated inside the control element, let the control handle it
    if (e.composedPath().some((el: EventTarget) => el === ctrl)) return;
    ctrl.checked = !ctrl.checked;
    this._sync(ctrl.checked);
    ctrl.dispatchEvent(new CustomEvent('tek-change', {
      bubbles: true, composed: true, detail: { checked: ctrl.checked }
    }));
  };

  private _sync(checked: boolean) {
    const lbl = this._getLbl() as any;
    if (lbl) { checked ? lbl.setAttribute('checked','') : lbl.removeAttribute('checked'); }
    checked ? this.setAttribute('checked','') : this.removeAttribute('checked');
  }

  private _syncChildren() {
    const ctrl = this._getCtrl() as HTMLElement;
    const lbl  = this._getLbl() as HTMLElement;
    ['checked','error','disabled'].forEach(attr => {
      const has = this.hasAttribute(attr);
      [ctrl, lbl].forEach(el => {
        if (!el) return;
        has ? el.setAttribute(attr,'') : el.removeAttribute(attr);
      });
    });
  }

  private _render() {
    const label    = this.getAttribute('label');
    const type     = this.getAttribute('type') || 'checkbox';
    const name     = this.getAttribute('name') ? `name="${this.getAttribute('name')}"` : '';
    const checked  = this.hasAttribute('checked')  ? 'checked'  : '';
    const error    = this.hasAttribute('error')    ? 'error'    : '';
    const disabled = this.hasAttribute('disabled') ? 'disabled' : '';

    if (label !== null) {
      // Self-contained: render the control + label entirely in shadow DOM
      this._shadow.innerHTML = `<style>${STYLES}</style>
        <div class="inner" part="inner">
          <tek-${type} ${checked} ${error} ${disabled} ${name}></tek-${type}>
          <tek-selector-label ${checked} ${error}>${label}</tek-selector-label>
        </div>`;
    } else {
      // Slot mode: consumer slots in tek-checkbox/radio/toggle + tek-selector-label
      this._shadow.innerHTML = `<style>${STYLES}</style>
        <div class="inner" part="inner"><slot></slot></div>`;
      // Auto-detect toggle for correct top padding
      requestAnimationFrame(() => {
        if (this.querySelector('tek-toggle')) this.setAttribute('type','toggle');
      });
    }
  }
}
customElements.define('tek-selector', TekSelector);
