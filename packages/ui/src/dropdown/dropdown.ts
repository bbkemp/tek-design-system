/**
 * tek-dropdown
 *
 * Figma: DS-v2 → v2.02 → Dropdown (node 8387:386), DropdownMenu (8386:347)
 * Blueprint: Shoelace sl-select (API/keyboard/focus model) + Lion listbox
 * semantics, reimplemented tek-native. Focus stays on the trough and the
 * highlighted option is marked `current` (aria-activedescendant cannot cross
 * shadow boundaries to light-DOM options).
 *
 * Positioning: Floating UI (flip + width-sync + max-height), per the ADR-0001
 * framework budget "Lit + Floating UI when overlays arrive" — this is the
 * first overlay.
 *
 * States mirror the Figma variants: Default / Focus / Filled / Disabled /
 * Error / Open.
 *
 * Tokens:
 *   --tek-color-dropdown-background-default
 *   --tek-color-dropdown-border-{default,focus,filled,disabled,error}
 *   --tek-color-dropdown-text-{default,filled,disabled,error}
 *   --tek-color-dropdown-menu-{background,border,shadow}-default
 *   --tek-spacing-s02..s06 · --tek-borders-radius-03 · --tek-borders-width-01
 *   --tek-fonts-family-geist · --tek-fonts-text-size-md · line-height-md
 *
 * Usage:
 *   <tek-label>Channel</tek-label>
 *   <tek-dropdown placeholder="Select a channel">
 *     <tek-dropdown-item value="ch1">Channel 1</tek-dropdown-item>
 *     <tek-dropdown-item value="ch2">Channel 2</tek-dropdown-item>
 *   </tek-dropdown>
 *
 * Events: tek-change {value}, tek-open, tek-close
 *
 * @summary Single-select dropdown with a floating listbox menu; composes `tek-dropdown-item` children.
 *
 * @attr {string} value - Currently selected option's value.
 * @attr {string} [placeholder="Select an option"] - Trough text shown when no option is selected.
 * @attr {string} name - Name for the hidden form-associated input rendered when set.
 * @attr {boolean} disabled - Disables the trough and blocks opening.
 * @attr {boolean} error - Applies the error visual state.
 * @attr {boolean} open - Whether the menu is open; reflects.
 *
 * @fires {CustomEvent<{value: string}>} tek-change - Fired when the selected value changes. Bubbles, composed.
 * @fires {CustomEvent} tek-open - Fired when the menu opens. Bubbles, composed.
 * @fires {CustomEvent} tek-close - Fired when the menu closes. Bubbles, composed.
 *
 * @slot - `tek-dropdown-item` options.
 *
 * @csspart trough - The clickable combobox trough.
 * @csspart display - The selected/placeholder text.
 * @csspart caret - The caret icon.
 * @csspart menu - The floating listbox menu.
 *
 * @cssprop --tek-color-dropdown-background-default - Trough background.
 * @cssprop --tek-color-dropdown-border-default - Trough border, default state.
 * @cssprop --tek-color-dropdown-border-focus - Trough border, focus/open state.
 * @cssprop --tek-color-dropdown-border-error - Trough border, error state.
 * @cssprop --tek-color-dropdown-border-disabled - Trough border, disabled state.
 * @cssprop --tek-color-dropdown-text-default - Placeholder text color.
 * @cssprop --tek-color-dropdown-text-filled - Selected-value text color.
 * @cssprop --tek-color-dropdown-text-error - Text color, error state.
 * @cssprop --tek-color-dropdown-text-disabled - Text color, disabled state.
 * @cssprop --tek-color-icons-default - Caret icon color.
 * @cssprop --tek-color-dropdown-menu-background-default - Menu background.
 * @cssprop --tek-color-dropdown-menu-border-default - Menu border.
 * @cssprop --tek-color-dropdown-menu-shadow-default - Menu drop-shadow.
 * @cssprop --tek-spacing-s02 - Menu padding; floating gap below the trough.
 * @cssprop --tek-spacing-s03 - Trough icon gap.
 * @cssprop --tek-spacing-s05 - Trough vertical padding.
 * @cssprop --tek-spacing-s06 - Trough left padding.
 * @cssprop --tek-borders-radius-03 - Trough and menu corner radius.
 * @cssprop --tek-borders-width-01 - Trough and menu border width.
 * @cssprop --tek-fonts-family-geist - Trough font family.
 * @cssprop --tek-fonts-text-size-md - Trough font size.
 * @cssprop --tek-fonts-text-line-height-md - Trough line height.
 */
