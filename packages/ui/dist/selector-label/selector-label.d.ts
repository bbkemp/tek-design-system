import { LitElement } from 'lit';
/**
 * Text label for a selector control, color-synced to the control's
 * checked/error/disabled state. `<tek-selector>` keeps these attributes in
 * sync automatically when used inside it.
 *
 * Figma: DS-v2 → Selector (node 7002:378), label. Geist Regular 12px.
 *
 * Usage:
 * ```html
 * <tek-selector-label checked>Enable feature</tek-selector-label>
 * ```
 *
 * @summary State-aware text label for checkbox/radio/toggle controls.
 *
 * @attr {boolean} checked - Mirrors the paired control; brightens the text.
 * @attr {boolean} error - Mirrors the paired control; error text color.
 * @attr {boolean} disabled - Mirrors the paired control; dims the label.
 *
 * @slot - Label text.
 *
 * @csspart text - The text container div.
 *
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-color-selector-label-unchecked - Text color when unchecked.
 * @cssprop --tek-color-selector-label-checked - Text color when checked.
 * @cssprop --tek-color-selector-label-error - Text color in error state.
 */
export declare class TekSelectorLabel extends LitElement {
    static styles: import("lit").CSSResult;
    checked: boolean;
    error: boolean;
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
