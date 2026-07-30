import { css, html, LitElement } from 'lit';

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
export class TekPage extends LitElement {
  static styles = css`
    :host {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      width: 100%;
      box-sizing: border-box;
      container-type: inline-size;
      container-name: page;
    }

    .wrap {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--tek-spacing-s17, 48px);
      padding: var(--tek-spacing-s17, 48px) var(--tek-spacing-s13, 32px) var(--tek-spacing-s11, 24px);
      width: 100%;
      min-height: 1px;
      box-sizing: border-box;
    }

    @container page (min-width: 640px) {
      .wrap {
        padding: var(--tek-spacing-s17, 48px) var(--tek-spacing-s19, 64px) var(--tek-spacing-s11, 24px);
      }
    }

    @container page (min-width: 1280px) {
      .wrap {
        position: relative;
        justify-content: center;
        padding: var(--tek-spacing-s19, 64px);
      }
    }
  `;

  render() {
    return html`<div class="wrap" part="wrap"><slot></slot></div><slot name="footer"></slot>`;
  }
}

customElements.define('tek-page', TekPage);
