/**
 * tek-status-bar
 *
 * Figma: DS-v2 → v2.02 → StatusBar (node 8406:409)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §4
 *
 * 32px bottom application bar, three regions:
 *   slot="build-flag"  — pre-release pill (tek-badge); production simply
 *                        omits it — never baked into the component
 *   default slot       — status text (text/mono/xs, color follows `status`)
 *   slot="actions"     — right-aligned controls
 *
 * `variant` tints the whole bar (error/loading) by layering the tint token
 * over the default background — same compositing as the Figma variants.
 *
 * Tokens: color/statusbar/* · spacing s05/s07 · borders/width/01 · mono xs
 */
import { LitElement } from 'lit';
export declare class TekStatusBar extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'default' | 'error' | 'loading';
    status: 'ready' | 'running' | 'success' | 'warning' | 'error';
    render(): import("lit-html").TemplateResult<1>;
}
