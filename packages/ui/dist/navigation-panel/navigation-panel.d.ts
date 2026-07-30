import { LitElement } from 'lit';
/**
 * App sidebar CHROME only — a composition of three slot regions: `brand`,
 * `nav` (a `tek-tabs orientation="vertical"`), and `foot`, pushed to the
 * bottom with a top divider and hidden when empty. Tab behavior lives in the
 * slotted tek-tabs; this panel owns no routing and no tab logic, per the
 * spec's composition rule. Widths per variant: full 184 / text-only 96 /
 * icon-only 56 — no spacing tokens exist at these values (PROPOSED in the
 * wave-2 audit). Variant switching at breakpoints is the app-shell's job
 * (container queries), per spec.
 *
 * Figma: DS-v2 → NavigationPanel (node 8411:503).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §6.
 *
 * Usage:
 * ```html
 * <tek-navigation-panel>
 *   <span slot="brand">Tek Bench</span>
 *   <tek-tabs slot="nav" orientation="vertical">…</tek-tabs>
 *   <tek-selector slot="foot" type="toggle" label="Dark mode"></tek-selector>
 * </tek-navigation-panel>
 * ```
 *
 * @summary App sidebar chrome with brand, nav, and foot slot regions.
 *
 * @attr {("full"|"text-only"|"icon-only")} [variant="full"] - Width preset: 184 / 96 / 56px.
 *
 * @slot brand - Brand row at the top (Archivo heading-2xs type).
 * @slot nav - Navigation content, typically a vertical `tek-tabs`.
 * @slot foot - Bottom-pinned content behind a top divider; hidden when empty.
 *
 * @csspart brand - The brand row container.
 * @csspart nav - The nav container.
 * @csspart foot - The foot container.
 *
 * @cssprop --tek-navigation-panel-width - Overrides the per-variant width.
 * @cssprop --tek-color-navigation-background-default - Panel background (aliases the raised surface).
 * @cssprop --tek-color-navigation-border-default - Right border color.
 * @cssprop --tek-color-navigation-divider-default - Foot top divider color.
 * @cssprop --tek-color-navigation-text-default - Brand text color.
 * @cssprop --tek-spacing-s03 - Brand row gap.
 * @cssprop --tek-spacing-s05 - Host vertical padding.
 * @cssprop --tek-spacing-s06 - Foot gap.
 * @cssprop --tek-spacing-s07 - Brand and foot padding.
 * @cssprop --tek-borders-width-01 - Border and divider width.
 * @cssprop --tek-fonts-family-archivo - Brand font family.
 * @cssprop --tek-fonts-heading-size-2xs - Brand type size (with matching line-height token).
 */
export declare class TekNavigationPanel extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'full' | 'text-only' | 'icon-only';
    connectedCallback(): void;
    private onFootSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
