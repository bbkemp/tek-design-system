---
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: creating-or-opening-test-project
section_title: Creating or Opening a Test Project
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Creating or Opening a Test Project

## Summary

Keysight's USB3.2 Test Application uses **test projects** as the persistence unit — analogous to TekExpress sessions. A project persists DUT identity, test selections, per-test configuration, connection mappings, automation settings, and historical results. Projects are the durable artifact customers manage; sessions in TekExpress are the equivalent.

## Content

### New project

`File ▶ New Project` (or via the `NEW PROJECT` title-bar control documented in [`../../../keysight-d9040/screens/set-up.md`](../../../keysight-d9040/screens/set-up.md)) creates a blank project. The application prompts for project name + storage location. New projects start with no tests selected and an empty configuration.

### Open existing project

`File ▶ Open` (or Recent Projects list) loads a `.proj` file from disk. Loading replaces the current configuration with the project's saved state. The application warns if there are unsaved changes.

### Save

`File ▶ Save` writes the current state to the loaded `.proj` file. `File ▶ Save As` writes to a new path. Project save captures:
- DUT identity
- Test selections + parameters + limit values
- Channel/probe mappings
- Automation script associations (if any)
- Run/configuration preferences

Project save does **not** capture per-run results — those are written to the project's results subdirectory and to the HTML report file.

### Import / Export

Keysight supports project zip import/export for portability — `Project ▶ Import Zip` and `Project ▶ Export Zip` (per the competitive audit at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/), Keysight's project zip import/export is flagged as a "Keysight Lead" dimension vs TekExpress's session-files approach).

## Cross-references

- **Tek equivalent**: TekExpress sessions. See [`../../../tek-express/docs/tek-express-app-emulator/saving-recalling-test-setup.md`](../../../tek-express/docs/tek-express-app-emulator/saving-recalling-test-setup.md) and [`../../../tek-express/docs/tek-express-pci-express/saving-recalling-test-setup.md`](../../../tek-express/docs/tek-express-pci-express/saving-recalling-test-setup.md). Both vendors solve the same persistence problem; Keysight uses project-as-folder + project-zip export; TekExpress uses session-file + Multi-session-run.
- **Customer ask from STM France 2021**: *"Session or Saving the configurations to customize to test scenarios like My voltage 1, my voltage 2"* (in [`../../../tek-flow/decks/stm-france-tekflow-presentation/stm-customer-feedback.md`](../../../tek-flow/decks/stm-france-tekflow-presentation/stm-customer-feedback.md)) — Keysight already provides this with named projects.
- **Subhasis Bera's $30-50K-on-the-wizard framing** (in [`../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md)) explicitly names the saved-configuration value prop — TekExpress and Keysight both implement this; Keysight's competitive advantage in import/export portability is documented in the audit.

## Confidence notes

- Test projects in Keysight correspond closely to sessions in TekExpress; the file format and folder layout differ.
- The `Save As` and zip import/export workflows are mirrored in the D9040USBC USB4 Test Application; this Online Help inherits the framework patterns.
- Specific project-file format details (XML vs proprietary, embedded metadata) are not transcribed here; refer to the source PDF.
