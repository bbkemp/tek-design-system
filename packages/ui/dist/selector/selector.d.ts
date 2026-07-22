/**
 * tek-selector
 * Figma: DS-v2 → Selector (node 7002:378)
 *
 * Tokens:
 *   (inherits from tek-checkbox / tek-radio / tek-toggle / tek-selector-label)
 *
 * Usage — self-contained (label attribute):
 *   <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 *   <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 *   <tek-selector type="toggle" label="Live mode"></tek-selector>
 *
 * Usage — slot-based (bring your own children):
 *   <tek-selector>
 *     <tek-checkbox></tek-checkbox>
 *     <tek-selector-label>Enable feature</tek-selector-label>
 *   </tek-selector>
 */
import { LitElement, type PropertyValues, type TemplateResult } from 'lit';
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
