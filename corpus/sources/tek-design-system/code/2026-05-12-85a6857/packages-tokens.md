---
class: code-module
service: tek-design-system
snapshot: 2026-05-12-85a6857
commit: 85a6857
commit_date: 2026-05-12
tag: null
module_id: packages-tokens
module_title: "@bbkemp/tokens"
module_path: packages/tokens
language: js
package_name: "@bbkemp/tokens"
package_version: 1.0.16
applies_to: [tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-ui, qt, figma-token-push]
---

# @bbkemp/tokens

## Summary

The Tek Design System's design-token package. Style Dictionary v3 build with a custom DTCG parser and a `size/px` transform; ingests Figma-Variable-exported JSON and emits CSS custom properties (dark default + light overrides), a JS object, and Qt-consumable C++ headers via the sibling `qt/` module. Token JSON in `src/` is written by the Token Push Figma plugin and is intentionally hand-edit-hostile.

## Purpose

Single source of truth for every color, spacing, font, border, and radius in the Tek Design System. Downstream consumers — `@bbkemp/ui`, Qt apps via the Qt translation layer, and any Tek product — reference token CSS custom properties (`var(--tek-...)` ) rather than hardcoded values. The package is published to GitHub Packages on every commit to `main` via the `publish-tokens.yml` workflow; no local publishes.

## Public surface

### Exports (per `package.json` `exports` field)

| Subpath | What you get |
|---|---|
| `.` (default) | `dist/tek.tokens.js` — JS object of all semantic tokens (dark mode). |
| `./css` | `dist/tek.tokens.css` — semantic tokens as CSS custom properties (dark mode default). |
| `./css/combined` | `dist/tek.tokens.combined.css` — dark + light in one file. |
| `./css/complete` | `dist/tek.complete.css` — primitives + semantic + everything. |
| `./css/light` | `dist/tek.tokens.light.css` — light-mode overrides only. |
| `./primitives/css` | `dist/tek.primitives.css` — raw palette as `--tek-primitive-*` properties. |
| `./primitives/js` | `dist/tek.primitives.js` — same as a JS object. |
| `./json` | `src/semantic/tokens.json` — raw DTCG JSON (dark, the default). |
| `./json/light` | `src/semantic/tokens.light.json` — raw DTCG JSON (light overrides). |

### Token families (primitives → semantic)

- **Colors** — `colors.neutral.{100,200,…,950}` plus brand and accent ramps in primitives; aliased semantically as `color.input.border.focus`, `color.modal.background.default`, etc.
- **Spacing** — `spacing.s01` through `spacing.sNN` numeric scale in primitives; rarely re-aliased semantically.
- **Borders** — `borders.radius.NN`, `borders.width.NN`.
- **Fonts** — family, size (heading + text scales), weight, line-height, letter-spacing in primitives.

Naming convention: JSON path `color.input.border.focus` → CSS custom property `--tek-color-input-border-focus`.

### Build

```bash
npm run build:tokens
```

Produces everything under `dist/`. The publish workflow runs the same command before publishing.

## How to consume

```html
<link rel="stylesheet" href="https://unpkg.com/@bbkemp/tokens/dist/tek.complete.css" />
<style>
  .my-button {
    background: var(--tek-color-button-background-default, #1e1e1e);
    padding: var(--tek-spacing-s07, 12px) var(--tek-spacing-s11, 24px);
    border-radius: var(--tek-borders-radius-full, 9999px);
  }
</style>
```

Always include a fallback (`var(--token-name, <hardcoded>)`). The `add-token` skill handles adding new tokens.

## Module map

| File / dir | Role |
|---|---|
| `package.json` | Manifest. Style Dictionary as a devDependency. |
| `build.js` | Custom Style Dictionary entry point with DTCG parser and `size/px` transform. |
| `src/primitives/{color,fonts,spacing,border}.json` | Raw values. Hand-edit-hostile; written by Token Push plugin. |
| `src/semantic/tokens.json` | Dark-mode aliases (default). Same shape as `tokens.light.json`. |
| `src/semantic/tokens.light.json` | Light-mode overrides. **Must mirror every key in `tokens.json`** — the publish pipeline does not warn about missing light counterparts. |
| `dist/` | Build artifacts. Gitignored locally; published to GitHub Packages by CI. |

## Cross-references

- [`packages-ui`](./packages-ui.md) — the primary in-repo consumer of these tokens. Every Web Component's CSS references `var(--tek-...)` properties from this package.
- [`qt`](./qt.md) — translates the same tokens into Qt-consumable C++ headers and `.qss` stylesheets.
- [`figma-token-push`](./figma-token-push.md) — the Figma plugin that writes the JSON under `src/`.

## Confidence notes

- The full set of named token primitives in `src/primitives/*.json` is not enumerated here; the `Token families` section summarizes the categories only. For an exhaustive list, read the JSON files directly or query `var(--tek-*)` usages across `packages/ui/src/`.
- The `package_version` reflects `package.json` at the snapshot commit; the actual *published* version on GitHub Packages may lag if a publish workflow hasn't run yet.
