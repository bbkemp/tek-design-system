/**
 * Pill-shaped action button.
 *
 * Figma: DS-v2 → Button (node 202:2605).
 * Primary: px-24 py-12, Archivo SemiBold 600 16px / lh 24px. Secondary: px-14 py-6, Archivo 13px / lh 16px.
 * Fills its container (`width: 100%`) — size it via a wrapper.
 *
 * Usage:
 * ```html
 * <tek-button>Sign In</tek-button>
 * <tek-button variant="secondary">Cancel</tek-button>
 * <tek-button inactive>Sign In</tek-button>
 * ```
 *
 * @summary Pill-shaped action button — primary/secondary variants, default/hover/inactive states.
 *
 * @attr {("primary"|"secondary")} [variant="primary"] - Visual variant: primary (large, 16px label) or secondary (compact, 13px label).
 * @attr {boolean} inactive - Greys the button out and blocks activation. Styled identically to disabled.
 * @attr {boolean} disabled - Greys the button out and blocks activation.
 *
 * @fires {CustomEvent} tek-click - Fired on click or Space/Enter, unless inactive/disabled. Bubbles, composed.
 *
 * @slot - Button label.
 *
 * @csspart label - The label span.
 *
 * @cssprop --tek-color-button-background-default - Background, default state.
 * @cssprop --tek-color-button-background-hover - Background on hover.
 * @cssprop --tek-color-button-background-inactive - Background when inactive/disabled.
 * @cssprop --tek-color-button-border-default - Border, default state.
 * @cssprop --tek-color-button-border-hover - Border on hover. Also the focus-ring color.
 * @cssprop --tek-color-button-border-inactive - Border when inactive/disabled.
 * @cssprop --tek-color-button-text-default - Label color, default state.
 * @cssprop --tek-color-button-text-hover - Label color on hover.
 * @cssprop --tek-color-button-text-inactive - Label color when inactive/disabled.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s07 - Primary vertical padding.
 * @cssprop --tek-spacing-s11 - Primary horizontal padding.
 * @cssprop --tek-spacing-s04 - Secondary vertical padding.
 * @cssprop --tek-spacing-s08 - Secondary horizontal padding.
 * @cssprop --tek-fonts-family-archivo - Label font family.
 * @cssprop --tek-fonts-heading-size-xs - Primary label font size.
 * @cssprop --tek-fonts-heading-line-height-xs - Primary label line height.
 * @cssprop --tek-fonts-text-size-md - Secondary label font size.
 * @cssprop --tek-fonts-text-line-height-md - Secondary label line height.
 */
export declare class TekButton extends HTMLElement {
    static get observedAttributes(): string[];
    get variant(): string;
    get inactive(): boolean;
    get disabled(): boolean;
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private _render;
}
