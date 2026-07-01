---
provenance: observed
class: hardware-view
product: keysight-d9040
software_version: TBD
part_id: scope-detail
part_title: Keysight Infiniium MXR-Series scope — front view
view: scope-detail
image: scope-detail.jpg
source_photo: uploads/photos/IMG_7001.jpg
dimensions: TBD (not derivable from photo; per Keysight Infiniium MXR-Series datasheet for the family)
features:
  - id: scope-brand-mark
    label: KEYSIGHT
    type: badge
    location: Upper-left of scope bezel, above the LCD
    function: Manufacturer brand mark on the oscilloscope.
  - id: scope-series-mark
    label: Infiniium MXR-Series
    type: badge
    location: Upper-right of scope bezel, above the LCD
    function: Product-series identifier; this is a Keysight Infiniium MXR-Series real-time oscilloscope (the platform the D9040USBC / D9040DPPC test applications run on).
  - id: scope-model-badge
    label: TBD
    type: badge
    location: Lower-left of scope bezel, below the LCD
    function: Model + family badge — reads `KEYSIGHT` over a model-and-bandwidth line. Exact model/bandwidth string (e.g. `MXR604A · 6 GHz · 16 GSa/s`) is not legibly resolved at the downscale; see Confidence notes.
  - id: scope-lcd
    label: ""
    type: display
    location: Center of bezel, dominant feature
    function: Touchscreen displaying the Infiniium real-time scope UI. Waveform area, timebase, channel readouts, and a `Remote Operation in Progress` notice overlay are visible. Screen content is the Infiniium native UI, not the D9040USBC Test Application (which runs on the laptop).
  - id: scope-channel-bncs
    label: 1 / 2 / 3 / 4
    type: terminal
    location: Front of scope, lower bezel, four BNC connectors in a horizontal row
    function: Four channel input BNCs, one per analog channel. Color-coded surrounds match the channel knob colors (yellow / green / blue / red).
  - id: scope-channel-knobs
    label: 1 / 2 / 3 / 4
    type: knob
    location: Right of LCD, vertical cluster of four
    function: Per-channel vertical scale / position knobs, color-coded yellow (1), green (2), blue (3), red (4). Standard Infiniium channel-control convention.
  - id: scope-trigger-knob
    label: Trigger Level
    type: knob
    location: Right of LCD, above the channel-knob cluster
    function: Trigger level adjust. Standard Infiniium trigger control.
  - id: scope-horizontal-knob
    label: ""
    type: knob
    location: Upper-right of right-side bezel
    function: Horizontal timebase / position knob group. Exact labels not fully legible at the downscale — see Confidence notes.
  - id: scope-softkey-row
    label: Auto Scale / Single / Default Setup / etc.
    type: hardkey
    location: Upper-right of bezel, above the knob cluster
    function: Row of dedicated function buttons. `Auto Scale`, `Single`, and a `Default Setup` / similar are partially visible.
  - id: scope-front-usb
    label: ""
    type: port
    location: Front of scope, lower-left area below LCD
    function: Front-panel USB-A port (visible recess below the LCD bezel). For removable media / firmware update; exact placement and count not fully derivable from this photo.
  - id: scope-handle
    label: ""
    type: other
    location: Top of scope chassis, wraps around bezel
    function: Carrying handle / bumper. Provides rack-mount compatibility per the Infiniium MXR-Series form factor.
  - id: wgen-brand-mark
    label: KEYSIGHT
    type: badge
    location: Top-left of waveform generator bezel
    function: Manufacturer brand mark on the waveform generator stacked above the scope.
  - id: wgen-model-badge
    label: 33500A Waveform Generator · TrueForm
    type: badge
    location: Top center of waveform generator, next to display
    function: Model badge — reads `33500A Waveform Generator` with `TrueForm` qualifier. (May be `33600A`; see Confidence notes.) This is a Keysight Trueform-series arbitrary waveform generator providing the stimulus signal into the scope channels via BNC cables.
  - id: wgen-display
    label: ""
    type: display
    location: Left-center of waveform generator front panel
    function: Color LCD readout — shows configured waveform parameters per output channel.
  - id: wgen-front-usb
    label: ""
    type: port
    location: Front of waveform generator, lower-left below the LCD
    function: Front-panel USB-A port for removable media.
  - id: wgen-keypad
    label: ""
    type: hardkey
    location: Right of waveform generator LCD
    function: Numeric keypad + soft buttons for parameter entry.
  - id: wgen-output-bncs
    label: ""
    type: terminal
    location: Far right of waveform generator front panel
    function: Two BNC outputs (Channel 1 / Channel 2). Both are cabled with light-blue / teal coax going down into scope channel inputs in this photo.
  - id: usb-cable-bundle
    label: ""
    type: other
    location: Bottom edge of frame, running across the bench
    function: Bundle of light-blue / teal cables routed from the bench fixture (off-frame to the right and left) — the same color cabling used between the waveform generator and the scope. Likely USB4 / Thunderbolt active cables routed to the DUT setup documented in `dut-setup.md`.
  - id: usb-keyboard
    label: Logitech
    type: other
    location: Bottom of frame, in front of the scope
    function: USB keyboard (Logitech-branded) — operator's manual input to the scope's Windows-based UI. Confirms the scope is being driven by a Windows host (consistent with the Infiniium platform).
