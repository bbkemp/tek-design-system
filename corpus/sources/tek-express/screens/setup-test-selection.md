---
provenance: observed
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-test-selection
screen_title: Setup › Test Selection
screen_type: config
image: setup-test-selection.jpg
source_photo: uploads/photos/4. Setup-Test Selection.png
wizard_step: 2
wizard_step_total: 4
navigation_path: [Setup, Test Selection]
parent_screens: [setup-dut]
child_screens: [setup-test-selection-config, setup-acquisitions]
applies_to: [tek-express]
related_screens: [setup-dut, setup-acquisitions, setup-preferences]
related_hardware: []
related_modules: []
controls:
  - id: title-bar
    label: "TekExpress AppEmulator — (9346)*"
    type: indicator
    state: active
    action: Same window chrome as setup-dut.md.
  - id: btn-options
    label: Options ▼
    type: dropdown
    state: enabled
    action: Application-level Options menu — see screens/options-dropdown.md.
  - id: nav-setup
    label: Setup
    type: tab
    state: active
    action: Side-nav, currently on Setup panel.
  - id: nav-status
    label: Status
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-results
    label: Results
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-plots
    label: Plots
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: nav-reports
    label: Reports
    type: tab
    state: enabled
    action: See setup-dut.md.
  - id: wizard-step-1
    label: "✓ DUT"
    type: tab
    state: enabled
    action: Wizard step 1, completed (green checkmark). Tap to jump back.
  - id: wizard-step-2
    label: "2 Test Selection"
    type: indicator
    state: active
    action: Wizard step 2 — orange-numbered current step.
  - id: wizard-step-3
    label: "✓ Acquisitions"
    type: tab
    state: enabled
    action: Wizard step 3, completed.
  - id: wizard-step-4
    label: "✓ Preferences"
    type: tab
    state: enabled
    action: Wizard step 4, completed.
  - id: dut-context-header
    label: "TX-Device : Group1 : TEFW 4.0"
    type: indicator
    state: active
    action: Context header showing the active Device / Suite / Version (from Setup › DUT). Read-only here.
  - id: btn-deselect-all
    label: Deselect All
    type: button
    state: enabled
    action: Clears every checkbox in the test tree.
  - id: btn-select-required
    label: Select Required
    type: button
    state: enabled
    action: Selects only the tests marked as required for the active Device / Suite / Version.
  - id: btn-select-all
    label: Select All
    type: button
    state: enabled
    action: Selects every test in the tree.
  - id: test-tree
    label: ""
    type: readout
    state: active
    action: Hierarchical checkbox tree of tests grouped by category (Algorithm Library Measurements, SCOPE Measurements, DPOJET Measurements, Autoset). Each parent group is independently expand/collapsible; each leaf is an individually-checkable test. Per the audit PDF, 4 parent groups + 5 child items.
  - id: tree-algorithm-library
    label: Algorithm Library Measurements
    type: toggle
    state: enabled
    action: Parent-group checkbox for Algorithm Library tests; expanded but no children selected.
  - id: tree-scope-measurements
    label: SCOPE Measurements
    type: toggle
    state: active
    action: Parent group, expanded, child "Period using SCOPE" selected. The row is orange-highlighted in this screenshot — likely the currently-focused row (selection ≠ check state).
  - id: tree-scope-period
    label: Period using SCOPE (Acquire-Analyze Combined)
    type: toggle
    state: active
    action: Leaf-level checkbox, currently checked. The selected test that drove the Test Description content below.
  - id: tree-dpojet-measurements
    label: DPOJET Measurements
    type: toggle
    state: enabled
    action: Parent-group checkbox; expanded; no children selected.
  - id: tree-dpojet-period
    label: Period using DPOJET (Acquire-Analyze Combined)
    type: toggle
    state: enabled
    action: Leaf checkbox, unchecked.
  - id: tree-autoset
    label: Autoset
    type: toggle
    state: enabled
    action: Parent-group checkbox; expanded; no children selected.
  - id: tree-autoset-tester
    label: Autoset Tester
    type: toggle
    state: enabled
    action: Leaf checkbox, unchecked.
  - id: test-description
    label: Test Description
    type: readout
    state: active
    action: Read-only text area describing the currently-focused test. Content here "This is SCOPE based period measurement test. Refer Section-B of TekExpress SampleApp Development Guide for more details."
  - id: btn-show-moi
    label: Show MOI
    type: button
    state: enabled
    action: Opens the Method of Implementation (MOI) document for the focused test.
  - id: btn-schematic
    label: Schematic
    type: button
    state: enabled
    action: Opens the test's reference schematic.
  - id: btn-configure
    label: Configure
    type: button
    state: enabled
    action: Opens the per-test configuration dialog with Acquire / Analyze / Limits tabs — see setup-test-selection-config.md.
  - id: btn-start
    label: Start
    type: button
    state: enabled
    action: Right-rail Start. Same as setup-dut.md.
  - id: btn-pause
    label: Pause
    type: button
    state: disabled
    action: Right-rail Pause, idle.
  - id: not-for-release
    label: Not Intended For Public Release
    type: indicator
    state: active
    action: Build-mode notice.
  - id: status-bar
    label: "Ready."
    type: indicator
    state: active
    action: Persistent status bar; idle.
