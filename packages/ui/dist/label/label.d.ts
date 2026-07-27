import { LitElement } from 'lit';
/**
 * Form-field label with optional marker, helper text, and inline character
 * count. Sits above a `tek-input`.
 *
 * Figma: DS-v2 → Label (node 780:10209). Geist Regular 13px / lh 16px.
 *
 * Usage:
 * ```html
 * <tek-label>Email</tek-label>
 * <tek-label optional>Email</tek-label>
 * <tek-label helper-text="Must be 8+ characters">Password</tek-label>
 * <tek-label helper-text="Too short" helper-state="error">Password</tek-label>
 * <tek-label char-count="10/52">Message</tek-label>
 * ```
 *
 * @summary Form-field label with optional/helper-text/char-count variants.
 *
 * @attr {boolean} optional - Appends an italic "(optional)" marker.
 * @attr {string} helper-text - Helper line rendered below the label.
 * @attr {string} char-count - Character count rendered right-aligned, e.g. "10/52".
 * @attr {("error")} helper-state - Set to "error" to color the helper text red.
 * @attr {string} link - Reserved for the Figma Link variant; not rendered yet.
 *
 * @slot - Label text.
 *
 * @csspart text - The label text container.
 * @csspart helper - The helper-text div (when helper-text is set).
 *
 * @cssprop --tek-spacing-s02 - Gap between label row and helper text.
 * @cssprop --tek-fonts-family-geist - Font family for all text.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 * @cssprop --tek-fonts-text-size-sm - "(optional)" marker font size.
 * @cssprop --tek-fonts-text-size-xs - Helper and char-count font size.
 * @cssprop --tek-fonts-text-line-height-xs - Helper and char-count line height.
 * @cssprop --tek-color-input-label-default - Label text color.
 * @cssprop --tek-color-input-helper-default - Helper and "(optional)" color.
 * @cssprop --tek-color-input-character-count-default - Char-count color.
 * @cssprop --tek-color-input-text-error - Helper color when helper-state="error".
 */
export type TekLabelHelperState = 'error';
export declare class TekLabel extends LitElement {
    static styles: import("lit").CSSResult;
    optional: boolean;
    helperText: string | null;
    charCount: string | null;
    link: string | null;
    helperState: TekLabelHelperState | null;
    render(): import("lit-html").TemplateResult<1>;
}
