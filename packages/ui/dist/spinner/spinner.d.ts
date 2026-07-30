import { LitElement } from 'lit';
/**
 * Loading spinner: a 270-degree arc rotating 360deg/1.2s. Frozen when
 * `paused` or when the user sets prefers-reduced-motion (spec requirement).
 * Announces as `role="status"` with a default "Loading" aria-label.
 *
 * Figma: DS-v2 → Spinner (node 8401:391).
 * Spec: audits/design-additions/2026-06-09-ds-v2-rr-component-additions §7.
 *
 * Usage:
 * ```html
 * <tek-spinner size="lg" tone="success"></tek-spinner>
 * ```
 *
 * @summary Rotating 270-degree arc loading spinner.
 *
 * @attr {("sm"|"md"|"lg")} [size="md"] - Diameter: 16 / 24 / 40px (spacing tokens s09/s11/s15).
 * @attr {("default"|"success"|"warning"|"error")} [tone="default"] - Arc color tone (color/spinner/*).
 * @attr {boolean} paused - Pauses the rotation.
 *
 * @cssprop --tek-spacing-s09 - sm diameter.
 * @cssprop --tek-spacing-s11 - md diameter.
 * @cssprop --tek-spacing-s15 - lg diameter.
 * @cssprop --tek-color-spinner-default - Arc color (success/warning/error variants per tone).
 * @cssprop --tek-borders-width-04 - Stroke width for sm/md (spec's 2.5px md snapped to the 2px token).
 * @cssprop --tek-borders-width-05 - Stroke width for lg.
 */
export declare class TekSpinner extends LitElement {
    static styles: import("lit").CSSResult;
    size: 'sm' | 'md' | 'lg';
    tone: 'default' | 'success' | 'warning' | 'error';
    paused: boolean;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
}
