import { LitElement } from 'lit';
/**
 * Small inline text link in Tek blue; underlines on hover.
 *
 * Figma: DS-v2 → TextLink (node 7011:150). Geist Regular 10px / lh 12px.
 *
 * Usage:
 * ```html
 * <tek-text-link href="/forgot">Forgot password?</tek-text-link>
 * ```
 *
 * @summary Small inline text link with default and hover states.
 *
 * @attr {string} [href="#"] - Link destination.
 * @attr {string} [target="_self"] - Native anchor target (e.g. "_blank").
 *
 * @slot - Link text.
 *
 * @csspart link - The anchor element.
 *
 * @cssprop --tek-color-text-link-default - Link color (also hover underline and focus outline).
 * @cssprop --tek-fonts-family-geist - Link font family.
 * @cssprop --tek-fonts-text-line-height-xs - Link line height.
 */
export declare class TekTextLink extends LitElement {
    static styles: import("lit").CSSResult;
    href: string;
    target: string;
    render(): import("lit-html").TemplateResult<1>;
}
