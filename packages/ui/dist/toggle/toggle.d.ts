import { TekBaseSelector } from '../base-selector.js';
/**
 * 28×14 toggle switch (role="switch"). Toggles on click or Space/Enter;
 * typically composed inside `<tek-selector>`.
 *
 * Figma: DS-v2 → Selector (node 7002:378), toggle control.
 *
 * Usage:
 * ```html
 * <tek-toggle checked></tek-toggle>
 * ```
 *
 * @summary Toggle-switch control of the selector family.
 *
 * @attr {boolean} checked - Whether the switch is on (thumb slides right).
 * @attr {boolean} error - Error state; red border, click ignored.
 * @attr {boolean} disabled - Blocks interaction and dims the control.
 *
 * @fires {CustomEvent} tek-change - Fired when toggled, with `detail.checked`. Bubbles, composed.
 *
 * @csspart thumb - The sliding thumb div.
 *
 * @cssprop --tek-color-selector-background-default - Track background.
 * @cssprop --tek-color-selector-background-unchecked - Thumb color when off.
 * @cssprop --tek-color-selector-background-checked - Thumb color when on.
 * @cssprop --tek-color-selector-border-unchecked - Track/thumb border when off.
 * @cssprop --tek-color-selector-border-checked - Track border when on. Also the focus-ring color.
 * @cssprop --tek-color-selector-border-error - Track/thumb border in error state.
 * @cssprop --tek-borders-radius-full - Track and thumb radius (pill/circle).
 */
export declare class TekToggle extends TekBaseSelector {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeydown;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
