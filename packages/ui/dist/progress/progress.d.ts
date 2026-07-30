import { LitElement } from 'lit';
/**
 * Determinate / indeterminate progress bar with label + meta slots. The
 * indeterminate stripe is CSS-keyframes only (no JS animation) and freezes
 * under prefers-reduced-motion, both per spec; `paused` freezes the stripe
 * too. Emits `tek-complete` when value reaches max (spec's
 * `progress-complete`, renamed to the DS event convention — see audit).
 *
 * Figma: DS-v2 → Progress (node 8413:560).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §5.
 *
 * Usage:
 * ```html
 * <tek-progress value="40" max="100" tone="success">
 *   <span slot="label">Uploading firmware</span>
 *   <span slot="meta">00:12 remaining</span>
 * </tek-progress>
 * ```
 *
 * @summary Determinate/indeterminate progress bar with label and meta slots.
 *
 * @attr {("determinate"|"indeterminate")} [variant="determinate"] - Bar mode.
 * @attr {number} [value=0] - Current value (determinate mode).
 * @attr {number} [max=100] - Maximum value.
 * @attr {("sm"|"md"|"lg")} [size="md"] - Track height: 4 / 8 / 12px.
 * @attr {("default"|"success"|"warning"|"error")} [tone="default"] - Fill color tone.
 * @attr {boolean} paused - Pauses the indeterminate stripe animation.
 *
 * @fires {CustomEvent} tek-complete - Fired when a determinate `value` reaches `max`, with `detail.value`. Bubbles, composed.
 *
 * @slot label - Text above the track (Geist sm).
 * @slot meta - Right side of the meta row below the track (mono xs); the left side shows the percentage.
 *
 * @csspart label - The label row.
 * @csspart track - The bar track.
 * @csspart fill - The bar fill.
 * @csspart meta - The meta row.
 *
 * @cssprop --tek-spacing-s03 - Gap between rows and within the meta row.
 * @cssprop --tek-color-progress-track-background - Track background.
 * @cssprop --tek-color-progress-track-border - Track border color.
 * @cssprop --tek-color-progress-fill-default - Fill color (success/warning/error variants per tone).
 * @cssprop --tek-color-progress-label-default - Label text color.
 * @cssprop --tek-color-progress-meta-default - Meta row text color.
 * @cssprop --tek-borders-width-01 - Track border width.
 * @cssprop --tek-borders-radius-02 - Track corner radius.
 * @cssprop --tek-fonts-family-geist - Label font family.
 * @cssprop --tek-fonts-family-mono - Meta row font family.
 * @cssprop --tek-fonts-text-size-sm - Label type size (with matching line-height token).
 * @cssprop --tek-fonts-text-size-xs - Meta row type size (with matching line-height token).
 */
export declare class TekProgress extends LitElement {
    static styles: import("lit").CSSResult;
    variant: 'determinate' | 'indeterminate';
    value: number;
    max: number;
    size: 'sm' | 'md' | 'lg';
    tone: 'default' | 'success' | 'warning' | 'error';
    paused: boolean;
    private get pct();
    willUpdate(): void;
    updated(changed: Map<string, unknown>): void;
    render(): import("lit-html").TemplateResult<1>;
}
