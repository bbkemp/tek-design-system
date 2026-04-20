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
const STYLES = `
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--tek-spacing-s02, 2px);
    align-items: flex-start;
    padding: 0;
    width: 100%;
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
    font-size: var(--tek-fonts-text-size-md, 13px);
    font-style: normal;
    font-weight: 400;
    justify-content: center;
    line-height: var(--tek-fonts-text-line-height-md, 16px);
    min-height: 1px;
    min-width: 1px;
    color: var(--tek-color-input-label-default, #cccccc);
  }

  .optional {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-sm, 12px);
    font-weight: 400;
    color: var(--tek-color-input-helper-default, #7b7b7b);
    font-style: italic;
  }

  .char-count {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-xs, 10px);
    font-weight: 400;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-input-character-count-default, #cccccc);
    margin-left: auto;
  }

  .helper {
    font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    font-size: var(--tek-fonts-text-size-xs, 10px);
    font-weight: 400;
    line-height: var(--tek-fonts-text-line-height-xs, 12px);
    color: var(--tek-color-input-helper-default, #7b7b7b);
    flex-shrink: 0;
    width: 100%;
  }

  .helper--error {
    color: var(--tek-color-input-text-error, #e74848);
  }
`;

export class TekLabel extends HTMLElement {
  static get observedAttributes() {
    return ['optional', 'helper-text', 'char-count', 'link', 'helper-state'];
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
      ${helperText ? `<div class="helper${this.getAttribute('helper-state') === 'error' ? ' helper--error' : ''}" part="helper">${helperText}</div>` : ''}
    `;
  }
}

customElements.define('tek-label', TekLabel);
