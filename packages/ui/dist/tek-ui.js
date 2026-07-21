/**
 * Shared base for the selector-family controls (tek-checkbox, tek-radio,
 * tek-toggle): checked/error/disabled attribute reflection, click-to-toggle,
 * and the `tek-change` dispatch. Not a custom element itself — subclasses
 * document their own API for the manifest.
 */
class TekBaseSelector extends HTMLElement {
    constructor() {
        super(...arguments);
        this._click = () => {
            if (this.disabled || this.error)
                return;
            this.checked = !this.checked;
            this.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: this.checked }
            }));
        };
    }
    static get observedAttributes() { return ['checked', 'error', 'disabled']; }
    get checked() { return this.hasAttribute('checked'); }
    set checked(v) { v ? this.setAttribute('checked', '') : this.removeAttribute('checked'); }
    get error() { return this.hasAttribute('error'); }
    set error(v) { v ? this.setAttribute('error', '') : this.removeAttribute('error'); }
    get disabled() { return this.hasAttribute('disabled'); }
    set disabled(v) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled'); }
    connectedCallback() {
        this.render();
        if (!this.disabled)
            this.addEventListener('click', this._click);
    }
    disconnectedCallback() { this.removeEventListener('click', this._click); }
    attributeChangedCallback(_n, o, n) {
        if (o !== n)
            this.render();
    }
}

const STYLES$b = `
  :host { display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; flex-shrink:0; cursor:pointer; outline:none; }
  :host([disabled]) { cursor:not-allowed; opacity:0.4; }
  .box { width:16px; height:16px; border-radius:var(--tek-borders-radius-02,3px); background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:flex; align-items:center; justify-content:center; transition:border-color 0.1s; }
  :host([checked]) .box { border-color:var(--tek-color-selector-border-checked,#979797); }
  :host([error])   .box { border-color:var(--tek-color-selector-border-error,#e74848); }
  :host(:focus-visible) .box { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
`;
/**
 * 16×16 checkbox control. Toggles on click or Space/Enter; typically composed
 * inside `<tek-selector>` alongside `<tek-selector-label>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), checkbox control.
 *
 * Usage:
 * ```html
 * <tek-checkbox checked></tek-checkbox>
 * ```
 *
 * @summary Checkbox control of the selector family.
 *
 * @attr {boolean} checked - Whether the box is checked.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart box - The box div.
 *
 * @cssprop --tek-borders-radius-02 - Box corner radius.
 * @cssprop --tek-color-selector-background-default - Box background.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-color-icons-default - Checkmark stroke color.
 */
