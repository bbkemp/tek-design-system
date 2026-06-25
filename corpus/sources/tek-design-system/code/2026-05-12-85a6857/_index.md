# tek-design-system — code snapshot 2026-05-12-85a6857

**Service:** `tek-design-system` · **Commit:** `85a6857` (2026-05-12) · **Tag:** none

Generated **2026-05-12** by the `document-repo` skill from the local checkout at `/Users/<…>/tek-design-system/` (this repo, processed against itself as the format-locking self-test).

## Module map

```
tek-design-system/
├── packages/
│   ├── tokens/                  → packages-tokens.md
│   └── ui/                      → packages-ui.md
│       └── src/button/          → packages-ui-button.md  (drilldown; one chunk per published component)
├── qt/                          → qt.md
├── figma-token-push/            → figma-token-push.md
└── (non-module dirs: scripts/, prototypes/, drafts/, design-audit/, docs/, audits/, corpus/, img/, wpf/)
```

## Modules in this snapshot

| Module | Path | Language | Published as | Version |
|---|---|---|---|---|
| [packages-tokens](./packages-tokens.md) | `packages/tokens` | js + json + css | `@bbkemp/tokens` | 1.0.16 |
| [packages-ui](./packages-ui.md) | `packages/ui` | typescript | `@bbkemp/ui` | 1.0.12 |
| [packages-ui-button](./packages-ui-button.md) | `packages/ui/src/button` | typescript | (sub-module of `@bbkemp/ui`) | — |
| [qt](./qt.md) | `qt` | qt-cpp + qss | not published (vendored) | tracks `@bbkemp/tokens` |
| [figma-token-push](./figma-token-push.md) | `figma-token-push` | js + html | not published (local Figma plugin) | — |

Validation pass: 5 modules. Remaining `tek-*` components in `packages/ui/src/` (checkbox, radio, toggle, selector, selector-label, input, label, text-link, character-count, modal, footer) follow the same pattern as `packages-ui-button` and are *pending* — the per-component chunk format is locked by `packages-ui-button.md`.

## Non-module directories

| Path | What it is | Why no chunk |
|---|---|---|
| `scripts/` | Build / housekeeping scripts (`export-skills.mjs`) | No public surface; used internally by repo workflows. |
| `prototypes/` | Throwaway HTML / TSX experiments | Not part of the published contract; volatile. |
| `drafts/` | Work-in-progress design exploration | Same. |
| `design-audit/` | Past audits handed off from CD | Snapshot work product, not source. |
| `docs/` | Markdown architecture docs | Already RAG-readable as-is; no transformation needed. |
| `audits/` | Disposable audit reports produced by audit skills | By design, never enters the corpus. |
| `corpus/` | This corpus | Self-reference; would create a circular chunk. |
| `img/` | Static assets (logos, video) | No public surface. |
| `wpf/` | Planned WPF translation layer (not yet built) | Empty placeholder. |
