import { LitElement } from 'lit';
/**
 * Wraps its target (default slot) and shows a text panel on hover or focus
 * after a short delay, positioned with Floating UI (offset + flip + shift);
 * no arrow by design. Blueprint: Shoelace sl-tooltip's hover/focus model,
 * tek-native. A11y: the panel has role=tooltip, linked from the wrapper via
 * aria-describedby; Escape hides, symmetrically for pointer and keyboard.
 *
 * Figma: DS-v2 → v2.02 → Tooltip (node 8400:378).
 *
 * Usage:
 * ```html
 * <tek-tooltip content="Saves the current setup">
 *   <tek-button>Save</tek-button>
 * </tek-tooltip>
 * ```
 *
 * @summary Hover/focus tooltip panel around a slotted target.
 *
 * @attr {string} content - Tooltip text; with empty content the panel never shows.
 * @attr {'top'|'bottom'|'left'|'right'} placement - Preferred panel side; flips when it doesn't fit.
 * @attr {number} delay - Show delay in milliseconds (default 300).
 * @attr {boolean} open - Whether the panel is visible; managed by the component.
 * @attr {boolean} disabled - Prevents the panel from showing.
 *
 * @slot - The target element the tooltip describes.
 *
 * @csspart panel - The tooltip panel.
 *
 * @cssprop --tek-color-tooltip-background-default - Panel background (color/tooltip/* alias the same primitives as the dropdown panel).
 * @cssprop --tek-color-tooltip-border-default - Panel border color.
 * @cssprop --tek-color-tooltip-shadow-default - Panel drop-shadow color.
 * @cssprop --tek-color-tooltip-text-default - Panel text color.
 * @cssprop --tek-spacing-s03 - Vertical padding; also the target-to-panel gap.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-borders-width-01 - Panel border width.
 * @cssprop --tek-borders-radius-03 - Panel corner radius.
 * @cssprop --tek-fonts-family-geist - Panel font family.
 * @cssprop --tek-fonts-text-size-sm - Panel type size (with the matching line-height token).
 */
export declare class TekTooltip extends LitElement {
    static styles: import("lit").CSSResult;
    content: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
    delay: number;
    open: boolean;
    disabled: boolean;
    private panel;
    private showTimer?;
    private cleanupFloating?;
    private static idCounter;
    private panelId;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private scheduleShow;
    private show;
    private hide;
    private onKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
