export declare class TekButton extends HTMLElement {
    static get observedAttributes(): string[];
    get variant(): string;
    get inactive(): boolean;
    get disabled(): boolean;
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private _render;
}
