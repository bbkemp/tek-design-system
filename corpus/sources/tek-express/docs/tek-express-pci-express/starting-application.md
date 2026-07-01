---
provenance: observed
class: doc-section
doc_id: tek-express-pci-express
doc_title: TekExpress® PCI Express Transmitter Compliance and Validation Software Application Help
doc_number: 077-1762-05
doc_date: 2026-03
applies_to: [tek-express]
section_id: starting-application
section_title: Starting the application
parent_section: ""
page_range: "33-42"
related_screens: [options-dropdown, setup-preferences-email-settings]
related_hardware: []
---

# Starting the application

## Summary

How to launch the TekExpress PCI Express Transmitter Compliance and Validation Software, the persistent application controls (Start/Stop, Pause, Clear), the Options menu functions for instrument control and email notifications, and the TekExpress instrument control settings dialog. This is the entry point the user reaches after installation, license activation, and signal-path compensation are complete.

## Content

### Application launch

The application launches from the scope's Applications menu. On first launch after install, the application initializes the framework, performs license validation, and presents the persistent application chrome — title bar, 5-pillar side nav (Setup, Status, Results, Plots, Reports), right-rail toolbar with Start/Pause controls, and status bar.

### Application controls

The right-rail toolbar carries the run-state controls available on every screen:

- **Start ▶ (green circular)** — initiates the test run with current Setup configuration. Transitions to **Stop (red square)** during execution.
- **Pause ‖ (grey circular)** — suspends an in-flight run. Toggles to **Resume** while paused.
- **Clear ×** (Results panel only) — discards the current Results table and the associated session artifacts.

### Options menu functions

The `Options ▼` menu in the title bar provides application-level commands not tied to a single panel:

- **Open Recent** — reopen one of the most recent saved sessions
- **Deskew** — launch the deskew utility (compensates per-channel timing skew on the scope)
- **Continuous Run Setup** — configure the application to repeat the same test sequence indefinitely (used for long-soak validation)
- **Instrument Control Settings** — open the TekExpress instrument control dialog (see next section)
- **Preferences** — Window navigation to the Setup → Preferences panel
- **Email Settings** — open the email notification configuration (see Configure email settings)
- **Message Font Size** — adjust the font in the message-log panel

### TekExpress instrument control settings

The Instrument Control Settings dialog (reached via Options ▼ → Instrument Control Settings) configures how the application discovers and connects to the scope, BERT, switch matrix, and other test instruments. Per-instrument fields cover IP address / VISA resource string, GPIB address, and connection-test buttons. Pre-test instrument discovery is also accessible from the Setup panel via "Search instruments connected to the application."

### Configure email settings

Email notifications (Options ▼ → Email Settings, or Setup → Preferences → Email tab) can fire on test run start, completion, and error. SMTP server, port, authentication, from/to addresses, and attachment options (report PDF, status log, error log) are configured here.

## Cross-references

- **Options dropdown UI** documented at [`../../screens/options-dropdown.md`](../../screens/options-dropdown.md).
- **Email Settings dialog UI** documented at [`../../screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md).
- **Sibling TekExpress variants** mirror these controls: [`../tek-express-ddr5-tx-user-manual/starting-application.md`](../tek-express-ddr5-tx-user-manual/starting-application.md), [`../tek-express-app-emulator/starting-application.md`](../tek-express-app-emulator/starting-application.md), [`../tek-express-displayporttx-2-1/starting-application.md`](../tek-express-displayporttx-2-1/starting-application.md). Application controls + Options menu are framework-level (identical across variants); the Instrument Control Settings differ by which instruments each variant needs.

## Confidence notes

- Section covers pages 33-42 per the TOC: Application controls (34), Options menu functions (36), TekExpress instrument control settings (39), Configure email settings (40). Page-internal sub-headings are paraphrased rather than verbatim per the chunk-per-topic-not-per-page rule.
- The application-controls and Options-menu inventory is consistent with the documented UI screens at `tek-express/screens/options-dropdown.md` and the framework-level documentation in the AppEmulator and DDR5 Tx manuals. PCIe-specific instrument variations (BERT requirements, RF Switch Matrix) are detailed in their dedicated sections rather than here.
