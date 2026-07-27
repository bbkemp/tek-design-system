import { LitElement } from 'lit';
/**
 * Shared base for the selector-family controls (tek-checkbox, tek-radio,
 * tek-toggle): checked/error/disabled reactive properties, click-to-toggle,
 * and the `tek-change` dispatch. Not a custom element itself — subclasses
 * document their own API for the manifest.
 */
export declare abstract class TekBaseSelector extends LitElement {
    checked: boolean;
    error: boolean;
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected _click: () => void;
}
