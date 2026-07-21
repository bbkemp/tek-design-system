/**
 * Shared base for the selector-family controls (tek-checkbox, tek-radio,
 * tek-toggle): checked/error/disabled attribute reflection, click-to-toggle,
 * and the `tek-change` dispatch. Not a custom element itself — subclasses
 * document their own API for the manifest.
 */
export declare abstract class TekBaseSelector extends HTMLElement {
    static get observedAttributes(): string[];
    get checked(): boolean;
    set checked(v: boolean);
    get error(): boolean;
    set error(v: boolean);
    get disabled(): boolean;
    set disabled(v: boolean);
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(_n: string, o: string | null, n: string | null): void;
    protected _click: () => void;
    protected abstract render(): void;
}
