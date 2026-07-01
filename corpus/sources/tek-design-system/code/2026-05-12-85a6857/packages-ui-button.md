---
provenance: observed
class: code-module
service: tek-design-system
snapshot: 2026-05-12-85a6857
commit: 85a6857
commit_date: 2026-05-12
tag: null
module_id: packages-ui-button
module_title: "tek-button"
module_path: packages/ui/src/button
language: typescript
package_name: "@bbkemp/ui"
package_version: 1.0.12
figma_node: "DS-v2/Button (202:2605)"
applies_to: [tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-ui, packages-tokens]
---

# tek-button

## Summary

Primary action button Web Component. Two variants (Primary, Secondary) with three states (Default, Hover, Inactive). Fully token-driven — colors, spacing, radius, and type all reference `--tek-*` custom properties from `@bbkemp/tokens`. Mapped 1:1 to the Figma Button component in DS-v2 (node `202:2605`).

## Purpose

The Tek Design System's primary call-to-action primitive. Used wherever a discrete action needs visual emphasis: form submit, modal confirm, sign-in. The secondary variant covers lower-emphasis actions (Cancel, "Already have an account?"). Inactive state covers form-validation gating.

## Public surface

### Custom element

`<tek-button>` (class: `TekButton extends HTMLElement`)

### Attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `variant` | `"primary" \| "secondary"` | `"primary"` | Visual emphasis. |
| `inactive` | boolean (presence) | absent | Disabled-look state; pointer events blocked; `aria-disabled="true"`. |
| `disabled` | boolean (presence) | absent | Same visual + behavior as `inactive`. Both supported for ergonomic parity with native `<button disabled>`. |

`observedAttributes`: `['variant', 'inactive', 'disabled']` — re-renders on change.

### Slots

| Slot | Purpose |
|---|---|
| (default) | Button label content. Plain text expected; renders inside a `.label` span. |

### Events

| Event | Detail | When |
|---|---|---|
| `tek-click` | none | Fired on click and on `Space` / `Enter` keydown — when not `inactive` and not `disabled`. Bubbles, composed. Use this instead of the native `click` event for keyboard parity. |

### Tokens consumed

Every visual property is a CSS custom property with a hex / px fallback. The component renders correctly without `@bbkemp/tokens` (fallbacks engage); themed via the tokens package.

- `--tek-color-button-background-{default,hover,inactive}`
- `--tek-color-button-border-{default,hover,inactive}`
- `--tek-color-button-text-{default,hover,inactive}`
- `--tek-spacing-s07` (Primary py), `--tek-spacing-s11` (Primary px)
- `--tek-spacing-s04` (Secondary py), `--tek-spacing-s08` (Secondary px)
- `--tek-borders-radius-full` (pill shape)
- `--tek-fonts-family-archivo`
- `--tek-fonts-heading-size-xs`, `--tek-fonts-heading-line-height-xs` (Primary type)
- `--tek-fonts-text-size-md`, `--tek-fonts-text-line-height-md` (Secondary type)

### Accessibility

- `role="button"` set on connect.
- `tabindex="0"` by default; `tabindex="-1"` when `inactive` or `disabled`.
- `aria-disabled="true"` when `inactive` or `disabled`.
- Focus ring via `:focus-visible` — 2px box-shadow in token color.
- Keyboard activation: Space and Enter both fire `tek-click`.

## How to consume

```html
<!-- include tokens + ui -->
<link rel="stylesheet" href="https://unpkg.com/@bbkemp/tokens/dist/tek.complete.css" />
<script type="module" src="https://unpkg.com/@bbkemp/ui/dist/tek-ui.js"></script>

<!-- primary, default -->
<tek-button>Sign In</tek-button>

<!-- secondary -->
<tek-button variant="secondary">Cancel</tek-button>

<!-- inactive (gated until form is valid) -->
<tek-button inactive>Sign In</tek-button>

<script>
  document.querySelector('tek-button').addEventListener('tek-click', () => {
    console.log('submitted');
  });
</script>
```

## Module map

| File | Role |
|---|---|
| `button.ts` | Class definition, styles, lifecycle. Single-file component. |

## Cross-references

- [`packages-ui`](./packages-ui.md) — parent package; this component is registered via the registry there.
- [`packages-tokens`](./packages-tokens.md) — every visual property is a token reference from this package.
- Figma DS-v2 → Button (node `202:2605`) — design source of truth; managed via `code-connect` skill.

## Confidence notes

- The Secondary variant's font sizes (`13px`, line-height `16px`) come from the top-of-file header comment in `button.ts`; the inline CSS shows `font-size: var(--tek-fonts-text-size-md, 13px)` and `line-height: var(--tek-fonts-text-line-height-md, 16px)`. The header comment also notes `lh 15` for Secondary, which conflicts with the inline `16px` fallback. The inline CSS is the source of truth; the header comment may be stale by 1px.
- `font-variation-settings: 'wdth' 106` is hardcoded for the Primary label; not a token. Worth a design conversation about whether width should be exposed as a token.
- `letter-spacing: 0.32px` (Primary) and `0.13px` (Secondary) are hardcoded; not tokens. Same.
