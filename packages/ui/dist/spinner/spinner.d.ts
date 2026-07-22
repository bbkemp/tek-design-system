/**
 * tek-spinner
 *
 * Figma: DS-v2 → v2.02 → Spinner (node 8401:391)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §7
 *
 * 270-degree arc rotating 360deg/1.2s. Frozen when `paused` or when the user
 * sets prefers-reduced-motion (spec requirement). Tones map to
 * color/spinner/*; strokes are borders/width/04 (sm+md — spec's 2.5px md
 * snapped to the 2px token) and width/05 (lg).
 *
 * Usage: <tek-spinner size="lg" tone="success"></tek-spinner>
 */
import { LitElement } from 'lit';
export declare class TekSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    size: 'sm' | 'md' | 'lg';
    tone: 'default' | 'success' | 'warning' | 'error';
    paused: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
