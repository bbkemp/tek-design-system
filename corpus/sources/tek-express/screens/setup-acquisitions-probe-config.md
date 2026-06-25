---
software: TekExpress AppEmulator
software_version: TBD
screen_id: setup-acquisitions-probe-config
screen_title: Setup › Acquisitions — Probe Configuration
screen_type: dialog
image: setup-acquisitions-probe-config.jpg
source_photo: uploads/photos/9. Setup-Acquisitions_Probe Config.png
navigation_path: [Setup, Acquisitions, Probe Configuration]
parent_screens: [setup-acquisitions]
child_screens: []
applies_to: [tek-express]
related_screens: [setup-acquisitions]
related_hardware: []
related_modules: []
controls:
  - id: dialog-title
    label: Probe Configuration
    type: indicator
    state: active
    action: Dialog title bar over the Acquisitions screen.
  - id: dialog-close
    label: ""
    type: button
    state: enabled
    action: Standard close (X) in dialog title bar.
  - id: probe-table
    label: ""
    type: readout
    state: active
    action: Table of scope-channel probe configurations. Four columns Source, Probe Type, Probe Model, Probe Method. Four rows — one per scope channel (CH1-CH4).
  - id: probe-row-ch1
    label: "CH1 / TCA SMA / TCA292D / Single Ended"
    type: readout
    state: active
    action: Channel 1 probe. Connected via TCA SMA adapter to a TCA292D probe in Single Ended method.
  - id: probe-row-ch2
    label: "CH2 / Not Used / N.A / N.A"
    type: readout
    state: enabled
    action: Channel 2 — Not Used. The connector slot is recognized but no probe is configured.
  - id: probe-row-ch3
    label: "CH3 / TCA SMA / TCA292D / Single Ended"
    type: readout
    state: active
    action: Channel 3 probe. Same configuration as CH1.
  - id: probe-row-ch4
    label: "CH4 / (empty)"
    type: readout
    state: enabled
    action: Channel 4 — no values shown; either unconfigured or not detected.
  - id: btn-refresh
    label: Refresh
    type: button
    state: enabled
    action: Re-detects connected probes and repopulates the table.
  - id: btn-close
    label: Close
    type: button
    state: enabled
    action: Dismisses the dialog.
---

# Setup › Acquisitions — Probe Configuration

## Purpose

Read-only / minimally-editable dialog launched from the **View Probes** button on Setup › Acquisitions. Shows what the scope reports for each of its four input channels (CH1-CH4): adapter (Probe Type), probe model, and measurement method (Single Ended / Differential). The user can refresh the detection (`btn-refresh`) but does not author probe assignments here — that happens on the physical scope hardware.

## Controls inventory

`dialog-title` ("Probe Configuration") and `dialog-close` (X) sit in the title bar. The main body is `probe-table` with columns **Source**, **Probe Type**, **Probe Model**, **Probe Method**, and four rows — one per scope channel. In this screenshot:

- `probe-row-ch1`: TCA SMA / TCA292D / Single Ended.
- `probe-row-ch2`: Not Used / N.A / N.A.
- `probe-row-ch3`: TCA SMA / TCA292D / Single Ended.
- `probe-row-ch4`: blank.

Two buttons at the bottom: `btn-refresh` and `btn-close`.

## State variations

- **All channels in use** — every row populated; typical state during a full live-acquisition run.
- **No scope connected** — every row shows "Not Used / N.A / N.A" or similar; Refresh re-attempts detection.
- **Different probe types** — TCA292D is a typical Tektronix differential probe; other rows might show `P6248`, `P7340A`, etc. depending on what's physically attached.

## Visible text (verbatim)

Dialog: `Probe Configuration`.

Table columns: `Source` · `Probe Type` · `Probe Model` · `Probe Method`.

Rows: `CH1` · `TCA SMA` · `TCA292D` · `Single Ended` · `CH2` · `Not Used` · `N.A` · `N.A` · `CH3` · `TCA SMA` · `TCA292D` · `Single Ended` · `CH4` (empty).

Buttons: `Refresh` · `Close`.

## Confidence notes

- Whether the table is editable or strictly read-only is not directly visible. The presence of a Refresh button (instead of Save/Apply) suggests read-only, with the data sourced from the connected scope. Verify on the live build.
- `CH4` is blank — could mean "no probe detected" or "fourth channel not present on this scope model." Inferable from the live scope.

## Manual references

Cross-references to the UI Component Audit ([`docs/ui-audit/_index.md`](../docs/ui-audit/_index.md), May 2026):

- [`docs/ui-audit/screen-inventory.md`](../docs/ui-audit/screen-inventory.md) — state of Setup › Acquisitions.
- [`docs/ui-audit/data-display.md`](../docs/ui-audit/data-display.md) — probe-configuration table.
- [`docs/ui-audit/inline-teal-pill-buttons.md`](../docs/ui-audit/inline-teal-pill-buttons.md) — Refresh / Close buttons.

The audit PDF is itself a UI component inventory rather than a user manual. A separate user-guide PDF, if it surfaces, will land as `docs/user-manual/` chunks in a future pass and back-update this section again.
## Source photo

`uploads/photos/9. Setup-Acquisitions_Probe Config.png`.
