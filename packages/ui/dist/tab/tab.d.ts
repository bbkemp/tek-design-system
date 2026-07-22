/**
 * tek-tab
 *
 * Figma: DS-v2 → v2.02 → Tab (node 8393:377)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3
 *
 * One tab item. Its visual style (pill | nav) is assigned by the parent
 * tek-tabs via the data-style attribute — never set it by hand.
 *
 * Tokens:
 *   --tek-color-tabs-tab-text-inactive|active · background-active|hover (pill)
 *   --tek-color-tabs-nav-text-inactive|active · background-active|hover · accent-default (nav)
 *   --tek-spacing-s05..s07 · --tek-borders-radius-full · --tek-borders-width-05
 *   --tek-fonts-family-geist|archivo · text-size-sm · heading-size-2xs
 */
import { LitElement } from 'lit';
export declare class TekTab extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    active: boolean;
    disabled: boolean;
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
