import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

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

export class TekLabel extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      gap: var(--tek-spacing-s02, 2px);
      align-items: flex-start;
      padding: 0;
      width: 100%;
      box-sizing: border-box;
    }

    .text-row {
      display: flex;
      gap: 4px;
      align-items: center;
      padding: 0;
      width: 100%;
      flex-shrink: 0;
    }

    .label-text {
      display: flex;
      flex: 1 0 0;
      flex-direction: column;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      font-style: normal;
      font-weight: 400;
      justify-content: center;
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      min-height: 1px;
      min-width: 1px;
      color: var(--tek-color-input-label-default, #cccccc);
    }

    .optional {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      font-weight: 400;
      color: var(--tek-color-input-helper-default, #7b7b7b);
      font-style: italic;
    }

    .char-count {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-character-count-default, #cccccc);
      margin-left: auto;
    }

    .helper {
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      font-weight: 400;
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
      color: var(--tek-color-input-helper-default, #7b7b7b);
      flex-shrink: 0;
      width: 100%;
    }

    .helper--error {
      color: var(--tek-color-input-text-error, #e74848);
    }
  `;

  @property({ type: Boolean }) optional = false;
  @property({ attribute: 'helper-text' }) helperText: string | null = null;
  @property({ attribute: 'char-count' }) charCount: string | null = null;
  @property() link: string | null = null;
  @property({ attribute: 'helper-state' }) helperState: TekLabelHelperState | null = null;

  render() {
    return html`
      <div class="text-row">
        <div class="label-text" part="text"><slot></slot></div>
        ${this.optional ? html`<span class="optional">(optional)</span>` : nothing}
        ${this.charCount ? html`<span class="char-count">${this.charCount}</span>` : nothing}
      </div>
      ${this.helperText ? html`<div class="helper${this.helperState === 'error' ? ' helper--error' : ''}" part="helper">${this.helperText}</div>` : nothing}
    `;
  }
}

customElements.define('tek-label', TekLabel);
