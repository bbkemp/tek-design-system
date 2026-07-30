import { LitElement } from 'lit';
/**
 * Page frame primitive (ADR-0002: layout primitives — always start with
 * layout). Encodes the responsive `.wrap` contract from the sign-in reference
 * pages as container queries — the code analog of the Figma Breakpoint
 * variants (Mobile / SM / XL): mobile pads s17 / s13 / s11 (top / sides /
 * bottom) top-aligned, ≥ 640px widens side padding to s19, ≥ 1280px pads s19
 * all round and vertically centers content; section rhythm gap is s17
 * throughout. Layout-only: the canvas background stays on the page/body theme
 * layer — the host is kept transparent so page-level backdrops show through.
 *
 * Figma: DS-v2 → v2.02 → Page (node 8378:350).
 *
 * Usage:
 * ```html
 * <tek-page>
 *   <header>…</header>
 *   <tek-modal>…</tek-modal>
 * </tek-page>
 * ```
 *
 * @summary Responsive page frame primitive with breakpoint-driven padding and rhythm.
 *
 * @slot - Page content, laid out inside the responsive wrap.
 * @slot footer - Rendered after the wrap (e.g. tek-footer).
 *
 * @csspart wrap - The responsive content container.
 *
 * @cssprop --tek-spacing-s11 - Mobile/SM bottom padding.
 * @cssprop --tek-spacing-s13 - Mobile side padding.
 * @cssprop --tek-spacing-s17 - Section rhythm gap and top padding.
 * @cssprop --tek-spacing-s19 - Side padding ≥ 640px; all-round padding ≥ 1280px.
 */
export declare class TekPage extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
