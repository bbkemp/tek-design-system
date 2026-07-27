import { css, html } from 'lit';
import { TekBaseSelector } from '../base-selector.js';

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
export class TekToggle extends TekBaseSelector {
  static styles = css`
    :host { background:var(--tek-color-selector-background-default,#252525); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); display:inline-flex; align-items:center; justify-content:flex-start; height:14px; width:28px; border-radius:var(--tek-borders-radius-full,9999px); padding:0; flex-shrink:0; cursor:pointer; outline:none; box-sizing:border-box; transition:border-color 0.1s; }
    :host([checked])  { border-color:var(--tek-color-selector-border-checked,#979797); justify-content:flex-end; }
    :host([error])    { border-color:var(--tek-color-selector-border-error,#e74848); }
    :host([disabled]) { cursor:not-allowed; opacity:0.4; }
    .thumb { border-radius:var(--tek-borders-radius-full,9999px); flex-shrink:0; width:14px; height:14px; background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-unchecked,#7b7b7b); box-sizing:border-box; }
    :host([checked]) .thumb { background:var(--tek-color-selector-background-checked,#cccccc); border:none; }
    :host([error])   .thumb { background:var(--tek-color-selector-background-unchecked,#454545); border:0.5px solid var(--tek-color-selector-border-error,#e74848); }
    :host(:focus-visible) { box-shadow:0 0 0 2px var(--tek-color-selector-border-checked,#979797); }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'switch');
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
    return html`<div class="thumb" part="thumb"></div>`;
  }
}
customElements.define('tek-toggle', TekToggle);
