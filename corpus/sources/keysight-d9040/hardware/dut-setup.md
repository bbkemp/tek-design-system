---
class: hardware-view
product: keysight-d9040
software_version: TBD
part_id: dut-setup
part_title: Host laptop and DUT fixture
view: dut-setup
image: dut-setup.jpg
source_photo: uploads/photos/IMG_7038.jpg
dimensions: N/A (multi-instrument bench frame)
features:
  - id: host-laptop
    label: ""
    type: other
    location: Left and center of frame
    function: The Windows host laptop running the D9040USBC USB4 Test Application AND the Resource Arbiter Server. Two windows are visible side-by-side on the laptop display — the Resource Arbiter `ResourceArbiter - Shortcut` console (left) and the `USB4 Test Application — NEW PROJECT` (right). This is the host machine the entire D9040 test-application stack runs on; the scope (documented in `scope-detail.md` / `bench-overview.md`) is remote-controlled from here via the Resource Arbiter.
  - id: laptop-keyboard
    label: ""
    type: other
    location: Lower half of laptop chassis
    function: Built-in chiclet keyboard, dark backlight not lit in this frame. Standard laptop input.
  - id: laptop-display
    label: ""
    type: display
    location: Top of laptop chassis
    function: Laptop LCD showing two side-by-side application windows: the Resource Arbiter console (left, dark theme, scrolling log) and the USB4 Test Application (right, light theme, workflow tabs visible). Specific UI content is documented in `screens/resource-arbiter-console.md` and the `set-up` / `select-tests` / `automate` etc. screen chunks.
  - id: external-monitor
    label: ASUS
    type: display
    location: Background, behind the laptop
    function: An external desktop monitor (ASUS-branded chassis visible). In this frame the monitor is on but the screen content is dim / mostly off-screen at this angle — not a visible test-active surface in this frame.
  - id: dut-fixture
    label: ""
    type: other
    location: Right side of frame, on the bench
    function: A black rectangular device with what appear to be **USB-C ports** (white connectors visible along the top edge) and a row of **green LED indicators** along the lower edge. Consistent with the AGGC2 USB4 / DisplayPort switching fixture that the Resource Arbiter discovers as `AGGC2_USB4` and `AGGC2_DP` (see `screens/resource-arbiter-console.md`). Specific model designation (`AGGC2 USB4` vs. `AGGC2 DisplayPort`, or a unified box that hosts both capabilities) is not derivable from this frame; see Confidence notes.
  - id: dut-usb-ports
    label: ""
    type: port
    location: Top edge of the dut-fixture
    function: A row of USB-C connectors on the top edge of the fixture. White connector bodies visible. Exact count and labeling not legibly resolved.
  - id: dut-leds
    label: ""
    type: indicator
    location: Bottom edge of the dut-fixture
    function: A row of green LED indicators along the lower edge of the fixture. Likely per-port status / link-state indicators. Number of LEDs and exact labels not legibly resolved.
  - id: dut-asset-sticker
    label: ""
    type: badge
    location: Right side of the dut-fixture, on the chassis face
    function: A white asset / inventory sticker on the side of the DUT fixture — visible but text not legibly resolved at this downscale. Possibly the asset-tracking tag or a Keysight model / serial label.
  - id: power-strip
    label: ""
    type: other
    location: Right-center of frame, on the bench in front of the dut-fixture
    function: A white power strip / surge protector with multiple outlets, lying flat on the bench. Provides AC power to the bench instruments.
  - id: bench-mat
    label: ""
    type: other
    location: Bench surface
    function: Green ESD work-surface mat — same surface visible in `bench-overview.jpg`. Standard test-bench grounding surface.
  - id: cable-bundle-teal
    label: ""
    type: other
    location: Across the bench, foreground
    function: The same light-blue / teal coax bundle documented in `scope-detail.md` and `bench-overview.md` — routes between the dut-fixture and off-frame to the scope. Likely USB4 / Thunderbolt active cables.
