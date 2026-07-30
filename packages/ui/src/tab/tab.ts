import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * One tab item of a `<tek-tabs>` group. Its visual style (pill | nav) is
 * assigned by the parent tek-tabs via the `data-style` attribute — never set
 * it by hand. Type follows the Geist styles only: pill = text/regular/sm,
 * nav = text/regular/md.
 *
 * Figma: DS-v2 → v2.02 → Tab (node 8393:377).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3.
 *
 * Usage:
 * ```html
 * <tek-tab value="config" active>Configuration</tek-tab>
 * ```
 *
 * @summary Single tab item, styled as pill or nav by its parent tek-tabs.
 *
 * @attr {string} value - Value reported by tek-tabs when this tab is selected.
 * @attr {boolean} active - Whether this tab is the selected one.
 * @attr {boolean} disabled - Blocks interaction and dims the tab.
 *
 * @slot - Tab label.
 *
 * @cssprop --tek-color-tabs-tab-* - Pill colors: text-inactive/-active, background-hover/-active.
 * @cssprop --tek-color-tabs-nav-* - Nav colors: text-inactive/-active, background-hover/-active, accent-default (active left bar).
 * @cssprop --tek-colors-brand-tek-blue - Focus-visible outline color.
 * @cssprop --tek-spacing-s05 - Pill vertical padding (s06 for nav; s07 horizontal for both).
 * @cssprop --tek-borders-radius-full - Pill corner radius.
 * @cssprop --tek-borders-width-05 - Nav left accent bar width.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-sm - Pill type size (md for nav, with matching line-height tokens).
 */
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
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
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
