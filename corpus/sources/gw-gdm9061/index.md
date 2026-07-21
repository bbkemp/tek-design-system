# GDM9061 — screen index

Generated **2026-06-30** (updated **2026-07-10**: added `dual-display`). All 11 unique screens (10 clustered from 29 source captures, plus `dual-display` added later) in `uploads/photos/` are documented. The GDM9061 is a 6½-digit benchtop digital multimeter; this corpus subject is the source UI for the internal **"Dragon Storm"** reskin and is documented as-is (no design-system mapping — that is a separate, dated audit via `prototype-qa`).

## Screen graph

```
measurement  (readout)                    ← navigational root (single big readout)
├── range-select   (dialog)               ← Range softkey opens the range picker bar
├── trendchart     (graph)                ← Display ▸ TrendChart
├── histogram      (graph)                ← Display ▸ Histogram
├── statistics     (readout)              ← Math ▸ STAT  (also COMP / pass-fail state)
├── dual-display   (readout)              ← 2ND softkey — dual 1ST/2ND display (DCV + ACV, AC+DC)
└── config-system  (config)              ← MENU key — Configuration dialog, System tab
    ├── config-display    (config)        ← Display tab
    ├── config-interface  (config)        ← Interface tab
    └── config-lan        (config)        ← Lan Setup tab

measurement-alt  (readout)                ← alternate display theme (single capture; see screen notes)
```

## All documented screens

| screen_id | screen_title | screen_type | function_state |
|---|---|---|---|
| [measurement](screens/measurement.md) | Measurement (single readout) | readout | DC Voltage (VDC), Auto range 10 V |
| [measurement-alt](screens/measurement-alt.md) | Measurement (alternate display theme) | readout | DCV, Auto 2 V range |
| [range-select](screens/range-select.md) | Range selector | dialog | DC Voltage, range picker open |
| [trendchart](screens/trendchart.md) | TrendChart | graph | DC Voltage, TrendChart display mode |
| [histogram](screens/histogram.md) | Histogram | graph | DC Voltage, Histogram display mode |
| [statistics](screens/statistics.md) | Math display — Statistics | readout | DC Voltage, MathDisp = STAT |
| [dual-display](screens/dual-display.md) | Dual Display (1ST / 2ND) | readout | 1ST DCV / 2ND ACV, AC+DC combined |
| [config-system](screens/config-system.md) | Configuration — System | config | System tab active |
| [config-display](screens/config-display.md) | Configuration — Display | config | Display tab active |
| [config-interface](screens/config-interface.md) | Configuration — Interface | config | Interface tab active |
| [config-lan](screens/config-lan.md) | Configuration — Lan Setup | config | Lan Setup tab active |

## Source captures folded as state variations

The 29 captures collapsed to 10 screens; the non-canonical captures are documented as **State variations** within the screen `.md` files:

| Folded into | Source captures |
|---|---|
| `measurement` | mVDC ×3, mVAC, 2-Wire OHM, Continuity (value + OPEN), Resistance OverLoad, Frequency, Display Menu, Log Menu ×2 |
| `trendchart` | mVDC Trendchart No Input (flat-line + logging) |
| `statistics` | Math Display Stat 2 / 3 / 4, Pass-Fail (COMP, red Fail), Log Saved (save toast) |

## Documented hardware

None. This set contains only on-screen UI captures (no device/front-panel photos). Drop hardware photos into `uploads/photos/` and run `document-hardware` to add them.

## Documented manuals

| Doc | Pages processed | Chunks | Index |
|---|---|---|---|
| [Dual Measurement Multimeter GDM-9060/9061 User Manual](docs/user-manual/_index.md) (Rev. G, 2024-03) | 21-246 of 384 | 16 | [`docs/user-manual/_index.md`](docs/user-manual/_index.md) |

