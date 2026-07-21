---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: touchscreen-and-home-screen
section_title: Touchscreen display overview
parent_section: connect-the-instrument
page_range: "15 to 17"
related_screens: [home, graph]
related_hardware: []
---

# Touchscreen display overview

## Summary

How to operate the 2450 touchscreen (finger selection or navigation control), the Home screen's anatomy (status/event indicator row, measure section, swipeable bottom half), and the five swipe screens — SOURCE, SETTINGS, GRAPH, STATISTICS, and USER — with worked examples of the SETTINGS and GRAPH swipe screens. The GRAPH swipe screen is the entry point to the full-screen Graph view.

## Content

You can use the touchscreen display to set up the instrument and tests. You use the keys and touch capabilities to make selections.

To use the touchscreen, select options with your finger. You can also use the navigation control to highlight an item, and then press the control to select it.

The following text describes some of the most commonly used screens. For more detail and descriptions of all the screens, see the *Model 2450 Reference Manual*. For detail about an option, select it and press the **HELP** key to display a brief description of the option.

### Home screen overview

The home screen is the first screen that opens when the instrument is powered on. You can always return to the home screen by pressing the **HOME** key.

*Figure: Home screen (status bar `Local` · `defbuffer1` · `No Script` · `CONT`; `MEASURE CURRENT 2-WIRE` readout `+0.71943 MΩ` with `AZERO`; `Range 10mA`; `SOURCE V` swipe strip showing `MEAS` readout `+19.9990 V`, `Range 20V Auto`, `Source +20.0000V`, `Limit 1.06000mA`).*

The top row on the home screen displays the status and event indicators. You can select these options to open dialog boxes that provide additional information about the status or event.

The measure section of the home screen displays the present measurement. It also displays the measure function and allows you to select a measure range.

The bottom half of the touchscreen display contains multiple screens that you can swipe to access additional information and settings:

- **SOURCE swipe screen:** Displays the source settings. When the output is on, this displays either the programmed source value or the actual source, depending on the setting of source readback. On the source swipe screen, you can set the source range, source value, and source limit.
- **SETTINGS swipe screen:** Allows you to turn features on and off, such as the measurement filter, math functions, relative offset, and NPLCs.
- **GRAPH swipe screen:** Shows a graph of the readings in the presently selected buffer. Touch the graph icon on the right side of the graph swipe header to open a full-screen graph view.
- **STATISTICS swipe screen:** Contains statistics based on the readings in the active buffer.
- **USER swipe screen:** If set up (remote commands only), displays information that you can define through a remote interface.

An example of the SETTINGS swipe screen is shown below. In the SETTINGS swipe screen shown here, the Auto Zero feature is turned on. The other settings are turned off.

*Figure: SETTINGS swipe screen (`Rel` · `Math` · `NPLCs` · `Filter` · `Auto Zero` ✓ · `Display Digits 5.5 Digits` · `Range` arrows; footer `Range: 20V` · `Source: +20.000V` · `Limit: 1.0600 mA`).*

In the GRAPH swipe screen shown here, you can view the measurements as they occur. To see a full screen graph, touch the graph icon on the right side of the swipe screen header bar to go to the Graph screen. In the full-screen graph, you can also change the data and scale of the information that is displayed on the graph.

*Figure: GRAPH swipe screen (readout `+00.0111 nA`, `Range 10nA Auto`, `GRAPH` strip with pA-scale trace and time axis).*

## Cross-references

- [`screens/home.md`](../../screens/home.md) — the Home screen described here is the corpus's `home` screen. The guide's anatomy (status/event indicator row, measure section, swipeable source region) matches the corpus screen's three-region layout (status bar / measure region / source region); the guide's figures show `MEASURE VOLTAGE` and `MEASURE CURRENT` function states with output ON, whereas the corpus photo shows `MEASURE CURRENT 2-WIRE` at the noise floor (output OFF) — same screen identity, different state.
- [`screens/graph.md`](../../screens/graph.md) — the full-screen Graph view reached from the GRAPH swipe screen (via the graph icon in the swipe header) is the corpus's `graph` screen. This chunk documents the entry path and that data and scale are adjustable there; the fuller Graph-screen procedure is in `connections-for-testing`.
- `navigation-keys-and-menu` — the HELP-key behavior referenced above is detailed under `help-and-function`; ENTER/EXIT/TRIGGER keys and the Menu screen follow this section in the guide.
- *Model 2450 Reference Manual* — external reference for all screens; not in this corpus.

## Confidence notes

- The guide's Home screen figures show the base-2450 default screens. On the EC variants, running an electrochemistry test application replaces the default Home and Menu screens with application-specific variants (per `docs/user-manual/home-and-menu-overview.md`); this chunk describes the defaults only.
- Figure transcriptions (readout values, footer values) are taken from the printed screenshots at page scale; values are legible but state-dependent and not authoritative beyond identifying the screen.
