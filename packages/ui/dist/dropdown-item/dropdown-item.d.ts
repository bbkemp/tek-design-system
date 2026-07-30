import { LitElement } from 'lit';
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
export declare class TekDropdownItem extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    disabled: boolean;
    selected: boolean;
    /** Keyboard-highlighted option (Shoelace "current" pattern — focus stays on the trough). */
    current: boolean;
    connectedCallback(): void;
    willUpdate(): void;
    /** Text used for typeahead matching and the trough display label. */
    getTextLabel(): string;
    render(): import("lit-html").TemplateResult<1>;
}
