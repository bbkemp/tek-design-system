/**
 * tek-footer
 * Figma: DS-v2 → Footer (node 7003:2168)
 * Dimensions: h 36px, px 16px, py 12px
 * Font: Geist Regular — var(--tek-fonts-family-geist)
 *
 * Tokens:
 *   --tek-color-footer-background-default
 *   --tek-color-footer-text-default
 *
 * Slots:
 *   left      — left-aligned content (e.g. theme toggle)
 *   (default) — right-aligned content (e.g. copyright)
 *
 * Usage:
 *   <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 *   <tek-footer>
 *     <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *     ©2026 Tektronix. All Rights Reserved.
 *   </tek-footer>
 */
import { LitElement } from 'lit';
export declare class TekFooter extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
