import { LitElement, type PropertyValues } from 'lit';
export type TekInputState = 'default' | 'focus' | 'filled' | 'disabled' | 'error';
export type TekInputHeight = 'single' | 'double' | 'triple';
/**
 * Text input field. Single height renders an `<input>`; double/triple render a
 * `<textarea>` (48px / 64px). The `state` attribute is auto-managed on
 * focus/blur (default → focus → filled) but can be set explicitly.
 *
 * Figma: DS-v2 → Input (node 7003:495). Geist 14px / lh 20px.
 *
 * Usage:
 * ```html
 * <tek-input placeholder="Email"></tek-input>
 * <tek-input type="password" placeholder="Password"></tek-input>
 * <tek-input height="triple" placeholder="Message"></tek-input>
 * <tek-input state="error" value="not-an-email"></tek-input>
 * ```
 *
 * @summary Text input with default/focus/filled/disabled/error states and three heights.
 *
 * @attr {("default"|"focus"|"filled"|"disabled"|"error")} [state="default"] - Visual state. Auto-managed on focus/blur; set explicitly for disabled/error.
 * @attr {("single"|"double"|"triple")} [height="single"] - Field height. Double and triple render a textarea.
 * @attr {string} placeholder - Placeholder text.
 * @attr {string} value - Field value. Also settable via the `value` property.
 * @attr {string} [type="text"] - Native input type (text, password, email, …). Single height only.
 *
 * @fires {CustomEvent} tek-input - Fired on every keystroke, with `detail.value`. Bubbles, composed.
 *
 * @cssprop --tek-color-input-background-default - Field background.
 * @cssprop --tek-color-input-border-default - Border, default state.
 * @cssprop --tek-color-input-border-focus - Border, focus state.
 * @cssprop --tek-color-input-border-filled - Border, filled state.
 * @cssprop --tek-color-input-border-disabled - Border, disabled state.
 * @cssprop --tek-color-input-border-error - Border, error state.
 * @cssprop --tek-color-input-text-default - Text/placeholder color, default state.
 * @cssprop --tek-color-input-text-focus - Text color, focus state.
 * @cssprop --tek-color-input-text-filled - Text color, filled state.
 * @cssprop --tek-color-input-text-disabled - Text color, disabled state.
 * @cssprop --tek-color-input-text-error - Text color, error state.
 * @cssprop --tek-borders-radius-03 - Corner radius.
 * @cssprop --tek-spacing-s02 - Right padding.
 * @cssprop --tek-spacing-s05 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Left padding.
 * @cssprop --tek-fonts-family-geist - Field font family.
 * @cssprop --tek-fonts-text-size-lg - Field font size.
 * @cssprop --tek-fonts-text-line-height-lg - Field line height.
 */
export declare class TekInput extends LitElement {
    static styles: import("lit").CSSResult;
    state: TekInputState;
    height: TekInputHeight;
    placeholder: string;
    value: string;
    type: string;
    private get _field();
    private _onFocus;
    private _onBlur;
    private _onInput;
    updated(changed: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
}
