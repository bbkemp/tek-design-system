import { LitElement } from 'lit';
export declare abstract class TekBaseSelector extends LitElement {
    checked: boolean;
    error: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected _click: () => void;
}
