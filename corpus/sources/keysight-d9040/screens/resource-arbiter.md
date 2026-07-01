---
provenance: observed
software: "Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App)"
software_version: "Resource Arbiter 1.2.4+8c586064"
screen_id: resource-arbiter
screen_title: Resource Arbiter
screen_type: config
image: resource-arbiter.jpg
source_photo: uploads/photos/IMG_7010.jpg
function_state: AGGC2_USB4 row selected; capability D9040USBC_Measure being edited
navigation_path: [Resource Arbiter]
parent_screens:
  - resource-arbiter-console
child_screens: []
related_hardware: [dut-setup]
controls:
  - id: tab-resource-arbiter
    label: Resource Arbiter
    type: tab
    state: active
    action: Active browser tab. Other Resource Arbiter tabs are open in the same window, indicating the operator may open multiple arbiter views.
  - id: tab-resource-arbiter-other
    label: Resource Arbiter
    type: tab
    state: enabled
    action: Sibling browser tabs pointing at the same arbiter URL — multiple windows of the same page rather than independent destinations.
  - id: url-bar
    label: 192.168.1.66:55441
    type: input
    state: active
    action: Browser address bar. Host:port matches the Resource Arbiter console's `Now listening on` value, scoped to the LAN IP rather than 0.0.0.0.
  - id: brand
    label: KEYSIGHT
    type: indicator
    state: active
    action: Keysight wordmark + red flame logo in the top-left of the page.
  - id: page-title
    label: Resource Arbiter
    type: indicator
    state: active
    action: Page H1, immediately right of the brand mark.
  - id: utilization-readout
    label: Utilization
    type: readout
    state: active
    action: Per-row percentage gauge in the rightmost column showing how busy each resource is. Numeric values visible in IMG_7012 (10.7%, 5.4%, 0.0%, 0.0%).
  - id: table-header-enabled
    label: Enabled
    type: indicator
    state: active
    action: First column header — checkbox column controlling whether a resource is exposed to test applications.
  - id: table-header-name
    label: Resource Name
    type: indicator
    state: active
    action: Second column header. Identifies the resource by its TAP-registered name.
  - id: table-header-capabilities
    label: Capabilities
    type: indicator
    state: active
    action: Third column header. Each resource can advertise one or more capability strings (e.g. D9040USBC_Acquire).
  - id: table-header-in-use
    label: In Use
    type: indicator
    state: active
    action: Fourth column header. Shows current-lock / max-lock count plus a lock-state icon.
  - id: row-scope
    label: "Scope · D9040USBC_Acquire · 1/1 (locked)"
    type: indicator
    state: active
    action: First resource row. The padlock icon next to `1/1` indicates this resource is currently locked by a test application (consistent with the console log).
  - id: row-aggc2-usb4
    label: "AGGC2_USB4 · D9040USBC_Measure · 0/1"
    type: indicator
    state: active
    action: Second resource row, currently selected — highlighted with a blue band and surfacing the edit form below.
  - id: row-aggc2-dp
    label: "AGGC2_DP · D9040DPPC_Measure · 0/1"
    type: indicator
    state: enabled
    action: Third resource row. DisplayPort measure capability — proves D9040DPPC and D9040USBC share the same arbiter.
  - id: row-scope-dp
    label: "Scope_DP · D9040DPPC_Acquire · 0/1"
    type: indicator
    state: enabled
    action: Fourth resource row. Second physical scope (or virtual entry) dedicated to DisplayPort acquisition.
  - id: edit-form-enabled
    label: Enabled (checkbox)
    type: toggle
    state: active
    action: Mirrors the Enabled checkbox of the selected row; reflected as a top-row checkbox in the edit form.
  - id: edit-form-name
    label: Name
    type: input
    state: active
    action: Editable resource name. Required field (red asterisk).
  - id: edit-form-address
    label: Address
    type: input
    state: active
    action: Resource address — for AGGC2_USB4 this reads `192.168.1.66`, the IP of the scope.
  - id: edit-form-locking
    label: Locking
    type: dropdown
    state: enabled
    action: Locking-policy selector. Visible value is "Counted" — the alternative policy is not visible in this screen.
  - id: edit-form-lock-count
    label: Lock Count
    type: input
    state: enabled
    action: Maximum concurrent lock holders allowed for this resource. Set to `1` in the visible row.
  - id: edit-form-capabilities
    label: Capabilities
    type: dropdown
    state: enabled
    action: Multi-select capability picker. Visible chip `D9040USBC_Measure ×` shows the currently assigned capability; the dropdown is open in IMG_7012 listing all 8 known capability values.
  - id: edit-form-add-capability
    label: Add Capability +
    type: button
    state: enabled
    action: Adds an additional capability chip to the current resource.
  - id: btn-update-resource
    label: Update Resource
    type: button
    state: enabled
    action: Commits edits to the selected row back to the arbiter's resource table.
  - id: btn-delete-resource
    label: Delete Resource
    type: button
    state: enabled
    action: Removes the selected row from the arbiter.
  - id: btn-clear-entry
    label: Clear Entry
    type: button
    state: enabled
    action: Resets the edit-form fields without affecting the underlying row.
  - id: btn-add-resource
    label: Add Resource
    type: button
    state: enabled
    action: Registers a new resource using the values currently in the edit form.
  - id: version-readout
    label: "Version: 1.2.4+8c586064"
    type: indicator
    state: active
    action: Build-id of the Resource Arbiter server. Cross-references the console log.
