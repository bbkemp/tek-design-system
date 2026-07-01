---
provenance: observed
class: hardware-view
product: 2450-ec
software_version: TBD
part_id: front-panel
part_title: Front panel
view: front-panel
image: front-panel.jpg
source_photo: uploads/photos/photo-262_singular_display_fullPicture.jpeg
dimensions: TBD (from manual; not visible in this photo)
features:
  - id: lcd
    label: ""
    type: display
    location: Center of bezel, dominant feature
    function: Resistive touchscreen displaying instrument UI. Content documented separately in screens/home.md.
  - id: brand-mark
    label: KEITHLEY
    type: badge
    location: Upper-left of LCD bezel, above the LCD itself
    function: Manufacturer brand mark.
  - id: hk-home
    label: HOME
    type: hardkey
    location: Left of LCD, top of left-bezel button column
    function: Returns the instrument UI to the Home screen from anywhere.
  - id: hk-menu
    label: MENU
    type: hardkey
    location: Left of LCD, second from top of left-bezel button column
    function: Opens the main settings tree on the LCD.
  - id: hk-quickset
    label: QUICKSET
    type: hardkey
    location: Left of LCD, third from top of left-bezel button column
    function: Opens the quick-preset / function picker on the LCD.
  - id: hk-help
    label: HELP
    type: hardkey
    location: Left of LCD, fourth from top of left-bezel button column
    function: Context help for whatever is shown on the LCD.
  - id: usb-port
    label: ""
    type: port
    location: Left of LCD, below the HELP key
    function: USB-A port for flash drives — firmware updates, file transfer, TSP scripts.
  - id: hk-power
    label: POWER
    type: hardkey
    location: Bottom-left of front panel
    function: Instrument main power on/off.
  - id: knob
    label: ""
    type: knob
    location: Right of LCD, top of right-bezel cluster
    function: Rotary navigation and value-adjust; push-to-select on the LCD.
  - id: hk-enter
    label: ENTER
    type: hardkey
    location: Right of LCD, below the knob
    function: Confirm the currently-selected option on the LCD.
  - id: hk-exit
    label: EXIT
    type: hardkey
    location: Right of LCD, below ENTER
    function: Cancel / back from the current LCD context.
  - id: hk-function
    label: FUNCTION
    type: hardkey
    location: Right of LCD, below EXIT
    function: Cycle measure / source function (V / I / R / P).
  - id: hk-trigger
    label: TRIGGER
    type: hardkey
    location: Right of LCD, below FUNCTION
    function: Manual trigger or start the configured trigger model.
  - id: terminals
    label: ""
    type: terminal
    location: Right side of front panel, below the right-bezel button cluster
    function: Four banana-jack inputs/outputs — SENSE HI, SENSE LO, FORCE HI, FORCE LO. SENSE jacks rated 210 V PEAK; FORCE rated 5 V PEAK per the Tek-EC accessory cable docs.
  - id: output-led
    label: ""
    type: indicator
    location: Right side of front panel, adjacent to the right-bezel buttons
    function: Output-state LED. Green visible in the source photo; exact convention (lit = on vs. armed) not verified.
applies_to: [2450-ec, 2460-ec, 2461-ec]
related_screens: [home]
related_modules: []
---

# Front panel — 2450-EC

## Purpose

The front panel is the user's primary tactile interface with the instrument. It hosts the resistive LCD touchscreen plus a fixed bezel of physical controls — eight hardkeys, a rotary knob, four banana-jack terminals, a USB-A port, the main power button, and an output-state LED. Everything a user reaches for during a measurement run is here. The LCD content shifts based on the test application; the bezel is fixed and shared across the 2450-EC / 2460-EC / 2461-EC family.

## Feature inventory

The panel divides into three columns plus the central display.

The **left bezel** is a button column running top-to-bottom: `hk-home`, `hk-menu`, `hk-quickset`, `hk-help`, then the `usb-port` below the buttons, and `hk-power` at the bottom. All four upper hardkeys are labeled; the USB and power keys are not. The upper four are the primary nav into the LCD UI; `hk-home` is the universal return path.

The **central LCD** (`lcd`) dominates the front panel. The `brand-mark` (`KEITHLEY`) sits in the upper-left of the LCD bezel, above the active display area. The LCD's *content* is documented separately in [`screens/home.md`](../screens/home.md); this chunk only documents the LCD as a physical feature.

