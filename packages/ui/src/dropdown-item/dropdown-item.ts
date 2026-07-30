import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

/**
 * One entry in a `tek-dropdown` menu. `selected` and `current` reflect so the
 * Figma states (Default / Hover / Selected / Disabled) map to attributes;
 * `current` marks the keyboard-highlighted option (Shoelace "current" pattern —
 * focus stays on the trough). Blueprint: Shoelace sl-option anatomy/API,
 * tek-native implementation.
 *
 * Figma: DS-v2 → DropdownItem (node 8386:346).
 *
 * Usage:
 * ```html
 * <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 * ```
 *
 * @summary Option row inside a tek-dropdown menu.
 *
 * @attr {string} value - Value reported by the parent dropdown when this option is selected.
 * @attr {boolean} disabled - Blocks selection and dims the row.
 * @attr {boolean} selected - Whether this is the selected option. Managed by the parent dropdown.
 * @attr {boolean} current - Keyboard-highlighted option. Managed by the parent dropdown.
 *
 * @slot - Option label text.
 *
 * @cssprop --tek-color-dropdown-menu-text-default - Label color.
 * @cssprop --tek-color-dropdown-menu-text-selected - Label color when selected.
 * @cssprop --tek-color-dropdown-menu-text-disabled - Label color when disabled.
 * @cssprop --tek-color-dropdown-menu-background-hover - Background on hover / when current.
 * @cssprop --tek-color-dropdown-menu-background-selected - Background when selected.
 * @cssprop --tek-borders-radius-none - Row corner radius.
 * @cssprop --tek-spacing-s03 - Row content gap.
 * @cssprop --tek-spacing-s04 - Vertical padding.
 * @cssprop --tek-spacing-s06 - Horizontal padding.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-text-size-md - Label font size.
 * @cssprop --tek-fonts-text-line-height-md - Label line height.
 */
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
