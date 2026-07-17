/**
 * tek-button
 * Figma: DS-v2 → Button (node 202:2605)
 * Variants: Type=Primary|Secondary × State=Default|Hover|Inactive
 *
 * Tokens:
 *   --tek-color-button-background-default|hover|inactive
 *   --tek-color-button-border-default|hover|inactive
 *   --tek-color-button-text-default|hover|inactive
 *
 * Primary:   px-24 py-12, Archivo SemiBold 600 16px, lh 24px, radius full, border 1px
 * Secondary: px-14 py-6,  Archivo Regular 13px, ls 1, lh 15, radius full, no border width token
 *
 * Usage:
 *   <tek-button>Sign In</tek-button>
 *   <tek-button variant="secondary">Cancel</tek-button>
 *   <tek-button inactive>Sign In</tek-button>
 */
import { LitElement } from 'lit';
export declare class TekButton extends LitElement {
    static styles: import("lit").CSSResult;
    variant: string;
    inactive: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeydown;
    private _onClick;
    private _emit;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
