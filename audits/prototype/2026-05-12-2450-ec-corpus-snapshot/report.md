# Prototype QA: 2450-EC corpus — DS-v2 mapping snapshot

**Source:** `corpus/sources/2450-ec/screens/{home,graph}.md` · **Audited:** 2026-05-12 · **DS version:** DS-v2 (key `3wbYstse9TYKlPtCPpZH5X`)

This is the **first disposable snapshot** of the DS-v2 mapping for the 2450-EC corpus. The mappings previously lived inline in each screen's markdown; they were extracted here when the corpus refactored to separate observation (durable) from interpretation (snapshot, on-demand). Future snapshots: rerun `prototype-qa` against the corpus when DS-v2 evolves or a fresh redesign briefing is needed.

## Summary

| Bucket | Count | Share |
|---|---|---|
| Existing match | 2 | 18% |
| Close match | 2 | 18% |
| New (proposed primitive) | 5 | 45% |
| New (out of scope for web) | 2 | 18% |

**DS gap signal:** 11 distinct control patterns across two screens; only 2 are fully covered by DS-v2 as-is. The instrumentation UI surfaces five recurring patterns that are not in DS-v2 today (`tek-readout`, `tek-status-pill`, `tek-dropdown`, `tek-axis`, `tek-plot`) — all five will recur across the broader Tek instrument family. `tek-plot` is the most strategically valuable; every instrument we onboard will need a plotting primitive.

## Existing matches

DS-v2 covers these as-is.

| Element | DS component | Notes |
|---|---|---|
| `function-header`, `azero-indicator`, `range-label` (home), labels in general | `tek-label` | Read-only labels; drop-in. |
| `range-auto-toggle`, `source-auto-toggle` (home) | `tek-toggle` | Drop-in. |

## Close matches

DS-v2 has something nearby but it's not a 1:1 fit.

| Element | Closest DS component | Gap |
|---|---|---|
| `source-level`, `source-limit` (home) | `tek-input` (numeric variant) | The on-screen affordance is "value-as-tile, tap to open editor" — closer to a stepper/tile than a focused input. Candidate name: **`tek-numeric-tile`**. Worth a design conversation before extending `tek-input` vs. forking. |
| `tab-graph`, `tab-data`, `tab-scale`, `tab-trigger` (graph) | `tek-selector` (segmented control) | Depends on whether `tek-selector` covers the active-tab + content-routing pattern or only "pick one of N values." Candidate name: **`tek-tabs`** if a new primitive; otherwise extend `tek-selector`. |

## New (no DS match — proposed primitives)

| Element | Candidate name | Disposition |
|---|---|---|
| `status-mode`, `status-trigger` (home + graph) | **`tek-status-pill`** | `add to DS` — label + state color + optional chevron, tappable. Recurs across every status bar in the instrument family. |
| `status-buffer`, `status-script`, `buffer-name` (home + graph) | **`tek-dropdown`** (or `tek-select`) | `add to DS` — tap-to-open picker menu pattern. Could be `tek-button` + `tek-modal` composition, but common enough to deserve its own primitive. |
| `primary-readout`, `source-readback`, `stat-left`, `stat-right` (home + graph) | **`tek-readout`** | `add to DS` — large monospaced numeric display with auto-fitting digit width and unit suffix. Core to any instrumentation UI. A "small" variant covers the buffer-row statistics on Graph. |
| `y-axis`, `x-axis` (graph) | **`tek-axis`** | `add to DS` — labeled tick scale for plots. Recurs on every graph-style screen. |
| `waveform` (graph) | **`tek-plot`** | `add to DS` — line/scatter plot with autoscaling, zoom, cursors. Highest-leverage new primitive: every instrument we onboard will need it. |

## New (out of scope for web)

Hardware bezel controls. Documented in the corpus for completeness but no `tek-*` primitive is needed unless a virtual front-panel emulator is ever built. In that hypothetical, the family would be: `tek-hardkey`, `tek-knob`, `tek-terminal`, `tek-status-led`.

| Element | Disposition |
|---|---|
| `btn-home`, `btn-menu`, `btn-quickset`, `btn-help`, `btn-power`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger` | `bespoke - keep in source-of-truth only`. Replace with web-native equivalents (nav, toolbar, keyboard shortcuts) when designing the dashboard panel. |
| `control-knob`, `terminals`, `usb-port`, `output-led` | `bespoke - keep in source-of-truth only`. Physical I/O; no web counterpart. |

## Recommended next steps

1. **Design conversation on `tek-numeric-tile` vs. extending `tek-input`** — the close-match split is a design call, not a code call.
2. **Design conversation on `tek-tabs` vs. extending `tek-selector`** — same shape.
3. **Spec the five new primitives in DS-v2** in order of cross-product leverage: `tek-plot` → `tek-readout` → `tek-axis` → `tek-status-pill` → `tek-dropdown`.
4. **Rerun this audit** when DS-v2 ships any of the proposed primitives, or when a third 2450-EC screen lands in the corpus. Update `DS version` in the header and create a new dated folder; do not overwrite this snapshot.

## Provenance and disposability

This snapshot was extracted in commit `<this-PR>` from the inline `## Design system mapping` sections of `home.md` and `graph.md` as a one-time preservation. Going forward, these mappings live only here in `audits/`, not in the corpus. The corpus describes the legacy device as-is; the audit interprets the corpus against the design system at a point in time. When DS evolves, only the audit needs regenerating — the corpus stays put.
