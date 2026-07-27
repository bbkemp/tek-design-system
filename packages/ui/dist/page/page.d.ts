/**
 * tek-page
 *
 * Figma: DS-v2 → v2.02 → Page (node 8378:350)
 * ADR-0002: layout primitives — always start with layout.
 *
 * Page frame primitive. Encodes the responsive `.wrap` contract from the
 * sign-in reference pages as container queries — the code analog of the
 * Figma Breakpoint variants (Mobile / SM / XL):
 *
 *   Mobile          padding s17 / s13 / s11 (top / sides / bottom), top-aligned
 *   ≥ 640px  (c04)  side padding s19
 *   ≥ 1280px (c07)  padding s19 all round, content vertically centered
 *   All             section rhythm gap s17
 *
 * Layout-only: the canvas background stays on the page/body theme layer
 * (the Figma component shows color/canvas/background/default as context;
 * code keeps the host transparent so page-level backdrops show through).
 *
 * Tokens:
 *   --tek-spacing-s11, --tek-spacing-s13, --tek-spacing-s17, --tek-spacing-s19
 *
 * Usage:
 *   <tek-page>
 *     <header>…</header>
 *     <tek-modal>…</tek-modal>
 *   </tek-page>
 */
import { LitElement } from 'lit';
export declare class TekPage extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
