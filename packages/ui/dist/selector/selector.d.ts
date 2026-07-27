import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
/**
 * Composite selector row: a checkbox/radio/toggle control plus a state-synced
 * label. Two modes — self-contained (set `label`, the control is rendered in
 * shadow DOM) or slot-based (slot in your own control + `<tek-selector-label>`).
 * Styling comes from the composed child components.
 *
 * Figma: DS-v2 → Selector (node 7002:378).
 *
 * Usage — self-contained:
 * ```html
 * <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 * <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 * <tek-selector type="toggle" label="Live mode"></tek-selector>
 * ```
 *
 * Usage — slot-based:
 * ```html
 * <tek-selector>
 *   <tek-checkbox></tek-checkbox>
 *   <tek-selector-label>Enable feature</tek-selector-label>
 * </tek-selector>
 * ```
 *
 * @summary Checkbox/radio/toggle control paired with a state-synced label.
 *
 * @attr {boolean} checked - Checked state; forwarded to the inner control and label.
 * @attr {boolean} error - Error state; forwarded to the inner control and label.
 * @attr {boolean} disabled - Disabled state; forwarded to the inner control and label.
 * @attr {string} label - Self-contained mode: label text. When absent, the default slot is used instead.
 * @attr {("checkbox"|"radio"|"toggle")} [type="checkbox"] - Which control to render in self-contained mode.
 * @attr {string} name - Group name, passed through to the inner control (used by `tek-radio` for grouping).
 *
 * @fires {CustomEvent} tek-change - Bubbles up from the inner control when toggled, with `detail.checked`.
 *
 * @slot - Slot-based mode: a selector control (`tek-checkbox`/`tek-radio`/`tek-toggle`) plus a `tek-selector-label`.
 *
 * @csspart inner - The row container div.
 *
 * @cssprop --tek-spacing-s05 - Gap between control and label.
 */
export declare class TekSelector extends LitElement {
    static styles: import("lit").CSSResult;
    checked: boolean;
    error: boolean;
    disabled: boolean;
    label: string | null;
    type: string;
    name: string | null;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _getCtrl;
    private _getLbl;
    private _onTekChange;
    private _onClick;
    private _sync;
    updated(changed: PropertyValues): void;
    firstUpdated(): void;
    private _controlTpl;
    render(): TemplateResult<1>;
}
