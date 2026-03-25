/**
 * @tek/ui — TypeScript declarations
 * Extends HTMLElement typings for all tek custom elements.
 */

interface TekSelectorEventDetail {
  checked: boolean;
}

interface TekChangeEvent extends CustomEvent {
  detail: TekSelectorEventDetail;
}

declare global {
  interface HTMLElementTagNameMap {
    'tek-checkbox':       TekCheckboxElement;
    'tek-radio':          TekRadioElement;
    'tek-toggle':         TekToggleElement;
    'tek-selector-label': TekSelectorLabelElement;
    'tek-selector':       TekSelectorElement;
  }

  interface HTMLElementEventMap {
    'tek-change': TekChangeEvent;
  }
}

interface TekBaseProps {
  checked: boolean;
  error: boolean;
  disabled: boolean;
}

interface TekCheckboxElement extends HTMLElement, TekBaseProps {}
interface TekRadioElement extends HTMLElement, TekBaseProps {
  name: string;
}
interface TekToggleElement extends HTMLElement, TekBaseProps {}
interface TekSelectorLabelElement extends HTMLElement, TekBaseProps {}
interface TekSelectorElement extends HTMLElement, TekBaseProps {
  type: 'checkbox' | 'radio' | 'toggle';
}

export {};