---

# Setup › Test Selection

## Purpose

Step 2 of the four-step Setup wizard. The user picks which compliance tests to run on the DUT identified in step 1. Tests are organized into a four-group hierarchical tree (Algorithm Library Measurements, SCOPE Measurements, DPOJET Measurements, Autoset) with one or more child tests under each group. The active Device / Suite / Version context — `TX-Device : Group1 : TEFW 4.0` — is shown as a read-only header so the user remembers what they configured in step 1.

Each leaf test is independently selectable via its checkbox. The focused (highlighted) row drives a Test Description read-out below the tree. Per-test parameter editing happens in the **Configure** dialog ([setup-test-selection-config.md](./setup-test-selection-config.md)).

## Controls inventory

**Chrome regions** (title bar, side-nav, right-rail, status bar, "Not Intended For Public Release" notice) are identical to [setup-dut.md](./setup-dut.md) — see that chunk for canonical descriptions. The side-nav has `nav-setup` active; the wizard step indicator advances from `wizard-step-1` (✓ DUT) through `wizard-step-2` (current, orange) to `wizard-step-3` and `wizard-step-4` (✓ checkmarked).

The **content area** opens with a context header (`dut-context-header`) — `TX-Device : Group1 : TEFW 4.0` — that mirrors the Device / Suite / Version selection from Setup › DUT. To its right, three bulk-select buttons: `btn-deselect-all`, `btn-select-required`, `btn-select-all`.

Below: the **test tree** (`test-tree`), a hierarchical checkbox structure. Four parent groups (`tree-algorithm-library`, `tree-scope-measurements`, `tree-dpojet-measurements`, `tree-autoset`), each expandable. In this screenshot all four are expanded; the only selected leaf is `tree-scope-period` ("Period using SCOPE (Acquire-Analyze Combined)") under SCOPE Measurements. The SCOPE Measurements row itself is orange-highlighted — focus distinct from check-state.

Below the tree: a Test Description region (`test-description`), a read-only text area populated from the focused test's documentation. The visible content reads "This is SCOPE based period measurement test. Refer Section-B of TekExpress SampleApp Development Guide for more details."

To the right of the description, a button column: `btn-show-moi` (Method of Implementation document), `btn-schematic` (reference circuit), `btn-configure` (opens [setup-test-selection-config.md](./setup-test-selection-config.md) for the focused test).

## State variations

Visible in this photo: one test selected (`Period using SCOPE`), SCOPE Measurements row focused, all four parent groups expanded.

Other states:

