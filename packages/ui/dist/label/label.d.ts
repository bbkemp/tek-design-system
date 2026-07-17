/**
 * tek-label
 *
 * Figma: DS-v2 → Label (node 780:10209)
 * Font: Geist Regular 13px lh 16px (text/size/md)
 * Variants: Optional | CharacterCount | HelperText | Link
 *
 * Tokens:
 *   --tek-color-input-label-default
 *   --tek-color-input-character-count-default
 *   --tek-color-input-helper-default
 *
 * Usage:
 *   <tek-label>Email</tek-label>
 *   <tek-label optional>Email</tek-label>
 *   <tek-label helper-text="Must be 8+ characters">Password</tek-label>
 *   <tek-label char-count="10/52">Message</tek-label>
 */
import { LitElement } from 'lit';
export declare class TekLabel extends LitElement {
    static styles: import("lit").CSSResult;
    optional: boolean;
    helperText: string | null;
    charCount: string | null;
    link: string | null;
    helperState: string | null;
    render(): import("lit-html").TemplateResult<1>;
}
