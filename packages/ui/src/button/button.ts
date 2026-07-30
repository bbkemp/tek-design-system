import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export type TekButtonVariant = 'primary' | 'secondary';

/**
 * Pill-shaped action button.
 *
 * Figma: DS-v2 → Button (node 202:2605).
 * Primary: px-24 py-12, Archivo SemiBold 600 16px / lh 24px. Secondary: px-14 py-6, Archivo 13px / lh 16px.
 * Fills its container (`width: 100%`) — size it via a wrapper.
 *
 * Usage:
 * ```html
 * <tek-button>Sign In</tek-button>
 * <tek-button variant="secondary">Cancel</tek-button>
 * <tek-button inactive>Sign In</tek-button>
 * ```
 *
 * @summary Pill-shaped action button — primary/secondary variants, default/hover/inactive states.
 *
 * @attr {("primary"|"secondary")} [variant="primary"] - Visual variant: primary (large, 16px label) or secondary (compact, 13px label).
 * @attr {boolean} inactive - Greys the button out and blocks activation. Styled identically to disabled.
 * @attr {boolean} disabled - Greys the button out and blocks activation.
 *
 * @fires {CustomEvent} tek-click - Fired on click or Space/Enter, unless inactive/disabled. Bubbles, composed.
 *
 * @slot - Button label.
 *
 * @csspart label - The label span.
 *
 * @cssprop --tek-color-button-background-default - Background, default state.
 * @cssprop --tek-color-button-background-hover - Background on hover.
 * @cssprop --tek-color-button-background-inactive - Background when inactive/disabled.
 * @cssprop --tek-color-button-border-default - Border, default state.
 * @cssprop --tek-color-button-border-hover - Border on hover. Also the focus-ring color.
 * @cssprop --tek-color-button-border-inactive - Border when inactive/disabled.
 * @cssprop --tek-color-button-text-default - Label color, default state.
 * @cssprop --tek-color-button-text-hover - Label color on hover.
 * @cssprop --tek-color-button-text-inactive - Label color when inactive/disabled.
 * @cssprop --tek-borders-radius-full - Corner radius (pill).
 * @cssprop --tek-spacing-s07 - Primary vertical padding.
 * @cssprop --tek-spacing-s11 - Primary horizontal padding.
 * @cssprop --tek-spacing-s04 - Secondary vertical padding.
 * @cssprop --tek-spacing-s08 - Secondary horizontal padding.
 * @cssprop --tek-fonts-family-archivo - Label font family.
 * @cssprop --tek-fonts-heading-size-xs - Primary label font size.
 * @cssprop --tek-fonts-heading-line-height-xs - Primary label line height.
 * @cssprop --tek-fonts-text-size-md - Secondary label font size.
 * @cssprop --tek-fonts-text-line-height-md - Secondary label line height.
 */
export class TekButton extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: var(--tek-borders-radius-full, 9999px);
      border: 1px solid var(--tek-color-button-border-default, #33baea);
      background: var(--tek-color-button-background-default, #1e1e1e);
      padding: var(--tek-spacing-s07, 12px) var(--tek-spacing-s11, 24px);
      cursor: pointer;
      outline: none;
      transition: background 0.15s, border-color 0.15s, color 0.15s;
      box-sizing: border-box;
      width: 100%;
    }

    :host([variant="secondary"]) {
      padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s08, 14px);
    }

    .label {
      display: block;
      width: 100%;
      font-family: var(--tek-fonts-family-archivo, sans-serif);
      font-size: var(--tek-fonts-heading-size-xs, 16px);
      font-weight: 600;
      font-style: normal;
      font-variation-settings: 'wdth' 106;
      line-height: var(--tek-fonts-heading-line-height-xs, 24px);
      letter-spacing: 0.32px;
      color: var(--tek-color-button-text-default, #cccccc);
      text-align: center;
      white-space: nowrap;
      transition: color 0.15s;
    }

    :host([variant="secondary"]) .label {
      font-size: var(--tek-fonts-text-size-md, 13px);
      font-weight: 534;
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      letter-spacing: 0.13px;
    }

    :host(:hover:not([inactive]):not([disabled])) {
      background: var(--tek-color-button-background-hover, #000000);
      border-color: var(--tek-color-button-border-hover, #33baea);
    }
    :host(:hover:not([inactive]):not([disabled])) .label {
      color: var(--tek-color-button-text-hover, #ffffff);
    }

    :host([inactive]),
    :host([disabled]) {
      background: var(--tek-color-button-background-inactive, #181818);
      border-color: var(--tek-color-button-border-inactive, #454545);
      cursor: not-allowed;
      pointer-events: none;
    }
    :host([inactive]) .label,
    :host([disabled]) .label {
      color: var(--tek-color-button-text-inactive, #454545);
    }

    :host(:focus-visible) {
      box-shadow: 0 0 0 2px var(--tek-color-button-border-default, #33baea);
    }
  `;

  @property() variant: TekButtonVariant = 'primary';
  @property({ type: Boolean }) inactive = false;
  @property({ type: Boolean }) disabled = false;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'button');
    this.addEventListener('keydown', this._onKeydown);
    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeydown);
    this.removeEventListener('click', this._onClick);
  }

  private _onKeydown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this._emit();
    }
  };

  private _onClick = () => { this._emit(); };

  private _emit() {
    if (!this.inactive && !this.disabled) {
      this.dispatchEvent(new CustomEvent('tek-click', { bubbles: true, composed: true }));
    }
  }

  updated() {
    const isDisabled = this.inactive || this.disabled;
    this.setAttribute('tabindex', isDisabled ? '-1' : '0');
    if (isDisabled) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.removeAttribute('aria-disabled');
    }
  }

  render() {
    return html`<span class="label" part="label"><slot></slot></span>`;
  }
}
customElements.define('tek-button', TekButton);
