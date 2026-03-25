/**
 * tek-footer
 * Figma: DS-v2 → Footer (node 7003:2168)
 * Dimensions: h 36px, px 16px, py 12px
 * Font: SF Compact Regular 12px, lh 12px, text-right
 *
 * Tokens:
 *   --tek-color-footer-background-default
 *   --tek-color-footer-text-default
 *
 * Usage:
 *   <tek-footer>©2026 Tektronix. All Rights Reserved.</tek-footer>
 */
const STYLES = `
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: 36px;
    padding: 12px 16px;
    box-sizing: border-box;
    background: var(--tek-color-footer-background-default, #252525);
  }

  .content {
    display: flex;
    flex: 1 0 0;
    align-items: center;
    justify-content: center;
    min-height: 1px;
    min-width: 1px;
  }

  .text {
    flex: 1 0 0;
    font-family: 'SF Compact', system-ui, sans-serif;
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

export class TekFooter extends HTMLElement {
  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() { this._render(); }

  private _render() {
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="content" part="content">
        <div class="text" part="text"><slot></slot></div>
      </div>
    `;
  }
}
customElements.define('tek-footer', TekFooter);