applies_to: [keysight-d9040]
related_screens: [resource-arbiter-console, resource-arbiter, set-up]
related_modules: []
---

# Host laptop and DUT fixture

## Purpose

This view documents the **host-side hardware** the D9040 test applications run on: the laptop hosting both the Resource Arbiter Server and the D9040USBC USB4 Test Application, plus the **DUT switching fixture** (consistent with the AGGC2 enclosure the Resource Arbiter discovers as `AGGC2_USB4` and `AGGC2_DP`) sitting on the bench beside it. Where `scope-detail` documents the acquisition instrument and `bench-overview` documents the whole bench at orientation distance, this view is the **operator's seat** — the surfaces the operator actually interacts with during a test session.

The laptop display shows the two anchor windows of an active D9040USBC session: the Resource Arbiter console on the left (scrolling its lock-grant / lock-release log) and the USB4 Test Application on the right (workflow tabs `Set Up`, `Select Tests`, `Configure`, `Connect`, `Run`, `Automate`, `Results`, `HTML Report` visible across the top). The DUT fixture on the right side of the frame is connected (off-frame) via the teal cable bundle.

## Feature inventory

The frame divides into three regions.

The **host laptop** (`host-laptop`) occupies the left and center. The `laptop-display` shows two side-by-side application windows — the Resource Arbiter console (`ResourceArbiter - Shortcut`, dark theme) on the left and the `USB4 Test Application — NEW PROJECT` (light theme) on the right. The console scrollback shows the same lock-grant lifecycle documented in `screens/resource-arbiter-console.md` — `Instrument "Scope" was discovered`, `Instrument "AGGC2_USB4" was discovered`, `Instrument "AGGC2_DP" was discovered`, `KSI8RSA SwitchManager not used`, `TAP Engine successfully started.`, `Now listening on: http://0.0.0.0:55441`, and a series of `LOCK Received request` / `Instrument was locked` / `LOCKPOLL ... successful --> lock now granted` lines. The test application window shows the standard workflow-tab row and what looks like the Automate / Results tab body. The `laptop-keyboard` is unlit in this frame — operator is not actively typing.

Behind the laptop is an `external-monitor` with an `ASUS` brand mark visible on the chassis. Screen content is not clearly visible in this angle — the monitor is on (the bezel power LED appears lit) but the surface visible to the camera is largely dim or off-angle.

The **DUT fixture** (`dut-fixture`) sits on the right side of the bench. A black rectangular chassis with three visible features:

- `dut-usb-ports` — a row of USB-C connectors along the top edge, with white connector bodies visible. Exact count not legibly resolved.
- `dut-leds` — a row of green LED indicators along the lower edge. Likely per-port link / activity status.
- `dut-asset-sticker` — a white sticker on the right chassis face. Text content not legibly resolved (model number, serial, asset tag — any of those).

A `power-strip` (white, multi-outlet) sits on the bench in front of the DUT fixture. The bench surface is the same green ESD mat (`bench-mat`) visible in `bench-overview`. A `cable-bundle-teal` runs across the foreground, the same teal / light-blue coax routing as documented in the other hardware views — likely USB4 / Thunderbolt active cables routing between the DUT fixture and the scope (off-frame to the left in this view).

## Visible text (verbatim)

