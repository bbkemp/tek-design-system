/**
 * tek-badge
 *
 * Figma: DS-v2 → v2.02 → Badge (node 8400:377)
 * Small status label. Types map to color/badge/<type>/background+text.
 * Type style: text/regular/xs (Geist).
 *
 * Usage: <tek-badge type="success">Passing</tek-badge>
 */
import { LitElement } from 'lit';
export declare const BADGE_TYPES: readonly ["neutral", "blue", "success", "warning", "error"];
export type BadgeType = (typeof BADGE_TYPES)[number];
export declare class TekBadge extends LitElement {
    static styles: import("lit").CSSResult;
    type: BadgeType;
    willUpdate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
