import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export const BADGE_TYPES = ['neutral', 'blue', 'success', 'warning', 'error'] as const;
export type BadgeType = (typeof BADGE_TYPES)[number];

/**
 * Small pill-shaped status label. The `type` attribute picks one of five
 * background/text color pairs; unknown values fall back to neutral with a
 * console warning.
 *
 * Figma: DS-v2 → Badge (node 8400:377). Geist Regular 10px.
 *
 * Usage:
 * ```html
 * <tek-badge type="success">Passing</tek-badge>
 * ```
 *
 * @summary Pill-shaped status badge — neutral/blue/success/warning/error types.
 *
 * @attr {("neutral"|"blue"|"success"|"warning"|"error")} [type="neutral"] - Color pair. Unknown values fall back to neutral.
 *
 * @slot - Badge text.
 *
 * @cssprop --tek-color-badge-neutral-background - Background, neutral type. Same pattern per type: `--tek-color-badge-<type>-background` for blue, success, warning, error.
 * @cssprop --tek-color-badge-neutral-text - Text color, neutral type. Same pattern per type: `--tek-color-badge-<type>-text`.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s02 - Vertical padding.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-fonts-family-geist - Text font family.
 * @cssprop --tek-fonts-text-size-xs - Font size.
 * @cssprop --tek-fonts-text-line-height-xs - Line height.
 */
export class TekBadge extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      padding: var(--tek-spacing-s02, 2px) var(--tek-spacing-s05, 8px);
      border-radius: var(--tek-borders-radius-full, 9999px);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      white-space: nowrap;
      background: var(--tek-color-badge-neutral-background, #333333);
      color: var(--tek-color-badge-neutral-text, #cccccc);
    }
    :host([type='blue'])    { background: var(--tek-color-badge-blue-background, #33baea);    color: var(--tek-color-badge-blue-text, #1e1e1e); }
    :host([type='success']) { background: var(--tek-color-badge-success-background, #42b54c); color: var(--tek-color-badge-success-text, #1e1e1e); }
    :host([type='warning']) { background: var(--tek-color-badge-warning-background, #e0b732); color: var(--tek-color-badge-warning-text, #1e1e1e); }
    :host([type='error'])   { background: var(--tek-color-badge-error-background, #e74848);   color: var(--tek-color-badge-error-text, #ffffff); }
  `;

  @property({ reflect: true }) type: BadgeType = 'neutral';

  willUpdate(): void {
    if (this.type && !(BADGE_TYPES as readonly string[]).includes(this.type)) {
      console.warn(`<tek-badge> type="${this.type}" is not one of ${BADGE_TYPES.join(', ')}; falling back to neutral.`);
      this.type = 'neutral';
    }
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-badge', TekBadge);
