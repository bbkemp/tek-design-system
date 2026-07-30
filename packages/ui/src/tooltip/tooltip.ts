import { css, html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';

/**
 * Wraps its target (default slot) and shows a text panel on hover or focus
 * after a short delay, positioned with Floating UI (offset + flip + shift);
 * no arrow by design. Blueprint: Shoelace sl-tooltip's hover/focus model,
 * tek-native. A11y: the panel has role=tooltip, linked from the wrapper via
 * aria-describedby; Escape hides, symmetrically for pointer and keyboard.
 *
 * Figma: DS-v2 → v2.02 → Tooltip (node 8400:378).
 *
 * Usage:
 * ```html
 * <tek-tooltip content="Saves the current setup">
 *   <tek-button>Save</tek-button>
 * </tek-tooltip>
 * ```
 *
 * @summary Hover/focus tooltip panel around a slotted target.
 *
 * @attr {string} content - Tooltip text; with empty content the panel never shows.
 * @attr {'top'|'bottom'|'left'|'right'} placement - Preferred panel side; flips when it doesn't fit.
 * @attr {number} delay - Show delay in milliseconds (default 300).
 * @attr {boolean} open - Whether the panel is visible; managed by the component.
 * @attr {boolean} disabled - Prevents the panel from showing.
 *
 * @slot - The target element the tooltip describes.
 *
 * @csspart panel - The tooltip panel.
 *
 * @cssprop --tek-color-tooltip-background-default - Panel background (color/tooltip/* alias the same primitives as the dropdown panel).
 * @cssprop --tek-color-tooltip-border-default - Panel border color.
 * @cssprop --tek-color-tooltip-shadow-default - Panel drop-shadow color.
 * @cssprop --tek-color-tooltip-text-default - Panel text color.
 * @cssprop --tek-spacing-s03 - Vertical padding; also the target-to-panel gap.
 * @cssprop --tek-spacing-s05 - Horizontal padding.
 * @cssprop --tek-borders-width-01 - Panel border width.
 * @cssprop --tek-borders-radius-03 - Panel corner radius.
 * @cssprop --tek-fonts-family-geist - Panel font family.
 * @cssprop --tek-fonts-text-size-sm - Panel type size (with the matching line-height token).
 */
export class TekTooltip extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .panel {
      position: absolute;
      z-index: 20;
      display: none;
      width: max-content;
      max-width: 280px;
      padding: var(--tek-spacing-s03, 4px) var(--tek-spacing-s05, 8px);
      box-sizing: border-box;
      background: var(--tek-color-tooltip-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-tooltip-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      box-shadow: 0 4px 12px var(--tek-color-tooltip-shadow-default, rgba(0, 0, 0, 0.2));
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
      font-size: var(--tek-fonts-text-size-sm, 12px);
      line-height: var(--tek-fonts-text-line-height-sm, 12px);
      color: var(--tek-color-tooltip-text-default, #cccccc);
      pointer-events: none;
    }
    :host([open]) .panel { display: block; }
  `;

  @property() content = '';
  @property() placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @property({ type: Number }) delay = 300;
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean }) disabled = false;

  @query('.panel') private panel!: HTMLElement;

  private showTimer?: ReturnType<typeof setTimeout>;
  private cleanupFloating?: () => void;
  private static idCounter = 0;
  private panelId = `tek-tooltip-${++TekTooltip.idCounter}`;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('mouseenter', this.scheduleShow);
    this.addEventListener('mouseleave', this.hide);
    this.addEventListener('focusin', this.scheduleShow);
    this.addEventListener('focusout', this.hide);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.hide();
    this.removeEventListener('mouseenter', this.scheduleShow);
    this.removeEventListener('mouseleave', this.hide);
    this.removeEventListener('focusin', this.scheduleShow);
    this.removeEventListener('focusout', this.hide);
  }

  private scheduleShow = (): void => {
    if (this.disabled || !this.content) return;
    clearTimeout(this.showTimer);
    this.showTimer = setTimeout(() => this.show(), this.delay);
  };

  private show(): void {
    if (this.open) return;
    this.open = true;
    this.setAttribute('aria-describedby', this.panelId);
    // Escape must dismiss even when focus is elsewhere (hover-open case)
    document.addEventListener('keydown', this.onKeyDown);
    const gap = parseFloat(getComputedStyle(this).getPropertyValue('--tek-spacing-s03')) || 4;
    this.updateComplete.then(() => {
      this.cleanupFloating = autoUpdate(this, this.panel, () => {
        computePosition(this, this.panel, {
          placement: this.placement,
          middleware: [offset(gap), flip(), shift({ padding: 4 })]
        }).then(({ x, y }) => {
          Object.assign(this.panel.style, { left: `${x}px`, top: `${y}px` });
        });
      });
    });
  }

  private hide = (): void => {
    clearTimeout(this.showTimer);
    if (!this.open) return;
    this.open = false;
    this.removeAttribute('aria-describedby');
    document.removeEventListener('keydown', this.onKeyDown);
    this.cleanupFloating?.();
    this.cleanupFloating = undefined;
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && this.open) this.hide();
  };

  render() {
    return html`
      <slot></slot>
      <div class="panel" part="panel" id=${this.panelId} role="tooltip">${this.content}</div>
    `;
  }
}

customElements.define('tek-tooltip', TekTooltip);