Processed every section the 10 screens map to plus the shared foundation (status bar, measurement functions, trigger/filter, math/statistics, compare/pass-fail, the menu/display config, and the remote/LAN interface). The reference long-tail — full SCPI Command Set + Status System (pp. 252-346), Web Control, Specifications, Dual Measurement, Diode/Capacitance/Temperature, Relative/Hold, 4094/User Mode + External Trigger, and the Fuse/Battery/Defaults appendix — is listed as **pending** in the doc `_index.md`.

## Paired manual sections

All 10 screens' **Manual references** sections are populated (no remaining placeholders). Each manual chunk cross-links back via `related_screens`. Strongest pairings:

- `measurement` ← status-bar, basic-measurement-overview, voltage/current/resistance/continuity/frequency, trigger-and-filter, math-measurement, display-setting, screenshot-and-log
- `statistics` ← math-measurement (STAT), compare-mode (COMP/pass-fail), screenshot-and-log
- `trendchart` / `histogram` ← display-setting, math-measurement
- `range-select` ← voltage-measurement, resistance-measurement (range tables)
- `config-system` ← configure-system, system-and-firmware · `config-display` ← configure-display, display-setting
- `config-interface` ← configure-interface (pp. 212-229) · `config-lan` ← configure-interface LAN block (pp. 232-245)

Re-run `/pair-manual gw-gdm9061` after any future doc pass to extend the links.

## How this index is regenerated

Each pass of the `document-screens`, `document-hardware`, or `document-pdf` skill (or `refresh-index`) rebuilds this file from the frontmatter of every `.md` under `screens/`, `hardware/`, and `docs/`. Hand-edits are overwritten on the next run.

<!-- /AUTO -->

> Generated by /refresh-index on 2026-07-21. Edits above the `<!-- /AUTO -->` marker are preserved; everything below is regenerated.

## Screens (11)

| screen_id | screen_title | screen_type | function_state | applies_to |
|---|---|---|---|---|
| [config-display](screens/config-display.md) | Configuration — Display | config | Configuration menu, Display tab active | — |
| [config-interface](screens/config-interface.md) | Configuration — Interface | config | Configuration menu, Interface tab active | — |
| [config-lan](screens/config-lan.md) | Configuration — Lan Setup | config | Configuration menu, Lan Setup tab active | — |
| [config-system](screens/config-system.md) | Configuration — System | config | Configuration menu, System tab active | — |
| [dual-display](screens/dual-display.md) | Dual Display (1ST / 2ND) | readout | Dual display — 1ST DC Voltage (mVDC), 2ND AC Voltage (mVAC), AC+DC combined | — |
| [histogram](screens/histogram.md) | Histogram | graph | DC Voltage, Histogram display mode | — |
| [measurement](screens/measurement.md) | Measurement (single readout) | readout | DC Voltage (VDC), Auto range 10 V | — |
| [measurement-alt](screens/measurement-alt.md) | Measurement (alternate display theme) | readout | DCV, Auto 2 V range | — |
| [range-select](screens/range-select.md) | Range selector | dialog | DC Voltage, range picker open | — |
| [statistics](screens/statistics.md) | Math display — Statistics | readout | DC Voltage, MathDisp = STAT | — |
| [trendchart](screens/trendchart.md) | TrendChart | graph | DC Voltage, TrendChart display mode | — |

## Docs (16)

### user-manual (16)

