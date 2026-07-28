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
 *
 * @summary Page frame primitive with responsive container-query padding, mirroring the Figma Breakpoint variants.
 *
 * @slot - Page content, centered within the responsive `.wrap`.
 * @slot footer - Content rendered outside `.wrap`, below the main content.
 *
 * @csspart wrap - The responsive content wrapper.
 *
 * @cssprop --tek-spacing-s11 - Mobile bottom padding.
 * @cssprop --tek-spacing-s13 - Mobile side padding.
 * @cssprop --tek-spacing-s17 - Mobile top padding; section rhythm gap at all breakpoints.
 * @cssprop --tek-spacing-s19 - Side/all-round padding at the ≥640px and ≥1280px container breakpoints.
 */
import { css, html, LitElement } from 'lit';

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
