---
provenance: observed
class: screen
software: 2450-EC
software_version: TBD
screen_id: system-communications
screen_title: System Communications
screen_type: config
image: system-communications.jpg
source_photo: uploads/photos/photo-675_singular_display_fullPicture.jpeg
navigation_path: [Menu, System, Communication]
parent_screens: [menu]
child_screens: []
related_hardware:
  - front-panel
controls:
  - id: title-bar
    label: SYSTEM COMMUNICATIONS
    type: indicator
    state: active
    action: Screen title in the blue header band. Static.
  - id: tab-gpib
    label: GPIB
    type: tab
    state: enabled
    action: Switches the body to the GPIB interface settings (Address field — see State variations, photo-669).
  - id: tab-usb
    label: USB
    type: tab
    state: enabled
    action: Switches the body to the USB interface page ("no settings available" message — see State variations, photo-672).
  - id: tab-lan
    label: LAN
    type: tab
    state: active
    action: Switches the body to the LAN / ethernet settings (active in the canonical photo).
  - id: tab-tsp-link
    label: TSP-Link
    type: tab
    state: enabled
    action: Switches the body to the TSP-Link node settings (see State variations, photo-678).
  - id: row-tcpip-mode
    label: TCP/IP Mode
    type: dropdown
    state: enabled
    action: LAN addressing mode. Value button shows `Auto`; grey caption under the label appears to list the choices (read as "Auto or Manual" — at the limit of legibility). Presumably opens a mode picker when tapped; not captured mid-tap.
  - id: row-ip-address
    label: IP Address
    type: readout
    state: active
    action: Assigned IP address. Reads `Not available` in this shot (no LAN link established).
  - id: row-gateway
    label: Gateway
    type: readout
    state: active
    action: Gateway address. Reads `Not available` in this shot.
  - id: row-subnet
    label: Subnet
    type: readout
    state: active
    action: Subnet mask. Reads `Not available` in this shot.
  - id: btn-lxi-lan-reset
    label: LXI LAN Reset
    type: button
    state: enabled
    action: Resets the LXI LAN configuration (button label at the limit of legibility; behavior requires manual confirmation).
  - id: btn-apply-settings
    label: Apply Settings
    type: button
    state: enabled
    action: Applies the LAN settings shown on this tab (label at the limit of legibility; behavior requires manual confirmation).
  - id: lxi-lan-indicator
    label: LXI LAN
    type: indicator
    state: active
    action: LXI LAN status indicator at the bottom left — a small rounded icon/lamp beside the label; its state convention (color/on-off meaning) is not derivable from this shot.
  - id: mac-address
    label: MAC Address
    type: readout
    state: active
    action: Instrument MAC address line under the LXI LAN indicator; the digits are not legible in this capture.
  - id: btn-home
    label: HOME
    type: hardkey
    state: enabled
    action: Returns to the Home screen.
  - id: btn-menu
    label: MENU
    type: hardkey
    state: enabled
    action: Returns to the main Menu screen (this screen's parent).
  - id: btn-quickset
    label: QUICKSET
    type: hardkey
    state: enabled
    action: Opens the quick-preset / function picker.
  - id: btn-help
    label: HELP
    type: hardkey
    state: enabled
    action: Context help for the active screen.
  - id: control-knob
    label: ""
    type: knob
    state: enabled
    action: Rotary navigation between controls; push-to-select.
  - id: btn-enter
    label: ENTER
    type: hardkey
    state: enabled
    action: Confirm the focused control.
  - id: btn-exit
    label: EXIT
    type: hardkey
    state: enabled
    action: Back out to the Menu screen.
  - id: btn-function
    label: FUNCTION
    type: hardkey
    state: enabled
    action: Cycle source/measure function.
  - id: btn-trigger
    label: TRIGGER
    type: hardkey
    state: enabled
    action: Manual trigger / trigger model start.
---

# System Communications — LAN tab

## Purpose

The System Communications screen configures every remote-control interface of the 2450-EC. It is reached from the main Menu screen (MENU hardkey → System group → Communication; the Menu screen itself is not yet documented in the corpus — see Confidence notes). A four-tab strip under the title — `GPIB`, `USB`, `LAN`, `TSP-Link` — switches the body between per-interface settings pages; the four tabs are state variations of this one screen, photographed separately in this cluster. The canonical photo shows the LAN tab with no network attached: TCP/IP mode `Auto`, and IP address, gateway, and subnet all `Not available`.

## Controls inventory

The blue **header band** holds `title-bar` (`SYSTEM COMMUNICATIONS`). Directly beneath it, the **tab strip** offers `tab-gpib`, `tab-usb`, `tab-lan` (active in this shot), and `tab-tsp-link`.

The **LAN tab body** is a loose two-column arrangement. Top left, `row-tcpip-mode` (`TCP/IP Mode`) pairs a bold label (with a small grey caption beneath, read as "Auto or Manual") with a wide value button showing `Auto`. Below it, `row-ip-address` (`IP Address`) shows `Not available`. The right column stacks `row-gateway` (`Gateway` → `Not available`) and `row-subnet` (`Subnet` → `Not available`). Lower in the body sit two wide buttons: `btn-lxi-lan-reset` (`LXI LAN Reset`) on the left and `btn-apply-settings` (`Apply Settings`) on the right. Along the bottom edge, `lxi-lan-indicator` (`LXI LAN` with a small status icon) sits above the `mac-address` line (`MAC Address: …`, digits illegible), and two lines of small text occupy the bottom-right corner (illegible — see Confidence notes).

The hardware bezel frames the screen as on every 2450-EC view: `btn-home`, `btn-menu`, `btn-quickset`, `btn-help` down the left, with the USB-A port and power button below them; `control-knob`, `btn-enter`, `btn-exit`, `btn-function`, `btn-trigger` and the terminals down the right. The full bezel is documented in [`hardware/front-panel.md`](../hardware/front-panel.md).

## State variations

The four interface tabs are state variations within this screen, each photographed in this cluster:

- **GPIB tab** — `uploads/photos/photo-669_singular_display_fullPicture.jpeg`. Body shows a single setting: `Address`, a bold label with a small grey caption beneath (illegible at this resolution — plausibly the legal address range) and a wide value button containing a single narrow character, most plausibly `1`. Small footer text at the bottom right of the body is not legible.
- **USB tab** — `uploads/photos/photo-672_singular_display_fullPicture.jpeg`. Body is empty except for one centered message line, read as `No settings available for USB` (at the limit of legibility — wording approximate), and a line of small footer text at the bottom (illegible).
- **LAN tab** — canonical photo (photo-675), described above.
- **TSP-Link tab** — `uploads/photos/photo-678_singular_display_fullPicture.jpeg`. Body shows `Node` — a bold label with a small grey caption beneath (illegible — plausibly the legal node range) and a wide value button containing a single narrow character, most plausibly `1` — and, below it, a second wide button whose label is not legible (shape consistent with `Initialize`), with two lines of small grey caption text to its right (illegible; appears to describe initializing a network of TSP-Link instruments — unverified).

The LAN tab's readouts (`IP Address`, `Gateway`, `Subnet`) will show real values instead of `Not available` when the instrument has an active LAN connection; only the disconnected state was photographed.

## Visible text (verbatim)

Header: `SYSTEM COMMUNICATIONS`.

Tab strip: `GPIB` · `USB` · `LAN` · `TSP-Link`.

LAN tab body: `TCP/IP Mode` · `Auto` · `IP Address` · `Not available` · `Gateway` · `Not available` · `Subnet` · `Not available` · `LXI LAN Reset` · `Apply Settings` · `LXI LAN` · `MAC Address` *(digits illegible)*.

GPIB tab body (photo-669): `Address`.

USB tab body (photo-672): `No settings available for USB` *(approximate — at the limit of legibility)*.

TSP-Link tab body (photo-678): `Node`.

Bezel labels (left): `HOME` · `MENU` · `QUICKSET` · `HELP`. Bezel labels (right): `ENTER` · `EXIT` · `FUNCTION` · `TRIGGER`.

## Confidence notes

- **Parent screen `menu` is not yet documented.** The Menu screen this page is launched from was not photographed; `parent_screens: [menu]` anticipates it. The manual corpus confirms the path: the Menu grid's **System** group contains a **Communication** launcher (`navigation-keys-and-menu`, `home-and-menu-overview`).
- All four photos in this cluster were taken in a dark room with the instrument small in frame; transcription was done from enlarged crops of the originals. Small-type items remain unresolved even enlarged:
  - `row-tcpip-mode` caption — read as "Auto or Manual"; wording approximate.
  - `btn-lxi-lan-reset` / `btn-apply-settings` labels — read as `LXI LAN Reset` and `Apply Settings`; both are blurred and the readings should be confirmed against the manual or a sharper capture.
  - `mac-address` digits — not legible; only the label pattern (`MAC Address: …`) is discernible.
  - Two lines of small text at the bottom right of the LAN tab — completely illegible. Their position and length are consistent with VISA-style resource descriptors, but no characters could be resolved; not transcribed.
  - GPIB `Address` value and its range caption — the value button appears to contain `1`; the caption beneath `Address` is illegible.
  - USB tab message — wording `No settings available for USB` is approximate; the footer line beneath it is illegible.
  - TSP-Link `Node` value (appears `1`), its range caption, the second button's label (shape consistent with `Initialize`), and the two-line caption beside it are all at or beyond the limit of legibility; flagged rather than transcribed as fact.
- `lxi-lan-indicator` state convention (what the icon looks like when LXI LAN is up) is not derivable from this single disconnected shot.
- Tab-switch interaction (tap vs. knob) is not observable from stills.
- No detailed remote-interface/communications section of the manuals has been processed into the corpus yet; the pairings below cover only the Menu-navigation context. Detailed manual pairing pending.

## Manual references

- **`ENTER and EXIT keys / TRIGGER key / Menu screen overview`** ([`docs/quickstart/navigation-keys-and-menu.md`](../docs/quickstart/navigation-keys-and-menu.md), `quickstart` p. 18) — the Menu screen grid whose **System** column contains the **Communication** launcher that opens this screen.
- **`Home and Menu screen overview`** ([`docs/user-manual/home-and-menu-overview.md`](../docs/user-manual/home-and-menu-overview.md), `user-manual` p. 1-11) — the EC user's manual lists the same System group (`Event Log, Communication, Settings, Calibration, Info/Manage`) on the default Menu screen.
- Detailed pairing pending: neither processed manual yet contains the remote-communications setup content (GPIB addressing, LAN/LXI configuration, TSP-Link initialization) that this screen's settings correspond to.

## Source photo

Selected from `uploads/photos/`: **photo-675_singular_display_fullPicture.jpeg** (LAN tab) — the best of the four shots of this screen: the most content-rich tab, all field labels and values legible after enlargement, no obstruction over the LCD. Other candidates, all kept as documented state variations rather than canonical: `photo-669` (GPIB tab — single Address field, value blurred), `photo-672` (USB tab — soft focus, single message line), `photo-678` (TSP-Link tab — Node field and second button blurred, hand near the bezel at right).
