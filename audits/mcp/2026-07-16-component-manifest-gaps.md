# MCP Component Manifest — Gap Audit

**Date:** 2026-07-16
**As of:** `main` @ b432258 (post ship-the-link)
**Scope:** What `get_component` / `list_components` on the Tek MCP Endpoint serve vs. what `packages/ui/src/` actually contains.
**Trigger:** A live query for `tek-button` returned the `variant` attribute with no allowed values — the answer had to be completed by reading source. External consumers (Broc, Hermes, any MCP client) cannot do that fallback.
**Related:** [docs/mcp-server-plan.md](../../docs/mcp-server-plan.md) (P1/P2 hardening), CLAUDE.md "What's in flight" → MCP endpoint hardening.
**Status:** P0-1, P0-2, P1-1, P1-2, P1-3, and P2-1 fixed on this branch (class-level JSDoc across all 12 components + private-member stripping in ingest). Remaining open: P2-2 (corpus embedding), P2-3 (eval cases + CI description gate), and the TS-union-types question (Open decision 2).

---

## How the pipeline works (and where it loses information)

```
packages/ui/src/**/*.ts
        │  cem analyze (@custom-elements-manifest/analyzer)
        ▼
apps/mcp/generated/custom-elements.json     ← ALL loss happens here
        │  scripts/ingest.ts (verbatim passthrough → ds_components)
        ▼
Neon → lib/tools.ts get_component / list_components (verbatim passthrough)
```

The ingest ([ingest.ts:206](../../apps/mcp/scripts/ingest.ts)) and tools ([tools.ts:95](../../apps/mcp/lib/tools.ts)) faithfully serve whatever the manifest contains. The manifest is thin because the CEM analyzer only extracts what's expressed in JSDoc conventions it understands (`@attr`, `@fires`, `@slot`, `@cssprop`, class-level doc comments) — and the components document themselves in **file-level header comments** that CEM ignores entirely.

**Consequence: every fix is a source-annotation fix.** No pipeline, ingest, or tool code needs to change for P0/P1. Re-ingestion is automatic on push to `main` (`ingest.yml`).

## What the manifest serves today — 12 components

Across all 12 custom elements: **0** descriptions, **0** attribute types/defaults/allowed values, **0** slots, **0** CSS custom properties, and **2 of 6** event emitters captured.

| Component | Header doc in source | Manifest description | Attr values documented | Events (source → manifest) | Slots (source → manifest) | Tokens used → `@cssprop` |
|---|---|---|---|---|---|---|
| `tek-button` | ✅ rich | — | ✗ `variant`: `primary\|secondary` | `tek-click` → ✅ | 1 → 0 | 19 → 0 |
| `tek-character-count` | ✅ rich | — | ✗ `state`: `warning\|error\|…` | — | — | 8 → 0 |
| `tek-checkbox` | ❌ none | — | — | `tek-change` → ❌ **missed** | — | 6 → 0 |
| `tek-footer` | ✅ rich (incl. slots) | — | — | — | 2 → 0 | 3 → 0 |
| `tek-input` | ✅ rich | — | ✗ `state`: 5 values; `height`: `single\|double\|triple` | `tek-input` → ✅ | — | 18 → 0 |
| `tek-label` | ✅ rich | — | ✗ `helper-state` values | — | 1 → 0 | 11 → 0 |
| `tek-modal` | ✅ rich (incl. 3 slots) | — | — | — | 3 → 0 | 14 → 0 |
| `tek-radio` | ❌ none | — | — | `tek-change` → ❌ **missed** | — | 6 → 0 |
| `tek-selector` | ✅ rich | — | ✗ `type`: `checkbox\|radio\|toggle` | `tek-change` (re-dispatch) → ❌ **missed** | 1 → 0 | 1 → 0 |
| `tek-selector-label` | ❌ none | — | — | — | 1 → 0 | 4 → 0 |
| `tek-text-link` | ✅ rich | — | `href`, `target` (pass-through) | — | 1 → 0 | 3 → 0 |
| `tek-toggle` | ❌ none | — | — | `tek-change` (inherited) → ❌ **missed** | — | 7 → 0 |

