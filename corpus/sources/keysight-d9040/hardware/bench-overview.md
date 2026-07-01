---
provenance: observed
class: hardware-view
product: keysight-d9040
software_version: TBD
part_id: bench-overview
part_title: Test bench — overview
view: bench-overview
image: bench-overview.jpg
source_photo: uploads/photos/IMG_6999.jpg
dimensions: N/A (whole-bench frame; not a single-instrument dimension)
features:
  - id: scope
    label: KEYSIGHT
    type: other
    location: Right side of frame, on the bench
    function: The Keysight Infiniium MXR-Series oscilloscope — the acquisition host the D9040 test applications run on. Documented in detail in `scope-detail.md`. In this frame the scope's LCD is showing the `D9040USBC USB4 Test` welcome / splash screen (Keysight branded with the D9040USBC product mark on a magenta/pink panel), confirming the test application has launched and acquired the scope via the Resource Arbiter.
  - id: scope-keyboard
    label: ""
    type: other
    location: Right of frame, at the bottom edge in front of the scope
    function: USB keyboard for the scope's Windows-based UI. Same Logitech keyboard documented in `scope-detail.md`.
  - id: secondary-monitor
    label: ""
    type: display
    location: Left half of frame, on the bench
    function: External monitor displaying a tabular UI (looks like a test-selection / results list — narrow rows of small text with a control bar at the bottom and a sidebar on the left). Likely a second view of the D9040USBC Test Application running on the host laptop, or the host laptop's extended desktop showing a different screen of the same test application. Specific screen content is not legibly resolved.
  - id: secondary-monitor-stand
    label: ""
    type: other
    location: Below the secondary monitor
    function: Monitor stand / arm. Not a test-relevant feature.
  - id: handheld-instrument
    label: ""
    type: other
    location: Center of frame, on the bench between the scope and the secondary monitor
    function: A small Keysight handheld instrument with its own LCD and numeric keypad — likely a Keysight Trueform-series handheld waveform generator, a Keysight handheld DMM, or a portable BNC source. The specific model is not resolved in this frame; see Confidence notes. Not the same instrument as the rack-mounted Trueform documented in `scope-detail.md`.
  - id: rack-equipment-stack
    label: ""
    type: other
    location: Background, upper half of frame
    function: A stack of gray ventilated chassis on the rack behind the bench. The largest unit visible is a ventilated mainframe (likely a Keysight VXI / PXI mainframe or AGGC2 enclosure). Multiple similar gray chassis are visible behind it. Specific models and quantities are not derivable at this resolution.
  - id: documents-accessories-box
    label: DOCUMENTS & ACCESSORIES
    type: other
    location: Lower-right of frame, on the bench beneath the scope
    function: Cardboard accessory / documentation box. Labeled in printed text on the side. Not a test-relevant feature — included here because the label is verbatim-legible.
  - id: cable-mat
    label: ""
    type: other
    location: Bench surface
    function: Green ESD (electrostatic discharge) work-surface mat, visible at the right edge of the bench. Standard test-bench surface — provides controlled ground reference for sensitive measurements.
  - id: cable-bundle-teal
    label: ""
    type: other
    location: Across the bench, between instruments
    function: The same light-blue / teal coax bundle documented in `scope-detail.md` — routes between the scope, the off-frame DUT fixture, and the secondary monitor area. Likely USB4 / Thunderbolt active cables plus BNC measurement coax.
applies_to: [keysight-d9040]
related_screens: [set-up, select-tests, configure, run, results]
related_modules: []
---

# Test bench — overview

## Purpose

This view documents the **physical layout of the D9040 test bench** — the scope, the operator's monitor, the surrounding rack of instruments, the bench surface, and the cabling. It is the "what does this whole rig look like" reference for anyone reading the D9040USBC screen documentation without seeing the bench. Where `scope-detail` documents the scope as an instrument and `dut-setup` documents the laptop + DUT fixture, this view is the orientation shot that ties them together — both are visible in the same frame.

The scope here is showing the **D9040USBC USB4 Test welcome / splash screen** (Keysight branding with the D9040USBC product mark on a magenta/pink panel), which proves the test application has successfully launched and acquired the scope via the Resource Arbiter. This makes the photo a strong cross-reference into every D9040USBC screen `.md` — it documents the bench state at session-start, before the operator advances into the Set Up / Select Tests / Configure / Run workflow tabs.

## Feature inventory

The frame divides into foreground (the bench top), background (the rack of equipment), and three labeled regions.

The **scope** (`scope`) sits at the right of the frame — the only instrument captured from the front. Its LCD shows the D9040USBC welcome / splash screen; full detail of the scope's bezel, knobs, and BNC array is documented separately in `scope-detail.md`. The `scope-keyboard` (Logitech USB keyboard) is in front of it on the bench.

The **secondary monitor** (`secondary-monitor`) sits at the left of the frame, on a stand (`secondary-monitor-stand`). It shows a tabular UI with what appears to be a list of test entries — small rows of text with a control bar at the bottom and a left-side sidebar. The specific screen content is not legibly resolved at this downscale — it could be the D9040USBC Test Application's `Select Tests` tab on an extended desktop, the test results view, or a separate workflow on the host laptop. Treat the monitor as evidence that the test setup uses a **dual-display layout** (scope LCD + external monitor for the test app), but do not transcribe its content.

