---
class: doc-section
doc_id: tek-express-displayporttx
doc_title: "TekExpress DisplayPort Tx Automated Test Solution Software — Printable Help"
doc_number: null
doc_date: null
applies_to: [tek-express]
section_id: welcome-and-help
section_title: Welcome, Related documentation, Conventions, and Technical support
parent_section: null
page_range: "3 to 33"
related_screens: []
related_hardware: []
---

# Welcome, Related documentation, Conventions, and Technical support

## Summary

Front-matter for the TekExpress DisplayPort Tx help: Tektronix contact information; product positioning of TekExpress DisplayPort as a CTS 1.2 / CTS 1.4 transmitter compliance and validation app that uses Tektronix DP-AUX (standard DP 1.2 DUTs) or Unigraf DPR-100 to drive the DUT into different test modes (with TenLira scripts for Alpine Ridge DUTs); the documentation set (online CHM Help + printable PDF available from `tek.com`); the help conventions (DUT abbreviation, "select" applies to mouse + touch); and the General + Application-specific information Tektronix Technical Support needs when contacted.

## Content

### Contacting Tektronix

Tektronix, Inc.
14150 SW Karl Braun Drive
P.O. Box 500
Beaverton, OR 97077
USA

For product information, sales, service, and technical support:

- In North America, call 1-800-833-9200.
- Worldwide, visit `www.tek.com` to find contacts in your area.

### Welcome

The Tektronix TekExpress DisplayPort software supports CTS 1.2 and CTS 1.4. The software uses Tektronix DisplayPort AUX controller (DP-AUX for standard DP 1.2 DUT) and Unigraf DPR-100 to automate DisplayPort physical layer source compliance tests for Standard and Type-C connectors. The DP-AUX / DPR-100 puts the DUT in different test modes and eliminates the need for user intervention during testing. For Alpine Ridge DUTs, the software automates the TenLira scripts to put the DUT into different test modes.

Tektronix provides various tools such as DPOJET (Jitter and Eye Analysis tool), SDLA (Serial Data Link Layer Analysis), and DisplayPort essential (DisplayPort measurement library) to perform the characterization/debug of the silicon, and TekExpress DisplayPort application to perform the compliance tests.

*Figure 1: TekExpress DisplayPort — Untitled* — Setup wizard with side-nav (Setup, Status, Results, Reports), wizard step indicator (1 DUT, 2 Test Selection, 3 Acquisitions, 4 Configuration, 5 Preferences). DUT panel shows: DUT ID `DUT001`; Acquire live waveforms / Use pre-recorded waveform files radios; View dropdown (`Advanced`); Device (`DisplayPort`); Version (`CTS 1.4`); Connector (`Standard`); Device Profile group with Data Rates checkboxes (RBR, HBR, HBR2, HBR3), Pre-Emphasis Levels checkboxes (0 dB, 1 3.5 dB, 2 6 dB, 3 9.5 dB), Voltage Swing checkboxes (0 400 mV, 1 600 mV, 2 800 mV, 3 1200 mV), SSC dropdown (`Both`), Lane Setup group (Multi-Lane Setup button, Selected Lanes `Lane0`, Use Switch Matrix checkbox + Setup), DUT Automation group with Test Mode dropdown (`Manual`), Signal Validation dropdown (`Skip validation`). Right rail: Start (green) and Pause (grey). Status bar: "Ready."

### Getting help and support

#### Related documentation

The following manuals are available as part of the TekExpress DisplayPort Tx Automated Solution documentation set.

| Item | Purpose | Location |
|---|---|---|
| Online Help | In-depth operation and UI help | *(image of CHM viewer)* |
| PDF of the Online Help | In-depth operation and UI help | PDF file that ships with the software distribution (`TekExpress Displayport-Automated-Test-Solution-Software-Printable-Help-EN-US.pdf`). It is also available at `HTTP://WWW.TEK.COM`. |

#### Conventions used in help

Online Help uses the following conventions:

- The term "DUT" is an abbreviation for Device Under Test.
- The term "select" is a generic term that applies to the two mechanical methods of choosing an option: using a mouse or using the touch screen.

#### Technical support

Tektronix values your feedback on our products. To help us serve you better, please send us your suggestions, ideas, or comments on your application or oscilloscope. Contact Tektronix through mail, telephone, or the Web site. See *Contacting Tektronix* for more information.

When you contact Tektronix technical support, please include the following information (be as specific as possible):

**General information:**

- All instrument model numbers
- Hardware options, if any
- Probes used
- Your name, company, mailing address, phone number, FAX number
- Please indicate if you would like to be contacted by Tektronix about your suggestion or comments.

**Application specific information:**

- Software version number
- Description of the problem such that technical support can duplicate the problem
- If possible, save the setup files for all the instruments used and the application
- If possible, save the TekExpress setup files, `log.xml`, `*.TekX` (session files and folders), and status messages text file
- If possible, save the waveform on which you are performing the measurement as a `.wfm` file

## Cross-references

- `getting-started` — install path, license activation, and the version dialog that names the software build referenced here.
- `starting-application` — the `Options > About TekExpress` dialog that exposes the software version a tech-support contact will ask for.
- `setup-dut-panel` — the DUT panel screenshot used as Figure 1 reappears in the DUT panel chunk with full control detail.
- `references-and-appendices` — Appendix-A (CTS 1.2 compliance parameters) and Appendix-B (CTS 1.4 compliance parameters) tables backing the CTS-1.2 and CTS-1.4 claims in the Welcome.

## Confidence notes

- The PDF cover page does not print a Tektronix part number, publication date, or software version on the page. `doc_number` and `doc_date` are left null.
- The PDF Properties metadata is not visible from the page renderings extracted; if the underlying file has a structured title / part-number embedded, this chunk does not reflect it.
- The Related documentation table contains a placeholder reference "TDSHT 3 HDMI" in both rows' icon images (left over from a templated help system); the wording "TekExpress DisplayPort" is preserved verbatim from the table cells.
- The Welcome wording uses both "Tektronix TekExpress DisplayPort software" and "TekExpress DisplayPort Solution" elsewhere in the help. Preserved as printed in each location.
