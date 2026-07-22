/**
 * tek-select
 *
 * Figma: DS-v2 → v2.02 → Dropdown (node 8387:386), DropdownMenu (8386:347)
 * Blueprint: Shoelace sl-select (API/keyboard/focus model) + Lion listbox
 * semantics, reimplemented tek-native. Focus stays on the trough and the
 * highlighted option is marked `current` (aria-activedescendant cannot cross
 * shadow boundaries to light-DOM options).
 *
 * Positioning: Floating UI (flip + width-sync + max-height), per the ADR-0001
 * framework budget "Lit + Floating UI when overlays arrive" — this is the
 * first overlay.
 *
 * States mirror the Figma variants: Default / Focus / Filled / Disabled /
 * Error / Open.
 *
 * Tokens:
 *   --tek-color-select-background-default
 *   --tek-color-select-border-{default,focus,filled,disabled,error}
 *   --tek-color-select-text-{default,filled,disabled,error}
 *   --tek-color-menu-{background,border,shadow}-default
 *   --tek-spacing-s02..s06 · --tek-borders-radius-03 · --tek-borders-width-01
 *   --tek-fonts-family-geist · --tek-fonts-text-size-md · line-height-md
 *
 * Usage:
 *   <tek-label>Channel</tek-label>
 *   <tek-select placeholder="Select a channel">
 *     <tek-option value="ch1">Channel 1</tek-option>
 *     <tek-option value="ch2">Channel 2</tek-option>
 *   </tek-select>
 *
 * Events: tek-change {value}, tek-open, tek-close
 */
import { LitElement } from 'lit';
export declare class TekSelect extends LitElement {
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
