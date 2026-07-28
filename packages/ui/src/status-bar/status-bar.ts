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
 *
 * @summary 32px bottom application bar with build-flag, status text, and actions regions.
 *
 * @attr {("default"|"error"|"loading")} [variant="default"] - Tint layered over the bar background.
 * @attr {("ready"|"running"|"success"|"warning"|"error")} [status="ready"] - Status text color.
 *
 * @slot build-flag - Pre-release pill (e.g. `tek-badge`); production simply omits it.
 * @slot - Status text.
 * @slot actions - Right-aligned controls.
 *
 * @csspart build-flag - The build-flag region.
 * @csspart status-text - The status text region.
 * @csspart actions - The actions region.
 *
 * @cssprop --tek-color-statusbar-background-default - Bar background.
 * @cssprop --tek-color-statusbar-background-error - Bar background tint, error variant.
 * @cssprop --tek-color-statusbar-background-loading - Bar background tint, loading variant.
 * @cssprop --tek-color-statusbar-border-default - Bar top border.
 * @cssprop --tek-color-statusbar-text-default - Status text color, default.
 * @cssprop --tek-color-statusbar-text-running - Status text color, running.
 * @cssprop --tek-color-statusbar-text-success - Status text color, success.
 * @cssprop --tek-color-statusbar-text-warning - Status text color, warning.
 * @cssprop --tek-color-statusbar-text-error - Status text color, error.
 * @cssprop --tek-spacing-s03 - Build-flag/actions internal gap.
 * @cssprop --tek-spacing-s05 - Bar internal gap and vertical padding.
 * @cssprop --tek-spacing-s07 - Bar horizontal padding.
 * @cssprop --tek-borders-width-01 - Bar top border width.
 * @cssprop --tek-fonts-family-mono - Status text font family.
 * @cssprop --tek-fonts-text-size-xs - Status text font size.
 * @cssprop --tek-fonts-text-line-height-xs - Status text line height.
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

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
