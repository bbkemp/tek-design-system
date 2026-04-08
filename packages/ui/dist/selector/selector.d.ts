export declare class TekSelector extends HTMLElement {
    static get observedAttributes(): string[];
    get checked(): boolean;
    set checked(v: boolean);
    get error(): boolean;
    get disabled(): boolean;
    private _shadow;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(n: string, o: string | null, v: string | null): void;
    private _getCtrl;
    private _getLbl;
    private _onClick;
    private _sync;
    private _syncChildren;
    private _render;
}
