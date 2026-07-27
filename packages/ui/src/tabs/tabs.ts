/**
 * tek-tabs
 *
 * Figma: DS-v2 → v2.02 → Tabs (node 8393:395), Tab (8393:377)
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3
 *
 * Tab group. Two shipped structures (underline deferred per spec):
 *   horizontal (pill)  — sub-tab pill group; container mirrors the input trough
 *   vertical (accent)  — app-nav with left accent bar
 *
 * Keyboard (spec): arrows move focus among tabs (roving tabindex), Home/End
 * jump, Enter/Space activates the focused tab. Manual activation.
 * Emits tek-change {value, previousValue} — the spec's `tab-change` renamed
 * to match the DS event convention (tek-*); flagged in the wave-1 audit.
 *
 * Tokens:
 *   --tek-color-tabs-container-background-default · border-default
 *   --tek-spacing-s02, s03 · --tek-borders-radius-full · --tek-borders-width-01
 *
 * Usage:
 *   <tek-tabs orientation="horizontal" aria-label="Report views">
 *     <tek-tab value="config" active>Configuration</tek-tab>
 *     <tek-tab value="view">View Settings</tek-tab>
 *   </tek-tabs>
 */
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import type { TekTab } from '../tab/tab.js';

export class TekTabs extends LitElement {
  static styles = css`
    :host {
      display: inline-flex;
      box-sizing: border-box;
    }

    :host([orientation='horizontal']) {
      flex-direction: row;
      gap: var(--tek-spacing-s02, 2px);
      padding: var(--tek-spacing-s02, 2px);
      background: var(--tek-color-tabs-container-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-tabs-container-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-full, 9999px);
    }

    :host([orientation='vertical']) {
      flex-direction: column;
      gap: var(--tek-spacing-s03, 4px);
    }
  `;

  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property() variant: 'pill' | 'underline' | 'accent' | '' = '';

  private get tabs(): TekTab[] {
    return Array.from(this.querySelectorAll<TekTab>('tek-tab'));
  }

  private get enabledTabs(): TekTab[] {
    return this.tabs.filter(t => !t.disabled);
  }

  get value(): string {
    return this.tabs.find(t => t.active)?.value ?? '';
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'tablist');
    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.onKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.onKeyDown);
  }

  willUpdate(): void {
    this.setAttribute('aria-orientation', this.orientation);
    if (this.variant === 'underline') {
      console.warn('<tek-tabs> variant="underline" is deferred (rr-audit §3); falling back to the orientation default.');
      this.variant = '';
    }
  }

  private get resolvedStyle(): 'pill' | 'nav' {
    return this.orientation === 'vertical' ? 'nav' : 'pill';
  }

  private syncTabs = (): void => {
    const active = this.tabs.find(t => t.active) ?? this.enabledTabs[0];
    for (const t of this.tabs) {
      t.setAttribute('data-style', this.resolvedStyle);
      t.tabIndex = t === active && !t.disabled ? 0 : -1;
    }
  };

  updated(): void {
    this.syncTabs();
  }

  select(tab: TekTab): void {
    if (tab.disabled || tab.active) return;
    const previousValue = this.value;
    for (const t of this.tabs) t.active = t === tab;
    this.syncTabs();
    this.dispatchEvent(new CustomEvent('tek-change', {
      detail: { value: tab.value, previousValue }, bubbles: true, composed: true
    }));
  }

  private onClick = (e: Event): void => {
    const tab = (e.target as HTMLElement).closest?.('tek-tab') as TekTab | null;
    if (tab && this.tabs.includes(tab)) this.select(tab);
  };

  private onKeyDown = (e: KeyboardEvent): void => {
    const tab = (e.target as HTMLElement).closest?.('tek-tab') as TekTab | null;
    if (!tab) return;
    const tabs = this.enabledTabs;
    const idx = tabs.indexOf(tab);
    const { key } = e;

    if (key === 'Enter' || key === ' ') {
      e.preventDefault();
      this.select(tab);
      return;
    }
    let next: TekTab | undefined;
    if (key === 'ArrowRight' || key === 'ArrowDown') next = tabs[(idx + 1) % tabs.length];
    else if (key === 'ArrowLeft' || key === 'ArrowUp') next = tabs[(idx - 1 + tabs.length) % tabs.length];
    else if (key === 'Home') next = tabs[0];
    else if (key === 'End') next = tabs[tabs.length - 1];
    if (next) {
      e.preventDefault();
      for (const t of this.tabs) t.tabIndex = t === next ? 0 : -1;
      next.focus();
    }
  };

  render() {
    return html`<slot @slotchange=${this.syncTabs}></slot>`;
  }
}

customElements.define('tek-tabs', TekTabs);
