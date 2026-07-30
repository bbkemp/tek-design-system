import { LitElement } from 'lit';
/**
 * 32px bottom application bar with three regions: a pre-release build-flag
 * slot, flexible status text, and right-aligned actions. `variant` tints the
 * whole bar (error/loading) by layering the tint token over the default
 * background — the same compositing as the Figma variants; `status` colors
 * the status text.
 *
 * Figma: DS-v2 → v2.02 → StatusBar (node 8406:409).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §4.
 *
 * Usage:
 * ```html
 * <tek-status-bar status="running">Acquiring waveform…</tek-status-bar>
 * ```
 *
 * @summary Bottom application status bar with build flag, status text, and actions.
 *
 * @attr {'default'|'error'|'loading'} variant - Tints the whole bar over the default background.
 * @attr {'ready'|'running'|'success'|'warning'|'error'} status - Colors the status text.
 *
 * @slot - Status text (text/mono/xs; color follows `status`).
 * @slot build-flag - Pre-release pill (tek-badge); production simply omits it — never baked into the component.
 * @slot actions - Right-aligned controls.
 *
 * @csspart build-flag - The build-flag container.
 * @csspart status-text - The status text container (role=status).
 * @csspart actions - The actions container.
 *
 * @cssprop --tek-color-statusbar-background-default - Bar background.
 * @cssprop --tek-color-statusbar-background-error - Error variant tint layer.
 * @cssprop --tek-color-statusbar-background-loading - Loading variant tint layer.
 * @cssprop --tek-color-statusbar-border-default - Top border color.
 * @cssprop --tek-color-statusbar-text-default - Status text color; -running/-success/-warning/-error take over per `status`.
 * @cssprop --tek-spacing-s03 - Gap inside the build-flag and actions regions.
 * @cssprop --tek-spacing-s05 - Region gap and vertical padding.
 * @cssprop --tek-spacing-s07 - Horizontal padding.
 * @cssprop --tek-borders-width-01 - Top border width.
 * @cssprop --tek-fonts-family-mono - Text font family.
 * @cssprop --tek-fonts-text-size-xs - Text size (with the matching line-height token).
 */
export declare class TekStatusBar extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'default' | 'error' | 'loading';
    status: 'ready' | 'running' | 'success' | 'warning' | 'error';
    render(): import("lit-html").TemplateResult<1>;
}
