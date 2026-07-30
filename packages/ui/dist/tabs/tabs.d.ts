import { LitElement } from 'lit';
import type { TekTab } from '../tab/tab.js';
/**
 * Tab group with two shipped structures (underline deferred per spec):
 * horizontal — a sub-tab pill group whose container mirrors the input trough —
 * and vertical — app-nav with a left accent bar. Keyboard: arrows move focus
 * among tabs (roving tabindex), Home/End jump, Enter/Space activates the
 * focused tab (manual activation).
 *
 * Figma: DS-v2 → v2.02 → Tabs (node 8393:395), Tab (8393:377).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §3.
 *
 * Usage:
 * ```html
 * <tek-tabs orientation="horizontal" aria-label="Report views">
 *   <tek-tab value="config" active>Configuration</tek-tab>
 *   <tek-tab value="view">View Settings</tek-tab>
 * </tek-tabs>
 * ```
 *
 * @summary Tab group: horizontal pill sub-tabs or vertical accent-bar app-nav.
 *
 * @attr {'horizontal'|'vertical'} orientation - horizontal renders tabs as pills; vertical renders the nav style.
 * @attr {'pill'|'underline'|'accent'|''} variant - Optional override; "underline" is deferred and falls back (with a console warning) to the orientation default.
 *
 * @slot - The `<tek-tab>` children.
 *
 * @fires {CustomEvent} tek-change - Fired on selection with `detail.value` and `detail.previousValue` (the spec's `tab-change` renamed to the tek-* event convention). Bubbles, composed.
 *
 * @cssprop --tek-color-tabs-container-background-default - Horizontal pill-container background.
 * @cssprop --tek-color-tabs-container-border-default - Horizontal pill-container border color.
 * @cssprop --tek-spacing-s02 - Horizontal gap and container padding.
 * @cssprop --tek-spacing-s03 - Vertical gap between nav tabs.
 * @cssprop --tek-borders-radius-full - Horizontal container corner radius.
 * @cssprop --tek-borders-width-01 - Horizontal container border width.
 */
export declare class TekTabs extends LitElement {
    static styles: import("lit").CSSResult;
    orientation: 'horizontal' | 'vertical';
    variant: 'pill' | 'underline' | 'accent' | '';
    private get tabs();
    private get enabledTabs();
    get value(): string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(): void;
    private get resolvedStyle();
    private syncTabs;
    updated(): void;
    select(tab: TekTab): void;
    private onClick;
    private onKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
