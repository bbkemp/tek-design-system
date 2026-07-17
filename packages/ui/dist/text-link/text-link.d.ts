/**
 * tek-text-link
 * Figma: DS-v2 → TextLink (node 7011:150)
 * States: Default | Hover
 * Font: Geist Regular 10px, lh 12px (text/size/xs)
 *
 * Tokens:
 *   --tek-color-text-link-default
 *
 * Usage:
 *   <tek-text-link href="/forgot">Forgot password?</tek-text-link>
 */
import { LitElement } from 'lit';
export declare class TekTextLink extends LitElement {
    static styles: import("lit").CSSResult;
    href: string;
    target: string;
    render(): import("lit-html").TemplateResult<1>;
}
