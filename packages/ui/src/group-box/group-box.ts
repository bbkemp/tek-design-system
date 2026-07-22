/**
 * tek-group-box
 *
 * Figma: DS-v2 → v2.02 → GroupBox (node 8408:456)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1
 *
 * Titled bordered container for grouping form controls. The title sits
 * IN-FLOW inside the box as the first row (Bryan, 2026-07-22 — matches the
 * Tek Express reference; the border-straddling fieldset legend was
 * rejected). Always titled, per spec. Title type is the Archivo heading
 * style (text/heading/regular/xs) — confirmed by Bryan.
 *
 * Tokens: color/groupbox/* (bg aliases color/canvas/background/raised) ·
 * spacing s03/s06/s09 · borders/width/01 · borders/radius/05 · heading xs
 *
 * Usage:
 *   <tek-group-box label="Execution Options" >
 *     <tek-selector type="checkbox" label="Enable Logging"></tek-selector>
 *   </tek-group-box>
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TekGroupBox extends LitElement {
  static styles = css`
    :host { display: block; }

    .box {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      min-width: 0;
      padding: var(--tek-spacing-s09, 16px);
      background: var(--tek-color-groupbox-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-groupbox-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      box-sizing: border-box;
    }

    .legend {
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
      letter-spacing: -0.02em;
      color: var(--tek-color-groupbox-legend-default, #ffffff);
    }

    :host([variant='error']) .box { border-color: var(--tek-color-groupbox-border-error, #e74848); }
    :host([variant='error']) .legend { color: var(--tek-color-groupbox-border-error, #e74848); }

    :host([disabled]) { opacity: 0.5; pointer-events: none; }
  `;

  /** Legend text — always shown; the spec forbids untitled group boxes. */
  @property() label = '';
  @property({ reflect: true }) variant: 'default' | 'error' = 'default';
  @property({ type: Boolean, reflect: true }) disabled = false;

  willUpdate(): void {
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
  }

  render() {
    return html`
      <div class="box" part="box" role="group" aria-label=${this.label}>
        <div class="legend" part="legend">${this.label}</div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('tek-group-box', TekGroupBox);
