---
provenance: observed
class: doc-section
doc_id: quickstart
doc_title: "Model 2450 System SourceMeter Quick Start Guide"
doc_number: "2450-903-01"
doc_date: 2019-08
applies_to: [2450, 2450-ec]
section_id: help-and-function
section_title: Help / FUNCTION
parent_section: connect-the-instrument
page_range: "21"
related_screens: []
related_hardware: []
---

# Help / FUNCTION

## Summary

The HELP key's contextual help screens (highlight an item, press HELP for a brief description — illustrated with the System Events tab of the event log) and the FUNCTION key's selection dialog for source/measure function pairs. Notes that many settings are saved per-function and restored when that function becomes active again.

## Content

### Help

You can display help screens for the menu items and buttons. The help screens give a brief description of the option that the menu or button sets. To display the description, highlight the menu item or button and press the HELP key. The graphic below shows an example of the help when you are on the System Events tab of the event log.

*Figure: help dialog — "You selected help on: [System Events]. The event list displays the events that have occurred in the instrument. The event log entries are one of the following types: • Error: An error occurred. This may indicate that a command was sent incorrectly. • Warning: This message indicates that a change occurred that could affect operation. • Information: The message is for information only. This indicates status changes or information that may be helpful. If the Log Command option is on, it also includes commands." `OK` button.*

### FUNCTION

The **FUNCTION** key opens the FUNCTION selection dialog box, which allows you to select the source and measure functions.

*Figure: FUNCTION dialog over the Menu screen — two columns: "Source Voltage and Measure:" `Current` · `Voltage` · `Resistance` · `Power`; "Source Current and Measure:" `Current` · `Voltage` · `Resistance` · `Power`; `Cancel` button.*

The instrument saves many of the settings with the source or measure function that was active when you set them. For example, if you set the measure function to current and you set a value for NPLCs, the instrument saves the NPLC value for that measure function. When you change the measure function to voltage, the NPLC value changes to the value that was last set for the voltage measure function.

## Cross-references

- `faqs-and-next-steps` — "Why did my settings change?" repeats the per-function settings-persistence explanation.
- `connections-for-testing` — the verify-measurement procedure uses the FUNCTION dialog (Source Current and Measure > Voltage).
- The HELP and FUNCTION hardkeys appear in the corpus Home screen bezel inventory (`btn-help`, `btn-function` in `screens/home.md`, via `touchscreen-and-home-screen`).
