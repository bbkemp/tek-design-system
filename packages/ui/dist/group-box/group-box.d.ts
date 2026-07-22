/**
 * tek-group-box
 *
 * Figma: DS-v2 → v2.02 → GroupBox (node 8408:456)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1
 *
 * Titled bordered container for grouping form controls — native
 * fieldset/legend, so the legend sits on the border exactly like the Figma
 * component (and the WPF GroupBox the corpus screens show). Always titled,
 * per spec. Legend type is text/heading/regular/xs per spec §1 — flagged in
 * the wave-2 audit against the Geist-only component type rule.
 *
 * Tokens: color/groupbox/* (bg aliases color/canvas/background/raised) ·
 * spacing s03/s06/s09 · borders/width/01 · borders/radius/05 · heading xs
 *
 * Usage:
 *   <tek-group-box label="Execution Options" >
 *     <tek-selector type="checkbox" label="Enable Logging"></tek-selector>
 *   </tek-group-box>
 */
import { LitElement } from 'lit';
export declare class TekGroupBox extends LitElement {
    static styles: import("lit").CSSResult;
    /** Legend text — always shown; the spec forbids untitled group boxes. */
    label: string;
    variant: 'default' | 'error';
    disabled: boolean;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
