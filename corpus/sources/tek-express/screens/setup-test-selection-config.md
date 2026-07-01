---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-test-selection-config
screen_title: Setup › Test Selection — Configure (per-test)
screen_type: dialog
image: setup-test-selection-config.jpg
source_photo: uploads/photos/5. Setup-Test Selection_Config_Acquire tab.png
navigation_path: [Setup, Test Selection, Configure]
parent_screens: [setup-test-selection]
child_screens: [setup-test-selection-limits-editor]
applies_to: [tek-express]
related_screens: [setup-test-selection, setup-test-selection-limits-editor]
related_hardware: []
related_modules: []
controls:
  - id: mode-compliance
    label: Compliance Mode
    type: radio
    state: enabled
    action: Selects the suite-defined compliance configuration. Read-only knobs locked to suite defaults.
  - id: mode-user-defined
    label: User Defined Mode
    type: radio
    state: active
    action: Selects user-editable mode. Active in this screenshot — the lower form is editable.
  - id: btn-jump-test-selection
    label: Test Selection
    type: button
    state: enabled
    action: Jump button to return to the parent Test Selection screen (setup-test-selection.md).
  - id: btn-jump-limits-editor
    label: Limits Editor
    type: button
    state: enabled
    action: Opens the Limits Editor sub-dialog (setup-test-selection-limits-editor.md).
  - id: tab-global-settings
    label: Global Settings
    type: tab
    state: enabled
    action: Global-scope settings tab. Inactive in this screenshot.
  - id: tab-measurements
    label: Measurements
    type: tab
    state: active
    action: Measurements tab — the form shown below is scoped to the selected measurement in the test tree.
  - id: test-tree-mini
    label: ""
    type: readout
    state: active
    action: Mini test tree mirroring the parent Test Selection screen. Shows SCOPE Measurements › Period using SCOPE, DPOJET Measurements › Period using DPOJET, Autoset › Autoset Tester.
  - id: subtab-acquire
    label: Acquire
    type: tab
    state: active
    action: Sub-tab inside Measurements — Acquire parameters. Active in this screenshot.
  - id: subtab-analyze
    label: Analyze
    type: tab
    state: enabled
    action: Sub-tab inside Measurements — Analyze parameters (RISE / FALL levels and hysteresis).
  - id: horizontal-scale
    label: Horizontal Scale
    type: dropdown
    state: enabled
    action: Time-base scale dropdown. Value "us/div" (units: microseconds per division).
  - id: record-length
    label: Record Length
    type: input
    state: enabled
    action: Numeric input for waveform record length.
  - id: vertical-scale
    label: Vertical Scale
    type: dropdown
    state: enabled
    action: Volts-per-division dropdown. Current "200 mV/Div".
  - id: vertical-position
    label: Vertical Position
    type: dropdown
    state: enabled
    action: Vertical position offset in divisions. Current "0Div".
  - id: vertical-offset-cfg
    label: Vertical Offset
    type: dropdown
    state: enabled
    action: Vertical offset in mV. Current "0 mV".
  - id: edge-trigger-slope-positive
    label: Positive
    type: radio
    state: active
    action: Edge-trigger slope, Positive selected.
  - id: edge-trigger-slope-negative
    label: Negative
    type: radio
    state: enabled
    action: Edge-trigger slope alternative.
  - id: edge-trigger-level
    label: Edge Trigger Level
    type: input
    state: enabled
    action: Edge-trigger voltage threshold input. Current "60mV".
  - id: analyze-rise-high
    label: "RISE / High Level"
    type: input
    state: enabled
    action: Rise-edge high-level threshold (mV). Current "50". Shown on the Analyze sub-tab.
  - id: analyze-rise-mid
    label: "RISE / Mid Level"
    type: input
    state: enabled
    action: Rise-edge mid-level threshold (mV). Current "20".
  - id: analyze-rise-low
    label: "RISE / Low Level"
    type: input
    state: enabled
    action: Rise-edge low-level threshold (mV). Current "10".
  - id: analyze-fall-high
    label: "FALL / High Level"
    type: input
    state: enabled
    action: Fall-edge high-level threshold (mV). Current "50".
  - id: analyze-fall-mid
    label: "FALL / Mid Level"
    type: input
    state: enabled
    action: Fall-edge mid-level threshold (mV). Current "20".
  - id: analyze-fall-low
    label: "FALL / Low Level"
    type: input
    state: enabled
    action: Fall-edge low-level threshold (mV). Current "10".
  - id: analyze-hysteresis
    label: Hysteresis
    type: input
    state: enabled
    action: Trigger hysteresis (mV). Current "3". Shown only on the Analyze sub-tab.
