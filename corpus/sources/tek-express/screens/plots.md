---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: plots
screen_title: Plots
screen_type: graph
image: plots.jpg
source_photo: uploads/photos/18. Plots.png
navigation_path: [Plots]
parent_screens: []
child_screens: []
applies_to: [tek-express]
related_screens: [results, setup-test-selection]
related_hardware: []
related_modules: []
controls:
  - id: nav-plots
    label: Plots
    type: tab
    state: active
    action: Side-nav, on Plots panel.
  - id: select-test-label
    label: "Select Test"
    type: indicator
    state: enabled
    action: Label preceding the test-selector dropdown.
  - id: select-test-dropdown
    label: ""
    type: dropdown
    state: enabled
    action: Dropdown listing the available plotted tests. Current value "Period using DPOJET (Acquire-Analyze Combi...)".
  - id: plot-toolbar
    label: ""
    type: button
    state: enabled
    action: Row of small icon buttons above the plot — typical plot controls (save, print, zoom, pan, cursor, reset zoom, etc.). Specific labels not legible at this downscale.
  - id: plot-title
    label: "Period(DPOJET)"
    type: indicator
    state: active
    action: Centered title above the plot. Names the test whose waveform is rendered.
  - id: plot-area
    label: ""
    type: readout
    state: active
    action: The waveform plot itself. Yellow trace plus a black overlay (likely a measurement-region highlight). Grid behind.
  - id: y-axis
    label: "Amplitude (V)"
    type: indicator
    state: active
    action: Y-axis label. Values from approximately -300 mV to 1.2 V (judging by visible tick marks).
  - id: x-axis
    label: "Time (sec)"
    type: indicator
    state: active
    action: X-axis label. Visible tick values run from -10 ns to 30 ns.
  - id: cursor-readout
    label: ""
    type: readout
    state: active
    action: Floating cursor-readout box on the plot. Shows x1, x2, ΔX, y1, y2, ΔY pairs from the active cursor placement.
  - id: cursor-values
    label: "x1: 12/42 nsec / x2: 12/42 nsec / ΔX: 0 sec / y1: 429.21 mV / y2: 429.21 mV / ΔY: 0 V"
    type: readout
    state: active
    action: The active cursor coordinates and deltas. Cursors are at the same position in this screenshot (ΔX = ΔY = 0).
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail Start.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause, idle.
  - id: status-bar
    label: "Completed"
    type: indicator
    state: active
    action: Status bar reads "Completed" with a populated green progress bar — the run finished before this screenshot.
---

# Plots

## Purpose

Per-test waveform visualization. After a run completes, plotted tests (those with `Acquire-Analyze` workflow) appear in `select-test-dropdown` for inspection. The plot exposes a standard scope-style cursor system (`cursor-readout`) for measuring time and amplitude deltas, plus a toolbar of plot actions. The audit PDF describes an *empty* state ("Plots Not Available" centred, two states: unsaved asterisk vs. saved); this screenshot captures the *populated* state with a DPOJET period plot.

## Controls inventory

**Chrome regions** — see [setup-dut.md](./setup-dut.md). `nav-plots` active.

**Top strip** — `select-test-label` ("Select Test") + `select-test-dropdown` (currently "Period using DPOJET (Acquire-Analyze Combi...)"). Below, `plot-toolbar` (small icon buttons: save, print, zoom, pan, cursor, reset; exact labels not legible).

**Plot region** — `plot-title` ("Period(DPOJET)") centered above the plot area. `plot-area` shows the waveform: yellow trace, black overlay (region of interest), with grid. `y-axis` ("Amplitude (V)") on the left running roughly -300 mV → 1.2 V. `x-axis` ("Time (sec)") on the bottom running roughly -10 ns → 30 ns.

`cursor-readout` floats inside the plot showing `x1`, `x2`, `ΔX`, `y1`, `y2`, `ΔY`. In this screenshot the cursors are collocated (`ΔX = 0 sec`, `ΔY = 0 V`).

## State variations

- **Empty / no plot available** (per audit PDF) — "Plots Not Available" centred in panel; no controls. Two sub-states: unsaved (`*` in title bar) vs. saved (no asterisk).
- **Single test plotted** (this screenshot) — DPOJET period waveform with cursors collocated.
- **Multiple plotted tests** — `select-test-dropdown` lists each one; switching re-renders the plot.
- **Cursors apart** — `ΔX` and `ΔY` become non-zero; the cursor-readout updates live as cursors are dragged.

## Visible text (verbatim)

Top: `Select Test` · `Period using DPOJET (Acquire-Analyze Combi...)`.

Plot: `Period(DPOJET)` · `Amplitude (V)` · `Time (sec)`.

Cursor readout: `x1: 12/42 nsec` · `x2: 12/42 nsec` · `ΔX: 0 sec` · `y1: 429.21 mV` · `y2: 429.21 mV` · `ΔY: 0 V`.

Status: `Completed`.

## Confidence notes

- The cursor coordinates `12/42 nsec` look like an OCR artifact for `12.42 nsec` (period/slash confusion at the downscale resolution). Verify on the live build.
- The toolbar icons are not labeled in the screenshot at this resolution. Inferred from convention (save/print/zoom/pan/cursor/reset).
- The Y-axis range appears to be -300 mV to 1.2 V approximately. The exact ticks are not enumerated; per-tick labels are at the legibility edge.
- The title bar shows `(Untitled)*` — same runtime-detach behaviour as the running-test view (a saved session ID would replace "Untitled" after the run is committed).

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Plots.
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — empty-state placeholder pattern (audit captured empty state; corpus screenshot has populated waveform).
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — Select Test dropdown.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/18. Plots.png`. Populated state — the audit's empty state is documented in audit prose but not in this corpus screen-photo set.
