import { LitElement } from 'lit';
export declare const ROW_GAP_STEPS: readonly ["s02", "s03", "s04", "s05", "s06", "s07", "s08", "s09", "s11"];
export type RowGapStep = (typeof ROW_GAP_STEPS)[number];
/**
 * Horizontal layout primitive (ADR-0002: layout primitives — always start
 * with layout). `gap` accepts spacing token steps ONLY (never raw px) — the
 * same steps as the Figma Gap variant axis; an unknown step warns and falls
 * back to s05.
 *
 * Figma: DS-v2 → v2.02 → Row (node 8377:373).
 *
 * Usage:
 * ```html
 * <tek-row gap="s05" justify="between" align="center">
 *   <tek-stack gap="s04">…</tek-stack>
 *   <tek-stack gap="s04">…</tek-stack>
 * </tek-row>
 * ```
 *
 * @summary Horizontal layout primitive with token-step gap and alignment.
 *
 * @attr {'s02'|'s03'|'s04'|'s05'|'s06'|'s07'|'s08'|'s09'|'s11'} gap - Spacing token step between children (default s05).
 * @attr {'start'|'center'|'end'|'stretch'} align - Cross-axis alignment (default stretch).
 * @attr {'start'|'center'|'end'|'between'} justify - Main-axis distribution (default start).
 *
 * @slot - Row children.
 *
 * @cssprop --tek-spacing-s02 - Through --tek-spacing-s09, plus --tek-spacing-s11: gap value for the matching `gap` step.
 */
export declare class TekRow extends LitElement {
    static styles: import("lit").CSSResult;
    gap: RowGapStep;
    align: 'start' | 'center' | 'end' | 'stretch';
    justify: 'start' | 'center' | 'end' | 'between';
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
