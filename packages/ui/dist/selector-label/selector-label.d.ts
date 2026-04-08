export declare class TekSelectorLabel extends HTMLElement {
    static get observedAttributes(): string[];
    get checked(): boolean;
    set checked(v: boolean);
    get error(): boolean;
    set error(v: boolean);
    get disabled(): boolean;
    set disabled(v: boolean);
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private _render;
}