import { css, html, LitElement, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { autoUpdate, computePosition, flip, offset, size } from '@floating-ui/dom';
import type { TekDropdownItem } from '../dropdown-item/dropdown-item.js';

export class TekDropdown extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      box-sizing: border-box;
      font-family: var(--tek-fonts-family-geist, system-ui, sans-serif);
    }

    .trough {
      display: flex;
      align-items: center;
      gap: var(--tek-spacing-s03, 4px);
      width: 100%;
      height: 36px;
      padding: var(--tek-spacing-s05, 8px) var(--tek-spacing-s03, 4px)
               var(--tek-spacing-s05, 8px) var(--tek-spacing-s06, 10px);
      box-sizing: border-box;
      background: var(--tek-color-dropdown-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-dropdown-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      cursor: pointer;
      outline: none;
    }

    .trough:focus-visible,
    :host([open]) .trough {
      border-color: var(--tek-color-dropdown-border-focus, #ffffff);
    }

    :host([error]) .trough {
      border-color: var(--tek-color-dropdown-border-error, #e74848);
    }

    :host([disabled]) .trough {
      border-color: var(--tek-color-dropdown-border-disabled, #454545);
      cursor: not-allowed;
    }

    .display {
      flex: 1 1 0;
      min-width: 0;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: var(--tek-fonts-text-size-md, 13px);
      line-height: var(--tek-fonts-text-line-height-md, 16px);
      color: var(--tek-color-dropdown-text-default, #979797);
    }

    :host([data-filled]) .display { color: var(--tek-color-dropdown-text-filled, #cccccc); }
    :host([error]) .display { color: var(--tek-color-dropdown-text-error, #ffffff); }
    :host([disabled]) .display { color: var(--tek-color-dropdown-text-disabled, #454545); }

    .caret {
      flex-shrink: 0;
      display: flex;
      color: var(--tek-color-icons-default, #ffffff);
      transition: transform 120ms ease;
    }
    :host([open]) .caret { transform: rotate(180deg); }
    :host([disabled]) .caret { color: var(--tek-color-dropdown-text-disabled, #454545); }

    .menu {
      position: absolute;
      z-index: 10;
      display: none;
      flex-direction: column;
      gap: 0;
      padding: var(--tek-spacing-s02, 2px);
      box-sizing: border-box;
      background: var(--tek-color-dropdown-menu-background-default, #252525);
      border: var(--tek-borders-width-01, 0.5px) solid var(--tek-color-dropdown-menu-border-default, #7b7b7b);
      border-radius: var(--tek-borders-radius-03, 5px);
      box-shadow: 0 4px 12px var(--tek-color-dropdown-menu-shadow-default, rgba(0, 0, 0, 0.2));
      overflow-y: auto;
    }
    :host([open]) .menu { display: flex; }
  `;

  @property() value = '';
  @property() placeholder = 'Select an option';
  @property() name = '';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) error = false;
  @property({ type: Boolean, reflect: true }) open = false;

  @state() private displayLabel = '';

  @query('.trough') private trough!: HTMLElement;
  @query('.menu') private menu!: HTMLElement;

  private cleanupFloating?: () => void;
  private typeBuffer = '';
  private typeTimer?: ReturnType<typeof setTimeout>;

  private get options(): TekDropdownItem[] {
    return Array.from(this.querySelectorAll<TekDropdownItem>('tek-dropdown-item'));
  }

  private get enabledOptions(): TekDropdownItem[] {
    return this.options.filter(o => !o.disabled);
  }

  private get currentOption(): TekDropdownItem | undefined {
    return this.options.find(o => o.current);
  }

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('mousedown', this.onDocumentMouseDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('mousedown', this.onDocumentMouseDown);
    this.stopFloating();
  }

  willUpdate(): void {
    const selected = this.options.find(o => o.value === this.value && this.value !== '');
    this.displayLabel = selected ? selected.getTextLabel() : '';
    if (selected) this.setAttribute('data-filled', '');
    else this.removeAttribute('data-filled');
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has('open')) {
      if (this.open) this.startFloating();
      else this.stopFloating();
    }
  }

  private syncSelection(): void {
    for (const o of this.options) o.selected = o.value === this.value && this.value !== '';
  }

  private setCurrent(option?: TekDropdownItem): void {
    for (const o of this.options) o.current = o === option;
    option?.scrollIntoView({ block: 'nearest' });
  }

  private show(): void {
    if (this.disabled || this.open) return;
    this.open = true;
    this.syncSelection();
    this.setCurrent(this.options.find(o => o.selected) ?? this.enabledOptions[0]);
    this.dispatchEvent(new CustomEvent('tek-open', { bubbles: true, composed: true }));
  }

  private hide(returnFocus = true): void {
    if (!this.open) return;
    this.open = false;
    this.setCurrent(undefined);
    this.dispatchEvent(new CustomEvent('tek-close', { bubbles: true, composed: true }));
    if (returnFocus) this.trough?.focus({ preventScroll: true });
  }

  private select(option: TekDropdownItem): void {
    if (option.disabled) return;
    const changed = this.value !== option.value;
    this.value = option.value;
    this.syncSelection();
    this.hide();
    if (changed) {
      this.dispatchEvent(new CustomEvent('tek-change', {
        detail: { value: this.value }, bubbles: true, composed: true
      }));
    }
  }

  private startFloating(): void {
    // gap below the trough = s02, read from the token so the value stays tokenized
    const gap = parseFloat(getComputedStyle(this).getPropertyValue('--tek-spacing-s02')) || 2;
    this.cleanupFloating = autoUpdate(this.trough, this.menu, () => {
      computePosition(this.trough, this.menu, {
        placement: 'bottom-start',
        middleware: [
          offset(gap),
          flip(),
          size({
            apply: ({ rects, availableHeight }) => {
              Object.assign(this.menu.style, {
                width: `${rects.reference.width}px`,
                maxHeight: `${Math.max(96, Math.min(availableHeight - 8, 320))}px`
              });
            }
          })
        ]
      }).then(({ x, y }) => {
        Object.assign(this.menu.style, { left: `${x}px`, top: `${y}px` });
      });
    });
  }

  private stopFloating(): void {
    this.cleanupFloating?.();
    this.cleanupFloating = undefined;
  }

  private onDocumentMouseDown = (e: MouseEvent): void => {
    if (this.open && !e.composedPath().includes(this)) this.hide(false);
  };

  private onTroughClick(): void {
    if (this.disabled) return;
    this.open ? this.hide() : this.show();
  }

  private onMenuClick(e: Event): void {
    const option = (e.target as HTMLElement).closest?.('tek-dropdown-item') as TekDropdownItem | null;
    if (option && this.options.includes(option)) this.select(option);
  }

  private moveCurrent(delta: number): void {
    const opts = this.enabledOptions;
    if (!opts.length) return;
    const cur = this.currentOption;
    let idx = cur ? opts.indexOf(cur) + delta : delta > 0 ? 0 : opts.length - 1;
    idx = (idx + opts.length) % opts.length;
    this.setCurrent(opts[idx]);
  }

  private typeahead(key: string): void {
    clearTimeout(this.typeTimer);
    this.typeBuffer += key.toLowerCase();
    this.typeTimer = setTimeout(() => { this.typeBuffer = ''; }, 1000);
    const match = this.enabledOptions.find(o => o.getTextLabel().toLowerCase().startsWith(this.typeBuffer));
    if (match) {
      if (this.open) this.setCurrent(match);
      else this.select(match);
    }
  }

  private onKeyDown(e: KeyboardEvent): void {
    if (this.disabled) return;
    const { key } = e;

    if (key === 'Escape') {
      if (this.open) { e.preventDefault(); this.hide(); }
      return;
    }
    if (key === 'Enter' || (key === ' ' && this.typeBuffer === '')) {
      e.preventDefault();
      if (!this.open) this.show();
      else if (this.currentOption) this.select(this.currentOption);
      return;
    }
    if (key === 'ArrowDown' || key === 'ArrowUp') {
      e.preventDefault();
      if (!this.open) { this.show(); return; }
      this.moveCurrent(key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if (key === 'Home' || key === 'End') {
      if (this.open) {
        e.preventDefault();
        const opts = this.enabledOptions;
        this.setCurrent(key === 'Home' ? opts[0] : opts[opts.length - 1]);
      }
      return;
    }
    if (key === 'Tab') {
      if (this.open) this.hide(false);
      return;
    }
    if (key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      this.typeahead(key);
    }
  }

  render() {
    return html`
      <div
        class="trough"
        part="trough"
        role="combobox"
        tabindex=${this.disabled ? '-1' : '0'}
        aria-expanded=${this.open ? 'true' : 'false'}
        aria-haspopup="listbox"
        aria-disabled=${this.disabled ? 'true' : 'false'}
        @click=${this.onTroughClick}
        @keydown=${this.onKeyDown}
      >
        <span class="display" part="display">${this.displayLabel || this.placeholder}</span>
        <span class="caret" part="caret" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="menu" part="menu" role="listbox" @click=${this.onMenuClick}>
        <slot @slotchange=${this.syncSelection}></slot>
      </div>
      ${this.name ? html`<input type="hidden" name=${this.name} .value=${this.value}>` : nothing}
    `;
  }
}

customElements.define('tek-dropdown', TekDropdown);
