---
provenance: observed
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: select-tests
screen_title: Select Tests
screen_type: config
image: select-tests.jpg
source_photo: uploads/photos/IMG_7027.jpg
function_state: USB4 Transmitter Tests tree expanded; Host Transmitter Tests (Port 1 / 10 GB/s) showing 8/62 tests unavailable; Tx TP2 Eye Diagram / Tx Eye Diagram (Lane 0) selected; File menu open
navigation_path: [USB4 Test Application, Select Tests]
parent_screens:
  - set-up
child_screens:
  - configure
related_hardware: [bench-overview]
controls:
  - id: menu-tools-open
    label: Tools (menu)
    type: button
    state: active
    action: Tools menu is open in this photo, exposing four entries — `Reset`, `Data Analytics`, `Preferences…`, plus an unlabeled separator/affordance row above. Documents the discoverability of the Preferences dialog (see `preferences` screen).
  - id: menu-reset
    label: Reset
    type: button
    state: enabled
    action: Top entry under Tools. Likely resets the current project to defaults (behavior not directly observable from a still photo).
  - id: menu-data-analytics
    label: Data Analytics
    type: button
    state: enabled
    action: Second entry under Tools — has a right-pointing chevron indicating a submenu.
  - id: menu-preferences
    label: Preferences…
    type: button
    state: enabled
    action: Third entry under Tools. Opens the multi-tab Preferences modal documented in `preferences`.
  - id: tab-select-tests
    label: Select Tests
    type: tab
    state: active
    action: Currently active workflow tab.
  - id: test-tree
    label: USB4 Transmitter Tests
    type: indicator
    state: active
    action: Hierarchical test tree, three-level deep (Suite > Bundle > Test), with disclosure triangles and a per-node checkbox for selection. Top-level node `USB4 Transmitter Tests` and inner nodes are visible.
  - id: test-tree-host-1
    label: "(8/62 tests unavailable) Host Transmitter Tests (Port 1)"
    type: indicator
    state: active
    action: Suite-level node for Port 1 host transmitter tests; the prefix `(8/62 tests unavailable)` is shown verbatim and presumably reflects unmet hardware capability or fixture state.
  - id: test-tree-host-1-10gbs
    label: "(8/62 tests unavailable) Host Transmitter Tests (10 GB/s)"
    type: indicator
    state: active
    action: Bit-rate-scoped suite under the Port 1 node, currently expanded.
  - id: test-leaf-rise-time-l0
    label: Tx Rise Time (Lane 0)
    type: toggle
    state: enabled
    action: Test leaf — Rise Time on Lane 0. Checkbox is unchecked in this photo.
  - id: test-leaf-fall-time-l0
    label: Tx Fall Time (Lane 0)
    type: toggle
    state: enabled
    action: Test leaf — Fall Time on Lane 0.
  - id: test-leaf-rise-time-l1
    label: Tx Rise Time (Lane 1)
    type: toggle
    state: enabled
    action: Test leaf — Rise Time on Lane 1.
  - id: test-leaf-fall-time-l1
    label: Tx Fall Time (Lane 1)
    type: toggle
    state: enabled
    action: Test leaf — Fall Time on Lane 1.
  - id: test-bundle-jitter
    label: Tx Jitter
    type: indicator
    state: enabled
    action: Test bundle — Jitter; chevron indicates child tests.
  - id: test-leaf-jitter-uncorr
    label: "Tx Uncorrelated Jitter, Uncorrelated Deterministic Jitter, Data Dependent Jitter and Duty Cycle Distortion and Total Jitter"
    type: toggle
    state: enabled
    action: Test leaf with a long descriptive label — Jitter decomposition test.
  - id: test-leaf-jitter-tp3
    label: "TP3 Tx Uncorrelated Jitter, Uncorrelated Deterministic Jitter, Tx Total Jitter, Tx Eye Diagram"
    type: toggle
    state: enabled
    action: Test leaf — TP3 jitter + eye diagram bundle.
  - id: test-leaf-ui-ssc-modulation
    label: Tx Unit Interval and SSC Modulation
    type: toggle
    state: enabled
    action: Test leaf — Unit Interval / SSC modulation.
  - id: test-leaf-ui-ssc-downspread
    label: Tx Unit Interval and SSC Down Spread Modulation
    type: toggle
    state: enabled
    action: Test leaf — SSC down-spread modulation.
  - id: test-leaf-ssc-phase
    label: Tx SSC Phase
    type: toggle
    state: enabled
    action: Test leaf — SSC phase.
  - id: test-bundle-tp2-eye
    label: Tx TP2 Eye Diagram
    type: indicator
    state: active
    action: Test bundle — TP2 Eye Diagram; expanded.
  - id: test-leaf-eye-l0
    label: Tx Eye Diagram (Lane 0)
    type: toggle
    state: active
    action: Test leaf — Eye Diagram on Lane 0. The dot/icon to the left of the checkbox is filled green, suggesting either selection or a prior-pass state. Checkbox itself is not visibly checked.
  - id: test-leaf-eye-l1
    label: Tx Eye Diagram (Lane 1)
    type: toggle
    state: enabled
    action: Test leaf — Eye Diagram on Lane 1.
  - id: test-bundle-acmv
    label: Tx AC Common Mode Voltage
    type: indicator
    state: enabled
    action: Test bundle — AC Common Mode Voltage; collapsed.
  - id: test-leaf-acmv-l0
    label: Tx AC Common Mode Voltage (Lane 0)
    type: toggle
    state: enabled
    action: Test leaf.
  - id: test-leaf-acmv-l1
    label: Tx AC Common Mode Voltage (Lane 1)
    type: toggle
    state: enabled
    action: Test leaf.
  - id: test-bundle-eiv
    label: Tx Electrical Idle Voltage
    type: indicator
    state: enabled
    action: Test bundle — Electrical Idle Voltage.
  - id: test-leaf-eiv-l0
    label: Tx Electrical Idle Voltage (Lane 0)
    type: toggle
    state: enabled
    action: Test leaf.
  - id: test-leaf-eiv-l1
    label: Tx Electrical Idle Voltage (Lane 1)
    type: toggle
    state: enabled
    action: Test leaf.
  - id: test-leaf-equalization
    label: Tx Equalization
    type: toggle
    state: enabled
    action: Test leaf.
  - id: test-tree-help
    label: "(Click a test's name to see its description)"
    type: indicator
    state: active
    action: Inline help line at the bottom of the test tree.
  - id: tests-detail-pane
    label: Tests detail pane
    type: indicator
    state: enabled
    action: Right pane that would surface a clicked test's description. Empty in this photo.
