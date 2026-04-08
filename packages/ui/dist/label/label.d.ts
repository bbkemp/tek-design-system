export declare class TekLabel extends HTMLElement {
    static get observedAttributes(): string[];
    private shadow;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private render;
}
