---
provenance: observed
class: doc-section
doc_id: user-manual
doc_title: "Models 2450-EC, 2460-EC, and 2461-EC Potentiostats and Galvanostats User's Manual"
doc_number: 077110403
doc_date: 2020-03
applies_to: [2450-ec, 2460-ec, 2461-ec]
section_id: home-and-menu-overview
section_title: Home and Menu screen overview
parent_section: connections-and-usage
page_range: "1-11"
related_screens: [home]
related_hardware: []
---

# Home and Menu screen overview

## Summary

Defines the **default** Home and Menu screens of the SourceMeter instrument — the screens you see before launching any electrochemistry test application. Confirms that the HOME and MENU hardkeys are the primary nav into these screens. Establishes that running an EC test application replaces both screens with application-specific variants; ending the application returns the user to the defaults. Points to the *Interactive SourceMeter Instrument Reference Manual* for full SMU operation details.

## Content

Before you run a test application, the default Home and Menu screens of your SourceMeter instrument appear like those in the next graphic. Press the **HOME** or **MENU** keys on your instrument to access these screens.

*Figure 12: SMU Home and Menu screens in standard mode* — Two screens shown side-by-side.

The **Home screen** displays:

- Status bar: `Local` · `defbuffer1` · `No Script` · `CONT` (with chevron indicator).
- Function header: `MEASURE CURRENT 2-WIRE` (left), `AZERO` indicator (right).
- Primary readout: `+0.00000 µA`.
- Range row: `Range / 1µA / Auto` (button).
- Source line: `SOURCE V` indicator and small `MEAS` label.
- Secondary readout: `+000.006 mV`.
- Source row: `Range / 200 mV / Auto` (button) · `Source` (label) · `+000.000 mV` (source level) · `Limit` (label) · `1.06000 mA` (current limit).

The **Menu screen** is a grid of icon-launchers, grouped into four columns:

| Column | Items |
|---|---|
| **Source** | Quickset, Settings, Sweep, Pulse, Config Lists |
| **Measure** | Settings, Calculations, Config Lists, Reading Buffers |
| **Views** | Graph, Histogram, Reading Table |
| **Trigger** | Templates, Configure |
| **Scripts** | Run, Manage, Save Setup, Record, Apps |
| **System** | Event Log, Communication, Settings, Calibration, Info/Manage |

When you run an electrochemistry test application, the default Home and Menu screens are replaced by application-specific Home and Menu screens. These screens vary, depending on the potentiostat or galvanostat test application. You can access these screens with the HOME and MENU keys. You will see examples of these screens later in this manual.

> **NOTE:** When a test application is running, you must select **End App** to exit the test and return to normal SMU operation.

For more information on using your SMU, see your *Interactive SourceMeter® Instrument Reference Manual*.

## Cross-references

- [`screens/home.md`](../../screens/home.md) — the default Home screen captured here is the same screen as the corpus's `home` screen. The corpus screen's `controls[]` and Visible-text section match this manual figure exactly except for source-level / limit values (the manual figure shows `+000.000 mV` source / `1.06000 mA` limit; the corpus screen shows `+00.0000 mV` / `105.000 µA` — different DUT load, same screen layout).
- `connections-and-usage` — parent section; physical-connection prerequisites for using this screen.
- Future `screens/menu.md` — the Menu screen described here is not yet documented in the corpus; when it is, this chunk's `related_screens` array gains `menu`.
- Section 2+ chunks (`cyclic-voltammetry-*`, etc.) — describe application-specific Home and Menu replacements.
- *Interactive SourceMeter® Instrument Reference Manual* — external reference, not in this corpus.

## Confidence notes

- The Menu screen icon grid labels in the manual figure are small at the scanned resolution. The grouping (Source / Measure / Views / Trigger / Scripts / System) and primary item labels (Quickset, Settings, Sweep, Pulse, Config Lists, Graph, Histogram, Reading Table, Templates, Configure, Run, Manage, Save Setup, Record, Apps, Event Log, Communication, Calibration, Info/Manage) are legible enough to transcribe; second-row items may have minor spelling variation from the source. Confirm against a higher-resolution scan or against a direct screenshot when `menu.md` is processed.
- The exact source value on the Home screen in *Figure 12* (`+000.006 mV` secondary readout) suggests the unit was *just* powered on with terminals open-circuit at the time the figure was captured — same as the corpus `home.jpg`. State variation is `output OFF`.
