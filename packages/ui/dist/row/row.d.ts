/**
 * tek-row
 *
 * Figma: DS-v2 → v2.02 → Row (node 8377:373)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Horizontal layout primitive. `gap` accepts spacing token steps ONLY
 * (never raw px) — the same steps as the Figma Gap variant axis.
 *
 * Tokens:
 *   --tek-spacing-s02 | s03 | s04 | s05 | s06 | s07 | s08 | s09 | s11
 *
 * Usage:
 *   <tek-row gap="s05">
 *     <tek-stack gap="s04">…</tek-stack>
 *     <tek-stack gap="s04">…</tek-stack>
 *   </tek-row>
 *   <tek-row gap="s02" justify="center">…</tek-row>
 *   <tek-row justify="between" align="center">…</tek-row>
 */
import { LitElement } from 'lit';
export declare const ROW_GAP_STEPS: readonly ["s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s11"];
export type RowGapStep = (typeof ROW_GAP_STEPS)[number];
export declare class TekRow extends LitElement {
    static styles: import("lit").CSSResult;
    gap: RowGapStep;
    align: 'start' | 'center' | 'end' | 'stretch';
    justify: 'start' | 'center' | 'end' | 'between';
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
