export declare class TekCharacterCount extends HTMLElement {
    static get observedAttributes(): string[];
    get current(): number;
    get max(): number;
    get state(): string;
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private _render;
}
