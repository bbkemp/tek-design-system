import { css, html, nothing } from 'lit';
import { TekBaseSelector } from '../base-selector.js';

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
export class TekCheckbox extends TekBaseSelector {
  static styles = css`
    :host { display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; flex-shrink:0; cursor:pointer; outline:none; }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .box { width:16px; height:16px; border-radius:var(--tek-borders-radius-02,3px); background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:flex; align-items:center; justify-content:center; transition:border-color 0.1s; }
    :host([checked]) .box { border-color:var(--tek-color-selector-border-checked,#979797); }
    :host([error])   .box { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host(:focus-visible) .box { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'checkbox');
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

  render() {
    return html`<div class="box" part="box">${this.checked
      ? html`<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 4L4 7.5L10 1" stroke="var(--tek-color-icons-default,#ffffff)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>`
      : nothing}</div>`;
  }
}
customElements.define('tek-checkbox', TekCheckbox);
