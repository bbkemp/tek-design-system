import { TekBaseSelector } from '../base-selector.js';
/**
 * 16×16 radio control. Checking one radio unchecks every other `tek-radio`
 * sharing the same `name`. Typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), radio control.
 *
 * Usage:
 * ```html
 * <tek-radio name="group" checked></tek-radio>
 * <tek-radio name="group"></tek-radio>
 * ```
 *
 * @summary Radio control of the selector family; groups by `name`.
 *
 * @attr {boolean} checked - Whether the radio is selected.
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 * @attr {string} name - Radio-group name; checking this radio unchecks others with the same name.
 *
 * @fires {CustomEvent} tek-change - Fired when selected, with `detail.checked`. Bubbles, composed.
 *
 * @csspart dot - The inner dot div.
 *
 * @cssprop --tek-color-selector-background-default - Control background.
 * @cssprop --tek-color-selector-background-checked - Dot color when checked.
 * @cssprop --tek-color-selector-border-unchecked - Border when unchecked.
 * @cssprop --tek-color-selector-border-checked - Border when checked. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Border in error state.
 * @cssprop --tek-borders-radius-full - Corner radius (circle).
 */
export declare class TekRadio extends TekBaseSelector {
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(n: string, o: string | null, v: string | null): void;
    protected _click: () => void;
    protected render(): void;
}
