import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
export class TekStatusBar extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s05, 8px);
      height: 32px;
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s07, 12px);
      box-sizing: border-box;
      width: 100%;
      background-color: var(--tek-color-statusbar-background-default, #252525);
      border-top: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-statusbar-border-default, #7b7b7b);
      font-family: var(--tek-fonts-family-mono, monospace);
      font-size: var(--tek-fonts-text-size-xs, 10px);
      line-height: var(--tek-fonts-text-line-height-xs, 12px);
    }

    /* variant tint layers over the default background, like the Figma fills */
    :host([variant='error']) {
      background-image: linear-gradient(
        var(--tek-color-statusbar-background-error, rgba(231, 72, 72, 0.1)),
        var(--tek-color-statusbar-background-error, rgba(231, 72, 72, 0.1)));
    }
    :host([variant='loading']) {
      background-image: linear-gradient(
        var(--tek-color-statusbar-background-loading, rgba(51, 186, 234, 0.1)),
        var(--tek-color-statusbar-background-loading, rgba(51, 186, 234, 0.1)));
    }

    .text {
      flex: 1 1 0;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: var(--tek-color-statusbar-text-default, #979797);
    }
    :host([status='running']) .text { color: var(--tek-color-statusbar-text-running, #33baea); }
    :host([status='success']) .text { color: var(--tek-color-statusbar-text-success, #42b54c); }
    :host([status='warning']) .text { color: var(--tek-color-statusbar-text-warning, #e0b732); }
    :host([status='error'])   .text { color: var(--tek-color-statusbar-text-error,   #e74848); }

    .flag, .actions {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
    }
  `;

  @property({ reflect: true }) variant: 'default' | 'error' | 'loading' = 'default';
  @property({ reflect: true }) status: 'ready' | 'running' | 'success' | 'warning' | 'error' = 'ready';

  render() {
    return html`
      <div class="flag" part="build-flag"><slot name="build-flag"></slot></div>
      <div class="text" part="status-text" role="status"><slot></slot></div>
      <div class="actions" part="actions"><slot name="actions"></slot></div>
    `;
  }
}

customElements.define('tek-status-bar', TekStatusBar);
