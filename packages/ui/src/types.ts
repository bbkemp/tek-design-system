/**
 * @bbkemp/ui — shared type declarations
 *
 * Maps every tek-* tag to its component class so TypeScript consumers get
 * correct types from document.createElement('tek-…') and querySelector,
 * and types the custom events the components dispatch.
 *
 * Type-only module: compiles to an empty JS module, referenced from index.ts
 * so the global augmentations ship with the package.
 */
import type { TekBaseSelector } from './base-selector.js';
import type { TekCheckbox } from './checkbox/checkbox.js';
import type { TekRadio } from './radio/radio.js';
import type { TekToggle } from './toggle/toggle.js';
import type { TekSelectorLabel } from './selector-label/selector-label.js';
import type { TekSelector } from './selector/selector.js';
import type { TekInput } from './input/input.js';
import type { TekButton } from './button/button.js';
import type { TekLabel } from './label/label.js';
import type { TekTextLink } from './text-link/text-link.js';
import type { TekCharacterCount } from './character-count/character-count.js';
import type { TekModal } from './modal/modal.js';
import type { TekFooter } from './footer/footer.js';
import type { TekMarkdown } from './markdown/markdown.js';

/** Detail payload of the `tek-change` event fired by selectors. */
export interface TekChangeEventDetail {
  checked: boolean;
}
export type TekChangeEvent = CustomEvent<TekChangeEventDetail>;

/** Detail payload of the `tek-input` event fired by tek-input. */
export interface TekInputEventDetail {
  value: string;
}
export type TekInputEvent = CustomEvent<TekInputEventDetail>;

/** Fired by tek-button on activation (click, Space, Enter). No detail. */
export type TekClickEvent = CustomEvent<unknown>;

/** Allowed values of the enum-like tek-* attributes, re-exported from their components. */
export type { TekButtonVariant } from './button/button.js';
export type { TekCharacterCountState } from './character-count/character-count.js';
export type { TekInputState, TekInputHeight } from './input/input.js';
export type { TekSelectorType } from './selector/selector.js';
export type { TekLabelHelperState } from './label/label.js';

declare global {
  interface HTMLElementTagNameMap {
    'tek-checkbox':        TekCheckbox;
    'tek-radio':           TekRadio;
    'tek-toggle':          TekToggle;
    'tek-selector-label':  TekSelectorLabel;
    'tek-selector':        TekSelector;
    'tek-input':           TekInput;
    'tek-button':          TekButton;
    'tek-label':           TekLabel;
    'tek-text-link':       TekTextLink;
    'tek-character-count': TekCharacterCount;
    'tek-modal':           TekModal;
    'tek-footer':          TekFooter;
    'tek-markdown':        TekMarkdown;
  }

  interface HTMLElementEventMap {
    'tek-change': TekChangeEvent;
    'tek-input':  TekInputEvent;
    'tek-click':  TekClickEvent;
  }
}

export type { TekBaseSelector };