applies_to: [keysight-d9040]
related_screens: []
related_modules: []
---

# Keysight Infiniium MXR-Series scope — front view

## Purpose

This view documents the **primary acquisition instrument** the D9040 test applications run against: a Keysight Infiniium MXR-Series real-time oscilloscope. The MXR-Series scope is the host platform — the Infiniium scope OS provides the runtime that the D9040USBC USB4 Test Application and D9040DPPC DisplayPort Test App execute within, and the scope's analog channels are the acquisition path for every measurement the test applications report. Above the scope sits a stacked Keysight Trueform-series waveform generator (`wgen-model-badge` reads `33500A Waveform Generator` with `TrueForm` qualifier) acting as the signal source for the test setup — two light-blue coax cables route its output BNCs into the scope's channel BNCs. A Logitech USB keyboard at the bottom edge of frame confirms the scope is being driven from its Windows-side UI as well as via remote control (the on-screen `Remote Operation in Progress` notice indicates the Resource Arbiter has taken the lock).

This is the **scope itself**, not the test-application UI running on it. The Infiniium native UI (timebase, channel readouts, waveform area) is what is shown on `scope-lcd`. The D9040USBC Test Application UI shown in the `screens/` chunks runs on a laptop alongside the scope (documented in `dut-setup`) and remote-controls the scope through the Resource Arbiter.

## Feature inventory

The frame divides into two stacked instruments plus operator input gear.

The **scope** occupies the lower two-thirds of the frame. Its front face has four regions:

- **Upper bezel.** `scope-brand-mark` (`KEYSIGHT`) sits at the upper-left; `scope-series-mark` (`Infiniium MXR-Series`) sits at the upper-right. The model-and-bandwidth badge (`scope-model-badge`) sits in the lower-left of the bezel beneath the LCD; exact model designation is not fully resolved at this downscale (see Confidence notes).
- **Central LCD.** `scope-lcd` dominates — touchscreen with the Infiniium native UI. The waveform area shows a dense yellow trace (`2.00 V/`, `0.0 V` channel readout in the upper-left corner) with a `Remote Operation in Progress` notice overlaid mid-screen. Timebase reads `26.2 GS/s` in the top status row.
- **Right bezel control cluster.** A vertical knob column: `scope-trigger-knob` (Trigger Level) on top, then the four `scope-channel-knobs` (numbered 1/2/3/4, color-coded yellow/green/blue/red). Above the knob cluster, `scope-horizontal-knob` controls timebase. Above all of that, `scope-softkey-row` (`Auto Scale`, `Single`, `Default Setup`, and other dedicated function buttons whose labels are partially resolved).
- **Lower bezel.** Four BNC connectors in a horizontal row — `scope-channel-bncs` 1 through 4, color-matched to the channel knobs. The `scope-front-usb` port is visible as a recess on the left side of the lower bezel. `scope-handle` wraps the top of the chassis.

The **waveform generator** stacked above the scope is a separate instrument. `wgen-brand-mark` (`KEYSIGHT`) sits top-left of its bezel; `wgen-model-badge` reads `33500A Waveform Generator · TrueForm` in the top center. The left half of the front panel hosts `wgen-display` (color LCD readout) with `wgen-front-usb` below it; the right half has `wgen-keypad` (numeric + softkeys) and on the far right two `wgen-output-bncs` connectors. In this photo both wgen outputs are cabled with light-blue coax going down to the scope channel BNCs.

Below the scope, `usb-keyboard` (`Logitech`-branded) sits on the bench. A `usb-cable-bundle` runs along the bottom edge of the frame, routing toward whatever is off-camera — color-matched to the wgen-to-scope coax, likely USB4 / Thunderbolt active cables to the DUT fixture documented in `dut-setup.md`.

## Visible text (verbatim)

Brand marks: `KEYSIGHT` (on both scope upper-left and wgen top-left).

