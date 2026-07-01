---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-online-help
doc_title: Keysight D9020USBC/D9320USBC USB3.2 Test Application Online Help
doc_number: ""
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: configuring-automation
section_title: Configuring Automation in the Test Application
parent_section: ""
page_range: ""
related_screens: []
related_hardware: []
---

# Configuring Automation in the Test Application

## Summary

The Automate tab manages the scripted automation surface for the test application — SCPI-style remote control commands that orchestrate Project loading, test selection, execution, and result retrieval. The Automate tab presents a script editor + the Create Automation Commands dialog for command lookup. Equivalent to TekExpress's SCPI command surface; both vendors target the without-UI automation pathway.

## Content

### Script editor

A code editor surface for authoring automation scripts. Supports:
- **Syntax highlighting** for the application's automation language
- **Script load/save** to disk
- **Run script** from the editor

### Create Automation Commands dialog

A 6-tab modal documented in detail at [`../../../keysight-d9040/screens/create-automation-commands.md`](../../../keysight-d9040/screens/create-automation-commands.md):
- **File Menu** — load/save/new project commands
- **Set Up** — DUT name, serial, fixture, channel mapping commands
- **Select Tests** — test enable/disable commands by name
- **Configure** — per-test parameter set/query commands
- **Connect** — connection verification commands
- **Run** — execute / pause / skip / report commands

The dialog acts as a command catalog — pick the command + parameters, the dialog generates the script-language snippet, paste it into the editor.

### Automation language

The script language is a SCPI-style command-response protocol. Each command returns a status code + optional response data.

### Project automation

Automation commonly automates the project lifecycle:
1. Load a saved project
2. Programmatically set DUT identity
3. Select specific tests by name
4. Run
5. Wait for completion (poll execution status)
6. Retrieve results / report path
7. Save project (if state changed) or close

## Cross-references

- **UI documented** in detail at [`../../../keysight-d9040/screens/automate.md`](../../../keysight-d9040/screens/automate.md) (editor) and [`../../../keysight-d9040/screens/create-automation-commands.md`](../../../keysight-d9040/screens/create-automation-commands.md) (6-tab modal).
- **Tek equivalent** at [`../../../tek-express/docs/tek-express-pci-express/scpi-commands.md`](../../../tek-express/docs/tek-express-pci-express/scpi-commands.md) (PCIe SCPI reference) and the per-variant SCPI sections in each TekExpress manual. TekExpress uses a socket-based SCPI surface; Keysight uses a script-authored automation language with a dialog-generated command set.
- **Subhasis Bera's framing** of the without-UI automation pathway in [`../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../../tek-express/walkthroughs/personas-and-jobs-to-be-done.md) applies equally to Keysight; both vendors enable customers to drive compliance test from scripts without UI interaction.

## Confidence notes

- The Automate tab + Create Automation Commands dialog are well-documented in the keysight-d9040 screens corpus; this chunk summarizes from that documentation.
- The exact automation language (syntax, command structure) differs from TekExpress SCPI; specific commands listed in the create-automation-commands.md screen.
- A confidence note in [`../../../keysight-d9040/screens/create-automation-commands.md`](../../../keysight-d9040/screens/create-automation-commands.md) flagged `Resond to Existing Results Prompt` as likely a Keysight typo for "Respond"; preserved verbatim in the screen.
