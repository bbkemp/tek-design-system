---
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: setup-configuration
section_title: Configuration — Set measurement limits for tests (Global Settings, Limits Editor)
parent_section: null
page_range: "91 to 94"
related_screens: [setup-test-selection-config, setup-test-selection-limits-editor]
related_hardware: []
---

# Configuration — Set measurement limits for tests (Global Settings, Limits Editor)

## Summary

The Configuration surface in AppEmulator. The Configuration topic does not appear as a numbered wizard step (unlike DDR5's step 4); instead it is reached from the Test Selection tab's **Configure** button. Contains a Common parameters table (currently only the Limit Editor row, which "Displays the upper and lower limits for the applicable measurement using different types of comparisons"), Global Settings configuration, and Measurements configuration. All three sub-tables are printed empty in this CHM export — Figure captions are present for `Configuration tab: Global Settings` and `Configuration tab: Measurement` but the rendered figures are not rendered.

## Content

### Configuration: Set measurement limits for tests

Use Configuration tab to view and configure the Global Settings and the measurement configurations. The measurement specific configurations available in this tab depends on the selections made in the DUT panel and Test Selection panel.

**Table 1. Configuration tab: Common parameters**

| Settings | Description |
|---|---|
| Limit Editor | Displays the upper and lower limits for the applicable measurement using different types of comparisons. |

*Figure 1: Configuration tab: Global Settings* — *(no figure rendered in this CHM export — caption only)*

**Table 2. Configuration tab: Global Settings configuration**

| Setting | Description |
|---|---|

*(Empty table — no rows printed in this CHM export.)*

*Figure 2: Configuration tab: Measurement* — *(no figure rendered in this CHM export — caption only)*

**Table 3. Configuration tab: Measurements configuration**

| Setting | Description |
|---|---|

*(Empty table — no rows printed in this CHM export.)*

## Cross-references

- [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md) — the live Setup > Test Selection > Configure surface in the corpus that Figure 2 (Measurement) corresponds to.
- [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) — the Limit Editor dialog referenced by the Common parameters table.
- `setup-test-selection-and-acquisitions` — the Test Selection tab's **Configure** button is the entry point to this Configuration surface.
- `setup-preferences-panel` — the next conceptual step after Configuration.

## Confidence notes

- AppEmulator's Setup wizard has only four numbered steps (DUT, Test Selection, Acquisitions, Preferences). Configuration is NOT a separate wizard step here — it is documented as a manual topic but is reached via the Test Selection > Configure button. This differs from the DDR5 manual, where Configuration is wizard step 4.
- All three configuration tables (Common parameters apart from the single Limit Editor row, Global Settings, Measurements) are printed with only column headers in this CHM-export PDF. The DDR5 manual at the equivalent section populates these tables with several rows; AppEmulator's empty rows are an export gap and/or a reflection that the emulator has no real measurement configurations to document.
- Figure 1 and Figure 2 captions are present but the figures themselves are not rendered in the PDF.
