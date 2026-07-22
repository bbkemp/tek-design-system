/**
 * tek-navigation-panel
 *
 * Figma: DS-v2 → v2.02 → NavigationPanel (node 8411:503)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §6
 *
 * App sidebar CHROME only — a composition of three slot regions:
 *   slot="brand" · slot="nav" (a tek-tabs orientation="vertical") · slot="foot"
 * Tab behavior lives in the slotted tek-tabs; this panel owns no routing and
 * no tab logic, per the spec's composition rule. The foot is pushed to the
 * bottom (margin-top auto) and carries a top divider.
 *
 * Widths per variant: full 184 / text-only 96 / icon-only 56 — no spacing
 * tokens exist at these values (PROPOSED in the wave-2 audit); overridable
 * via --tek-navigation-panel-width. Variant switching at breakpoints is the
 * app-shell's job (container queries), per spec.
 *
 * Tokens: color/navigation/* (bg aliases the raised surface) ·
 * spacing s03/s05/s06/s07 · borders/width/01
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
