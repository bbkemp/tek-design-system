/**
 * tek-group-box
 *
 * Figma: DS-v2 → v2.02 → GroupBox (node 8408:456)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1
 *
 * Titled bordered container for grouping form controls. The title sits
 * IN-FLOW inside the box as the first row (Bryan, 2026-07-22 — matches the
 * Tek Express reference; the border-straddling fieldset legend was
 * rejected). Always titled, per spec. Title type is the Archivo heading
 * style (text/heading/regular/xs) — confirmed by Bryan.
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
