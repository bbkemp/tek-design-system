import { LitElement } from 'lit';
export declare const STACK_GAP_STEPS: readonly ["s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s11"];
export type StackGapStep = (typeof STACK_GAP_STEPS)[number];
/**
 * Vertical layout primitive (ADR-0002: layout primitives — always start with
 * layout). `gap` accepts spacing token steps ONLY (never raw px) — the same
 * steps as the Figma Gap variant axis; an unknown step warns and falls back
 * to s05.
 *
 * Figma: DS-v2 → v2.02 → Stack (node 8376:373).
 *
 * Usage:
 * ```html
 * <tek-stack gap="s04">
 *   <tek-label>Email</tek-label>
 *   <tek-input></tek-input>
 * </tek-stack>
 * ```
 *
 * @summary Vertical layout primitive with token-step gap.
 *
 * @attr {'s02'|'s03'|'s04'|'s05'|'s06'|'s07'|'s08'|'s09'|'s11'} gap - Spacing token step between children (default s05).
 * @attr {'start'|'center'|'end'|'stretch'} align - Cross-axis alignment (default stretch).
 *
 * @slot - Stacked children.
 *
 * @cssprop --tek-spacing-s02 - Through --tek-spacing-s09, plus --tek-spacing-s11: gap value for the matching `gap` step.
 */
export declare class TekStack extends LitElement {
    static styles: import("lit").CSSResult;
    gap: StackGapStep;
    align: 'start' | 'center' | 'end' | 'stretch';
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