Between the scope and the secondary monitor sits a `handheld-instrument` — a small Keysight handheld with its own LCD and numeric keypad. Model not resolved (see Confidence notes).

The **rack behind the bench** (`rack-equipment-stack`) holds at least three gray ventilated chassis. The largest visible is a ventilated mainframe consistent with a Keysight VXI / PXI mainframe or the **AGGC2** physical enclosure that the Resource Arbiter discovers as `AGGC2_USB4` and `AGGC2_DP` (see `screens/resource-arbiter-console.md`). Specific models and instrument counts are not derivable from this frame.

Lower-right of frame on the bench is a cardboard box labeled `DOCUMENTS & ACCESSORIES` (`documents-accessories-box`). The bench surface is a green ESD mat (`cable-mat`). A bundle of light-blue / teal coax (`cable-bundle-teal`) — the same color routing documented in `scope-detail.md` between the waveform generator and the scope — runs across the bench.

## Visible text (verbatim)

- Scope LCD splash: `D9040USBC` over `USB4 Test` over (Keysight branding), on a magenta / pink panel.
- Cardboard box side label: `DOCUMENTS & ACCESSORIES`.
- Visible upper-edge text fragment (on the rack, partial): `CHK 09222` — chassis tag / asset-track sticker, not fully resolved (see Confidence notes).

No other on-bench text is legibly resolved at this downscale. The secondary monitor's UI text, the handheld instrument's display, and the rack-instrument model badges are at or below the legibility threshold.

## Feature variations

The D9040 test rig is **typically deployed as a bench layout** matching this one — Infiniium MXR-Series scope + ancillary signal source(s) + host laptop / monitor + DUT fixture + rack of supporting instruments. Specific instrument counts, monitor count, rack contents, and bench dimensions vary per lab. This frame is one specific physical instance, not a normative layout.

The scope's LCD splash content (`D9040USBC USB4 Test`) would be replaced by `D9040DPPC DisplayPort Test App` welcome / splash when running the DisplayPort application instead. The Resource Arbiter discovery log shows both apps present (`AGGC2_USB4` and `AGGC2_DP` instruments are both discovered) but only the USB4 splash is captured in this photo.

## Confidence notes

- **The frame is rotated 90° in the raw photo.** The downscaled `bench-overview.jpg` preserves the rotation as-shot (raw sensor orientation, not corrected). Readers should mentally rotate clockwise to see the bench in conventional orientation; the verbatim text and feature locations above are described in **conventional orientation** (bench-up, scope-on-the-right).
- **Secondary monitor content is not transcribed.** The tabular UI is recognizable as a list-based screen but specific column headers, row content, and the screen identity (which tab of the test application, if any) are not derivable at this resolution.
- **Handheld instrument model is not resolved.** It is a small Keysight unit with an LCD and numeric keypad. Could be a handheld Trueform-series source, a portable scope, or a DMM. A close-up photo would resolve it.
- **Rack-equipment model identification is not derivable.** Multiple gray ventilated chassis are present but the brand marks, model badges, and serial labels are below the resolution threshold. One of them is plausibly the AGGC2 physical fixture (since the arbiter discovers `AGGC2_USB4` and `AGGC2_DP`) but this is not verified visually — the closer DUT-side view of an AGGC2-style fixture is in `dut-setup.md`.
- **No customer-app branding is visible.** All instruments visible in this frame are stock Keysight; no asset stickers with customer / project names override the manufacturer marks. The `CHK 09222`-style tag visible on the rack is a generic asset-tracking sticker, not a customer-branded overlay.
- **Cabling specifics are not transcribed.** The teal cable bundle is consistent with USB4 / Thunderbolt active cables plus BNC measurement coax, matching what `scope-detail.md` shows up close. Exact cable identification per-strand is not derivable.

## Manual references

> Pending. The Keysight D9040USBC USB4 Test Application User Guide's setup / connection chapter is the natural cross-reference once paired. Specifically, the chapter that describes the physical wiring between scope, AGGC2 fixture, DUT, and signal source will pair to this view's cable-bundle and rack-equipment-stack features.

## Source photo

Selected from `uploads/photos/`: **IMG_6999.jpg** — chosen as the canonical bench-overview shot because it is the only frame that captures the scope (with the D9040USBC welcome screen visible) **and** the secondary monitor **and** the rack-equipment stack in one composition. The companion frame **IMG_7037.jpg** is a similar bench-overview but with the scope in a more idle state and the secondary monitor showing a Resource Arbiter console window instead of the splash — useful as evidence that the Resource Arbiter and the test app run from the same host but framed less informatively for an orientation shot. The scope's splash visible in IMG_6999 is also a stronger cross-reference into the D9040USBC screen documentation. The 1600 px downscale (`bench-overview.jpg`) preserves the high-level layout but is intentionally lossy on fine text — close-up reference imagery is provided in `scope-detail.md` and `dut-setup.md`.
