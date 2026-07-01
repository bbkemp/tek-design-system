---
provenance: observed
class: code-module
service: tek-design-system
snapshot: 2026-05-12-85a6857
commit: 85a6857
commit_date: 2026-05-12
tag: null
module_id: figma-token-push
module_title: "Token Push — Figma Plugin"
module_path: figma-token-push
language: js
package_name: null
package_version: null
applies_to: [tek-design-system]
related_screens: []
related_apis: []
related_hardware: []
related_modules: [packages-tokens]
---

# Token Push — Figma Plugin

## Summary

Local-only Figma plugin that exports all Figma Variables from the DS-v2 file as W3C DTCG token JSON and commits them directly to `bbkemp/tek-design-system`'s `packages/tokens/src/`. One button inside Figma; the rest of the publish pipeline fires automatically via the `publish-tokens` GitHub Action. Auth via a fine-grained PAT stored in Figma's per-plugin `clientStorage` (sandboxed; never transmitted outside the GitHub API).

## Purpose

Closes the Figma-to-code loop. Before this plugin, token changes in Figma required manual JSON editing in `packages/tokens/src/` — slow and error-prone. The plugin is the canonical way to push tokens; hand-editing the JSON files is discouraged because the next push will overwrite local edits. Concurrency guard: the `publish-tokens.yml` workflow has a concurrency group preventing SHA races when multiple pushes happen close together.

## Public surface

### Files (the published "API" of the plugin)

| File | Role |
|---|---|
| `manifest.json` | Figma plugin manifest. Declares the plugin id, name, UI entry, and main-thread entry. |
| `code.js` | Main thread. Reads Figma Variables (all modes, all collections), structures them as DTCG, hands off to `ui.html`. |
| `ui.html` | UI thread. Renders the button, holds the PAT input, sends the JSON to GitHub via `fetch` against the Contents API. |

### Installation (from `figma-token-push/README.md`)

1. Figma Desktop → Menu → Plugins → Development → Import plugin from manifest…
2. Select the `manifest.json` from this folder.
3. Plugin appears under Plugins → Development → Token Push.

### First-time auth

- GitHub fine-grained PAT scoped to `bbkemp/tek-design-system` → Contents: **Read and write**.
- Pasted into the plugin's PAT field once; saved to Figma's per-plugin `clientStorage`.
- Never transmitted off the user's machine except in the `Authorization` header on the GitHub Contents API call.

### Output

Commits four files in one atomic operation to `packages/tokens/src/`:

- `primitives/color.json`
- `primitives/fonts.json` (when changed)
- `primitives/spacing.json` (when changed)
- `primitives/border.json` (when changed)
- `semantic/tokens.json`
- `semantic/tokens.light.json`

The atomic commit ensures `publish-tokens.yml` sees a consistent token set on every fire.

## How to consume

This plugin is **not** consumed as a library; it's installed inside Figma. The "consumer" is the designer or developer with Figma Desktop. The plugin's effect on the repo is a commit to `main` by the user's PAT identity.

If you want to invoke the same end-result from a script (e.g. CI testing), use the Figma REST API to read Variables and commit via the GitHub Contents API — the plugin's logic is the reference.

## Module map

| File | Role |
|---|---|
| `manifest.json` | Plugin config. |
| `code.js` | Main thread — variable read + DTCG transform. |
| `ui.html` | UI thread — button, PAT input, GitHub API commit. |
| `README.md` | Install / auth / usage instructions. |

## Cross-references

- [`packages-tokens`](./packages-tokens.md) — the plugin writes the JSON this package consumes. The package's `src/` is intentionally hand-edit-hostile because the next plugin push overwrites it.
- `publish-tokens.yml` (in `.github/workflows/`, not chunked) — fires on every plugin commit; runs Style Dictionary and publishes `@bbkemp/tokens` to GitHub Packages.

## Confidence notes

- The exact set of `primitives/*.json` files committed depends on what changed in Figma; the list above reflects what's currently in `packages/tokens/src/`.
- The PAT is stored in Figma's `clientStorage` (per the plugin README); confirm by inspecting `ui.html` for the storage call. The README's claim that the PAT "is sandboxed to this plugin only, never transmitted anywhere except the GitHub API" is plausible but should be verified against `ui.html`'s actual `fetch` calls before treating as a security guarantee.