| section_id | section_title | parent_section |
|---|---|---|
| [basic-measurement-overview](docs/user-manual/basic-measurement-overview.md) | Basic Measurement Overview | — |
| [compare-mode](docs/user-manual/compare-mode.md) | Application: Compare Mode | — |
| [configure-display](docs/user-manual/configure-display.md) | Configure Display | — |
| [configure-interface](docs/user-manual/configure-interface.md) | Configure Interface | — |
| [configure-system](docs/user-manual/configure-system.md) | Configure System | — |
| [continuity-test](docs/user-manual/continuity-test.md) | Continuity Test | basic-measurement-overview |
| [current-measurement](docs/user-manual/current-measurement.md) | AC/DC Current Measurement | basic-measurement-overview |
| [display-setting](docs/user-manual/display-setting.md) | Display Setting | — |
| [frequency-period-measurement](docs/user-manual/frequency-period-measurement.md) | Frequency/Period Measurement | basic-measurement-overview |
| [math-measurement](docs/user-manual/math-measurement.md) | Math Measurement | — |
| [resistance-measurement](docs/user-manual/resistance-measurement.md) | 2W/4W Resistance Measurement | basic-measurement-overview |
| [screenshot-and-log](docs/user-manual/screenshot-and-log.md) | Screenshot & Log | — |
| [status-bar](docs/user-manual/status-bar.md) | Status Bar | — |
| [system-and-firmware](docs/user-manual/system-and-firmware.md) | System & Firmware | — |
| [trigger-and-filter](docs/user-manual/trigger-and-filter.md) | Trigger and Filter Setting | — |
| [voltage-measurement](docs/user-manual/voltage-measurement.md) | AC/DC Voltage Measurement | basic-measurement-overview |

## Cross-references

| Source | Target | Edge |
|---|---|---|
| doc-section `basic-measurement-overview` | screen `measurement` | related_screens |
| doc-section `basic-measurement-overview` | screen `range-select` | related_screens |
| doc-section `compare-mode` | screen `statistics` | related_screens |
| doc-section `configure-display` | screen `config-display` | related_screens |
| doc-section `configure-interface` | screen `config-interface` | related_screens |
| doc-section `configure-interface` | screen `config-lan` | related_screens |
| doc-section `configure-system` | screen `config-system` | related_screens |
| doc-section `continuity-test` | screen `measurement` | related_screens |
| doc-section `current-measurement` | screen `measurement` | related_screens |
| doc-section `display-setting` | screen `trendchart` | related_screens |
| doc-section `display-setting` | screen `histogram` | related_screens |
| doc-section `display-setting` | screen `measurement` | related_screens |
| doc-section `display-setting` | screen `config-display` | related_screens |
| doc-section `frequency-period-measurement` | screen `measurement` | related_screens |
| doc-section `math-measurement` | screen `statistics` | related_screens |
| doc-section `math-measurement` | screen `trendchart` | related_screens |
| doc-section `math-measurement` | screen `histogram` | related_screens |
| doc-section `math-measurement` | screen `measurement` | related_screens |
| doc-section `resistance-measurement` | screen `measurement` | related_screens |
| doc-section `resistance-measurement` | screen `range-select` | related_screens |
| doc-section `screenshot-and-log` | screen `statistics` | related_screens |
| doc-section `screenshot-and-log` | screen `trendchart` | related_screens |
| doc-section `screenshot-and-log` | screen `measurement` | related_screens |
| doc-section `status-bar` | screen `measurement` | related_screens |
| doc-section `status-bar` | screen `measurement-alt` | related_screens |
| doc-section `status-bar` | screen `range-select` | related_screens |
| doc-section `status-bar` | screen `trendchart` | related_screens |
| doc-section `status-bar` | screen `histogram` | related_screens |
| doc-section `status-bar` | screen `statistics` | related_screens |
| doc-section `system-and-firmware` | screen `config-system` | related_screens |
| doc-section `trigger-and-filter` | screen `measurement` | related_screens |
| doc-section `voltage-measurement` | screen `measurement` | related_screens |
| doc-section `voltage-measurement` | screen `range-select` | related_screens |
| doc-section `voltage-measurement` | screen `measurement-alt` | related_screens |

## Coverage notes

- Screens documented: 11
- Walkthroughs documented: 0
- Manual sections documented: 16
- Hardware views documented: 0
- API snapshots: 0
- Code snapshots: 0
- Cross-references: 34
- Last regenerated: 2026-07-21 by /refresh-index
