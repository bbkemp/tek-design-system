/**
 * tek-tooltip
 *
 * Figma: DS-v2 → v2.02 → Tooltip (node 8400:378)
 * Blueprint: Shoelace sl-tooltip (hover/focus model), tek-native.
 *
 * Wraps its target (default slot) and shows a panel on hover or focus after
 * a short delay. Uses color/tooltip/* tokens — aliased to the same
 * primitives as the dropdown panel (per-component namespaces, same-primitive
 * pattern; Bryan 2026-07-22). Positioned with Floating UI (offset + flip +
 * shift); no arrow by design.
 *
 * Usage:
 *   <tek-tooltip content="Saves the current setup">
 *     <tek-button>Save</tek-button>
 *   </tek-tooltip>
 *
 * A11y: panel has role=tooltip; the wrapper links it via aria-describedby.
 * Escape hides. Hidden for pointer + keyboard symmetrically.
 */
import { LitElement } from 'lit';
export declare class TekTooltip extends LitElement {
    static styles: import("lit").CSSResult;
    content: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
    delay: number;
    open: boolean;
    disabled: boolean;
    private panel;
    private showTimer?;
    private cleanupFloating?;
    private static idCounter;
    private panelId;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private scheduleShow;
    private show;
    private hide;
    private onKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
