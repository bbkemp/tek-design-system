/**
 * tek-progress
 *
 * Figma: DS-v2 → v2.02 → Progress (node 8413:560)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §5
 *
 * Determinate / indeterminate progress bar with label + meta slots.
 * Indeterminate stripe is CSS-keyframes only (no JS animation) and freezes
 * at 50% offset under prefers-reduced-motion, both per spec. `paused`
 * freezes the stripe. Emits tek-complete when value reaches max (spec's
 * `progress-complete`, renamed to the DS event convention — see audit).
 *
 * Tokens: color/progress/* · borders/radius/02 · borders/width/01 ·
 * text/regular/sm (label) · text/mono/xs (meta)
 *
 * @summary Determinate/indeterminate progress bar with label and meta slots.
 *
 * @attr {("determinate"|"indeterminate")} [variant="determinate"] - Progress mode; indeterminate shows a sliding stripe.
 * @attr {number} [value=0] - Current progress value (determinate mode).
 * @attr {number} [max=100] - Maximum progress value (determinate mode).
 * @attr {("sm"|"md"|"lg")} [size="md"] - Track height.
 * @attr {("default"|"success"|"warning"|"error")} [tone="default"] - Fill color tone.
 * @attr {boolean} paused - Freezes the indeterminate stripe animation.
 *
 * @fires {CustomEvent<{value: number}>} tek-complete - Fired when a determinate bar's value reaches max. Bubbles, composed.
 *
 * @slot label - Label text above the track.
 * @slot meta - Meta text at the end of the meta row (percentage is auto-rendered at the start).
 *
 * @csspart label - The label container.
 * @csspart track - The track background.
 * @csspart fill - The fill bar.
 * @csspart meta - The meta row.
 *
 * @cssprop --tek-color-progress-label-default - Label text color.
 * @cssprop --tek-color-progress-track-background - Track background.
 * @cssprop --tek-color-progress-track-border - Track border.
 * @cssprop --tek-color-progress-fill-default - Fill color, default tone.
 * @cssprop --tek-color-progress-fill-success - Fill color, success tone.
 * @cssprop --tek-color-progress-fill-warning - Fill color, warning tone.
 * @cssprop --tek-color-progress-fill-error - Fill color, error tone.
 * @cssprop --tek-color-progress-meta-default - Meta row text color.
 * @cssprop --tek-spacing-s03 - Row gaps.
 * @cssprop --tek-borders-radius-02 - Track corner radius.
 * @cssprop --tek-borders-width-01 - Track border width.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-sm - Label font size.
 * @cssprop --tek-fonts-text-line-height-sm - Label line height.
 * @cssprop --tek-fonts-family-mono - Meta row font family.
 * @cssprop --tek-fonts-text-size-xs - Meta row font size.
 * @cssprop --tek-fonts-text-line-height-xs - Meta row line height.
 */
import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export class TekProgress extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s03, 4px);
      width: 100%;
    }

    .label {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-progress-label-default, #ffffff);
    }

    .track {
      position: relative;
      height: 8px;
      background: var(--tek-color-progress-track-background, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-progress-track-border, #7b7b7b);
      border-radius: var(--tek-borders-radius-02, 3px);
      overflow: hidden;
      box-sizing: border-box;
    }
    :host([size='sm']) .track { height: 4px; }
    :host([size='lg']) .track { height: 12px; }

    .fill {
      height: 100%;
      background: var(--tek-color-progress-fill-default, #33baea);
      transition: width 200ms ease;
    }
    :host([tone='success']) .fill { background: var(--tek-color-progress-fill-success, #42b54c); }
    :host([tone='warning']) .fill { background: var(--tek-color-progress-fill-warning, #e0b732); }
    :host([tone='error'])   .fill { background: var(--tek-color-progress-fill-error,   #e74848); }

    :host([variant='indeterminate']) .fill {
      position: absolute;
      width: 40%;
      animation: slide 1.4s ease-in-out infinite;
    }
    :host([paused]) .fill { animation-play-state: paused; }
    @media (prefers-reduced-motion: reduce) {
      :host([variant='indeterminate']) .fill { animation: none; left: 30%; }
    }
    @keyframes slide {
      from { left: -40%; }
      to   { left: 100%; }
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      gap: var(--tek-spacing-s03, 4px);
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-progress-meta-default, #979797);
    }
  `;

  @property({ reflect: true }) variant: 'determinate' | 'indeterminate' = 'determinate';
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 100;
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';
  @property({ reflect: true }) tone: 'default' | 'success' | 'warning' | 'error' = 'default';
  @property({ type: Boolean, reflect: true }) paused = false;

  private get pct(): number {
    return Math.min(100, Math.max(0, (this.value / (this.max || 100)) * 100));
  }

  willUpdate(): void {
    this.setAttribute('role', 'progressbar');
    if (this.variant === 'indeterminate') {
      this.removeAttribute('aria-valuenow');
      this.setAttribute('aria-busy', 'true');
    } else {
      this.setAttribute('aria-valuemin', '0');
      this.setAttribute('aria-valuemax', String(this.max));
      this.setAttribute('aria-valuenow', String(this.value));
      this.removeAttribute('aria-busy');
    }
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has('value') && this.variant === 'determinate' && this.value >= this.max) {
      this.dispatchEvent(new CustomEvent('tek-complete', {
        detail: { value: this.value }, bubbles: true, composed: true
      }));
    }
  }

  render() {
    const indet = this.variant === 'indeterminate';
    return html`
      <div class="label" part="label"><slot name="label"></slot></div>
      <div class="track" part="track">
        <div class="fill" part="fill" style=${indet ? nothing : `width:${this.pct}%`}></div>
      </div>
      <div class="meta-row" part="meta">
        <span>${indet ? '' : `${Math.round(this.pct)}%`}</span>
        <span><slot name="meta"></slot></span>
      </div>
    `;
  }
}

customElements.define('tek-progress', TekProgress);