---

# Select Tests

## Purpose

Select Tests is the second workflow tab. Its job is to let the operator enumerate which USB4 compliance tests will execute on the configured DUT — narrowed by the Set Up tab's choices (DUT type, port count, lane scope, bit rate). The tab is dominated by a deep test tree organized by suite > bit-rate-bundle > test leaf, with disclosure triangles and per-leaf checkboxes. Some suites are tagged `(N/M tests unavailable)` — a load-bearing indicator that the underlying hardware or fixture state does not currently satisfy the test's prerequisites. The status-bar count `0 Tests` confirms no tests are selected at the moment of capture; the operator has clearly drilled in to inspect the tree but has not yet committed selections.

## Controls inventory

Above the workflow tab bar, `menu-tools-open` shows the Tools menu opened, exposing `menu-reset`, `menu-data-analytics` (with a submenu chevron), and `menu-preferences` (the entry that surfaces the Preferences modal documented in `preferences`). All other menu/tab/status-bar controls are documented in `set-up` (they persist across every workflow tab).

The body of the tab is a single scrollable test tree. Top of the visible scroll is the `test-tree` root (`USB4 Transmitter Tests`); inside it are two parent suite nodes — `test-tree-host-1` (`(8/62 tests unavailable) Host Transmitter Tests (Port 1)`) and underneath `test-tree-host-1-10gbs` (`(8/62 tests unavailable) Host Transmitter Tests (10 GB/s)`). The bit-rate-scoped suite is expanded.

Under that suite the tests are grouped by physical measurement and lane. Four Rise/Fall Time leaves are visible: `test-leaf-rise-time-l0`, `test-leaf-fall-time-l0`, `test-leaf-rise-time-l1`, `test-leaf-fall-time-l1`. Then a `test-bundle-jitter` collapses two long-labeled leaves: `test-leaf-jitter-uncorr` (the multi-clause Uncorrelated/Deterministic/Data Dependent/Duty Cycle/Total Jitter leaf) and `test-leaf-jitter-tp3` (TP3-scoped variant). Three SSC / UI leaves follow: `test-leaf-ui-ssc-modulation`, `test-leaf-ui-ssc-downspread`, `test-leaf-ssc-phase`. The `test-bundle-tp2-eye` is expanded, surfacing `test-leaf-eye-l0` (green dot beside it, indicating selection or prior-run pass — see Confidence notes) and `test-leaf-eye-l1`. Three more bundles follow — `test-bundle-acmv` (with leaves `test-leaf-acmv-l0`, `test-leaf-acmv-l1`), `test-bundle-eiv` (with `test-leaf-eiv-l0`, `test-leaf-eiv-l1`), and `test-leaf-equalization` (a top-level leaf, not a bundle).

At the bottom of the tree, `test-tree-help` displays the inline hint `(Click a test's name to see its description)`. The right pane (`tests-detail-pane`) is empty because no test name was clicked.

