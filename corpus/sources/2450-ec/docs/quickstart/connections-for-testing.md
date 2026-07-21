---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: connections-for-testing
section_title: Connections for testing
parent_section: null
page_range: "22 to 23"
related_screens: [home, graph]
related_hardware: []
---

# Connections for testing

## Summary

The guide's "Test" section: front-panel test connections with the Model 8608 clip leads (front or rear terminals, never mixed), a nine-step verify-measurement procedure (source current / measure voltage into a short), saving buffer data to a USB flash drive as `.csv`, and viewing measurements on the full-screen front-panel Graph (Menu > Views > Graph, with pinch/zoom and the Data, Scale, and Trigger tabs).

## Content

The following figure shows the physical connections for the front panel. Note that you must use either the front terminals or rear terminals — you cannot mix connections. The rear terminal connections are triaxial. The front-panel connections are safety banana jacks.

The example in this guide shows you how to make connections to the front panel and short the connections.

For this example, you can make the connections with the insulated banana cables that are supplied with the 2450, the Keithley Instruments Model 8608 High Performance Clip Leads.

*Figure: photograph of clip leads connected to the front-panel banana jacks.*

*To make the connections:*

1. Make sure the front-panel power switch is in the off (O) position.
2. Connect the red lead to the FORCE HI connection.
3. Connect the black lead to the FORCE LO connection.

### Verify measurement operation

The following steps provide a quick way to verify that the instrument is operating correctly.

*To verify measurement operation:*

1. Turn the instrument on.
2. On the front panel, press the **HOME** key.
3. Press the **FUNCTION** key.
4. Under Source Current and Measure, select **Voltage**.
5. Select **Source** (at the bottom of the home screen). The Current Source Value dialog box is displayed.
6. Enter **10 mA**.
7. Short the FORCE HI and FORCE LO connections.
8. Press the **OUTPUT ON/OFF** switch to enable the output and start making measurements.
9. When measurements are complete, press the **OUTPUT ON/OFF** switch to disable the output.

The voltage measurements appear in the Measure Voltage area of the home screen.

*To save the data to a USB flash drive:*

1. Insert a USB flash drive into the front-panel USB port.
2. Press the **MENU** key.
3. Under Measure, select **Reading Buffers**.
4. Select **defbuffer1**.
5. Select **Save To USB**.
6. Make file content selections.
7. Select **OK** (on the screen). A confirmation message is displayed.
8. Select **Yes**.

The instrument saves the data to a `.csv` file on the flash drive.

*To view the measurements on the front-panel graph:*

1. Press the **MENU** key.
2. Under Views, select **Graph**.

You can swipe and use pinch and zoom to change the view of data on the graph. You can also adjust the graph settings using the options in the Data, Scale, and Trigger tabs.

*Figure: full-screen Graph screen — tab bar `Graph` · `Data` · `Scale` · `Trigger` · `CONT`; µV-scale y-axis with time axis; noisy trace; bottom buffer row `defbuffer1` with `Buffer Max: +6.534576mV / Avg: +48.90082µV` and `Stats Min: -7.736206mV / Std: +358.3894µV`.*

## Cross-references

- [`screens/home.md`](../../screens/home.md) — steps 2–6 operate the corpus `home` screen: the `Source` control at the bottom of the home screen is the corpus's `source-level` input (tap opens a numeric editor, matching step 5's Current Source Value dialog); the Measure Voltage area is the `primary-readout` region.
- [`screens/graph.md`](../../screens/graph.md) — the "view the measurements on the front-panel graph" procedure and its figure are the corpus `graph` screen. This chunk confirms two items the corpus screen flags as unverified: the navigation path to Graph is `MENU` > Views > `Graph`, and the bottom buffer row shows buffer statistics (Max/Avg and Min/Std), not cursor coordinates.
- `unpack-and-inspect` — the Model 8608 clip leads are accessory 1 in the packing list.
- `front-panel-overview` — the OUTPUT ON/OFF switch, USB port, and banana jacks used here.
- `help-and-function` — the FUNCTION dialog used in steps 3–4.

## Confidence notes

- The Graph figure's exact readout values are transcribed from a small printed screenshot; the magnitudes (µV/mV) are legible but the least-significant digits are at the limit of print resolution.
