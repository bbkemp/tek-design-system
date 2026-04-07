/**
 * tek-label
 *
 * Figma: DS-v2 → Label (node 780:10209)
 * Font: Geist Regular 12px lh 12px
 * Width: 258px
 * Variants: Optional | CharacterCount | HelperText | Link
 *
 * Token: --color-input-label-default
 *
 * Usage:
 *   <tek-label>Email</tek-label>
 *   <tek-label optional>Email</tek-label>
 *   <tek-label helper-text="Must be 8+ characters">Password</tek-label>
 *   <tek-label char-count="10/52">Message</tek-label>
 */
const STYLES = `
  :host {
    display: flex;
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
    padding: 0;
    width: 258px;
    box-sizing: border-box;
  }

  .text-row {
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 0;
    width: 100%;
    flex-shrink: 0;
  }

  .label-text {
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: 12px;
    min-height: 1px;
    min-width: 1px;
    color: var(--color-input-label-default, #cccccc);
  }

  .optional {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 12px;
    font-weight: 400;
    color: var(--tek-color-neutral-grey-400, #7b7b7b);
    font-style: italic;
  }

  .char-count {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    color: var(--color-input-character-count-default, #cccccc);
    margin-left: auto;
  }

  .helper {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    color: var(--tek-color-neutral-grey-400, #7b7b7b);
    flex-shrink: 0;
    width: 100%;
  }
`;

export class TekLabel extends HTMLElement {
  static get observedAttributes() {
    return ['optional', 'helper-text', 'char-count', 'link'];
  }

  private shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() { this.render(); }
  attributeChangedCallback() { this.render(); }

  private render() {
    const optional = this.hasAttribute('optional');
    const helperText = this.getAttribute('helper-text');
    const charCount = this.getAttribute('char-count');

    this.shadow.innerHTML = `
      <style>${STYLES}</style>
      <div class="text-row">
        <div class="label-text" part="text"><slot></slot></div>
        ${optional ? `<span class="optional">(optional)</span>` : ''}
        ${charCount ? `<span class="char-count">${charCount}</span>` : ''}
      </div>
      ${helperText ? `<div class="helper" part="helper">${helperText}</div>` : ''}
    `;
  }
}

customElements.define('tek-label', TekLabel);
