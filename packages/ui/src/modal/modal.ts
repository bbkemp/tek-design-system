import { css, html, LitElement } from 'lit';

/**
 * Modal card: header, form fields, and action buttons stacked in a bordered,
 * shadowed container. Max-width 360px, 32px padding, 11px radius. Composition
 * happens entirely through the three named slots.
 *
 * Figma: DS-v2 → Modal (node 7003:2158).
 *
 * Usage:
 * ```html
 * <tek-modal>
 *   <span slot="header">Sign In</span>
 *   <div slot="input-blocks">...</div>
 *   <div slot="action-blocks">
 *     <tek-button>Sign In</tek-button>
 *   </div>
 * </tek-modal>
 * ```
 *
 * @summary Modal card with header, input-blocks, and action-blocks slots.
 *
 * @slot header - Modal title (Archivo SemiBold 24px).
 * @slot input-blocks - Form fields, stacked with a 10px gap.
 * @slot action-blocks - Buttons, stacked full-width.
 *
 * @csspart header - The header container.
 * @csspart input-blocks - The form-fields container.
 * @csspart action-blocks - The buttons container.
 *
 * @cssprop --tek-color-modal-background-default - Card background.
 * @cssprop --tek-color-modal-border-default - Card border color.
 * @cssprop --tek-color-modal-text-default - Header text color.
 * @cssprop --tek-color-modal-shadow-default - Drop-shadow color.
 * @cssprop --tek-modal-padding - Card padding override (defaults to --tek-spacing-s13).
 * @cssprop --tek-modal-heading-size - Header font-size override (defaults to --tek-fonts-heading-size-md).
 * @cssprop --tek-modal-heading-line-height - Header line-height override (defaults to --tek-fonts-heading-line-height-md).
 * @cssprop --tek-spacing-s08 - Gap between the three sections.
 * @cssprop --tek-spacing-s06 - Gap between fields inside input-blocks.
 * @cssprop --tek-spacing-s13 - Default card padding.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 * @cssprop --tek-fonts-family-archivo - Header font family.
 * @cssprop --tek-fonts-heading-size-md - Default header font size.
 * @cssprop --tek-fonts-heading-line-height-md - Default header line height.
 */
export class TekModal extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s08, 14px);
      background: var(--tek-color-modal-background-default, #181818);
      border: 0.25px solid var(--tek-color-modal-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-05, 11px);
      padding: var(--tek-modal-padding, var(--tek-spacing-s13, 32px));
      width: 100%;
      max-width: 360px;
      box-sizing: border-box;
      overflow: clip;
      box-shadow: 0px 2px 6px 0px var(--tek-color-modal-shadow-default, rgba(0,0,0,0.2));
    }

    .header {
      font-family: var(--tek-fonts-family-archivo, sans-serif);
      font-size: var(--tek-modal-heading-size, var(--tek-fonts-heading-size-md, 24px));
      font-weight: 600;
      font-variation-settings: 'wdth' 106;
      line-height: var(--tek-modal-heading-line-height, var(--tek-fonts-heading-line-height-md, 32px));
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

  render() {
    return html`
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
