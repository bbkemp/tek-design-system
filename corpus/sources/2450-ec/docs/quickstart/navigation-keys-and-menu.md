---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: navigation-keys-and-menu
section_title: ENTER and EXIT keys / TRIGGER key / Menu screen overview
parent_section: connect-the-instrument
page_range: "18"
related_screens: []
related_hardware: []
---

# ENTER and EXIT keys / TRIGGER key / Menu screen overview

## Summary

Behavior of the ENTER, EXIT, and TRIGGER hardkeys (including TRIGGER's three mode-dependent actions and the three-second hold to change measurement method), and the Menu screen reached via the MENU key — a grid of icon launchers grouped under Source, Measure, Views, Trigger, Scripts, and System.

## Content

### ENTER and EXIT keys

The **ENTER** key selects a highlighted option. In most cases, it opens a menu or dialog box that allows you to make settings for that option.

The **EXIT** key returns to the previous screen or closes a dialog box. For example, if you are in the MENU screen, press **EXIT** to return to the home screen.

### TRIGGER key

The action of the **TRIGGER** key depends on the measurement method that is selected:

- If you set the instrument to continuously trigger, this displays a dialog box that allows you to select another measurement method.
- If you set the instrument to manually trigger, pressing the **TRIGGER** key causes the instrument to make a measurement.
- If you defined a trigger model, pressing the **TRIGGER** key initiates the trigger model.

To change the measurement method, hold the TRIGGER key for three seconds to display the methods you can choose.

### Menu screen overview

When you press the **MENU** key on the front panel, the Menu screen is displayed.

*Figure: Menu screen — icon grid in six columns:*

| Column | Items |
|---|---|
| **Source** | Quickset, Settings, Sweep, Config Lists |
| **Measure** | Settings, Calculations, Config Lists, Reading Buffers |
| **Views** | Graph, Histogram, Reading Table |
| **Trigger** | Templates, Configure |
| **Scripts** | Run, Manage, Save Setup, Record, Apps |
| **System** | Event Log, Communication, Settings, Calibration, Info/Manage |

From this screen, you can select source, measure, graphing, trigger, scripting, and system setup menus. These menus allow you to choose options to set up your instrument to meet the needs of your applications.

## Cross-references

- `touchscreen-and-home-screen` — the home screen the EXIT key returns to.
- `connections-for-testing` — uses `MENU` > Views > `Graph` and `MENU` > Measure > `Reading Buffers` paths from this Menu screen.
- [`docs/user-manual/home-and-menu-overview.md`](../user-manual/home-and-menu-overview.md) — the EC user's manual documents the same default Menu screen (and notes it is replaced by application-specific variants when an EC test application runs). No `screens/menu.md` exists in the corpus yet; when it lands, this chunk's `related_screens` gains `menu`.

## Confidence notes

- The base-2450 Menu figure in this guide does not show a **Pulse** item under Source; the EC user-manual's Menu description (`home-and-menu-overview`) lists Source as "Quickset, Settings, Sweep, Pulse, Config Lists". This may be a model/firmware difference (the 2461 supports pulse) or an artifact of the small icon-grid figure; flagged rather than reconciled. Confirm when `screens/menu.md` is processed from a direct photo.