---

# Setup › Test Selection — Configure (per-test)

## Purpose

Modal-style configuration dialog launched from the **Configure** button on Setup › Test Selection ([setup-test-selection.md](./setup-test-selection.md)). Scoped to the focused test (e.g. "Period using SCOPE"); lets the user choose between Compliance Mode (suite-defined parameters, read-only) and User Defined Mode (editable). When in User Defined Mode, the lower form exposes scope acquisition parameters (Acquire sub-tab) and measurement-level thresholds (Analyze sub-tab).

Two upper tabs (`tab-global-settings`, `tab-measurements`) split this dialog into global-scope vs. per-measurement settings. The Measurements tab is the typical interaction surface; that's what's shown in both source screenshots.

## Controls inventory

**Mode radios** (`mode-compliance`, `mode-user-defined`) sit at the top — exclusive choice. The two **jump buttons** to their right (`btn-jump-test-selection`, `btn-jump-limits-editor`) provide quick navigation back to the parent screen or to the [Limits Editor sub-dialog](./setup-test-selection-limits-editor.md).

**Main tabs** (`tab-global-settings`, `tab-measurements`) — Measurements is active in both screenshots. Below the tabs, a **mini test tree** (`test-tree-mini`) mirrors the parent screen's tree so the user can see which test the form below applies to.

**Sub-tabs** on the left edge of the lower form: `subtab-acquire` and `subtab-analyze` (toggle between two related panes).

**Acquire sub-tab form** (visible in photo 5):

- `horizontal-scale` (μs/div), `record-length`.
- `vertical-scale` (200 mV/Div), `vertical-position` (0 Div), `vertical-offset-cfg` (0 mV).
- `edge-trigger-slope-positive` / `edge-trigger-slope-negative` radio pair (Positive selected).
- `edge-trigger-level` (60 mV).

**Analyze sub-tab form** (visible in photo 6) — two columns:

- RISE column: `analyze-rise-high` (50), `analyze-rise-mid` (20), `analyze-rise-low` (10).
- FALL column: `analyze-fall-high` (50), `analyze-fall-mid` (20), `analyze-fall-low` (10), `analyze-hysteresis` (3).

All Analyze fields appear to be in mV (the "m" unit suffix is visible on each field).

## State variations

- **Mode: Compliance** — form fields locked, values come from the suite definition. Photo 6 actually has Compliance Mode selected at the top while Analyze is visible; the audit suggests fields may still render but be read-only.
- **Mode: User Defined** — fields editable (photo 5).
- **Sub-tab: Acquire** (photo 5) — Acquire form shown.
- **Sub-tab: Analyze** (photo 6) — Analyze RISE/FALL form shown.
- **Tab: Global Settings** — not captured in any photo. Likely a separate set of global controls (the parent test-tree visible at top suggests global means "across all tests in scope").
- **Limits Editor sub-dialog** — opens over this dialog when the user clicks the `btn-jump-limits-editor` (Limits Editor) button; documented separately in [setup-test-selection-limits-editor.md](./setup-test-selection-limits-editor.md).

## Visible text (verbatim)

Mode radios: `Compliance Mode` · `User Defined Mode`.

Right-side jump buttons: `Test Selection` · `Limits Editor`.

