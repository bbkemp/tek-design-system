export declare class TekInput extends HTMLElement {
    static get observedAttributes(): string[];
    get state(): string;
    get height(): string;
    get placeholder(): string;
    get value(): string;
    get type(): string;
    private _shadow;
    connectedCallback(): void;
    attributeChangedCallback(name: string): void;
    private _render;
}