The Messages panel persists at the bottom and is identical to its `set-up` capture.

## State variations

Visible in this photo: Test tree partially expanded as described above; no tests checked; Tools menu opened; tests-detail-pane empty.

Other states this same screen will exhibit:

- Test selected — a checkmark in any leaf's `toggle` would bump `statusbar-tests` past `0 Tests` and cause that leaf's icon-dot to fill.
- Test name clicked — populates `tests-detail-pane` with the test's description.
- Different DUT type — would alter the top-level suites (`Host Transmitter Tests` vs `Device Transmitter Tests` vs `Retimer Tests`). Not visible in this photo set.
- Tools menu closed — restores the standard menu-bar focus state. The same tree is shown in IMG_7015 with the menu closed and the `tab-configure` tab active — see `configure` screen.

## Visible text (verbatim)

Tools menu open: `Tools` · `Reset` · `Data Analytics` · `Preferences…` · `Help`.

Tab strip: `Set Up` · `Select Tests` · `Configure` · `Connect` · `Run` · `Automate` · `Results` · `HTML Report`.

Test tree (top-down, verbatim):

- `Tx Fall Time Measurement`
- `UI Duration Measurement`
- `Measurement`
- `SBRX High Voltage Detection Measurement`
- `SBRX Low Voltage Detection Measurement`
- `(8/62 tests unavailable) Host Transmitter Tests (Port 1)`
- `(8/62 tests unavailable) Host Transmitter Tests (10 GB/s)`
- `Tx Rise/Fall Time`
- `Tx Rise Time (Lane 0)`
- `Tx Fall Time (Lane 0)`
- `Tx Rise Time (Lane 1)`
- `Tx Fall Time (Lane 1)`
- `Tx Jitter`
- `Tx Uncorrelated Jitter, Uncorrelated Deterministic Jitter, Data Dependent Jitter and Duty Cycle Distortion and Total Jitter`
- `TP3 Tx Uncorrelated Jitter, Uncorrelated Deterministic Jitter, Tx Total Jitter, Tx Eye Diagram`
- `Tx Unit Interval and SSC Modulation`
- `Tx Unit Interval and SSC Down Spread Modulation`
- `Tx SSC Phase`
- `Tx TP2 Eye Diagram`
- `Tx Eye Diagram (Lane 0)`
- `Tx Eye Diagram (Lane 1)`
- `Tx AC Common Mode Voltage`
- `Tx AC Common Mode Voltage (Lane 0)`
- `Tx AC Common Mode Voltage (Lane 1)`
- `Tx Electrical Idle Voltage`
- `Tx Electrical Idle Voltage (Lane 0)`
- `Tx Electrical Idle Voltage (Lane 1)`
- `Tx Equalization`

Help line: `(Click a test's name to see its description)`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`select-tests.jpg`). Items below are uncertain:

- The first four lines at the very top (`Tx Fall Time Measurement`, `UI Duration Measurement`, `Measurement`, `SBRX High Voltage Detection Measurement`, `SBRX Low Voltage Detection Measurement`) appear above the `Host Transmitter Tests (Port 1)` suite header — but they are partially occluded by the open Tools menu in this photo. They may be a sibling suite (e.g. `SBRX Tests`) or the tail of a prior suite that scrolled off. Read verbatim, classification unverified.
- The marker icon to the left of `test-leaf-eye-l0` (Tx Eye Diagram Lane 0) is a filled green dot. Whether this indicates "selected for the run", "passed in the most recent run", or "expanded child node" is **not derivable** from the photo alone.
- The Tools menu's first entry was partially clipped at the top in this photo — read as `Reset` from the visible characters. Unverified.
- The `(8/62 tests unavailable)` prefix is read precisely; what unavailability means (fixture missing, scope capability locked, bit-rate mismatch, license tier) is not on-screen and would need to be cross-referenced with the manual or a tooltip not captured here.
- The right-hand `tests-detail-pane` boundary is visible but its full extent is partially obscured by the menu in this single photo.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Select Tests tab, test taxonomy, USB4 Transmitter Tests, and unavailable-test diagnostics).

## Source photo

Selected from `uploads/photos/`: **IMG_7027.jpg** — chosen because it is the only photo in the set that captures both the Tools menu opening and the test tree expanded, making it a strong RAG anchor for "where do I find Preferences" and "what tests are in the Select Tests tree". Other candidates and why they were not used for step-0:

- `IMG_7015.jpg` — same tab area but with `Configure` highlighted; tree content is partially different (Configure variables); routed to the `configure` screen.
- The bottom of the `preferences` modal photos (IMG_7028 through IMG_7036) show the same expanded test tree behind the modal — useful as confirmation but not canonical for Select Tests itself.
