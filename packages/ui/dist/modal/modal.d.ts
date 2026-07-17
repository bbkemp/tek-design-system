/**
 * tek-modal
 * Figma: DS-v2 → Modal (node 7003:2158)
 * Dimensions: max-width 360px, padding 32px, gap 14px, radius 11px, border 0.25px
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
import { LitElement } from 'lit';
export declare class TekModal extends LitElement {
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