---

# Resource Arbiter

## Purpose

The Resource Arbiter browser UI is the human-facing config + monitor surface for the multi-instrument coordination service started by `resource-arbiter-console`. It is loaded by navigating a desktop browser to the `Now listening on` URL the console printed (here, `192.168.1.66:55441`). The page is a single table of physical or logical instruments registered with the arbiter, plus an edit form below it for adding, modifying, or removing rows. Each row pairs a **Resource Name** (e.g. `Scope`, `AGGC2_USB4`, `AGGC2_DP`) with one or more **Capabilities** — strings like `D9040USBC_Acquire`, `D9040USBC_Measure`, `D9040DPPC_Acquire`, `D9040DPPC_Measure` — and shows the current lock count and a small lock-state icon. The **In Use** column updates live as test applications request and release locks; the **Utilization** column (visible only in IMG_7012) shows a rolling percentage that lets the operator confirm a given instrument is or is not being driven. This page is the proof of D9040's design promise: that the USB4 test app and the DisplayPort test app can live on the same scope without colliding, because every claim against the scope's `Acquire` or `Measure` capability passes through this arbiter first.

## Controls inventory

The page is laid out top-to-bottom in five vertical regions: a thin **browser chrome** band (`tab-resource-arbiter`, `tab-resource-arbiter-other`, `url-bar`); a **header strip** (`brand` Keysight wordmark + `page-title` `Resource Arbiter`); a **resource table** with column headers and four rows; an **edit form** below the table; and a **footer line** showing the server build-id.

The browser-chrome band shows four tabs all pointed at the same arbiter URL (`192.168.1.66:55441`) — duplicate windows of one page rather than independent destinations. `url-bar` carries the LAN IP variant of the `0.0.0.0` host the console reports.

The resource table has four column headers — `table-header-enabled`, `table-header-name`, `table-header-capabilities`, `table-header-in-use` — and four rows. `row-scope` is the live row (1/1, padlock filled), associated with `D9040USBC_Acquire`. `row-aggc2-usb4` is the selected row (blue highlight) carrying `D9040USBC_Measure` and lock count 0/1. `row-aggc2-dp` carries `D9040DPPC_Measure` and `row-scope-dp` carries `D9040DPPC_Acquire`; both are 0/1 unlocked. In IMG_7012 a fifth column `utilization-readout` is visible at the right edge with numeric values for each row.

The edit form mirrors the selected row's columns as inputs: `edit-form-enabled` (checkbox), `edit-form-name` (required, marked with a red asterisk), `edit-form-address` (here `192.168.1.66`, the scope's IP), `edit-form-locking` (`Counted`), `edit-form-lock-count` (`1`), and `edit-form-capabilities` (a chip-style multi-select showing `D9040USBC_Measure ×`). Beneath the chip is `edit-form-add-capability` (`Add Capability +`). The action row holds four buttons: `btn-update-resource`, `btn-delete-resource`, `btn-clear-entry`, `btn-add-resource`. At the very bottom of the visible page, `version-readout` reads `Version: 1.2.4+8c586064`.

There are no bezel controls — this is a desktop browser page rendered on a Dell external monitor.

## State variations

Visible in IMG_7010: AGGC2_USB4 row selected, edit-form populated with that row's values, Capabilities chip is `D9040USBC_Measure`, the dropdown is closed.

Other state captured in IMG_7012 (same screen, different state):

