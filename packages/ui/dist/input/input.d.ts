/**
 * tek-input
 * Figma: DS-v2 → Input (node 7003:495)
 * States: Default | Focus | Filled | Disabled | Error
 * Heights: Single (31px) | Double (48px) | Triple (64px)
 *
 * Tokens:
 *   --tek-color-input-background-default
 *   --tek-color-input-border-default|focus|filled|disabled|error
 *   --tek-color-input-text-default|focus|filled|disabled|error
 */
import { LitElement, type PropertyValues } from 'lit';
export declare class TekInput extends LitElement {
    static styles: import("lit").CSSResult;
    state: string;
    height: string;
    placeholder: string;
    value: string;
    type: string;
    private get _field();
    private _onFocus;
    private _onBlur;
    private _onInput;
    updated(changed: PropertyValues): void;
    render(): import("lit-html").TemplateResult<1>;
}