Main tabs: `Global Settings` · `Measurements`.

Test tree (mini): `SCOPE Measurements` · `Period using SCOPE (Acquire-Analyze Combined)` · `DPOJET Measurements` · `Period using DPOJET (Acquire-Analyze Combined)` · `Autoset` · `Autoset Tester`.

Sub-tabs: `Acquire` · `Analyze`.

Acquire form: `Horizontal Scale` · `us/div` · `Record Length` · `Vertical Scale` · `200 mV/Div` · `Vertical Position` · `0Div` · `Div` · `Vertical Offset` · `0 mV` · `Edge Trigger Slope` · `Positive` · `Negative` · `Edge Trigger Level` · `60mV`.

Analyze form: `RISE` · `FALL` · `High Level` · `50` · `Mid Level` · `20` · `Low Level` · `10` · `Hysteresis` · `3`.

## Confidence notes

- The dialog's outer chrome (host application title bar, side-nav, right-rail) is partially visible behind the dialog in the photos. The dialog itself does not have its own X close in the title bar that I can see; the most likely close affordance is the parent application's window controls OR a hidden close behind the test-tree-mini. Verify against the live build.
- The "Test Selection" and "Limits Editor" buttons in the top-right corner LOOK like jump-tabs more than action buttons. Their orange pill styling matches navigation, not actions. Verify their precise behaviour.
- Whether `tab-global-settings` shows a different control surface or just a global-scoped variant of the same controls is unknown from this slice — no source photo captures the Global Settings tab.

## Manual references

**TekExpress DDR Tx Application Help** (077-1648-04, August 2025) — [`docs/tek-express-ddr5-tx-user-manual/_index.md`](../docs/tek-express-ddr5-tx-user-manual/_index.md):

- **`Setup panel — Configuration`** ([`setup-configuration.md`](../docs/tek-express-ddr5-tx-user-manual/setup-configuration.md), pp. 34–39) — the Configure dialog is the manual's Configuration tab. Documents Global Settings (Bandwidth, Record Length, Sample Rate, Retain Vertical Scale), Limits Editor, and the Measurements sub-tab with Analyze / CLOCK Ref Level sub-tabs. Per-device Measurements settings include DDR5 (Number of UI, Save worst case snapshot, Clock modulated with SSC, N start/stop, BER, Noise Compensation Auto/Manual, Superimpose DQS, Stop on Mask Hit, Vertical Scale, Mask Definition for Write Data Eye and Address Command Eye, Apply DFE/Gain/Threshold/Tap, Ref Levels Auto/Absolute/Percentage/High/Mid/Low/Hysteresis) and LPDDR5-5X (Window Size 200 default, Number of UI(M), Round Up tCK(avg), Superimpose WCK/RDQS, Vertical Scale, Mask Definition for Write Data Eye / Address Command Eye / Chip Select Eye, Ref Levels).
- **`Setup panel — Test Selection and Acquisitions`** ([`setup-test-selection-and-acquisitions.md`](../docs/tek-express-ddr5-tx-user-manual/setup-test-selection-and-acquisitions.md), pp. 31–33) — the Acquire sub-tab on this dialog matches the Acquisitions wizard step in the manual; same Signal/Source mapping and Save-and-Analyze-In-Sequence semantics.

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — state of Setup › Test Selection in the audit.
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — tab bar (Global Settings / Measurements; Acquire / Analyze sub-tabs).
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — mode radios, dropdowns, numeric inputs.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Test Selection / Limits Editor jump buttons.
## Source photos

- `uploads/photos/5. Setup-Test Selection_Config_Acquire tab.png` — Acquire sub-tab state.
- `uploads/photos/6. Setup-Test Selection_Config_Analyze tab.png` — Analyze sub-tab state.

The Limits Editor sub-dialog launched from this dialog is documented separately at [setup-test-selection-limits-editor.md](./setup-test-selection-limits-editor.md) from photo 7.
