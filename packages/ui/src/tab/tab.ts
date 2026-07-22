/**
 * tek-tab
 *
 * Figma: DS-v2 → v2.02 → Tab (node 8393:377)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3
 *
 * One tab item. Its visual style (pill | nav) is assigned by the parent
 * tek-tabs via the data-style attribute — never set it by hand.
 *
 * Tokens:
 *   --tek-color-tabs-tab-text-inactive|active · background-active|hover (pill)
 *   --tek-color-tabs-nav-text-inactive|active · background-active|hover · accent-default (nav)
 *   --tek-spacing-s05..s07 · --tek-borders-radius-full · --tek-borders-width-05
 *   --tek-fonts-family-geist · text-size-sm (pill) · text-size-lg (nav)
 *
 * Type rule: components carry Geist type styles only — pill = text/regular/sm,
 * nav = text/regular/lg. Font tokens are referenced via the styles; if no
 * style covers a case, raise it — never bind raw font values.
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TekTab extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
      white-space: nowrap;
      outline: none;
    }

    :host(:focus-visible) {
      outline: 2px solid var(--tek-colors-brand-tek-blue, #33baea);
      outline-offset: 1px;
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* ---- pill (horizontal sub-tabs) ---- */
    :host([data-style='pill']) {
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s07, 12px);
      border-radius: var(--tek-borders-radius-full, 9999px);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-tabs-tab-text-inactive, #979797);
    }
    :host([data-style='pill']:hover:not([active])) {
      background: var(--tek-color-tabs-tab-background-hover, rgba(51, 186, 234, 0.08));
    }
    :host([data-style='pill'][active]) {
      background: var(--tek-color-tabs-tab-background-active, #33baea);
      color: var(--tek-color-tabs-tab-text-active, #1e1e1e);
    }

    /* ---- nav (vertical app navigation) ----
       Figma Tab Style=Nav: Archivo SemiBold 14/22, +1% tracking; the active
       accent is a flush, full-height bar on the tab's left edge (Bryan's
       2026-07-22 call — the inset text-height bar was rejected). */
    :host([data-style='nav']) {
      padding: var(--tek-spacing-s06, 10px) var(--tek-spacing-s07, 12px);
      border-left: var(--tek-borders-width-05, 3px) solid transparent;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
      color: var(--tek-color-tabs-nav-text-inactive, #979797);
    }
    :host([data-style='nav']:hover:not([active])) {
      background: var(--tek-color-tabs-nav-background-hover, rgba(30, 30, 30, 0.5));
    }
    :host([data-style='nav'][active]) {
      border-left-color: var(--tek-color-tabs-nav-accent-default, #33baea);
      background: var(--tek-color-tabs-nav-background-active, rgba(51, 186, 234, 0.12));
      color: var(--tek-color-tabs-nav-text-active, #ffffff);
    }
  `;

  @property() value = '';
  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
  }

  willUpdate(): void {
    this.setAttribute('aria-selected', String(this.active));
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-tab', TekTab);