Shared base: `base-selector.ts` (dispatches `tek-change` for its subclasses; correctly excluded from the served list since it registers no tag, but its subclasses inherit an event the manifest never mentions).

## The gaps, ranked

### P0 — the endpoint gives **wrong or unusable API answers** today

| # | Gap | Why it's P0 |
|---|---|---|
| P0-1 | `tek-change` missing on `tek-checkbox`, `tek-radio`, `tek-toggle`, `tek-selector` | 4 of 6 event-emitting components appear to emit **nothing**. A consumer wiring up a checkbox from the MCP answer alone cannot make it work. Fix: `@fires tek-change` JSDoc on each class (CEM does not surface base-class `dispatchEvent` calls). |
| P0-2 | No allowed values on enum-like attributes (`variant`, `state`, `height`, `type`, `helper-state`) | The exact failure that triggered this audit. Attribute name without its value set is not an API. Fix: `@attr {("primary"\|"secondary")} variant - …` annotations. |

### P1 — answers are **incomplete**; consumer must guess or ask a human

| # | Gap | Fix |
|---|---|---|
| P1-1 | 0/12 class descriptions; no usage examples served | Move each file-header block into a class-level JSDoc (CEM reads it verbatim, including usage snippets). Add headers for the 4 components that have none: `checkbox`, `radio`, `toggle`, `selector-label`. |
| P1-2 | 0 slots served; 7 components use slots (`tek-modal`'s 3 named slots are its entire composition API) | `@slot` annotations. |
| P1-3 | Served `declaration` includes private members (`_shadow`, `_render`) and duplicated empty description fields | Strip `privacy: "private"` members and normalize in `loadComponents()` (only ingest-side change in this audit). |

### P2 — optimization / discoverability (feeds mcp-server-plan hardening)

| # | Gap | Fix |
|---|---|---|
| P2-1 | Token↔component link invisible: components consume 100+ `--tek-*` custom properties, manifest carries none | `@cssprop` per consumed token. Also the natural attach point for the planned XAML-keys-in-token-results work. |
| P2-2 | Components are not semantically searchable — `search_corpus` covers corpus chunks only; component knowledge is reachable solely via exact `get_component`/`list_components` calls | Embed a generated per-component summary (description + attrs + events + slots) into the vector corpus at ingest. |
| P2-3 | No regression gate | Add exact-lookup eval cases to `apps/mcp/eval` ("what values does `tek-button` `variant` accept", "what event does `tek-checkbox` fire"), and a CI check that every custom element has a non-empty description. |

## Recommended fix order

1. **One PR, JSDoc-only, all 12 components** — P0-1, P0-2, P1-1, P1-2 land together since they touch the same doc blocks. Zero pipeline changes; next push to `main` re-ingests. Roughly 15–30 annotated lines per component, with `button.ts` converted first as the pattern-lock reference.
2. **Small ingest PR** — P1-3 (strip private members).
3. **P2 items as separate PRs**, sequenced with the mcp-server-plan P1/P2 hardening (eval gate in CI is already planned there; P2-3 rides along).

Verification for step 1: `npm run manifest --workspace=apps/mcp`, diff `generated/custom-elements.json`, confirm descriptions/values/events/slots present for all 12; then run the eval harness against a preview deployment per CLAUDE.md.

## Open decisions

1. **Single source of truth for component docs.** Recommend converting the file-header comments into the class-level JSDoc (one block, CEM-readable) rather than maintaining both. Requires touching every component file — flag for Broc's awareness since it churns `packages/ui` diffs.
2. **Should allowed values also become TS union types?** `variant: 'primary' | 'secondary'` getters in `types.ts` would give strict-mode enforcement in addition to docs. More invasive; could ride the parked ui type-declaration work instead of this pass.
3. **New audit family.** This file creates `audits/mcp/` alongside `design-additions`/`competitive`/`prototype` — [audits/README.md](../README.md) doesn't define it yet. Bless it (and update the README) or relocate this snapshot.
4. **P2-2 embedding scope.** Whether component summaries belong in the same vector corpus as observed product documentation, or as a separate searchable surface — provenance semantics ('observed' vs generated-from-code) need a call.
