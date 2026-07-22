/**
 * tek-footer
 * Figma: DS-v2 → Footer (node 7003:2168)
 * Dimensions: h 36px, px 16px, py 12px
 * Font: Geist Regular — var(--tek-fonts-family-geist)
 *
 * Tokens:
 *   --tek-color-footer-background-default
 *   --tek-color-footer-text-default
 *
 * Slots:
 *   left      — left-aligned content (e.g. theme toggle)
 *   (default) — right-aligned content (e.g. copyright)
 *
 * Usage:
 *   <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 *   <tek-footer>
 *     <div slot="left"><tek-toggle id="theme-toggle"></tek-toggle></div>
 *     ©2026 Tektronix. All Rights Reserved.
 *   </tek-footer>
 */
import { css, html, LitElement } from 'lit';

export class TekFooter extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      width: 100%;
      height: 36px;
      padding: 12px 16px;
      box-sizing: border-box;
      background: var(--tek-color-footer-background-default, #252525);
    }

    .left {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .right {
      flex: 1 0 0;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: 12px;
      font-weight: 400;
      font-style: normal;
      line-height: 12px;
      color: var(--tek-color-footer-text-default, #cccccc);
      text-align: right;
      min-height: 1px;
      min-width: 1px;
    }
  `;

  render() {
    return html`
      <div class="left" part="left"><slot name="left"></slot></div>
      <div class="right" part="right"><slot></slot></div>
    `;
  }
}
customElements.define('tek-footer', TekFooter);
