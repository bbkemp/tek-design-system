/**
 * tek-group-box
 *
 * Figma: DS-v2 → v2.02 → GroupBox (node 8408:456)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1
 *
 * Titled bordered container for grouping form controls — native
 * fieldset/legend, so the legend sits on the border exactly like the Figma
 * component (and the WPF GroupBox the corpus screens show). Always titled,
 * per spec. Legend type is text/heading/regular/xs per spec §1 — flagged in
 * the wave-2 audit against the Geist-only component type rule.
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

    fieldset {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s06, 10px);
      margin: 0;
      min-width: 0;
      padding: var(--tek-spacing-s09, 16px);
      background: var(--tek-color-groupbox-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-groupbox-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
    }

    legend {
      padding: 0 var(--tek-spacing-s03, 4px);
      font-family: var(--tek-fonts-family-archivo, system-ui, sans-serif);
      font-weight: 600;
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
      letter-spacing: -0.02em;
      color: var(--tek-color-groupbox-legend-default, #ffffff);
    }

    :host([variant='error']) fieldset { border-color: var(--tek-color-groupbox-border-error, #e74848); }
    :host([variant='error']) legend { color: var(--tek-color-groupbox-border-error, #e74848); }

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
      <fieldset part="box" ?disabled=${this.disabled}>
        <legend part="legend">${this.label}</legend>
        <slot></slot>
      </fieldset>
    `;
  }
}

customElements.define('tek-group-box', TekGroupBox);
