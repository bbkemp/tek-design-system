---
provenance: observed
class: doc-section
doc_id: user-manual
doc_title: "Models 2450-EC, 2460-EC, and 2461-EC Potentiostats and Galvanostats User's Manual"
doc_number: 077110403
doc_date: 2020-03
applies_to: [2450-ec, 2460-ec, 2461-ec]
section_id: connections-and-usage
section_title: Connections and usage
parent_section: null
page_range: "1-7 to 1-10"
related_screens: []
related_hardware: []
---

# Connections and usage

## Summary

How to wire the supplied EC interface cable between the SMU and an electrochemical test cell. Covers the SMU-side connections (FORCE HI/LO + SENSE HI/LO banana jacks), the device-side connections for two-, three-, and four-electrode cell configurations, attaching insulated alligator clips for safe contact, and the end-to-end DUT connection.

## Content

The cable assembly can be used with Keithley SMUs for electrochemistry applications. Each connector of the assembly is labeled according to its function.

*Figure 5: Cable assembly connector labels and definitions* — SMU side: Force low (LO), Sense low (SLO), Sense high (SHI), Force high (HI). Device side: Counter electrode (CE), Reference electrode (RE), Working electrode sense (WES), Working electrode (WE).

### Make the SMU connections

**To connect to the instrument (all tests):**

The front panel of your SMU has four banana-style input and output jacks. You use the supplied cable to connect your electrochemical cell to these jacks.

The SENSE terminals are used to measure voltage at the device under test (DUT). When you use sense leads, the voltage drop across the force leads is eliminated from a measurement. This produces more accurate voltage sourcing and measurement at the DUT. Plug the SHI and SLO connectors into the SENSE terminals.

The FORCE terminals are used to source or sink voltage or current to or from a DUT. Plug the HI and LO connectors into the FORCE terminals.

Plug the four SMU-side cable connectors into the front of your SMU instrument as shown in the below graphic.

*Figure 6: Connecting SMU-side cable connectors to the SMU front-panel inputs* — Front-panel terminal layout: SENSE HI (210 V PEAK) and FORCE HI (5 V PEAK) on the top row; SENSE LO (210 V PEAK) and FORCE LO (5 V PEAK) on the bottom row. SHI/SLO cable plugs go into SENSE; HI/LO plugs go into FORCE.

### Make the device connections

The test cable lets you make connections to test cells with two, three, or four electrodes.

For **two-electrode applications**, the device-side cable connectors are used in stacked pairs. Connect the WE and WES pair to the working electrode of your electrochemical cell, and connect the CE and RE pair to the counter electrode of the cell.

*Figure 7: Two-electrode cell testing cable connections*

For **three-electrode applications**, the WE and WES connectors are stacked and attached to the working electrode. The CE and RE connectors connect to the counter electrode and reference electrode, respectively.

*Figure 8: Three-electrode cell testing cable connections*

For **four-electrode applications**, each device-side cable connector is used separately.

*Figure 9: Four-electrode cell testing cable connections*

### Attach the alligator clips

Four insulated alligator clips are supplied. You can attach these clips to the ends of the device-side connectors, as shown in the following graphic. The clips provide a safe, secure way to connect to your device.

*Figure 10: Alligator clip attached to accessory cable connector* — Red insulated alligator clip with a banana receptacle accepting one of the cable's WE/WES/CE/RE plugs.

For small cells and electrodes, you can use commercially available banana-to-microclip connectors by plugging them directly into the cable connectors.

Once the appropriate connectors or clips are attached, you are ready to connect to the test cell.

### Prepare the analyte and assemble the test cell

Before connecting the DUT, make sure to prepare the analyte and assemble the test cell for your test.

### Connect to the DUT

The next figure shows the connections from a SMU to a three-electrode test cell.

*Figure 11: Front panel connections* — Photograph of a 2450-class SMU front panel with cable plugs in all four SENSE/FORCE jacks. The four device-side leads route to a three-electrode electrochemical cell: green to Counter electrode, white to Reference electrode, yellow to Working electrode sense, red to Working electrode. Labeled connection paths: Force LO (top), Sense LO, Sense HI, Force HI.

## Cross-references

- `cable-assembly` — dimensions and electrical ratings for the cable described here.
- `home-and-menu-overview` — the front-panel terminals shown in *Figure 6* and *Figure 11* are the same terminals captured as the `terminals` control in `screens/home.md`.
- Future `hardware/front-panel.md` — once `document-hardware` lands, the SENSE/FORCE banana-jack cluster becomes its own hardware corpus entry.

## Confidence notes

- *Figure 6*: the "5 V PEAK" labels on FORCE HI and FORCE LO appear to be markings on the instrument's terminal block. The "210 V PEAK" labels appear on SENSE HI and SENSE LO. Confirm the exact wording against a higher-resolution copy of the figure if cited authoritatively.
