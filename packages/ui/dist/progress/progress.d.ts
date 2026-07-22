/**
 * tek-progress
 *
 * Figma: DS-v2 → v2.02 → Progress (node 8413:560)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §5
 *
 * Determinate / indeterminate progress bar with label + meta slots.
 * Indeterminate stripe is CSS-keyframes only (no JS animation) and freezes
 * at 50% offset under prefers-reduced-motion, both per spec. `paused`
 * freezes the stripe. Emits tek-complete when value reaches max (spec's
 * `progress-complete`, renamed to the DS event convention — see audit).
 *
 * Tokens: color/progress/* · borders/radius/02 · borders/width/01 ·
 * text/regular/sm (label) · text/mono/xs (meta)
 */
import { LitElement } from 'lit';
export declare class TekProgress extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'determinate' | 'indeterminate';
    value: number;
    max: number;
    size: 'sm' | 'md' | 'lg';
    tone: 'default' | 'success' | 'warning' | 'error';
    paused: boolean;
    private get pct();
    willUpdate(): void;
    updated(changed: Map<string, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