- **No tests selected** — Test Description area shows empty / placeholder text; right-side action buttons may be disabled until a test is focused.
- **Select All** — every leaf checkbox checked; tree visually shows full coverage.
- **Collapsed parent groups** — tree shows only group rows; expand affordance reveals child tests.
- **Multiple parents expanded with different selections** — typical authoring state for a compliance run; the focus row indicates which test the Description and right-side action buttons refer to.

## Visible text (verbatim)

Context header: `TX-Device : Group1 : TEFW 4.0`.

Bulk-select buttons: `Deselect All` · `Select Required` · `Select All`.

Test tree: `Algorithm Library Measurements` · `Algorithm Library Measurement` · `SCOPE Measurements` · `Period using SCOPE (Acquire-Analyze Combined)` · `DPOJET Measurements` · `Period using DPOJET (Acquire-Analyze Combined)` · `Autoset` · `Autoset Tester`.

Description label: `Test Description`. Description content: "This is SCOPE based period measurement test. Refer Section-B of TekExpress SampleApp Development Guide for more details."

Right-side action buttons: `Show MOI` · `Schematic` · `Configure`.

Chrome (consistent with setup-dut.md): `TekExpress AppEmulator — (9346)*` · `Setup` · `Status` · `Results` · `Plots` · `Reports` · `Start` · `Pause` · `Not Intended For Public Release` · `Ready.`

## Confidence notes

- The orange row-highlight on SCOPE Measurements appears to represent *focus* (which test's description is shown), not selection (which test will run). The audit PDF and the live build should confirm — the distinction matters for the redesign.
- The "Required" criterion behind `btn-select-required` is not documented in this screenshot — likely driven by suite metadata (which tests are mandatory for the active Device/Suite/Version). Verify against the user guide.
- The four parent-group expand/collapse state is partial in this screenshot (all expanded); collapse behaviour is inferred from typical tree conventions.

## Manual references

**TekExpress DDR Tx Application Help** (077-1648-04, August 2025) — [`docs/tek-express-ddr5-tx-user-manual/_index.md`](../docs/tek-express-ddr5-tx-user-manual/_index.md):

- **`Setup panel — Test Selection and Acquisitions`** ([`setup-test-selection-and-acquisitions.md`](../docs/tek-express-ddr5-tx-user-manual/setup-test-selection-and-acquisitions.md), pp. 31–33) — full Test Selection tab semantics: Deselect All / Select All, the per-device measurement tree (Figure 16 for DDR5, Figure 17 for LPDDR5-5X), Test Description pane behavior. Note: the application "automatically selects all required tests when in Compliance mode" — the Compliance mode toggle is not visible on this screen and may be exposed via SCPI `TEKEXP:MODE` only.
- **`Setup panel — Configuration`** ([`setup-configuration.md`](../docs/tek-express-ddr5-tx-user-manual/setup-configuration.md), pp. 34–39) — measurements selected here drive what appears on the Configuration tab's Measurements tree and what limits the Limits Editor exposes.
- **`SCPI Commands`** ([`scpi-commands.md`](../docs/tek-express-ddr5-tx-user-manual/scpi-commands.md), pp. 56–166) — `TEKEXP:SELECT TEST,"<TestName>",<True|False>` and `TEKEXP:SELECT TEST,"<ALL>"` programmatic equivalents.

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — audit entry for Setup › Test Selection (Step 2).
- [`docs/ui-audit/navigation-components.md`](../docs/ui-audit/navigation-components.md) — side-nav, wizard step indicator.
- [`docs/ui-audit/form-inputs.md`](../docs/ui-audit/form-inputs.md) — checkbox tree (4 parents, 5 children, 9 nodes total).
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Deselect All / Select Required / Select All; Show MOI / Schematic / Configure.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — Test Description text area.
## Source photo

`uploads/photos/4. Setup-Test Selection.png`. The three Test Selection Config dialog screenshots (5, 6, 7) are documented separately in [setup-test-selection-config.md](./setup-test-selection-config.md).
