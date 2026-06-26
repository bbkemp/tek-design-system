---
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: TBD
screen_id: configure
screen_title: Configure
screen_type: config
image: configure.jpg
source_photo: uploads/photos/IMG_7015.jpg
function_state: Mode = Compliance; USB4 Transmitter Tests config variable tree visible
navigation_path: [USB4 Test Application, Configure]
parent_screens:
  - select-tests
child_screens:
  - connect
related_hardware: [bench-overview]
controls:
  - id: tab-configure
    label: Configure
    type: tab
    state: active
    action: Currently active workflow tab.
  - id: mode-compliance
    label: Compliance
    type: button
    state: active
    action: Mode radio button — Compliance selected. Locks per-test variables to spec-mandated values; only Debug mode allows hand-tuning.
  - id: mode-debug
    label: Debug
    type: button
    state: enabled
    action: Mode radio button — Debug not selected. Enables editing of compliance-locked variables.
  - id: config-tree
    label: USB4 Transmitter Tests (variable tree)
    type: indicator
    state: active
    action: Hierarchical tree of compliance-test configuration variables, organized first by suite then by per-bundle / per-test parameters. Each leaf shows `Name (value)`.
  - id: config-detail-pane
    label: Configuration detail pane
    type: indicator
    state: enabled
    action: Right pane that surfaces the helper UI for the currently-selected variable. Shows the hint `(Click on a setting to the left)` when nothing is selected.
  - id: config-detail-hint
    label: "(Click on a setting to the left)"
    type: indicator
    state: active
    action: Empty-state hint for the right-pane variable editor.
  - id: side-marker-configure
    label: CONFIGURE
    type: indicator
    state: active
    action: Vertical text running down the left margin spelling `CONFIGURE` — visual reinforcement of the active tab.
  - id: side-marker-messages
    label: MESSAGES
    type: indicator
    state: active
    action: Vertical text running down the left margin of the Messages panel.
---

# Configure — Compliance mode

## Purpose

Configure is the third workflow tab. It exposes the per-test variables that govern the USB4 compliance measurements selected on the Select Tests tab. The screen has two modes — **Compliance** and **Debug** — selected by a radio pair at the top. In Compliance mode (visible here) the variable tree is read-only; values are pinned to the USB4 specification's mandated settings, and any deviation requires an explicit switch to Debug mode. The right pane is a context-sensitive editor that surfaces helper controls for whichever variable the operator clicks in the tree. With no variable selected, the right pane reads `(Click on a setting to the left)`.

## Controls inventory

Above the body, the workflow tab bar (documented in `set-up`) shows `tab-configure` highlighted. Immediately below it, the Mode row carries `mode-compliance` (selected) and `mode-debug` (unselected).

The body is a single tree (`config-tree`) of every compliance variable, in roughly this order:

- Suite-level — `USB4 Transmitter Tests`, with a leaf `Clear USB4 Log folder (Disable)` and per-physical-state leaves: `Lane 0 Connection (Chan 1,3 - 2 Single Ended Signal)`, `Lane 1 Connection (Chan 2,4 - 2 Single Ended Signal)`, `Configure DUT respond time ms (2000)`, `Signal Trigger Level (0.0)`, `Configure Preset Number (Disable)`, `Sample Size - All Pattern (Live) (500e-6)`, `Pattern Check (Enable)`, `VNA BAL Port (Positive) (VNAPortPos)`, `VNA BAL Port (Negative) (VNAPortNeg)`, `Automation Auto Retry Count (5)`, `Automation Timeout (200)`, `Measurement Threshold Level (Auto)`, `Measurement Hysteresis (0.008)`, `Cable Model (Enable)`.
- Sub-suite — `Transmitter Tests Configure Variables`:
  - `Router Assembly Sideband Signal Testing`
    - `SBU1 Connection (Chan 1)`
    - `SBU2 Connection (Chan 2)`
    - `Sample Size - SBTX (Live) (200e-6)`
    - `Sample Size - SBRX (Live) (1.5e-3)`
    - `SBTX Trigger Level (600.0E-03)`
  - `Tx Rise/Fall Time`
    - `Sample Size - Rise/Fall Time - SQ128 (50e-6)`
  - `Tx Jitter`
    - `Sample Size - Jitter - TP2 - PRBS15 (500e-6)`
    - `Sample Size - Jitter - TP3 - PRBS31 (125e-6)`
    - `Acquisition number for TP3 Jitter Analysis (5)`
    - `Replace TP3 PRBS31 waveform or recapture waveform (true)`
  - `Tx Unit Interval and SSC and TP2 Eye Diagram measurement`
    - `Tx Unit Interval and SSC and TP 2 Eye Diagram measurement`
    - `Sample Size - Unit Interval, SSC and TP2 Eye Diagram measurement - PRBS31 (337.5e-6)`
  - `Tx AC Common Mode Voltage`
    - `Sample Size - AC Common Mode Voltage - PRBS31 (337.5e-6)`
  - `Tx Equalization`
    - `Sample Size - Equalization - SQ128 (2.97e-5)`

