export declare class TekTextLink extends HTMLElement {
    static get observedAttributes(): string[];
    get href(): string;
    get target(): string;
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private _render;
}
