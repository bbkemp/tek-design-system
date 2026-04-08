/**
 * tek-modal
 * Figma: DS-v2 → Modal (node 7003:2158)
 * Dimensions: max-width 320px, padding 32px, gap 14px, radius 11px, border 0.25px
 * Shadow: 0px 2px 6px 0px rgba(0,0,0,0.2)
 *
 * Tokens:
 *   --tek-color-modal-background-default
 *   --tek-color-modal-border-default
 *   --tek-color-modal-text-default
 *
 * Slots:
 *   (default) header  — modal title
 *   input-blocks      — form fields
 *   action-blocks     — buttons
 *
 * Usage:
 *   <tek-modal>
 *     <span slot="header">Sign In</span>
 *     <div slot="input-blocks">...</div>
 *     <div slot="action-blocks">
 *       <tek-button>Sign In</tek-button>
 *     </div>
 *   </tek-modal>
 */
const STYLES = `
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s08, 14px);
    background: var(--tek-color-modal-background-default, #181818);
    border: 0.25px solid var(--tek-color-modal-border-default, #7b7b7b);
    border-radius: var(--tek-borders-radius-05, 11px);
    padding: var(--tek-spacing-s13, 32px);
    width: 100%;
    max-width: 320px;
    box-sizing: border-box;
    overflow: clip;
    box-shadow: 0px 2px 6px 0px var(--tek-color-ui-shadow, rgba(0,0,0,0.2));
  }

  .header {
    font-family: var(--tek-fonts-family-archivo, sans-serif);
    font-size: var(--tek-fonts-heading-size-lg, 32px);
    font-weight: 600;
    font-variation-settings: 'wdth' 106;
    line-height: var(--tek-fonts-heading-line-height-lg, 40px);
    letter-spacing: 0;
    color: var(--tek-color-modal-text-default, #ffffff);
  }

  .input-blocks {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s06, 10px);
    width: 100%;
  }

  .action-blocks {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export class TekModal extends HTMLElement {
  private _shadow = this.attachShadow({ mode: 'open' });

  connectedCallback() { this._render(); }

  private _render() {
    this._shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="header" part="header">
        <slot name="header"></slot>
      </div>
      <div class="input-blocks" part="input-blocks">
        <slot name="input-blocks"></slot>
      </div>
      <div class="action-blocks" part="action-blocks">
        <slot name="action-blocks"></slot>
      </div>
    `;
  }
}
customElements.define('tek-modal', TekModal);
