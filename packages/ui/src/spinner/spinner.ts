/**
 * tek-spinner
 *
 * Figma: DS-v2 → v2.02 → Spinner (node 8401:391)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §7
 *
 * 270-degree arc rotating 360deg/1.2s. Frozen when `paused` or when the user
 * sets prefers-reduced-motion (spec requirement). Tones map to
 * color/spinner/*; strokes are borders/width/04 (sm+md — spec's 2.5px md
 * snapped to the 2px token) and width/05 (lg).
 *
 * Usage: <tek-spinner size="lg" tone="success"></tek-spinner>
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TekSpinner extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      width: var(--tek-spacing-s11, 24px);
      height: var(--tek-spacing-s11, 24px);
      color: var(--tek-color-spinner-default, #33baea);
    }
    :host([size='sm']) { width: var(--tek-spacing-s09, 16px); height: var(--tek-spacing-s09, 16px); }
    :host([size='lg']) { width: var(--tek-spacing-s15, 40px); height: var(--tek-spacing-s15, 40px); }
    :host([tone='success']) { color: var(--tek-color-spinner-success, #42b54c); }
    :host([tone='warning']) { color: var(--tek-color-spinner-warning, #e0b732); }
    :host([tone='error'])   { color: var(--tek-color-spinner-error, #e74848); }

    svg {
      width: 100%;
      height: 100%;
      display: block;
      animation: spin 1.2s linear infinite;
    }
    :host([paused]) svg { animation-play-state: paused; }
    @media (prefers-reduced-motion: reduce) {
      svg { animation: none; }
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    circle {
      fill: none;
      stroke: currentColor;
      stroke-width: var(--tek-borders-width-04, 2px);
      stroke-linecap: butt;
      /* 270deg arc: 3/4 of circumference (2*pi*10 = 62.83) */
      stroke-dasharray: 47.12 62.83;
    }
    :host([size='lg']) circle { stroke-width: var(--tek-borders-width-05, 3px); }
  `;

  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ reflect: true }) tone: 'default' | 'success' | 'warning' | 'error' = 'default';
  @property({ type: Boolean, reflect: true }) paused = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'status');
    if (!this.hasAttribute('aria-label')) this.setAttribute('aria-label', 'Loading');
  }

  render() {
    return html`
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="10" transform="rotate(-90 12 12)"></circle>
      </svg>
    `;
  }
}

customElements.define('tek-spinner', TekSpinner);
