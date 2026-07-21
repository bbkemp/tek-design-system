import { TekBaseSelector } from '../base-selector.js';
/**
 * 16×16 checkbox control. Toggles on click or Space/Enter; typically composed
 * inside `<tek-selector>` alongside `<tek-selector-label>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), checkbox control.
 *
 * Usage:
 * ```html
 * <tek-checkbox checked></tek-checkbox>
 * ```
 *
 * @summary Checkbox control of the selector family.
 *
 * @attr {boolean} checked - Whether the box is checked.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart box - The box div.
 *
 * @cssprop --tek-borders-radius-02 - Box corner radius.
 * @cssprop --tek-color-selector-background-default - Box background.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-color-icons-default - Checkmark stroke color.
 */
export declare class TekCheckbox extends TekBaseSelector {
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(n: string, o: string | null, v: string | null): void;
    protected render(): void;
}
