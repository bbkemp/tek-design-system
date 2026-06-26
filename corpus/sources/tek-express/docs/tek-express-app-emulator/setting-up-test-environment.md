---
class: doc-section
doc_id: tek-express-app-emulator
doc_title: "TekExpress AppEmulator Application Help"
doc_number: 077-xxxx-xx
doc_date: null
applies_to: [tek-express]
section_id: setting-up-test-environment
section_title: Setting up the test environment
parent_section: null
page_range: "39 to 47"
related_screens: []
related_hardware: []
---

# Setting up the test environment

## Summary

Pre-flight tasks before running tests in AppEmulator: calibrate the oscilloscope, compensate the signal path, build the test connection (no diagram printed in this CHM export), and use the **Instrument Control Settings** dialog (under the Options menu) to discover and refresh the LAN / GPIB / USB / Serial / TekLink / VXI / Non-VISA instruments the application will use. The application discovers instruments through TekVISA.

## Content

This topic contains four sub-topics:

- **Calibrate the Oscilloscope** — *(no content provided in this CHM export, heading only with Parent topic backlink.)*
- **Compensate the signal path** — *(no content provided in this CHM export, heading only.)*
- **Connection diagram** — *(no content provided in this CHM export, heading only.)*
- **Search instruments connected to the application** — full content below.

### Search instruments connected to the application

Use the TekExpress Instrument Control Settings dialog box to search the instruments (resources) connected to the application. The application uses TekVISA to discover the connected instruments.

> **Note:** The instruments required for the test setup must be connected and detected by the application, before running the test.

To refresh the list of connected instruments:

1. Select **Options > Instrument Control Settings**.
2. In the **Search Criteria** section of the **Instrument Control Settings** dialog box, select the connection types of the instruments to search. Instrument search is based on the VISA layer, but different connections determine the resource type, such as LAN, GPIB, and USB. For example, if you choose LAN, the search will include all the instruments supported by the TekExpress that are communicating over the LAN.
3. Click **Refresh**. The TekExpress application searches for the connected instruments.

   *Figure 1: Search status of the instruments connected to LAN* — Searching progress window with a graphic of LAN-connected instruments and a status bar reading `Searching on LAN 40 % Complete`.

4. When the search is complete, a dialog box lists the instrument-related details based on the search criteria. For example, for the Search Criteria as LAN and GPIB, the application displays all the LAN and GPIB instruments connected to the application.

   *Figure 2: TekExpress Instrument Control Settings window.* — Dialog box titled `TekExpress Instrument Control Settings` with two sections:
   - **Search Criteria** checkboxes: LAN (checked), GPIB (unchecked), Serial, Non-VISA Resources, TekLink, USB (checked), VXI. Refresh button and `TekVISA Timeout 300 s` field.
   - **Retrieved Instruments ( 1 )** table with columns: Connection (`VISA-LAN`), Resource (`MSO58`), Serial No (`PQ300020`), Options (`ENG-DEV-MSO5...`), Resource Addr... (`GPIB8::1::INSTR`).
   - `Last Updated July 15, 2019 07:39:07` field and Close button.

   The details of the instruments are displayed in the Retrieved Instruments table. The time and date of instrument refresh is displayed in the Last Updated field.

## Cross-references

- `starting-application` — Options menu where Instrument Control Settings is selected; the same dialog is documented again as `TekExpress instrument control settings` under that chunk.
- `getting-started` — what to do before this step (install the application, activate the license).

## Confidence notes

- The Calibrate / Compensate / Connection diagram sub-topics are empty placeholders in this CHM export. AppEmulator is a reference framework — calibration and signal-path procedures are oscilloscope-specific and not framework-specific.
- The Retrieved Instruments table in Figure 2 shows an MSO58 with GPIB resource address. This is the emulator's sample state, not a real-world configuration default.
