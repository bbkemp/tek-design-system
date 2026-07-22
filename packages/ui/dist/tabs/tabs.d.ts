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
import { LitElement } from 'lit';
import type { TekTab } from '../tab/tab.js';
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
