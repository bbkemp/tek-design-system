---
class: code-module
service: tek-design-system
snapshot: 2026-05-12-85a6857
commit: 85a6857
commit_date: 2026-05-12
tag: null
module_id: packages-ui
module_title: "@bbkemp/ui"
module_path: packages/ui
language: typescript
package_name: "@bbkemp/ui"
package_version: 1.0.12
applies_to: [tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-tokens, packages-ui-button]
---

# @bbkemp/ui

## Summary

The Tek Design System's Web Components package. Twelve framework-agnostic custom elements built directly on the browser's Custom Elements API, styled with `var(--tek-...)` tokens from `@bbkemp/tokens`. Each component lives in `src/<name>/<name>.ts`; `src/index.ts` is the registry. Published to GitHub Packages on every commit to `main` via `publish-ui.yml`. No React; the runtime is Qt, which consumes Web Components via QWebEngineView.

## Purpose

The single shared component library for Tek products. Every interactive primitive a Tek app needs — buttons, inputs, toggles, modals, etc. — lives here. New product UIs compose these components; new bespoke components only ship after a design conversation about whether the pattern is generalizable. Token usage is enforced by repo convention (CLAUDE.md hard constraints, `code-design-qa` audit).

## Public surface

### Exports (per `src/index.ts`)

Importing the package side-effects the custom-element registrations; named exports are the underlying classes for typing.

```ts
import '@bbkemp/ui';                                 // registers all elements
import { TekButton, TekCheckbox, … } from '@bbkemp/ui'; // typed class references
```

| Custom element | Class | Sub-module chunk |
|---|---|---|
| `<tek-button>` | `TekButton` | [packages-ui-button](./packages-ui-button.md) |
| `<tek-checkbox>` | `TekCheckbox` | *pending* |
| `<tek-radio>` | `TekRadio` | *pending* |
| `<tek-toggle>` | `TekToggle` | *pending* |
| `<tek-selector-label>` | `TekSelectorLabel` | *pending* |
| `<tek-selector>` | `TekSelector` | *pending* |
| `<tek-input>` | `TekInput` | *pending* |
| `<tek-label>` | `TekLabel` | *pending* |
| `<tek-text-link>` | `TekTextLink` | *pending* |
| `<tek-character-count>` | `TekCharacterCount` | *pending* |
| `<tek-modal>` | `TekModal` | *pending* |
| `<tek-footer>` | `TekFooter` | *pending* |
| (`TekBaseSelector`) | `TekBaseSelector` | shared base class, not its own element |

### Peer dependencies

- `@bbkemp/tokens` `^1.0.0` — required at consumer install time. The components only style via `var(--tek-...)` custom properties; without the tokens package's CSS, every component falls back to its hardcoded defaults (still styled, but un-themed).

### Build

```bash
npm run build:ui
```

Rollup bundles `src/index.ts` into ESM (`dist/tek-ui.js`), CJS (`dist/tek-ui.cjs`), and a `.d.ts` rollup. TypeScript strict mode is enforced.

## How to consume

```html
<link rel="stylesheet" href="https://unpkg.com/@bbkemp/tokens/dist/tek.complete.css" />
<script type="module" src="https://unpkg.com/@bbkemp/ui/dist/tek-ui.js"></script>

<tek-button>Sign in</tek-button>
<tek-button variant="secondary">Cancel</tek-button>
<tek-input label="Email" type="email"></tek-input>
```

For React-free apps, drop the `<script>` tag and use the elements directly. For TypeScript consumers, import the class for typed event handlers:

```ts
import { TekButton } from '@bbkemp/ui';
document.querySelector('tek-button')?.addEventListener('tek-click', () => { … });
```

## Module map

| Path | Role |
|---|---|
| `src/index.ts` | Element registry. All `export { Tek… } from './…'` lines. |
| `src/base-selector.ts` | Shared base class used by `tek-selector` and similar segmented controls. |
| `src/types.d.ts` | Ambient declarations (HTMLElementTagNameMap augmentation). |
| `src/button/button.ts` | `tek-button` — drilldown chunk: [packages-ui-button](./packages-ui-button.md). |
| `src/checkbox/checkbox.ts` | `tek-checkbox` — pending chunk. |
| `src/radio/radio.ts` | `tek-radio` — pending chunk. |
| `src/toggle/toggle.ts` | `tek-toggle` — pending chunk. |
| `src/selector/selector.ts` | `tek-selector` — pending chunk. |
| `src/selector-label/selector-label.ts` | `tek-selector-label` — pending chunk. |
| `src/input/input.ts` | `tek-input` — pending chunk. |
| `src/label/label.ts` | `tek-label` — pending chunk. |
| `src/text-link/text-link.ts` | `tek-text-link` — pending chunk. |
| `src/character-count/character-count.ts` | `tek-character-count` — pending chunk. |
| `src/modal/modal.ts` | `tek-modal` — pending chunk. |
| `src/footer/footer.ts` | `tek-footer` — pending chunk. |
| `rollup.config.js` | Build config. |
| `package.json` | Manifest. |

## Cross-references

- [`packages-tokens`](./packages-tokens.md) — every component references tokens from this package. Peer dependency at runtime.
- [`packages-ui-button`](./packages-ui-button.md) — first component chunked; locks the per-component format.
- [`qt`](./qt.md) — Qt apps consume these components by hosting them in `QWebEngineView`. The Qt layer's `.qss` files don't apply to web components; they style Qt widgets that sit alongside.

## Confidence notes

- Per-component chunks beyond `packages-ui-button` are pending. The format is locked; running `document-repo` again with the same snapshot id will emit the remaining 11 chunks without re-emitting these top-level ones.