class TekCheckbox extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.setAttribute('role', 'checkbox');
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
        this.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        });
        super.connectedCallback();
    }
    attributeChangedCallback(n, o, v) {
        super.attributeChangedCallback(n, o, v);
        if (n === 'checked')
            this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        this._shadow.innerHTML = `<style>${STYLES$b}</style>
      <div class="box" part="box">${this.checked
            ? `<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M1 4L4 7.5L10 1" stroke="var(--tek-color-icons-default,#ffffff)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>`
            : ''}</div>`;
    }
}
customElements.define('tek-checkbox', TekCheckbox);

const STYLES$a = `
  :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); border-radius:var(--tek-borders-radius-full,9999px); width:16px; height:16px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
  :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); }
  :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
  :host([disabled]) { cursor:not-allowed; opacity:0.4; }
  .dot { background:var(--tek-color-selector-background-checked,#cccccc); border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:10px; height:10px; display:none; }
  :host([checked]) .dot { display:block; }
  :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
`;
/**
 * 16×16 radio control. Checking one radio unchecks every other `tek-radio`
 * sharing the same `name`. Typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), radio control.
 *
 * Usage:
 * ```html
 * <tek-radio name="group" checked></tek-radio>
 * <tek-radio name="group"></tek-radio>
 * ```
 *
 * @summary Radio control of the selector family; groups by `name`.
 *
 * @attr {boolean} checked - Whether the radio is selected.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 * @attr {string} name - Radio-group name; checking this radio unchecks others with the same name.
 *
 * @fires {CustomEvent} tek-change - Fired when selected, with `detail.checked`. Bubbles, composed.
 *
 * @csspart dot - The inner dot div.
 *
 * @cssprop --tek-color-selector-background-default - Control background.
 * @cssprop --tek-color-selector-background-checked - Dot color when checked.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-borders-radius-full - Corner radius (circle).
 */
class TekRadio extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
        this._click = () => {
            if (this.disabled || this.error)
                return;
            const name = this.getAttribute('name');
            if (name) {
                document.querySelectorAll(`tek-radio[name="${name}"]`).forEach(r => {
                    if (r !== this)
                        r.checked = false;
                });
            }
            this.checked = true;
            this.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: true }
            }));
        };
    }
    connectedCallback() {
        this.setAttribute('role', 'radio');
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
        this.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        });
        super.connectedCallback();
    }
    attributeChangedCallback(n, o, v) {
        super.attributeChangedCallback(n, o, v);
        if (n === 'checked')
            this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        this._shadow.innerHTML = `<style>${STYLES$a}</style><div class="dot" part="dot"></div>`;
    }
}
customElements.define('tek-radio', TekRadio);

const STYLES$9 = `
  :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:inline-flex; align-items:center; justify-content:flex-start; height:14px; width:28px; border-radius:var(--tek-borders-radius-full,9999px); padding:0; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
  :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); justify-content:flex-end; }
  :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
  :host([disabled]) { cursor:not-allowed; opacity:0.4; }
  .thumb { border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:14px; height:14px; background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); box-sizing:border-box; }
  :host([checked]) .thumb { background:var(--tek-color-selector-background-checked,#cccccc); border:none; }
  :host([error])   .thumb { background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-error,#e74848); }
  :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
`;
/**
 * 28×14 toggle switch (role="switch"). Toggles on click or Space/Enter;
 * typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), toggle control.
 *
 * Usage:
 * ```html
 * <tek-toggle checked></tek-toggle>
 * ```
 *
 * @summary Toggle-switch control of the selector family.
 *
 * @attr {boolean} checked - Whether the switch is on (thumb slides right).
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart thumb - The sliding thumb div.
 *
 * @cssprop --tek-color-selector-background-default - Track background.
 * @cssprop --tek-color-selector-background-unchecked - Thumb color when off.
 * @cssprop --tek-color-selector-background-checked - Thumb color when on.
 * @cssprop --tek-color-selector-border-unchecked - Track/thumb border when off.
 * @cssprop --tek-color-selector-border-checked - Track border when on. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Track/thumb border in error state.
 * @cssprop --tek-borders-radius-full - Track and thumb radius (pill/circle).
 */
class TekToggle extends TekBaseSelector {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.setAttribute('role', 'switch');
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-checked', String(this.checked));
        this.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                this._click();
            }
        });
        super.connectedCallback();
    }
    attributeChangedCallback(n, o, v) {
        super.attributeChangedCallback(n, o, v);
        if (n === 'checked')
            this.setAttribute('aria-checked', String(this.checked));
    }
    render() {
        this._shadow.innerHTML = `<style>${STYLES$9}</style><div class="thumb" part="thumb"></div>`;
    }
}
customElements.define('tek-toggle', TekToggle);

const STYLES$8 = `
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
class TekSelectorLabel extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() { return ['checked', 'error', 'disabled']; }
    get checked() { return this.hasAttribute('checked'); }
    set checked(v) { v ? this.setAttribute('checked', '') : this.removeAttribute('checked'); }
    get error() { return this.hasAttribute('error'); }
    set error(v) { v ? this.setAttribute('error', '') : this.removeAttribute('error'); }
    get disabled() { return this.hasAttribute('disabled'); }
    set disabled(v) { v ? this.setAttribute('disabled', '') : this.removeAttribute('disabled'); }
    connectedCallback() { this._render(); }
    attributeChangedCallback() { this._render(); }
    _render() {
        this._shadow.innerHTML = `<style>${STYLES$8}</style><div class="text" part="text"><slot></slot></div>`;
    }
}
customElements.define('tek-selector-label', TekSelectorLabel);

const STYLES$7 = `
  :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; user-select:none; }
  :host([type="toggle"]) { padding-top:1px; padding-bottom:1px; }
  .inner { display:flex; gap:var(--tek-spacing-s05,8px); align-items:center; min-height:1px; min-width:1px; padding:0; }
`;
/**
 * Composite selector row: a checkbox/radio/toggle control plus a state-synced
 * label. Two modes — self-contained (set `label`, the control is rendered in
 * shadow DOM) or slot-based (slot in your own control + `<tek-selector-label>`).
 * Styling comes from the composed child components.
 *
 * Figma: DS-v2 → Selector (node 7002:378).
 *
 * Usage — self-contained:
 * ```html
 * <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 * <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 * <tek-selector type="toggle" label="Live mode"></tek-selector>
 * ```
 *
 * Usage — slot-based:
 * ```html
 * <tek-selector>
 *   <tek-checkbox></tek-checkbox>
 *   <tek-selector-label>Enable feature</tek-selector-label>
 * </tek-selector>
 * ```
 *
 * @summary Checkbox/radio/toggle control paired with a state-synced label.
 *
 * @attr {boolean} checked - Checked state; forwarded to the inner control and label.
 * @attr {boolean} error - Error state; forwarded to the inner control and label.
 * @attr {boolean} disabled - Disabled state; forwarded to the inner control and label.
 * @attr {string} label - Self-contained mode: label text. When absent, the default slot is used instead.
 * @attr {("checkbox"|"radio"|"toggle")} [type="checkbox"] - Which control to render in self-contained mode.
 * @attr {string} name - Radio-group name, passed through to the inner `tek-radio`.
 *
 * @fires {CustomEvent} tek-change - Bubbles up from the inner control when toggled, with `detail.checked`.
 *
 * @slot - Slot-based mode: a selector control (`tek-checkbox`/`tek-radio`/`tek-toggle`) plus a `tek-selector-label`.
 *
 * @csspart inner - The row container div.
 *
 * @cssprop --tek-spacing-s05 - Gap between control and label.
 */
class TekSelector extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
        this._onClick = (e) => {
            const ctrl = this._getCtrl();
            if (!ctrl || ctrl.disabled || ctrl.error)
                return;
            // If click originated inside the control element, let the control handle it
            if (e.composedPath().some((el) => el === ctrl))
                return;
            ctrl.checked = !ctrl.checked;
            this._sync(ctrl.checked);
            ctrl.dispatchEvent(new CustomEvent('tek-change', {
                bubbles: true, composed: true, detail: { checked: ctrl.checked }
            }));
        };
    }
    static get observedAttributes() { return ['checked', 'error', 'disabled', 'label', 'type', 'name']; }
    get checked() { return this.hasAttribute('checked'); }
    set checked(v) { v ? this.setAttribute('checked', '') : this.removeAttribute('checked'); }
    get error() { return this.hasAttribute('error'); }
    get disabled() { return this.hasAttribute('disabled'); }
    connectedCallback() {
        this._render();
        this.setAttribute('role', 'group');
        this.setAttribute('aria-checked', String(this.checked));
        // tek-change from children (composed:true) bubbles up to here — sync host state
        this.addEventListener('tek-change', (e) => {
            const { checked } = e.detail;
            this._sync(checked);
        });
        this.addEventListener('click', this._onClick);
    }
    disconnectedCallback() { this.removeEventListener('click', this._onClick); }
    attributeChangedCallback(n, o, v) {
        if (o === v)
            return;
        // label/type/name changes require a full re-render
        if (n === 'label' || n === 'type' || n === 'name') {
            this._render();
        }
        else {
            this._syncChildren();
        }
    }
    _getCtrl() {
        // Check shadow DOM first (self-contained mode), then light DOM (slot mode)
        return (this._shadow.querySelector('tek-checkbox,tek-radio,tek-toggle') ||
            this.querySelector('tek-checkbox,tek-radio,tek-toggle'));
    }
    _getLbl() {
        return (this._shadow.querySelector('tek-selector-label') ||
            this.querySelector('tek-selector-label'));
    }
    _sync(checked) {
        const lbl = this._getLbl();
        if (lbl) {
            checked ? lbl.setAttribute('checked', '') : lbl.removeAttribute('checked');
        }
        checked ? this.setAttribute('checked', '') : this.removeAttribute('checked');
        this.setAttribute('aria-checked', String(checked));
    }
    _syncChildren() {
        const ctrl = this._getCtrl();
        const lbl = this._getLbl();
        ['checked', 'error', 'disabled'].forEach(attr => {
            const has = this.hasAttribute(attr);
            [ctrl, lbl].forEach(el => {
                if (!el)
                    return;
                has ? el.setAttribute(attr, '') : el.removeAttribute(attr);
            });
        });
    }
    _render() {
        const label = this.getAttribute('label');
        const type = this.getAttribute('type') || 'checkbox';
        const name = this.getAttribute('name') ? `name="${this.getAttribute('name')}"` : '';
        const checked = this.hasAttribute('checked') ? 'checked' : '';
        const error = this.hasAttribute('error') ? 'error' : '';
        const disabled = this.hasAttribute('disabled') ? 'disabled' : '';
        if (label !== null) {
            // Self-contained: render the control + label entirely in shadow DOM
            this._shadow.innerHTML = `<style>${STYLES$7}</style>
        <div class="inner" part="inner">
          <tek-${type} ${checked} ${error} ${disabled} ${name}></tek-${type}>
          <tek-selector-label ${checked} ${error}>${label}</tek-selector-label>
        </div>`;
        }
        else {
            // Slot mode: consumer slots in tek-checkbox/radio/toggle + tek-selector-label
            this._shadow.innerHTML = `<style>${STYLES$7}</style>
        <div class="inner" part="inner"><slot></slot></div>`;
            // Auto-detect toggle for correct top padding
            requestAnimationFrame(() => {
                if (this.querySelector('tek-toggle'))
                    this.setAttribute('type', 'toggle');
            });
        }
    }
}
customElements.define('tek-selector', TekSelector);

