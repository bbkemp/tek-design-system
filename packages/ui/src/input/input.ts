import { css, html, LitElement, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';

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
export class TekInput extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--tek-color-input-background-default, #252525);
      border: 0.5px solid var(--tek-color-input-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s02, 4px) var(--tek-spacing-s05, 8px) var(--tek-spacing-s06, 10px);
      width: 100%;
      box-sizing: border-box;
      transition: border-color 0.1s;
    }
    :host([state="focus"])    { border-color: var(--tek-color-input-border-focus,   #ffffff); }
    :host([state="filled"])   { border-color: var(--tek-color-input-border-filled,  #afafaf); }
    :host([state="disabled"]) { border-color: var(--tek-color-input-border-disabled,#454545); }
    :host([state="error"])    { border-color: var(--tek-color-input-border-error,   #e74848); }
    :host([height="double"])  { min-height: 48px; }
    :host([height="triple"])  { min-height: 64px; }

    input, textarea {
      width: 100%;
      background: transparent;
      border: none;
      outline: none;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-lg, 14px);
      line-height: var(--tek-fonts-text-line-height-lg, 20px);
      color: var(--tek-color-input-text-default, #979797);
      resize: none;
      padding: 0;
    }
    :host([state="focus"])    input, :host([state="focus"])    textarea { color: var(--tek-color-input-text-focus,   #ffffff); }
    :host([state="filled"])   input, :host([state="filled"])   textarea { color: var(--tek-color-input-text-filled,  #cccccc); }
    :host([state="disabled"]) input, :host([state="disabled"]) textarea { color: var(--tek-color-input-text-disabled,#454545); }
    :host([state="error"])    input, :host([state="error"])    textarea  { color: var(--tek-color-input-text-error,   #ffffff); }

    input::placeholder, textarea::placeholder { color: inherit; }
    :host([state="disabled"]) { pointer-events: none; }
  `;

  @property({ reflect: true }) state = 'default';
  @property() height = 'single';
  @property() placeholder = '';
  @property() value = '';
  @property() type = 'text';

  private get _field(): HTMLInputElement | HTMLTextAreaElement | null {
    return this.renderRoot.querySelector('input, textarea');
  }

  private _onFocus = () => {
    if (this.state === 'default') this.state = 'focus';
  };

  private _onBlur = () => {
    const el = this._field;
    if (el && el.value) this.state = 'filled';
    else this.state = 'default';
  };

  private _onInput = () => {
    const el = this._field;
    if (!el) return;
    this.value = el.value;
    this.dispatchEvent(new CustomEvent('tek-input', {
      bubbles: true, composed: true, detail: { value: el.value }
    }));
  };

  updated(changed: PropertyValues) {
    if (changed.has('state')) {
      if (this.state === 'disabled') this.setAttribute('aria-disabled', 'true');
      else this.removeAttribute('aria-disabled');
    }
  }

  render() {
    const isMulti = this.height === 'double' || this.height === 'triple';
    const rows = this.height === 'double' ? 2 : 3;
    const isDisabled = this.state === 'disabled';
    return isMulti
      ? html`<textarea rows=${rows} placeholder=${this.placeholder} ?disabled=${isDisabled}
               .value=${live(this.value)}
               @focus=${this._onFocus} @blur=${this._onBlur} @input=${this._onInput}></textarea>`
      : html`<input type=${this.type} placeholder=${this.placeholder} ?disabled=${isDisabled}
               .value=${live(this.value)}
               @focus=${this._onFocus} @blur=${this._onBlur} @input=${this._onInput}>`;
  }
}
customElements.define('tek-input', TekInput);
