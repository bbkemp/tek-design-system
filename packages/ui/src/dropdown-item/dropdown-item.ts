/**
 * tek-dropdown-item
 *
 * Figma: DS-v2 → v2.02 → DropdownItem (node 8386:346)
 * Blueprint: Shoelace sl-option (anatomy/API), tek-native implementation.
 *
 * One entry in a tek-dropdown menu. `selected` and `current` reflect so the
 * Figma states (Default / Hover / Selected / Disabled) map to attributes.
 *
 * Tokens:
 *   --tek-color-dropdown-menu-text-default | selected | disabled
 *   --tek-color-dropdown-menu-background-hover | selected
 *   --tek-spacing-s03, s04, s06 · --tek-borders-radius-none
 *   --tek-fonts-family-geist · --tek-fonts-text-size-md · line-height-md
 *
 * Usage:
 *   <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 *
 * @summary One option in a `tek-dropdown` menu.
 *
 * @attr {string} value - The option's value, compared against the parent dropdown's `value`.
 * @attr {boolean} disabled - Excludes the option from selection, typeahead, and arrow-key traversal.
 * @attr {boolean} selected - Whether this option is the dropdown's current selection. Set by the parent; do not set by hand.
 * @attr {boolean} current - Keyboard-highlighted option (Shoelace "current" pattern — focus stays on the trough). Set by the parent; do not set by hand.
 *
 * @slot - Option label.
 *
 * @cssprop --tek-color-dropdown-menu-text-default - Label color, default state.
 * @cssprop --tek-color-dropdown-menu-text-selected - Label color, selected state.
 * @cssprop --tek-color-dropdown-menu-text-disabled - Label color, disabled state.
 * @cssprop --tek-color-dropdown-menu-background-hover - Background, hover/current state.
 * @cssprop --tek-color-dropdown-menu-background-selected - Background, selected state.
 * @cssprop --tek-spacing-s03 - Internal gap.
 * @cssprop --tek-spacing-s04 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Horizontal padding.
 * @cssprop --tek-borders-radius-none - Corner radius.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class TekDropdownItem extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      padding: var(--tek-spacing-s04, 6px) var(--tek-spacing-s06, 10px);
      border-radius: var(--tek-borders-radius-none, 0);
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-dropdown-menu-text-default, #cccccc);
      cursor: pointer;
      user-select: none;
      box-sizing: border-box;
    }

    :host(:hover:not([disabled])),
    :host([current]:not([disabled])) {
      background: var(--tek-color-dropdown-menu-background-hover, #333333);
    }

    :host([selected]) {
      background: var(--tek-color-dropdown-menu-background-selected, #454545);
      color: var(--tek-color-dropdown-menu-text-selected, #ffffff);
    }

    :host([disabled]) {
      color: var(--tek-color-dropdown-menu-text-disabled, #454545);
      cursor: not-allowed;
    }
  `;

  @property() value = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) selected = false;
  /** Keyboard-highlighted option (Shoelace "current" pattern — focus stays on the trough). */
  @property({ type: Boolean, reflect: true }) current = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'option');
  }

  willUpdate(): void {
    this.setAttribute('aria-selected', String(this.selected));
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
  }

  /** Text used for typeahead matching and the trough display label. */
  getTextLabel(): string {
    return (this.textContent ?? '').trim();
  }

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('tek-dropdown-item', TekDropdownItem);