const STYLES$6 = `
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
/**
 * Text input field. Single height renders an `<input>`; double/triple render a
 * `<textarea>` (48px / 64px). The `state` attribute is auto-managed on
 * focus/blur (default → focus → filled) but can be set explicitly.
 *
 * Figma: DS-v2 → Input (node 7003:495). Geist 14px / lh 20px.
 *
 * Usage:
 * ```html
 * <tek-input placeholder="Email"></tek-input>
 * <tek-input type="password" placeholder="Password"></tek-input>
 * <tek-input height="triple" placeholder="Message"></tek-input>
 * <tek-input state="error" value="not-an-email"></tek-input>
 * ```
 *
 * @summary Text input with default/focus/filled/disabled/error states and three heights.
 *
 * @attr {("default"|"focus"|"filled"|"disabled"|"error")} [state="default"] - Visual state. Auto-managed on focus/blur; set explicitly for disabled/error.
 * @attr {("single"|"double"|"triple")} [height="single"] - Field height. Double and triple render a textarea.
 * @attr {string} placeholder - Placeholder text.
 * @attr {string} value - Field value. Also settable via the `value` property.
 * @attr {string} [type="text"] - Native input type (text, password, email, …). Single height only.
 *
 * @fires {CustomEvent} tek-input - Fired on every keystroke, with `detail.value`. Bubbles, composed.
 *
 * @cssprop --tek-color-input-background-default - Field background.
 * @cssprop --tek-color-input-border-default - Border, default state.
 * @cssprop --tek-color-input-border-focus - Border, focus state.
 * @cssprop --tek-color-input-border-filled - Border, filled state.
 * @cssprop --tek-color-input-border-disabled - Border, disabled state.
 * @cssprop --tek-color-input-border-error - Border, error state.
 * @cssprop --tek-color-input-text-default - Text/placeholder color, default state.
 * @cssprop --tek-color-input-text-focus - Text color, focus state.
 * @cssprop --tek-color-input-text-filled - Text color, filled state.
 * @cssprop --tek-color-input-text-disabled - Text color, disabled state.
 * @cssprop --tek-color-input-text-error - Text color, error state.
 * @cssprop --tek-borders-radius-03 - Corner radius.
 * @cssprop --tek-spacing-s02 - Right padding.
 * @cssprop --tek-spacing-s05 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Left padding.
 * @cssprop --tek-fonts-family-geist - Field font family.
 * @cssprop --tek-fonts-text-size-lg - Field font size.
 * @cssprop --tek-fonts-text-line-height-lg - Field line height.
 */
class TekInput extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() { return ['state', 'height', 'placeholder', 'value', 'type']; }
    get state() { return this.getAttribute('state') || 'default'; }
    get height() { return this.getAttribute('height') || 'single'; }
    get placeholder() { return this.getAttribute('placeholder') || ''; }
    get value() { return this.getAttribute('value') || ''; }
    set value(v) {
        this.setAttribute('value', v);
        const el = this._shadow.querySelector('input, textarea');
        if (el)
            el.value = v;
    }
    get type() { return this.getAttribute('type') || 'text'; }
    connectedCallback() { this._render(); }
    attributeChangedCallback(name) {
        // 'state' changes are handled entirely by CSS (:host([state=...]) selectors).
        // Re-rendering on state change destroys the focused <input> element, making
        // typing impossible. Only re-render for structural attribute changes.
        if (name !== 'state')
            this._render();
    }
    _esc(s) {
        return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }
    _render() {
        const isMulti = this.height === 'double' || this.height === 'triple';
        const rows = this.height === 'double' ? 2 : this.height === 'triple' ? 3 : 1;
        const isDisabled = this.state === 'disabled';
        const disAttr = isDisabled ? ' disabled' : '';
        const field = isMulti
            ? `<textarea rows="${rows}" placeholder="${this._esc(this.placeholder)}"${disAttr}></textarea>`
            : `<input type="${this._esc(this.type)}" placeholder="${this._esc(this.placeholder)}" value="${this._esc(this.value)}"${disAttr}>`;
        this._shadow.innerHTML = `<style>${STYLES$6}</style>${field}`;
        // Set textarea value via property (not interpolated into innerHTML) to prevent XSS
        if (isMulti) {
            const ta = this._shadow.querySelector('textarea');
            if (ta)
                ta.value = this.value;
        }
        if (isDisabled)
            this.setAttribute('aria-disabled', 'true');
        else
            this.removeAttribute('aria-disabled');
        const el = this._shadow.querySelector('input, textarea');
        el?.addEventListener('focus', () => {
            if (this.state === 'default')
                this.setAttribute('state', 'focus');
        });
        el?.addEventListener('blur', () => {
            const inp = el;
            if (inp.value)
                this.setAttribute('state', 'filled');
            else
                this.setAttribute('state', 'default');
        });
        el?.addEventListener('input', () => {
            this.dispatchEvent(new CustomEvent('tek-input', { bubbles: true, composed: true,
                detail: { value: el.value }
            }));
        });
    }
}
customElements.define('tek-input', TekInput);

const STYLES$5 = `
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--tek-borders-radius-full, 9999px);
    border: 1px solid var(--tek-color-button-border-default, #33baea);
    background: var(--tek-color-button-background-default, #1e1e1e);
    padding: var(--tek-spacing-s07, 12px) var(--tek-spacing-s11, 24px);
    cursor: pointer;
    outline: none;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
    box-sizing: border-box;
    width: 100%;
  }

  :host([variant="secondary"]) {
    padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s08, 14px);
  }

  .label {
    display: block;
    width: 100%;
    font-family: var(--tek-fonts-family-archivo, sans-serif);
    font-size: var(--tek-fonts-heading-size-xs, 16px);
    font-weight: 600;
    font-style: normal;
    font-variation-settings: 'wdth' 106;
    line-height: var(--tek-fonts-heading-line-height-xs, 24px);
    letter-spacing: 0.32px;
    color: var(--tek-color-button-text-default, #cccccc);
    text-align: center;
    white-space: nowrap;
    transition: color 0.15s;
  }

  :host([variant="secondary"]) .label {
    font-size: var(--tek-fonts-text-size-md, 13px);
    font-weight: 534;
    line-height: var(--tek-fonts-text-line-height-md, 16px);
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
/**
 * Pill-shaped action button.
 *
 * Figma: DS-v2 → Button (node 202:2605).
 * Primary: px-24 py-12, Archivo SemiBold 600 16px / lh 24px. Secondary: px-14 py-6, Archivo 13px / lh 16px.
 * Fills its container (`width: 100%`) — size it via a wrapper.
 *
 * Usage:
 * ```html
 * <tek-button>Sign In</tek-button>
 * <tek-button variant="secondary">Cancel</tek-button>
 * <tek-button inactive>Sign In</tek-button>
 * ```
 *
 * @summary Pill-shaped action button — primary/secondary variants, default/hover/inactive states.
 *
 * @attr {("primary"|"secondary")} [variant="primary"] - Visual variant: primary (large, 16px label) or secondary (compact, 13px label).
 * @attr {boolean} inactive - Greys the button out and blocks activation. Styled identically to disabled.
 * @attr {boolean} disabled - Greys the button out and blocks activation.
 *
 * @fires {CustomEvent} tek-click - Fired on click or Space/Enter, unless inactive/disabled. Bubbles, composed.
 *
 * @slot - Button label.
 *
 * @csspart label - The label span.
 *
 * @cssprop --tek-color-button-background-default - Background, default state.
 * @cssprop --tek-color-button-background-hover - Background on hover.
 * @cssprop --tek-color-button-background-inactive - Background when inactive/disabled.
 * @cssprop --tek-color-button-border-default - Border, default state.
 * @cssprop --tek-color-button-border-hover - Border on hover. Also the focus-ring color.
 * @cssprop --tek-color-button-border-inactive - Border when inactive/disabled.
 * @cssprop --tek-color-button-text-default - Label color, default state.
 * @cssprop --tek-color-button-text-hover - Label color on hover.
 * @cssprop --tek-color-button-text-inactive - Label color when inactive/disabled.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s07 - Primary vertical padding.
 * @cssprop --tek-spacing-s11 - Primary horizontal padding.
 * @cssprop --tek-spacing-s04 - Secondary vertical padding.
 * @cssprop --tek-spacing-s08 - Secondary horizontal padding.
 * @cssprop --tek-fonts-family-archivo - Label font family.
 * @cssprop --tek-fonts-heading-size-xs - Primary label font size.
 * @cssprop --tek-fonts-heading-line-height-xs - Primary label line height.
 * @cssprop --tek-fonts-text-size-md - Secondary label font size.
 * @cssprop --tek-fonts-text-line-height-md - Secondary label line height.
 */
class TekButton extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() { return ['variant', 'inactive', 'disabled']; }
    get variant() { return this.getAttribute('variant') || 'primary'; }
    get inactive() { return this.hasAttribute('inactive'); }
    get disabled() { return this.hasAttribute('disabled'); }
    connectedCallback() {
        this.setAttribute('role', 'button');
        this.setAttribute('tabindex', (this.inactive || this.disabled) ? '-1' : '0');
        if (this.inactive || this.disabled)
            this.setAttribute('aria-disabled', 'true');
        this.addEventListener('keydown', (e) => {
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
    attributeChangedCallback() {
        this._render();
        const isDisabled = this.inactive || this.disabled;
        this.setAttribute('tabindex', isDisabled ? '-1' : '0');
        if (isDisabled) {
            this.setAttribute('aria-disabled', 'true');
        }
        else {
            this.removeAttribute('aria-disabled');
        }
    }
    _render() {
        this._shadow.innerHTML = `
      <style>${STYLES$5}</style>
      <span class="label" part="label"><slot></slot></span>
    `;
    }
}
customElements.define('tek-button', TekButton);

const STYLES$4 = `
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s02, 2px);
    align-items: flex-start;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
  }

  .text-row {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 0;
    width: 100%;
    flex-shrink: 0;
  }

  .label-text {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-md, 13px);
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: var(--tek-fonts-text-line-height-md, 16px);
    min-height: 1px;
    min-width: 1px;
    color: var(--tek-color-input-label-default, #cccccc);
  }

  .optional {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-sm, 12px);
    font-weight: 400;
    color: var(--tek-color-input-helper-default, #7b7b7b);
    font-style: italic;
  }

  .char-count {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-xs, 10px);
    font-weight: 400;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-input-character-count-default, #cccccc);
    margin-left: auto;
  }

  .helper {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-xs, 10px);
    font-weight: 400;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-input-helper-default, #7b7b7b);
    flex-shrink: 0;
    width: 100%;
  }

  .helper--error {
    color: var(--tek-color-input-text-error, #e74848);
  }
`;
/**
 * Form-field label with optional marker, helper text, and inline character
 * count. Sits above a `tek-input`.
 *
 * Figma: DS-v2 → Label (node 780:10209). Geist Regular 13px / lh 16px.
 *
 * Usage:
 * ```html
 * <tek-label>Email</tek-label>
 * <tek-label optional>Email</tek-label>
 * <tek-label helper-text="Must be 8+ characters">Password</tek-label>
 * <tek-label helper-text="Too short" helper-state="error">Password</tek-label>
 * <tek-label char-count="10/52">Message</tek-label>
 * ```
 *
 * @summary Form-field label with optional/helper-text/char-count variants.
 *
 * @attr {boolean} optional - Appends an italic "(optional)" marker.
 * @attr {string} helper-text - Helper line rendered below the label.
 * @attr {string} char-count - Character count rendered right-aligned, e.g. "10/52".
 * @attr {("error")} helper-state - Set to "error" to color the helper text red.
 * @attr {string} link - Reserved for the Figma Link variant; not rendered yet.
 *
 * @slot - Label text.
 *
 * @csspart text - The label text container.
 * @csspart helper - The helper-text div (when helper-text is set).
 *
 * @cssprop --tek-spacing-s02 - Gap between label row and helper text.
 * @cssprop --tek-fonts-family-geist - Font family for all text.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 * @cssprop --tek-fonts-text-size-sm - "(optional)" marker font size.
 * @cssprop --tek-fonts-text-size-xs - Helper and char-count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Helper and char-count line height.
 * @cssprop --tek-color-input-label-default - Label text color.
 * @cssprop --tek-color-input-helper-default - Helper and "(optional)" color.
 * @cssprop --tek-color-input-character-count-default - Char-count color.
 * @cssprop --tek-color-input-text-error - Helper color when helper-state="error".
 */
class TekLabel extends HTMLElement {
    static get observedAttributes() {
        return ['optional', 'helper-text', 'char-count', 'link', 'helper-state'];
    }
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
        const optional = this.hasAttribute('optional');
        const helperText = this.getAttribute('helper-text');
        const charCount = this.getAttribute('char-count');
        this.shadow.innerHTML = `
      <style>${STYLES$4}</style>
      <div class="text-row">
        <div class="label-text" part="text"><slot></slot></div>
        ${optional ? `<span class="optional">(optional)</span>` : ''}
        ${charCount ? `<span class="char-count">${charCount}</span>` : ''}
      </div>
      ${helperText ? `<div class="helper${this.getAttribute('helper-state') === 'error' ? ' helper--error' : ''}" part="helper">${helperText}</div>` : ''}
    `;
    }
}
customElements.define('tek-label', TekLabel);

const STYLES$3 = `
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
/**
 * Small inline text link in Tek blue; underlines on hover.
 *
 * Figma: DS-v2 → TextLink (node 7011:150). Geist Regular 10px / lh 12px.
 *
 * Usage:
 * ```html
 * <tek-text-link href="/forgot">Forgot password?</tek-text-link>
 * ```
 *
 * @summary Small inline text link with default and hover states.
 *
 * @attr {string} [href="#"] - Link destination.
 * @attr {string} [target="_self"] - Native anchor target (e.g. "_blank").
 *
 * @slot - Link text.
 *
 * @csspart link - The anchor element.
 *
 * @cssprop --tek-color-text-link-default - Link color (also hover underline and focus outline).
 * @cssprop --tek-fonts-family-geist - Link font family.
 * @cssprop --tek-fonts-text-line-height-xs - Link line height.
 */
class TekTextLink extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() { return ['href', 'target']; }
    get href() { return this.getAttribute('href') || '#'; }
    get target() { return this.getAttribute('target') || '_self'; }
    connectedCallback() { this._render(); }
    attributeChangedCallback() { this._render(); }
    _render() {
        this._shadow.innerHTML = `
      <style>${STYLES$3}</style>
      <a href="${this.href}" target="${this.target}" part="link"><slot></slot></a>
    `;
    }
}
customElements.define('tek-text-link', TekTextLink);

const STYLES$2 = `
  :host {
    display: inline-block;
  }
  .count {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-xs, 10px);
    font-weight: 400;
    font-style: normal;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-input-character-count-default, #cccccc);
    white-space: nowrap;
  }
  :host([state="focus"])   .count { color: var(--tek-color-input-character-count-focus,   #ffffff); }
  :host([state="filled"])  .count { color: var(--tek-color-input-character-count-filled,  #afafaf); }
  :host([state="error"])   .count { color: var(--tek-color-input-character-count-error,   #e74848); }
  :host([state="warning"]) .count { color: var(--tek-color-input-character-count-warning, #e0b732); }
`;
/**
 * Character counter for text fields, rendered as `current/max` (or just `current` when no max).
 *
 * Figma: DS-v2 → CharacterCount (node 7011:143). Geist Regular 10px.
 *
 * Usage:
 * ```html
 * <tek-character-count current="10" max="52"></tek-character-count>
 * <tek-character-count current="50" max="52" state="warning"></tek-character-count>
 * <tek-character-count current="53" max="52" state="error"></tek-character-count>
 * ```
 *
 * @summary Character counter (current/max) with default/focus/filled/error/warning states.
 *
 * @attr {number} [current=0] - Characters typed so far.
 * @attr {number} [max=0] - Character limit. When 0 or absent, only `current` is shown.
 * @attr {("default"|"focus"|"filled"|"error"|"warning")} [state="default"] - Visual state; colors the count.
 *
 * @csspart count - The count span.
 *
 * @cssprop --tek-fonts-family-geist - Count font family.
 * @cssprop --tek-fonts-text-size-xs - Count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Count line height.
 * @cssprop --tek-color-input-character-count-default - Count color, default state.
 * @cssprop --tek-color-input-character-count-focus - Count color, focus state.
 * @cssprop --tek-color-input-character-count-filled - Count color, filled state.
 * @cssprop --tek-color-input-character-count-error - Count color, error state.
 * @cssprop --tek-color-input-character-count-warning - Count color, warning state.
 */
class TekCharacterCount extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    static get observedAttributes() { return ['current', 'max', 'state']; }
    get current() { return parseInt(this.getAttribute('current') || '0', 10); }
    get max() { return parseInt(this.getAttribute('max') || '0', 10); }
    get state() { return this.getAttribute('state') || 'default'; }
    connectedCallback() { this._render(); }
    attributeChangedCallback() { this._render(); }
    _render() {
        const text = this.max > 0 ? `${this.current}/${this.max}` : `${this.current}`;
        this._shadow.innerHTML = `
      <style>${STYLES$2}</style>
      <span class="count" part="count" aria-live="polite">${text}</span>
    `;
    }
}
customElements.define('tek-character-count', TekCharacterCount);

const STYLES$1 = `
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s08, 14px);
    background: var(--tek-color-modal-background-default, #181818);
    border: 0.25px solid var(--tek-color-modal-border-default, #7b7b7b);
    border-radius: var(--tek-borders-radius-05, 11px);
    padding: var(--tek-modal-padding, var(--tek-spacing-s13, 32px));
    width: 100%;
    max-width: 360px;
    box-sizing: border-box;
    overflow: clip;
    box-shadow: 0px 2px 6px 0px var(--tek-color-modal-shadow-default, rgba(0,0,0,0.2));
  }

  .header {
    font-family: var(--tek-fonts-family-archivo, sans-serif);
    font-size: var(--tek-modal-heading-size, var(--tek-fonts-heading-size-md, 24px));
    font-weight: 600;
    font-variation-settings: 'wdth' 106;
    line-height: var(--tek-modal-heading-line-height, var(--tek-fonts-heading-line-height-md, 32px));
    letter-spacing: 0;
    color: var(--tek-color-modal-text-default, #ffffff);
  }

  .input-blocks {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s06, 10px);
    width: 100%;
  }

  .action-blocks {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
/**
 * Modal card: header, form fields, and action buttons stacked in a bordered,
 * shadowed container. Max-width 360px, 32px padding, 11px radius. Composition
 * happens entirely through the three named slots.
 *
 * Figma: DS-v2 → Modal (node 7003:2158).
 *
 * Usage:
 * ```html
 * <tek-modal>
 *   <span slot="header">Sign In</span>
 *   <div slot="input-blocks">...</div>
 *   <div slot="action-blocks">
 *     <tek-button>Sign In</tek-button>
 *   </div>
 * </tek-modal>
 * ```
 *
 * @summary Modal card with header, input-blocks, and action-blocks slots.
 *
 * @slot header - Modal title (Archivo SemiBold 24px).
 * @slot input-blocks - Form fields, stacked with a 10px gap.
 * @slot action-blocks - Buttons, stacked full-width.
 *
 * @csspart header - The header container.
 * @csspart input-blocks - The form-fields container.
 * @csspart action-blocks - The buttons container.
 *
 * @cssprop --tek-color-modal-background-default - Card background.
 * @cssprop --tek-color-modal-border-default - Card border color.
 * @cssprop --tek-color-modal-text-default - Header text color.
 * @cssprop --tek-color-modal-shadow-default - Drop-shadow color.
 * @cssprop --tek-modal-padding - Card padding override (defaults to --tek-spacing-s13).
 * @cssprop --tek-modal-heading-size - Header font-size override (defaults to --tek-fonts-heading-size-md).
 * @cssprop --tek-modal-heading-line-height - Header line-height override (defaults to --tek-fonts-heading-line-height-md).
 * @cssprop --tek-spacing-s08 - Gap between the three sections.
 * @cssprop --tek-spacing-s06 - Gap between fields inside input-blocks.
 * @cssprop --tek-spacing-s13 - Default card padding.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 * @cssprop --tek-fonts-family-archivo - Header font family.
 * @cssprop --tek-fonts-heading-size-md - Default header font size.
 * @cssprop --tek-fonts-heading-line-height-md - Default header line height.
 */
class TekModal extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this._render(); }
    _render() {
        this._shadow.innerHTML = `
      <style>${STYLES$1}</style>
      <div class="header" part="header">
        <slot name="header"></slot>
      </div>
      <div class="input-blocks" part="input-blocks">
        <slot name="input-blocks"></slot>
      </div>
      <div class="action-blocks" part="action-blocks">
        <slot name="action-blocks"></slot>
      </div>
    `;
    }
}
customElements.define('tek-modal', TekModal);

const STYLES = `
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    padding: 12px 16px;
    box-sizing: border-box;
    background: var(--tek-color-footer-background-default, #252525);
  }

  .left {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .right {
    flex: 1 0 0;
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    line-height: 12px;
    color: var(--tek-color-footer-text-default, #cccccc);
    text-align: right;
    min-height: 1px;
    min-width: 1px;
  }
`;
/**
 * Page footer bar: left-aligned utility slot (e.g. theme toggle) and
 * right-aligned text. 36px tall, full width.
 *
 * Figma: DS-v2 → Footer (node 7003:2168). Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 * <tek-footer>
 *   <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *   ©2026 Tektronix. All Rights Reserved.
 * </tek-footer>
 * ```
 *
 * @summary Page footer bar with a left utility slot and right-aligned text.
 *
 * @slot - Right-aligned content (e.g. copyright).
 * @slot left - Left-aligned content (e.g. theme toggle).
 *
 * @csspart left - The left container.
 * @csspart right - The right container.
 *
 * @cssprop --tek-color-footer-background-default - Bar background.
 * @cssprop --tek-color-footer-text-default - Right-side text color.
 * @cssprop --tek-fonts-family-geist - Text font family.
 */
class TekFooter extends HTMLElement {
    constructor() {
        super(...arguments);
        this._shadow = this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this._render(); }
    _render() {
        this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="left" part="left"><slot name="left"></slot></div>
      <div class="right" part="right"><slot></slot></div>
    `;
    }
}
customElements.define('tek-footer', TekFooter);

export { TekBaseSelector, TekButton, TekCharacterCount, TekCheckbox, TekFooter, TekInput, TekLabel, TekModal, TekRadio, TekSelector, TekSelectorLabel, TekTextLink, TekToggle };
//# sourceMappingURL=tek-ui.js.map
