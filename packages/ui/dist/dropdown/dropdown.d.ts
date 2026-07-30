import { LitElement } from 'lit';
/**
 * Select-style dropdown: focus stays on the trough and the keyboard-highlighted
 * option is marked `current`, since aria-activedescendant cannot cross shadow
 * boundaries to light-DOM options. Supports Arrow/Home/End/Escape and typeahead;
 * the menu is positioned with Floating UI (flip + width-sync + max-height), the
 * first overlay under the ADR-0001 framework budget. Blueprint: Shoelace
 * sl-select API + Lion listbox semantics, reimplemented tek-native.
 *
 * Figma: DS-v2 → Dropdown (node 8387:386), DropdownMenu (node 8386:347).
 *
 * Usage:
 * ```html
 * <tek-dropdown placeholder="Select a channel">
 *   <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 *   <tek-dropdown-item value="ch2">Channel 2</tek-dropdown-item>
 * </tek-dropdown>
 * ```
 *
 * @summary Select-style dropdown with keyboard navigation, typeahead, and a Floating UI menu.
 *
 * @attr {string} value - Value of the selected item.
 * @attr {string} [placeholder="Select an option"] - Trough text when nothing is selected.
 * @attr {string} name - When set, renders a hidden input with this name for form submission.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 * @attr {boolean} error - Error state; red border, white display text.
 * @attr {boolean} open - Whether the menu is open. Reflected; managed by the component.
 *
 * @fires {CustomEvent} tek-change - Fired when the selection changes, with `detail.value`. Bubbles, composed.
 * @fires {CustomEvent} tek-open - Fired when the menu opens. Bubbles, composed.
 * @fires {CustomEvent} tek-close - Fired when the menu closes. Bubbles, composed.
 *
 * @slot - The `tek-dropdown-item` options.
 *
 * @csspart trough - The closed-control container.
 * @csspart display - The selected-value / placeholder span.
 * @csspart caret - The caret icon span.
 * @csspart menu - The floating menu container.
 *
 * @cssprop --tek-color-dropdown-background-default - Trough background.
 * @cssprop --tek-color-dropdown-border-default - Trough border per state; also `-focus`, `-error`, `-disabled`.
 * @cssprop --tek-color-dropdown-text-default - Display text per state; also `-filled`, `-error`, `-disabled`.
 * @cssprop --tek-color-dropdown-menu-background-default - Menu background.
 * @cssprop --tek-color-dropdown-menu-border-default - Menu border.
 * @cssprop --tek-color-dropdown-menu-shadow-default - Menu drop shadow.
 * @cssprop --tek-color-icons-default - Caret color.
 * @cssprop --tek-borders-radius-03 - Trough and menu corner radius.
 * @cssprop --tek-borders-width-01 - Trough and menu border width.
 * @cssprop --tek-spacing-s02 - Menu padding; also the trough-to-menu gap.
 * @cssprop --tek-spacing-s03 - Trough content gap and right padding.
 * @cssprop --tek-spacing-s05 - Trough vertical padding.
 * @cssprop --tek-spacing-s06 - Trough left padding.
 * @cssprop --tek-fonts-family-geist - Text font family.
 * @cssprop --tek-fonts-text-size-md - Display text font size.
 * @cssprop --tek-fonts-text-line-height-md - Display text line height.
 */
export declare class TekDropdown extends LitElement {
    static styles: import("lit").CSSResult;
    value: string;
    placeholder: string;
    name: string;
    disabled: boolean;
    error: boolean;
    open: boolean;
    private displayLabel;
    private trough;
    private menu;
    private cleanupFloating?;
    private typeBuffer;
    private typeTimer?;
    private get options();
    private get enabledOptions();
    private get currentOption();
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(): void;
    updated(changed: Map<string, unknown>): void;
    private syncSelection;
    private setCurrent;
    private show;
    private hide;
    private select;
    private startFloating;
    private stopFloating;
    private onDocumentMouseDown;
    private onTroughClick;
    private onMenuClick;
    private moveCurrent;
    private typeahead;
    private onKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
