/**
 * tek-navigation-panel
 *
 * Figma: DS-v2 → v2.02 → NavigationPanel (node 8411:503)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §6
 *
 * App sidebar CHROME only — a composition of three slot regions:
 *   slot="brand" · slot="nav" (a tek-tabs orientation="vertical") · slot="foot"
 * Tab behavior lives in the slotted tek-tabs; this panel owns no routing and
 * no tab logic, per the spec's composition rule. The foot is pushed to the
 * bottom (margin-top auto) and carries a top divider.
 *
 * Widths per variant: full 184 / text-only 96 / icon-only 56 — no spacing
 * tokens exist at these values (PROPOSED in the wave-2 audit); overridable
 * via --tek-navigation-panel-width. Variant switching at breakpoints is the
 * app-shell's job (container queries), per spec.
 *
 * Tokens: color/navigation/* (bg aliases the raised surface) ·
 * spacing s03/s05/s06/s07 · borders/width/01
 */
import { LitElement } from 'lit';
export declare class TekNavigationPanel extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'full' | 'text-only' | 'icon-only';
    connectedCallback(): void;
    private onFootSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
