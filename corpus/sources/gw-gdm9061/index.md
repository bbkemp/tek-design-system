# GDM9061 — screen index

Generated **2026-06-30**. All 10 unique screens clustered from 29 source captures in `uploads/photos/` are documented. The GDM9061 is a 6½-digit benchtop digital multimeter; this corpus subject is the source UI for the internal **"Dragon Storm"** reskin and is documented as-is (no design-system mapping — that is a separate, dated audit via `prototype-qa`).

## Screen graph

```
measurement  (readout)                    ← navigational root (single big readout)
├── range-select   (dialog)               ← Range softkey opens the range picker bar
├── trendchart     (graph)                ← Display ▸ TrendChart
├── histogram      (graph)                ← Display ▸ Histogram
├── statistics     (readout)              ← Math ▸ STAT  (also COMP / pass-fail state)
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

## Paired manual sections

Pending. No GDM9061 manual has been processed yet. Every screen's **Manual references** section is a placeholder; run `document-pdf` on the GDM9061 User's Manual, then `pair-manual gw-gdm9061` to cross-link.

## How this index is regenerated

Each pass of the `document-screens`, `document-hardware`, or `document-pdf` skill (or `refresh-index`) rebuilds this file from the frontmatter of every `.md` under `screens/`, `hardware/`, and `docs/`. Hand-edits are overwritten on the next run.