- The Capabilities dropdown is **open**, surfacing the full list of capabilities the arbiter knows about: `D9040DPPC_Acqu…`, `D9040DPPC_Measure`, `D9040DPPC_Report`, `D9040USBC_Acquire`, `D9040USBC_Measure`, `D9040USBC_Report`, `D9050PCC_Acquire`, `D9050PCC_Report`. A tooltip near the dropdown reads `A capability defines the function used for this resource. Click to add and remove capabilities.`
- The rightmost **Utilization** column is fully visible at this zoom level, showing per-row percentages — Scope at `10.7%`, AGGC2_USB4 at `5.4%`, AGGC2_DP at `0.0%`, Scope_DP at `0.0%`.
- The lock indicator on the Scope row is `1/1` with a padlock; the lower three rows are `0/1` with no lock.

Browser-tab count differs across the two photos but the page identity is the same.

## Visible text (verbatim)

Browser chrome: `Resource Arbiter` (four tabs) · `192.168.1.66:55441`.

Header: `KEYSIGHT` · `Resource Arbiter`.

Table headers: `Enabled` · `Resource Name` · `Capabilities` · `In Use` · `Utilization` (rightmost column visible only in IMG_7012).

Rows:
- `Scope` · `D9040USBC_Acquire` · `1/1` · `10.7%`
- `AGGC2_USB4` · `D9040USBC_Measure` · `0/1` · `5.4%`
- `AGGC2_DP` · `D9040DPPC_Measure` · `0/1` · `0.0%`
- `Scope_DP` · `D9040DPPC_Acquire` · `0/1` · `0.0%`

Edit form labels: `Name*` · `Address` · `Locking` · `Lock Count` · `Capabilities` · `Add Capability +`.

Edit form values (visible row): `AGGC2_USB4` · `192.168.1.66` · `Counted` · `1` · `D9040USBC_Measure ×` · `Capability`.

Action buttons: `Update Resource` · `Delete Resource` · `Clear Entry` · `Add Resource`.

Capabilities dropdown (open, IMG_7012): `D9040DPPC_Acqu…` · `D9040DPPC_Measure` · `D9040DPPC_Report` · `D9040USBC_Acquire` · `D9040USBC_Measure` · `D9040USBC_Report` · `D9050PCC_Acquire` · `D9050PCC_Report`.

Footer: `Version: 1.2.4+8c586064`.

## Confidence notes

Transcriptions verified against the 1600 px downscale (`resource-arbiter.jpg`) and cross-checked against IMG_7012. Items below are uncertain:

- The Capabilities dropdown text is partially clipped — `D9040DPPC_Acqu…` is the visible truncation; the full string is presumed `D9040DPPC_Acquire` by symmetry with the USBC counterpart but **not directly visible**.
- The dropdown lists `D9050PCC_Acquire` and `D9050PCC_Report` — capabilities for a D9050PCC application that is **not in scope for the photo set**. Presence in the dropdown is verbatim, not inferred.
- Whether the four browser tabs in IMG_7010 are truly independent navigations or browser-history duplicates is **not derivable** from the photo.
- The `In Use` column's numeric format (`1/1`, `0/1`) is read at this resolution but the alternate-state-icon (open vs closed padlock vs no padlock) for unlocked rows is small enough that distinguishing "0/1 unlocked" vs "0/1 not currently configured" is not certain.
- `Utilization` column values are visible only in IMG_7012; IMG_7010 is cropped slightly left of that column edge — the column exists but values were not transcribed from IMG_7010.
- The build identifier `1.2.4+8c586064` is a hex suffix and is read precisely from IMG_7010; in IMG_7012 the same suffix renders identically.

## Manual references

> Pending. Manual will be paired in a later pass (Keysight Resource Arbiter / Test Automation Platform user guide, sections covering the resource table, capability strings, lock-count semantics, and the Counted vs alternative locking policies).

## Source photo

Selected from `uploads/photos/`: **IMG_7010.jpg** — chosen for clarity (sharp focus on the entire table and edit form, no hand or glare across the editable region, capability chip is fully readable, the Scope-row lock indicator is unambiguously legible). Other candidates and why they were not used for step-0:

- `IMG_7012.jpg` — same screen with the Capabilities dropdown open and the Utilization column visible. Slightly less sharp on the page-body text and the form area at the bottom is partly cut off; would be a strong canonical for a "dropdown open" sub-state but IMG_7010 captures the screen identity more cleanly.
