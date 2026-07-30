import { LitElement } from 'lit';
/**
 * Titled bordered container for grouping form controls. The title sits
 * IN-FLOW inside the box as the first row (Bryan, 2026-07-22 — matches the
 * Tek Express reference; the border-straddling fieldset legend was rejected).
 * Always titled, per spec; title type is the Archivo heading-xs style.
 * Background aliases color/canvas/background/raised.
 *
 * Figma: DS-v2 → GroupBox (node 8408:456).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §1.
 *
 * Usage:
 * ```html
 * <tek-group-box label="Execution Options">
 *   <tek-selector type="checkbox" label="Enable Logging"></tek-selector>
 * </tek-group-box>
 * ```
 *
 * @summary Titled bordered container for grouping form controls.
 *
 * @attr {string} label - Legend text — always shown; the spec forbids untitled group boxes.
 * @attr {("default"|"error")} [variant="default"] - Error turns the border and legend red.
 * @attr {boolean} disabled - Dims the box, blocks pointer events, sets `aria-disabled`.
 *
 * @slot - Grouped content (form controls).
 *
 * @csspart box - The bordered container.
 * @csspart legend - The title row.
 *
 * @cssprop --tek-spacing-s06 - Gap between legend and content.
 * @cssprop --tek-spacing-s09 - Box padding.
 * @cssprop --tek-color-groupbox-background-default - Box background.
 * @cssprop --tek-color-groupbox-border-default - Box border color.
 * @cssprop --tek-color-groupbox-border-error - Border and legend color in error state.
 * @cssprop --tek-color-groupbox-legend-default - Legend text color.
 * @cssprop --tek-borders-width-01 - Border width.
 * @cssprop --tek-borders-radius-05 - Corner radius.
 * @cssprop --tek-fonts-family-archivo - Legend font family.
 * @cssprop --tek-fonts-heading-size-xs - Legend type size (with matching line-height token).
 */
export declare class TekGroupBox extends LitElement {
    static styles: import("lit").CSSResult;
    /** Legend text — always shown; the spec forbids untitled group boxes. */
    label: string;
    variant: 'default' | 'error';
    disabled: boolean;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
