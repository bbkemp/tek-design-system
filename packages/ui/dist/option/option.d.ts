/**
 * tek-option
 *
 * Figma: DS-v2 → v2.02 → DropdownItem (node 8386:346)
 * Blueprint: Shoelace sl-option (anatomy/API), tek-native implementation.
 *
 * One entry in a tek-select menu. `selected` and `current` reflect so the
 * Figma states (Default / Hover / Selected / Disabled) map to attributes.
 *
 * Tokens:
 *   --tek-color-menu-text-default | selected | disabled
 *   --tek-color-menu-background-hover | selected
 *   --tek-spacing-s03, s04, s06 · --tek-borders-radius-none
 *   --tek-fonts-family-geist · --tek-fonts-text-size-md · line-height-md
 *
 * Usage:
 *   <tek-option value="ch1">Channel 1</tek-option>
 */
import { LitElement } from 'lit';
export declare class TekOption extends LitElement {
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
