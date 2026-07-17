/**
 * tek-character-count
 * Figma: DS-v2 → CharacterCount (node 7011:143)
 * States: Default | Focus | Filled | Error | Warning
 * Font: Geist Regular 10px, lh 15px
 *
 * Tokens:
 *   --tek-color-input-character-count-default|focus|filled|error|warning
 *
 * Usage:
 *   <tek-character-count current="10" max="52"></tek-character-count>
 *   <tek-character-count current="50" max="52" state="warning"></tek-character-count>
 *   <tek-character-count current="53" max="52" state="error"></tek-character-count>
 */
import { LitElement } from 'lit';
export declare class TekCharacterCount extends LitElement {
    static styles: import("lit").CSSResult;
    current: number;
    max: number;
    state: string;
    render(): import("lit-html").TemplateResult<1>;
}
