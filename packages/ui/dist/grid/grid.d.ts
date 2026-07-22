/**
 * tek-grid
 *
 * Figma: DS-v2 → v2.02 → Grid (node 8377:446)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Column-grid layout primitive. `columns` and `gap` mirror the Figma
 * variant axes; `gap` accepts spacing token steps ONLY (never raw px).
 *
 * Tokens:
 *   --tek-spacing-s05 | s09 | s11
 *
 * Usage:
 *   <tek-grid columns="3" gap="s09">
 *     <div>…</div><div>…</div><div>…</div>
 *   </tek-grid>
 */
import { LitElement } from 'lit';
export declare const GRID_GAP_STEPS: readonly ["s05", "s09", "s11"];
export type GridGapStep = (typeof GRID_GAP_STEPS)[number];
export declare const GRID_COLUMNS: readonly ["2", "3", "4"];
export type GridColumns = (typeof GRID_COLUMNS)[number];
export declare class TekGrid extends LitElement {
    static styles: import("lit").CSSResult;
    gap: GridGapStep;
    columns: GridColumns;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
