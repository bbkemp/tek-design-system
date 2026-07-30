import { LitElement } from 'lit';
export declare const BADGE_TYPES: readonly ["neutral", "blue", "success", "warning", "error"];
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
export declare class TekBadge extends LitElement {
    static styles: import("lit").CSSResult;
    type: BadgeType;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
