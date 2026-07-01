---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: scpi-commands
section_title: SCPI Commands — remote control reference
parent_section: ""
page_range: "110-157"
related_screens: []
related_hardware: []
---

# SCPI Commands — remote control reference

## Summary

The remote-control SCPI reference for the TekExpress PCI Express application. The TOC enumerates ~48 distinct SCPI command categories spanning setup queries, test execution, report generation, session management, and run/config session lifecycle. SCPI control is the **without-UI automation pathway** that customers like Subhasis Bera explicitly cite as a critical TekExpress use case (per the [`personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md) walkthrough).

## Content

### About SCPI command (pg 110)

Brief overview of the SCPI command structure and conventions used throughout this reference. SCPI commands are sent via a socket connection (TCP) to the TekExpress process.

### Socket configuration for SCPI commands (pg 110)

How to configure the TekExpress application to accept incoming SCPI socket connections — IP address binding, port selection, optional authentication.

### Command categories (per TOC pp 120-156)

The TOC groups SCPI commands into functional categories. The full list:

**Application metadata queries:**
- Set or query the device name of application (120)
- Set or query the suite name of the application (121)
- Set or query the test name of the application (121)
- Set or query the version name of the application (125)
- Set or query the general parameter values (126)

**DUT and test discovery:**
- Query the available devices in the DUT panel (133)
- Query the available suites for the selected device (134)
- Query the list of available tests (135)
- Query the available version names (138)
- Query the list of available instruments based on instrument type (138)
- Set or query the IP address of the instrument based on instrument type (139)

**Report and waveform queries:**
- Query information of the generated report file (139)
- Query information of generated waveform files (140)
- Query information of generated image files (140)

**Application identity:**
- Query the active TekExpress application name (141)
- Set or query DUTID (141)
- Set or query acquire mode status (141)
- Set or query execution mode status (142)

**Run lifecycle:**
- Generate the report for the current session (142)
- Query value of specified report header field (143)
- Query value of specified result detail (143)
- Restore the setup to default settings (144)
- Save the setup (144)
- Save the settings to a specified session (144)
- Open the setup from a specified session (145)
- Query the current setup file name (145)
- Run/stop/pause/resume measurements (145)
- Query the current measurement execution status (146)
- Query whether the current setup is saved or not (146)
- Query the status of the previous command execution (146)
- Query the last error occurred (147)
- Set or query the popup details (147)

**Limits and parameter manipulation:**
- Set or query limit values in the limits editor (148)
- Set or query waveform file recalled for specified test name and acquire type (149)
- Set or query enable/disable of Verbose function (149)
- Set or query View report after generating option (150)
- Return the report as XML string (151)
- Copy all images from current run session to destination (151)
- Select test(s) and deselect others (151)
- Return complete information about selected test (152)
- Set default session (152)

**Run/config session management:**
- Save run/config sessions (152)
- Load run/config session (153)
- Delete run/config session (153)
- Run run/config saved session (153)
- Query available list in run/config session (154)
- Query current run/config session (154)
- Override run/config session (154)
- Exit/close the application (155)

### Example script (pg 155)

A sample SCPI script showing the typical sequence: connect socket → query application name → load saved session → query selected tests → run → poll execution status → query report path → close.

## Cross-references

- **Persona context**: Subhasis Bera explicitly cites the SCPI automation pathway in [`../../walkthroughs/personas-and-jobs-to-be-done.md`](../../walkthroughs/personas-and-jobs-to-be-done.md): *"these are tested one by one and integrated and they are tested again and automated using Tek Express automation without the UI."* This SCPI surface is what enables that without-UI workflow.
- **Customer ask**: AMD Bangalore's *"complete automation in 12-24 months"* ask ([`../../decks/india-customer-voc-2023-march/empathy-map-amd.md`](../../decks/india-customer-voc-2023-march/empathy-map-amd.md)) targets this SCPI pathway.
- **Brian Bowman's migration concerns** (in [`../../../../tek-flow/walkthroughs/customer-feedback-thread.md`](../../../../tek-flow/walkthroughs/customer-feedback-thread.md)): PI (Programming Interface) command continuity between TekExpress and TekFlow is on the critical path. The SCPI command set documented in this section is the literal interface that must remain compatible (or be migrated thoughtfully) when PCIe Tx customers move to TekFlow.
- **Sibling SCPI references**: [`../tek-express-ddr5-tx-user-manual/scpi-commands.md`](../tek-express-ddr5-tx-user-manual/scpi-commands.md) and [`../tek-express-app-emulator/`](../tek-express-app-emulator/_index.md) — the SCPI framework is shared across TekExpress variants; per-variant SCPI commands cover the variant-specific test names, DUT settings, and acquisitions.

## Confidence notes

- The full SCPI reference spans pages 110-157 — ~48 distinct command categories per the TOC.
- This chunk catalogs the command surface at TOC-name granularity but does not transcribe each command's syntax / parameter / return-value details. For canonical SCPI syntax, refer to the source PDF page-by-page.
- The SCPI command surface is largely framework-shared across TekExpress variants; PCIe-specific commands are typically additive (CXL test categories, switch-matrix routing commands, etc.).
- Example script on page 155 is illustrative; production-grade automation should refer to the per-command reference for error handling and timing.