Series mark: `Infiniium MXR-Series` (scope upper-right).

Waveform generator model badge: `33500A Waveform Generator` with `TrueForm` qualifier (exact digit reading: see Confidence notes — may be `33600A`).

Scope LCD overlay text (partially resolved at this downscale):

- Upper-left channel readout: `2.00 V/` over `0.0 V`.
- Top timebase / sample rate row: `26.2 GS/s` (visible) — full row also includes `Setup`, `Display`, `Trigger`, `Measure`, `Analyze`, `Utilities`, `Demos`, `Help`, `Waveforms`, and other menu words.
- Mid-screen notice (yellow callout): `Running Tests/Setup...` — block of multi-line text describing in-progress test calibration steps; text is at the legibility edge (see Confidence notes).
- Bottom-of-screen notice (yellow bar): `Remote Operation in Progress` — `GUI and front panel control has been disabled by remote operation.` `Press Enable IF needed`.

Scope channel knobs are labeled `1`, `2`, `3`, `4` (each with a small numeric overlay).

`Logitech` brand mark visible on the front face of `usb-keyboard`.

## Feature variations

The MXR-Series scope is a product family — multiple bandwidths (`MXR054A`, `MXR104A`, `MXR204A`, `MXR404A`, `MXR604A`, `MXR108A`, etc.) share the same chassis, bezel, and control layout. Only the model badge and the bandwidth text printed on `scope-model-badge` differ. The exact unit in this photo is not derivable at this downscale — a higher-resolution close-up of `scope-model-badge` would resolve it. Same is true for the waveform generator: the Keysight Trueform `33500A` / `33600A` series shares this bezel and control layout across multiple models (`33511B`, `33512B`, `33611A`, `33612A`, `33621A`, `33622A`, etc.).

Cable count on the `wgen-output-bncs` varies by setup. In this photo both outputs are cabled; some D9040USBC test setups use only Channel 1.

## Confidence notes

- **`scope-model-badge` is not legibly resolved** at this downscale. The model is one of the Infiniium MXR-Series real-time scope models. The Resource Arbiter discovery log (from `screens/resource-arbiter-console.md`) refers to the instrument generically as `Scope` and gives no model number. A higher-resolution close-up of the lower-left bezel would resolve this.
- **`wgen-model-badge` reads `33500A`** but the leading `5` could also be a `6` at this resolution — the Trueform family includes both `33500A`/`33500B` and `33600A` series, which share an identical chassis. The full model designator (e.g. `33611A` vs `33621A` for one- vs two-channel) is not resolved either. Treat as `Keysight Trueform-series waveform generator, 33500/33600A family` until verified.
- **Scope LCD overlay text** in the `Running Tests/Setup...` callout includes several lines of fine text that are at the legibility edge. Not transcribed line-by-line; treat verbatim text above as a partial transcription.
- **Front USB port locations** (`scope-front-usb`, `wgen-front-usb`) are inferred from visible recesses, not from clearly labeled cutouts. Port counts on the scope front panel are not verified — the Infiniium MXR-Series typically exposes 2–4 USB-A ports across the bezel.
- **Rear-panel features** of either instrument are not visible in this photo. A separate rear-panel hardware view would document AC inlet, LAN, GPIB, trigger I/O, AUX-out, calibration outputs, etc.
- **No customer-app branding** is visible on any surrounding lab equipment in this frame. The instruments are stock Keysight units; no overlay labels, asset stickers, or third-party branding overrides are present at this resolution.

## Manual references

> Pending. Manual will be paired in a later pass against the Keysight Infiniium MXR-Series User Guide (front-panel control reference, channel-input specifications) and the Keysight Trueform Series Waveform Generator User Guide (output specifications, BNC routing). The D9040USBC USB4 Test Application User Guide is also pending — that document's hardware-setup section is the natural cross-reference for which channels the test app expects the DUT to be cabled into.

## Source photo

Selected from `uploads/photos/`: **IMG_7001.jpg** — the only photo in the set that frames the scope's front face squarely and at close enough range to read the bezel markings, the channel knobs, and the BNC row. The stacked waveform generator is fully visible above. The `Remote Operation in Progress` notice on the scope LCD is a useful state-marker: it documents that the Resource Arbiter has taken the lock and the scope is being remote-controlled by the test application running on the host laptop documented in `dut-setup.md`. The 1600 px downscale (`scope-detail.jpg`) preserves enough detail to identify all major control regions but is not high-resolution enough to resolve `scope-model-badge` or the fine print on the LCD overlays — see Confidence notes.
