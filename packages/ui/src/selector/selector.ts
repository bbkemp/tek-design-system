import { css, html, LitElement, type PropertyValues, type TemplateResult } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

/**
 * Composite selector row: a checkbox/radio/toggle control plus a state-synced
 * label. Two modes — self-contained (set `label`, the control is rendered in
 * shadow DOM) or slot-based (slot in your own control + `<tek-selector-label>`).
 * Styling comes from the composed child components.
 *
 * Figma: DS-v2 → Selector (node 7002:378).
 *
 * Usage — self-contained:
 * ```html
 * <tek-selector type="checkbox" label="Enable feature"></tek-selector>
 * <tek-selector type="radio" name="group" label="Option A"></tek-selector>
 * <tek-selector type="toggle" label="Live mode"></tek-selector>
 * ```
 *
 * Usage — slot-based:
 * ```html
 * <tek-selector>
 *   <tek-checkbox></tek-checkbox>
 *   <tek-selector-label>Enable feature</tek-selector-label>
 * </tek-selector>
 * ```
 *
 * @summary Checkbox/radio/toggle control paired with a state-synced label.
 *
 * @attr {boolean} checked - Checked state; forwarded to the inner control and label.
 * @attr {boolean} error - Error state; forwarded to the inner control and label.
 * @attr {boolean} disabled - Disabled state; forwarded to the inner control and label.
 * @attr {string} label - Self-contained mode: label text. When absent, the default slot is used instead.
 * @attr {("checkbox"|"radio"|"toggle")} [type="checkbox"] - Which control to render in self-contained mode.
 * @attr {string} name - Group name, passed through to the inner control (used by `tek-radio` for grouping).
 *
 * @fires {CustomEvent} tek-change - Bubbles up from the inner control when toggled, with `detail.checked`.
 *
 * @slot - Slot-based mode: a selector control (`tek-checkbox`/`tek-radio`/`tek-toggle`) plus a `tek-selector-label`.
 *
 * @csspart inner - The row container div.
 *
 * @cssprop --tek-spacing-s05 - Gap between control and label.
 */
export class TekSelector extends LitElement {
  static styles = css`
    :host { display:inline-flex; gap:0; align-items:center; padding:0; cursor:pointer; user-select:none; }
    :host([type="toggle"]) { padding-top:1px; padding-bottom:1px; }
    .inner { display:flex; gap:var(--tek-spacing-s05,8px); align-items:center; min-height:1px; min-width:1px; padding:0; }
  `;

  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() label: string | null = null;
  @property() type = 'checkbox';
  @property() name: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
    // tek-change from children (composed:true) bubbles up to here — sync host state
    this.addEventListener('tek-change', this._onTekChange);
    this.addEventListener('click', this._onClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('tek-change', this._onTekChange);
    this.removeEventListener('click', this._onClick);
  }

  private _getCtrl(): HTMLElement | null {
    // Check shadow DOM first (self-contained mode), then light DOM (slot mode)
    return (this.renderRoot.querySelector('tek-checkbox,tek-radio,tek-toggle') ||
            this.querySelector('tek-checkbox,tek-radio,tek-toggle')) as HTMLElement | null;
  }

  private _getLbl(): HTMLElement | null {
    return (this.renderRoot.querySelector('tek-selector-label') ||
            this.querySelector('tek-selector-label')) as HTMLElement | null;
  }

  private _onTekChange = (e: Event) => {
    const { checked } = (e as CustomEvent<{ checked: boolean }>).detail;
    this._sync(checked);
  };

  private _onClick = (e: Event) => {
    const ctrl = this._getCtrl() as HTMLElement & { checked: boolean; disabled: boolean; error: boolean } | null;
    if (!ctrl || ctrl.disabled || ctrl.error) return;
    // If click originated inside the control element, let the control handle it
    if (e.composedPath().some((el: EventTarget) => el === ctrl)) return;
    ctrl.checked = !ctrl.checked;
    this._sync(ctrl.checked);
    ctrl.dispatchEvent(new CustomEvent('tek-change', {
      bubbles: true, composed: true, detail: { checked: ctrl.checked }
    }));
  };

  private _sync(checked: boolean) {
    this.checked = checked;
    const lbl = this._getLbl();
    if (lbl) { checked ? lbl.setAttribute('checked', '') : lbl.removeAttribute('checked'); }
  }

  updated(changed: PropertyValues) {
    if (changed.has('checked')) this.setAttribute('aria-checked', String(this.checked));
    // Slot mode: propagate host state to light-DOM children (self-contained
    // mode is handled by template bindings)
    if (this.label === null) {
      const ctrl = this.querySelector('tek-checkbox,tek-radio,tek-toggle');
      const lbl = this.querySelector('tek-selector-label');
      (['checked', 'error', 'disabled'] as const).forEach(attr => {
        if (!changed.has(attr)) return;
        const has = this[attr];
        [ctrl, lbl].forEach(el => {
          if (!el) return;
          has ? el.setAttribute(attr, '') : el.removeAttribute(attr);
        });
      });
    }
  }

  firstUpdated() {
    this.setAttribute('aria-checked', String(this.checked));
    if (this.label === null) {
      // Auto-detect toggle for correct top padding
      requestAnimationFrame(() => {
        if (this.querySelector('tek-toggle')) this.setAttribute('type', 'toggle');
      });
    }
  }

  private _controlTpl(): TemplateResult {
    const name = ifDefined(this.name ?? undefined);
    switch (this.type) {
      case 'radio':
        return html`<tek-radio ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-radio>`;
      case 'toggle':
        return html`<tek-toggle ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-toggle>`;
      default:
        return html`<tek-checkbox ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled} name=${name}></tek-checkbox>`;
    }
  }

  render() {
    if (this.label !== null) {
      // Self-contained: render the control + label entirely in shadow DOM
      return html`<div class="inner" part="inner">
        ${this._controlTpl()}<tek-selector-label ?checked=${this.checked} ?error=${this.error} ?disabled=${this.disabled}>${this.label}</tek-selector-label>
      </div>`;
    }
    // Slot mode: consumer slots in tek-checkbox/radio/toggle + tek-selector-label
    return html`<div class="inner" part="inner"><slot></slot></div>`;
  }
}
customElements.define('tek-selector', TekSelector);
