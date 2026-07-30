import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * App sidebar CHROME only — a composition of three slot regions: `brand`,
 * `nav` (a `tek-tabs orientation="vertical"`), and `foot`, pushed to the
 * bottom with a top divider and hidden when empty. Tab behavior lives in the
 * slotted tek-tabs; this panel owns no routing and no tab logic, per the
 * spec's composition rule. Widths per variant: full 184 / text-only 96 /
 * icon-only 56 — no spacing tokens exist at these values (PROPOSED in the
 * wave-2 audit). Variant switching at breakpoints is the app-shell's job
 * (container queries), per spec.
 *
 * Figma: DS-v2 → NavigationPanel (node 8411:503).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §6.
 *
 * Usage:
 * ```html
 * <tek-navigation-panel>
 *   <span slot="brand">Tek Bench</span>
 *   <tek-tabs slot="nav" orientation="vertical">…</tek-tabs>
 *   <tek-selector slot="foot" type="toggle" label="Dark mode"></tek-selector>
 * </tek-navigation-panel>
 * ```
 *
 * @summary App sidebar chrome with brand, nav, and foot slot regions.
 *
 * @attr {("full"|"text-only"|"icon-only")} [variant="full"] - Width preset: 184 / 96 / 56px.
 *
 * @slot brand - Brand row at the top (Archivo heading-2xs type).
 * @slot nav - Navigation content, typically a vertical `tek-tabs`.
 * @slot foot - Bottom-pinned content behind a top divider; hidden when empty.
 *
 * @csspart brand - The brand row container.
 * @csspart nav - The nav container.
 * @csspart foot - The foot container.
 *
 * @cssprop --tek-navigation-panel-width - Overrides the per-variant width.
 * @cssprop --tek-color-navigation-background-default - Panel background (aliases the raised surface).
 * @cssprop --tek-color-navigation-border-default - Right border color.
 * @cssprop --tek-color-navigation-divider-default - Foot top divider color.
 * @cssprop --tek-color-navigation-text-default - Brand text color.
 * @cssprop --tek-spacing-s03 - Brand row gap.
 * @cssprop --tek-spacing-s05 - Host vertical padding.
 * @cssprop --tek-spacing-s06 - Foot gap.
 * @cssprop --tek-spacing-s07 - Brand and foot padding.
 * @cssprop --tek-borders-width-01 - Border and divider width.
 * @cssprop --tek-fonts-family-archivo - Brand font family.
 * @cssprop --tek-fonts-heading-size-2xs - Brand type size (with matching line-height token).
 */
export class TekNavigationPanel extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: var(--tek-navigation-panel-width, 184px);
      height: 100%;
      box-sizing: border-box;
      padding: var(--tek-spacing-s05, 8px) 0;
      background: var(--tek-color-navigation-background-default, #252525);
      border-right: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-navigation-border-default, #7b7b7b);
    }
    :host([variant='text-only']) { width: var(--tek-navigation-panel-width, 96px); }
    :host([variant='icon-only']) { width: var(--tek-navigation-panel-width, 56px); }

    .brand {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      padding: var(--tek-spacing-s07, 12px);
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-2xs, 14px);
      line-height: var(--tek-fonts-heading-line-height-2xs, 22px);
      color: var(--tek-color-navigation-text-default, #ffffff);
    }
    :host([variant='icon-only']) .brand { justify-content: center; }

    .nav { display: block; }

    .foot {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      padding: var(--tek-spacing-s07, 12px);
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-navigation-divider-default, #7b7b7b);
    }
    .foot:not(.has-content) { display: none; }
  `;

  @property({ reflect: true }) variant: 'full' | 'text-only' | 'icon-only' = 'full';

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'navigation');
  }

  private onFootSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    slot.parentElement?.classList.toggle('has-content', slot.assignedNodes().length > 0);
  }

  render() {
    return html`
      <div class="brand" part="brand"><slot name="brand"></slot></div>
      <div class="nav" part="nav"><slot name="nav"></slot></div>
      <div class="foot" part="foot"><slot name="foot" @slotchange=${this.onFootSlotChange}></slot></div>
    `;
  }
}

customElements.define('tek-navigation-panel', TekNavigationPanel);
