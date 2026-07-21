/**
 * Page footer bar: left-aligned utility slot (e.g. theme toggle) and
 * right-aligned text. 36px tall, full width.
 *
 * Figma: DS-v2 → Footer (node 7003:2168). Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 * <tek-footer>
 *   <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *   ©2026 Tektronix. All Rights Reserved.
 * </tek-footer>
 * ```
 *
 * @summary Page footer bar with a left utility slot and right-aligned text.
 *
 * @slot - Right-aligned content (e.g. copyright).
 * @slot left - Left-aligned content (e.g. theme toggle).
 *
 * @csspart left - The left container.
 * @csspart right - The right container.
 *
 * @cssprop --tek-color-footer-background-default - Bar background.
 * @cssprop --tek-color-footer-text-default - Right-side text color.
 * @cssprop --tek-fonts-family-geist - Text font family.
 */
export declare class TekFooter extends HTMLElement {
    private _shadow;
    connectedCallback(): void;
    private _render;
}
