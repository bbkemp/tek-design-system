---
provenance: observed
class: doc-section
doc_id: d9020usbc-usb3-moi
doc_title: "Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Methods of Implementation"
doc_number: null
doc_date: 2026-01
applies_to: [keysight-d9020]
section_id: installing
section_title: Installing the USB3.2 Compliance Test Application
parent_section: null
page_range: "9 to 14"
related_screens: []
related_hardware: []
---

# Installing the USB3.2 Compliance Test Application

## Summary

Chapter 1 — install-side prerequisites. Lists the equipment and software (D9020USBC/D9320USBC license, optional E2688A Serial Data Analysis and Clock Recovery, optional N5401A EZJIT Plus, scope models, MATLAB Runtime R2017b, accessories), how to obtain and install the Test Application from the Keysight website, and how to install the license key via either Keysight License Manager 5 or the Keysight Software Manager Utility (Host ID / Ethernet Address procurement, license-file install).

## Content

### Required Equipment and Software

In order to run the USB3.2 Compliance Test Application, you need the following equipment and software:

- D9020USBC/D9320USBC USB3.2 Compliance Test Application software and license.
- E2688A Serial Data Analysis and Clock Recovery software and license (optional).
- N5401A EZJIT Plus software and license (optional).
- Use one of the following Oscilloscope models:
  - **For D9020USBC USB3.2 Compliance Test Application:**
    - Keysight V-Series Oscilloscopes (13 - 33 GHz)
    - Keysight UXR Series Oscilloscopes (13 - 33 GHz) or (40 - 100 GHz)
  - **For D9320USBC USB3.2 Compliance Test Application:**
    - Keysight UXR Series Oscilloscopes (13 - 33 GHz) or (40 - 100 GHz)
    - Keysight XR8 Series Oscilloscopes (13 - 33 GHz)

> **NOTE:** Keysight recommends using 13 GHz and higher bandwidth oscilloscope with at least 1M memory depth to run D9020USBC/D9320USBC USB3.2 tests. The minimum required Infiniium oscilloscope software version is described in the compliance test application release notes. Keysight also recommends using a second monitor to view the automated test application.

- Matlab Runtime Version R2017b (9.3)
- Clock Switch Analysis for Sigtest Update

> **NOTE:** For more info on the two points above, please see Online Help > **Setting Up the Test Environment** page > **Setting Up Test Information** page > **BLR Mode - System Configuration** section.

- Keyboard, quantity = 1 (provided with Keysight Infiniium oscilloscope).
- Mouse, quantity = 1 (provided with Keysight Infiniium oscilloscope).
- Precision 3.5 mm BNC to SMA male adapter, Keysight p/n 54855-67604, qty = 2
- 50-ohm Coax Cable with SMA Male Connectors — 24-inch or less RG-316/U or similar, qty = 2, matched length
- 1169A Infiniimax probe, quantity = 2.
- U7242A USB 3.0 test fixture.

> **NOTE:** At least 16 GHz bandwidth is required to run Gen2 tests.

> **NOTE:**
> - USB3.2 Compliance Test Application supports 2 channel scope but in two channel mode, switch matrix is not available.
> - Also, in case of XR8 Series scope, the test application doesn't support switch matrix at all.

### Installing the Software

1. Make sure you have the minimum required version of the Infiniium oscilloscope software.
   The compliance test application's release notes file describes the minimum required version.
   To check your current version of Infiniium oscilloscope software, choose **Help > About Infiniium…** from the main menu.
2. To obtain the USB3.2 Compliance Test Application, please go to Keysight website:
   - `http://www.keysight.com/find/D9020USBC`
   - `http://www.keysight.com/find/D9320USBC`
3. The link for USB3.2 Compliance Test Application will appear. Double-click it and follow the instructions to download and install the application software.
   Be sure to accept the installation of the .NET Framework software; it is required in order to run the USB3.2 Compliance Test Application.

### Installing the License Key

To procure a license, you require the Host ID information that is displayed in the Keysight License Manager application installed on the same machine where you wish to install the license.

#### Using Keysight License Manager 5

To view and copy the Host ID from Keysight License Manager 5:

1. Launch Keysight License Manager on your machine, where you wish to run the Test Application and its features.
2. Copy the Host ID that appears on the top pane of the application. Note that x indicates numeric values.

*Figure 1: Viewing the Host ID information in Keysight License Manager 5* — shows the `Host ID: PCSERNO,JBxxxxxxx` field in the top pane of Keysight License Manager.

To install one of the procured licenses using Keysight License Manager 5 application,

1. Save the license files on the machine, where you wish to run the Test Application and its features.
2. Launch Keysight License Manager.
3. From the configuration menu, use one of the options to install each license file.

*Figure 2: Configuration menu options to install licenses on Keysight License Manager 5* — shows the wrench/configuration menu with `Install License File… (Ctrl+I)`, `Install License from Text… (Ctrl+T)`, `View License Alerts (Ctrl+L)`, `Explore Transport URLs`, `About Keysight License Manager`.

For more information regarding installation of procured licenses on Keysight License Manager 5, refer to *Keysight License Manager 5 Supporting Documentation*.

#### Using Keysight Software Manager Utility

To view and copy the Ethernet Address from Keysight Software Manager Utility:

1. Launch **Keysight Software Manager Utility** on the machine where you wish to run the Test Application and its features.
2. Copy the **Ethernet Address**, which is a set of alphanumeric values (as highlighted in *Figure 3*) that appears in the **Add License** tab of the application.

*Figure 3: Viewing the Ethernet Address* — shows the Software Manager Utility with `Keysight Host ID: PCSERNO,JX29529562`, `Ethernet Address: 24gaf411a7lf  ac7565126a1`, and the navigation rail `Add License / View Licenses / View Usage`.

To install one of the procured licenses using the Keysight Software Manager Utility application:

1. Save the license files on the machine where you wish to run the Test Application and its features.
2. Launch Keysight Software Manager Utility.
3. In the **Add License** tab (*Figure 4*), use one of the options to install the license file.

*Figure 4: License installation options* — surfaces the three license-install entry points: `Enter Activation Code` button, `Install License File` button, and `Specify a Remote License Server` button (for a remote license server). A footer link reads "Keysight License Manager 5 — When do I use this tool?"

For more information regarding installation of procured licenses in Keysight Software Manager Utility, refer to **Supporting Documentation** section on the Keysight Software Manager Utility web page.

## Cross-references

- `at-a-glance` — overview of what the app does once installed.
- `preparing-to-take-measurements` — the next step after install: scope calibration, fixture wiring, app launch.

## Confidence notes

- Page 14 is the last page of the chapter (Software Manager Utility install steps) and is numbered as page 14 in the chapter index; the printed Chapter 1 nominally ends at page 13 per the TOC, but the actual Software Manager Utility install instructions spill onto page 14. Treated as a single chunk.
- Two URLs include unicode/PDF artifacts of the Keysight Host ID (`24gaf411a7lf  ac7565126a1`); preserved as printed in the figure caption.
