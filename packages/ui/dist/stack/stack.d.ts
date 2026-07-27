/**
 * tek-stack
 *
 * Figma: DS-v2 → v2.02 → Stack (node 8376:373)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Vertical layout primitive. `gap` accepts spacing token steps ONLY
 * (never raw px) — the same steps as the Figma Gap variant axis.
 *
 * Tokens:
 *   --tek-spacing-s02 | s03 | s04 | s05 | s06 | s07 | s08 | s09 | s11
 *
 * Usage:
 *   <tek-stack gap="s04">
 *     <tek-label>Email</tek-label>
 *     <tek-input></tek-input>
 *   </tek-stack>
 *   <tek-stack gap="s05" align="center">…</tek-stack>
 */
import { LitElement } from 'lit';
export declare const STACK_GAP_STEPS: readonly ["s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s11"];
export type StackGapStep = (typeof STACK_GAP_STEPS)[number];
export declare class TekStack extends LitElement {
    static styles: import("lit").CSSResult;
    gap: StackGapStep;
    align: 'start' | 'center' | 'end' | 'stretch';
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
