import { LitElement } from 'lit';
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
export declare class TekModal extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
