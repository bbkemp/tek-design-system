import { LitElement } from 'lit';
/**
 * One tab item of a `<tek-tabs>` group. Its visual style (pill | nav) is
 * assigned by the parent tek-tabs via the `data-style` attribute — never set
 * it by hand. Type follows the Geist styles only: pill = text/regular/sm,
 * nav = text/regular/md.
 *
 * Figma: DS-v2 → v2.02 → Tab (node 8393:377).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3.
 *
 * Usage:
 * ```html
 * <tek-tab value="config" active>Configuration</tek-tab>
 * ```
 *
 * @summary Single tab item, styled as pill or nav by its parent tek-tabs.
 *
 * @attr {string} value - Value reported by tek-tabs when this tab is selected.
 * @attr {boolean} active - Whether this tab is the selected one.
 * @attr {boolean} disabled - Blocks interaction and dims the tab.
 *
 * @slot - Tab label.
 *
 * @cssprop --tek-color-tabs-tab-* - Pill colors: text-inactive/-active, background-hover/-active.
 * @cssprop --tek-color-tabs-nav-* - Nav colors: text-inactive/-active, background-hover/-active, accent-default (active left bar).
 * @cssprop --tek-colors-brand-tek-blue - Focus-visible outline color.
 * @cssprop --tek-spacing-s05 - Pill vertical padding (s06 for nav; s07 horizontal for both).
 * @cssprop --tek-borders-radius-full - Pill corner radius.
 * @cssprop --tek-borders-width-05 - Nav left accent bar width.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-sm - Pill type size (md for nav, with matching line-height tokens).
 */
export declare class TekTab extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    active: boolean;
    disabled: boolean;
    connectedCallback(): void;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
