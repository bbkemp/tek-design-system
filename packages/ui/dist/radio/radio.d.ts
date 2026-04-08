import { TekBaseSelector } from '../base-selector.js';
export declare class TekRadio extends TekBaseSelector {
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(n: string, o: string | null, v: string | null): void;
    protected _click: () => void;
    protected render(): void;
}
