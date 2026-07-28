/**
 * tek-badge
 *
 * Figma: DS-v2 → v2.02 → Badge (node 8400:377)
 * Small status label. Types map to color/badge/<type>/background+text.
 * Type style: text/regular/xs (Geist).
 *
 * Usage: <tek-badge type="success">Passing</tek-badge>
 *
 * @summary Small pill-shaped status label with neutral/blue/success/warning/error types.
 *
 * @attr {("neutral"|"blue"|"success"|"warning"|"error")} [type="neutral"] - Visual type; unrecognized values fall back to neutral.
 *
 * @slot - Badge label.
 *
 * @cssprop --tek-spacing-s02 - Vertical padding.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-xs - Label font size.
 * @cssprop --tek-fonts-text-line-height-xs - Label line height.
 * @cssprop --tek-color-badge-neutral-background - Background, neutral type.
 * @cssprop --tek-color-badge-neutral-text - Label color, neutral type.
 * @cssprop --tek-color-badge-blue-background - Background, blue type.
 * @cssprop --tek-color-badge-blue-text - Label color, blue type.
 * @cssprop --tek-color-badge-success-background - Background, success type.
 * @cssprop --tek-color-badge-success-text - Label color, success type.
 * @cssprop --tek-color-badge-warning-background - Background, warning type.
 * @cssprop --tek-color-badge-warning-text - Label color, warning type.
 * @cssprop --tek-color-badge-error-background - Background, error type.
 * @cssprop --tek-color-badge-error-text - Label color, error type.
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export const BADGE_TYPES = ['neutral', 'blue', 'success', 'warning', 'error'] as const;
export type BadgeType = (typeof BADGE_TYPES)[number];

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
