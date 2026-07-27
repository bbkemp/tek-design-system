import { css, html } from 'lit';
import { TekBaseSelector } from '../base-selector.js';

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
export class TekRadio extends TekBaseSelector {
  static styles = css`
    :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); border-radius:var(--tek-borders-radius-full,9999px); width:16px; height:16px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
    :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); }
    :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .dot { background:var(--tek-color-selector-background-checked,#cccccc); border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:10px; height:10px; display:none; }
    :host([checked]) .dot { display:block; }
    :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'radio');
    this.addEventListener('keydown', this._onKeydown);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeydown);
  }

  private _onKeydown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this._click(); }
  };

  updated() {
    this.setAttribute('tabindex', this.disabled ? '-1' : '0');
    this.setAttribute('aria-checked', String(this.checked));
  }

  protected override _click = () => {
    if (this.disabled || this.error) return;
    const name = this.getAttribute('name');
    if (name) {
      document.querySelectorAll<TekRadio>(`tek-radio[name="${name}"]`).forEach(r => {
        if (r !== this) r.checked = false;
      });
    }
    this.checked = true;
    this.dispatchEvent(new CustomEvent('tek-change', {
      bubbles: true, composed: true, detail: { checked: true }
    }));
  };

  render() {
    return html`<div class="dot" part="dot"></div>`;
  }
}
customElements.define('tek-radio', TekRadio);