The right side is the `config-detail-pane`, currently showing `config-detail-hint` (`(Click on a setting to the left)`). Two vertical side markers — `side-marker-configure` and `side-marker-messages` — are visible in the left gutter of the body and the Messages panel respectively.

The Messages panel and status bar persist from `set-up`.

## State variations

Visible in this photo: Mode = Compliance, no variable selected, full tree scrolled to top.

Other states this same screen will exhibit:

- Mode = Debug — re-enables editing of every variable's value; the right pane would carry input controls (`type` and value), per-row.
- Variable selected — `config-detail-pane` populates with a context-sensitive editor; not visible in this photo set.
- Tree scrolled — many variables almost-certainly extend below the visible viewport; the scrollbar handle visible in the photo confirms more content. Not enumerated past what is verbatim above.

## Visible text (verbatim)

Mode row: `Mode:` · `Compliance` · `Debug`.

Tree (verbatim leaves, top-down):

- `USB4 Transmitter Tests`
- `Clear USB4 Log folder (Disable)`
- `Lane 0 Connection (Chan 1,3 - 2 Single Ended Signal)`
- `Lane 1 Connection (Chan 2,4 - 2 Single Ended Signal)`
- `Configure DUT respond time ms (2000)`
- `Signal Trigger Level (0.0)`
- `Configure Preset Number (Disable)`
- `Sample Size - All Pattern (Live) (500e-6)`
- `Pattern Check (Enable)`
- `VNA BAL Port (Positive) (VNAPortPos)`
- `VNA BAL Port (Negative) (VNAPortNeg)`
- `Automation Auto Retry Count (5)`
- `Automation Timeout (200)`
- `Measurement Threshold Level (Auto)`
- `Measurement Hysteresis (0.008)`
- `Cable Model (Enable)`
- `Transmitter Tests Configure Variables`
- `Router Assembly Sideband Signal Testing`
- `SBU1 Connection (Chan 1)`
- `SBU2 Connection (Chan 2)`
- `Sample Size - SBTX (Live) (200e-6)`
- `Sample Size - SBRX (Live) (1.5e-3)`
- `SBTX Trigger Level (600.0E-03)`
- `Tx Rise/Fall Time`
- `Sample Size - Rise/Fall Time - SQ128 (50e-6)`
- `Tx Jitter`
- `Sample Size - Jitter - TP2 - PRBS15 (500e-6)`
- `Sample Size - Jitter - TP3 - PRBS31 (125e-6)`
- `Acquisition number for TP3 Jitter Analysis (5)`
- `Replace TP3 PRBS31 waveform or recapture waveform (true)`
- `Tx Unit Interval and SSC and TP2 Eye Diagram measurement`
- `Tx Unit Interval and SSC and TP 2 Eye Diagram measurement`
- `Sample Size - Unit Interval, SSC and TP2 Eye Diagram measurement - PRBS31 (337.5e-6)`
- `Tx AC Common Mode Voltage`
- `Sample Size - AC Common Mode Voltage - PRBS31 (337.5e-6)`
- `Tx Equalization`
- `Sample Size - Equalization - SQ128 (2.97e-5)`

Right pane: `(Click on a setting to the left)`.

Left-margin side markers: `CONFIGURE` (body) · `MESSAGES` (panel).

## Confidence notes

Transcriptions verified against the 1600 px downscale (`configure.jpg`). Items below are uncertain:

- Whether `Compliance` and `Debug` are exclusive radio buttons or a binary toggle — the visual treatment in the photo (two filled dots, one highlighted) is consistent with a radio pair, but the alternative interpretation (toggle plus auxiliary indicator) cannot be ruled out from a still photo.
- Numerical values rendered in scientific notation (e.g. `500e-6`, `337.5e-6`, `2.97e-5`) are read as written. Unit context (seconds vs samples) is not on-screen and would need the manual to disambiguate.
- The `Tx Unit Interval and SSC and TP 2 Eye Diagram measurement` leaf is read as two near-duplicate lines with subtly different spacing (`TP2` vs `TP 2`) — this may be a labeling quirk or transcription error; **noted verbatim** but flagged.
- The Mode selector's exact behavior (instant switch vs require confirmation, with warning that switching to Debug invalidates compliance) is not derivable from the photo.
- The Connect tab is between Configure and Run in the workflow; this configure screen does not show it being navigated to and the photo set contains no Connect-tab captures. The `child_screens` link `connect` is therefore a frontmatter placeholder, not a documented sibling chunk.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight D9040USBC USB4 Test Application User Guide, sections covering the Configure tab, Compliance vs Debug mode, and per-test variable defaults).

## Source photo

Selected from `uploads/photos/`: **IMG_7015.jpg** — chosen because it is the only photo capturing the Configure tab with the variable tree expanded across a full vertical sweep, the Mode row visible, and the right-pane empty-state hint legible. There are no alternate Configure-tab photos in this set.
