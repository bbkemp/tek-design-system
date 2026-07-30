import { LitElement } from 'lit';
export declare const GRID_GAP_STEPS: readonly ["s05", "s09", "s11"];
export type GridGapStep = (typeof GRID_GAP_STEPS)[number];
export declare const GRID_COLUMNS: readonly ["2", "3", "4"];
export type GridColumns = (typeof GRID_COLUMNS)[number];
/**
 * Column-grid layout primitive (ADR-0002: layout primitives — always start
 * with layout). Equal-width columns; `columns` and `gap` mirror the Figma
 * variant axes, and `gap` accepts spacing token steps ONLY (never raw px) —
 * unknown values warn and fall back to the defaults.
 *
 * Figma: DS-v2 → v2.02 → Grid (node 8377:446).
 *
 * Usage:
 * ```html
 * <tek-grid columns="3" gap="s09">
 *   <div>…</div><div>…</div><div>…</div>
 * </tek-grid>
 * ```
 *
 * @summary Column-grid layout primitive with token-step gap.
 *
 * @attr {'s05'|'s09'|'s11'} gap - Spacing token step between cells (default s09).
 * @attr {'2'|'3'|'4'} columns - Number of equal-width columns (default 3).
 *
 * @slot - Grid cells.
 *
 * @cssprop --tek-spacing-s05 - Gap for gap="s05"; --tek-spacing-s09 and --tek-spacing-s11 likewise.
 */
export declare class TekGrid extends LitElement {
    static styles: import("lit").CSSResult;
    gap: GridGapStep;
    columns: GridColumns;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