- Laptop window-1 titlebar: `ResourceArbiter - Shortcut`.
- Laptop window-2 titlebar: `USB4 Test Application — NEW PROJECT`.
- Laptop window-2 workflow tabs (across the top): `Set Up` · `Select Tests` · `Configure` · `Connect` · `Run` · `Automate` · `Results` · `HTML Report`.
- Laptop window-2 menu bar: `File` · `View` · `Tools` · `Help`.
- Resource Arbiter console log lines (partially legible at this downscale — full transcription is in `screens/resource-arbiter-console.md`): `Instrument "Scope" was discovered` · `Instrument "AGGC2_USB4" was discovered` · `Instrument "AGGC2_DP" was discovered` · `KSI8RSA SwitchManager not used` · `TAP Engine successfully started.` · `Hosting environment: Development` · `Content root path: C:\Program Files\Keysight\Test Automation\Packages\Resource Arbiter Server` · `Now listening on: http://0.0.0.0:55441` · `Application started. Press Ctrl+C to shut down.` · `The current setup is: Default` · multiple `LOCK Received request for` / `Instrument was locked` / `LOCKPOLL ... successful --> lock now granted` / `Resource Information was queried` lines.
- External monitor brand mark: `ASUS`.
- DUT-fixture asset sticker: text not legibly resolved (see Confidence notes).

## Feature variations

- **Laptop model is not identified.** A different host laptop would change the chassis but not the role — the D9040 software stack runs on any Windows host meeting the application's system requirements.
- **The dut-fixture's specific configuration** (number of USB-C ports, LED count, presence of a DP-side fixture vs. unified USB4/DP fixture) varies by Keysight DUT-fixture model. The Resource Arbiter discovery log mentions `AGGC2_USB4` and `AGGC2_DP` as separate logical instruments — they may be hosted in one physical box or two. The frame shows one black fixture; whether there is a second off-frame is not derivable.
- **Cable count and routing** vary per test setup. The frame shows the teal cable bundle running across the foreground but does not resolve individual cable endpoints.

## Confidence notes

- **The DUT fixture's specific model is not identified visually.** It is consistent with the AGGC2 family of Keysight USB4 / DisplayPort switching fixtures based on the Resource Arbiter's discovery log (`AGGC2_USB4` and `AGGC2_DP`), but the photo does not show a legibly-resolved model badge. Treat as `AGGC2-family fixture` until a higher-resolution close-up confirms the specific model.
- **Customer-app branding observed:** the laptop's titlebar reads `USB4 Test Application — NEW PROJECT` — this is the **Keysight test application's** title, and a fresh project named `NEW PROJECT` (the default). No third-party customer or asset overlay branding is visible on the surrounding equipment in this frame. The ASUS monitor is a standard off-the-shelf desktop monitor.
- **DUT-asset-sticker text is not resolved.** Even on the original `IMG_7038.jpg` the sticker is small enough that close inspection would be needed; the 1600 px downscale loses it entirely. A close-up photo of the fixture face would be the right follow-up artifact (`closeup-dut-fixture`).
- **DUT-led count is not resolved.** A row of green indicators is visible but the exact count (4, 8, more?) is not derivable. Similarly, the USB-C port count on the top edge is not legibly resolved.
- **External monitor screen content is not derivable.** The monitor is on but the camera angle catches mostly bezel / reflection rather than clear screen content. Cannot confirm what (if anything) the monitor was displaying during this capture.
- **Resource Arbiter console log content is partially legible** at the downscale of this frame, but the full transcription is captured in `screens/resource-arbiter-console.md` against a closer-framed source photo (IMG_7003); use that as the authoritative text reference, not this one.

## Manual references

> Pending. The Keysight D9040USBC USB4 Test Application User Guide setup chapter and the AGGC2 fixture documentation are the natural cross-references for this view's `dut-fixture`, `dut-usb-ports`, and `dut-leds` features once paired.

## Source photo

Selected from `uploads/photos/`: **IMG_7038.jpg** — the only photo in the set that captures the **operator's host machine alongside a probable DUT fixture in the same frame**. It pairs the Resource Arbiter console (proving the test-automation backplane is live) with a visible bench-side fixture (the AGGC2-style box), making it a strong cross-reference into both `screens/resource-arbiter-console.md` and the upcoming AGGC2 fixture documentation. The 1600 px downscale (`dut-setup.jpg`) preserves the layout but loses fine detail on the DUT-fixture sticker and LED labels — a follow-up close-up (`closeup-dut-fixture.jpg`) would resolve those.
