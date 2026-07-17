import { TekBaseSelector } from '../base-selector.js';
export declare class TekRadio extends TekBaseSelector {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onKeydown;
    updated(): void;
    protected _click: () => void;
    render(): import("lit-html").TemplateResult<1>;
}