The **right bezel** is split between a control cluster at the top and the terminal cluster at the bottom. The `knob` sits at the top — large rotary, push-to-select. Below it, four hardkeys: `hk-enter`, `hk-exit`, `hk-function`, `hk-trigger`. The `terminals` cluster occupies the lower right — four banana jacks in a 2×2 grid: SENSE HI / FORCE HI on top, SENSE LO / FORCE LO on bottom. Per the EC accessory cable spec, SENSE jacks are rated 210 V PEAK and FORCE jacks 5 V PEAK at the connector. The `output-led` sits adjacent to the terminal cluster.

## Visible text (verbatim)

Brand mark: `KEITHLEY` · `A Tektronix Company` (small text, partially legible at this downscale resolution — see Confidence notes).

Left-bezel button labels (top-to-bottom): `HOME` · `MENU` · `QUICKSET` · `HELP` · `POWER`.

Right-bezel button labels (top-to-bottom, below the knob): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

Terminal jack labels are not legibly resolved at this downscale; per the 2450-EC User's Manual ([`docs/user-manual/connections-and-usage.md`](../docs/user-manual/connections-and-usage.md)) the labels are `SENSE HI` / `FORCE HI` / `SENSE LO` / `FORCE LO` with `210V PEAK` / `5V PEAK` / `210V PEAK` / `5V PEAK` annotations respectively.

## Feature variations

The front-panel **layout** is identical across the 2450-EC, 2460-EC, and 2461-EC per the User's Manual figure references — same bezel buttons, same knob, same terminal positions. The **markings** on the terminals (current ratings) and the front-panel **model badge** differ: a 2461-EC will read `2461` in the lower-right of the LCD bezel where this 2450-EC reads `2450`. Verify model-badge text against a higher-resolution photo for each variant when those are added to the corpus.

The base 2450 SMU (non-EC variant) shares this exact bezel; only the test-application set in firmware differs.

## Confidence notes

- The `A Tektronix Company` subtitle below the KEITHLEY brand mark is at the legibility edge in the 1600 px downscale — transcribed from prior knowledge of the brand mark and the visible upper-case letters, not from a fully resolved view.
- Terminal jack labels (`SENSE HI`, `FORCE LO`, etc.) and the `210V PEAK` / `5V PEAK` peak-voltage markings are not directly legible at the downscale resolution; transcribed from the manual cross-reference, not from this image. A close-up photo of the terminal cluster would be a useful follow-up artifact (`closeup-terminals`).
- The `output-led` color and exact location is approximate. Manual figures show a green LED near the terminals; exact placement and lit/unlit-state convention should be verified against a higher-resolution close-up.
- Physical dimensions (WxHxD), weight, and rear-panel features are not visible in this photo and are not documented here. A `rear-panel` chunk + the User's Manual specifications appendix would fill those.

## Manual references

- **`Connections and usage`** ([`docs/user-manual/connections-and-usage.md`](../docs/user-manual/connections-and-usage.md), `user-manual` pp. 1-7 to 1-10) — describes the SENSE/FORCE banana-jack cluster (`terminals`) and the SMU-side cable connections.
- **`Getting started`** ([`docs/user-manual/getting-started.md`](../docs/user-manual/getting-started.md), `user-manual` pp. 1-2 to 1-6) — power-on procedure for `hk-power`; MENU-key navigation for `hk-menu` and `usb-port` (script copy procedure).
- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — usage of `hk-home` and `hk-menu` hardkeys.

Pending: a rear-panel chunk and a specifications-table chunk (from the manual's appendices, not yet processed) would complete this product's hardware documentation.

## Source photo

Selected from `uploads/photos/`: **photo-262_singular_display_fullPicture.jpeg** — the same canonical photo used for `screens/home.md`. Chosen here for the same reasons: sharp focus, no obstruction, full bezel visible, output appears OFF so the LCD is in its rest configuration (which is fine for hardware documentation — the screen content is decorative for this view).

The downscaled image (`front-panel.jpg`) is a copy of `screens/home.jpg` rather than a re-downscale — same source, same target resolution, same JPEG quality. A close-up shot specifically framed for the bezel (without the LCD dominating) would be a stronger source if Bryan has one to drop into `uploads/photos/`.
