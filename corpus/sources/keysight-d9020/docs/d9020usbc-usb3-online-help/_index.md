# Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application — Online Help

**Doc ID:** `d9020usbc-usb3-online-help` · **Applies to:** `keysight-d9020` · **Software version:** 4.0.0.0 · **© Keysight Technologies 2026** · **Source:** `uploads/pdfs/D9020USBC-USB3-Test-Software-Online-Help-latest.pdf` (Calibre conversion of the original `.chm`; gitignored)

Generated **2026-06-26** by the `document-pdf` skill.

The Online Help is the **UI navigation / application reference** companion to the procedural [`d9020usbc-usb3-moi`](../d9020usbc-usb3-moi/_index.md). The MOI covers *how to run each test*; this Online Help covers *how to use the application UI* across the 8-tab workflow (Set Up → Select Tests → Configure → Connect → Run → Automate → Results → HTML Report) plus project management and exit handling.

## Sections

| Section | Chunk |
|---|---|
| Keysight D9020USBC/D9320USBC USB3.2 Automated Testing — At a Glance | [at-a-glance](./at-a-glance.md) |
| Starting the D9020USBC/D9320USBC USB3.2 Test Application | [starting-the-test-application](./starting-the-test-application.md) |
| Creating or Opening a Test Project | [creating-or-opening-test-project](./creating-or-opening-test-project.md) |
| Setting Up the Test Environment | [setting-up-test-environment](./setting-up-test-environment.md) |
| Selecting Tests | [selecting-tests](./selecting-tests.md) |
| Configuring Tests | [configuring-tests](./configuring-tests.md) |
| Verifying Physical Connections | [verifying-physical-connections](./verifying-physical-connections.md) |
| Running Tests | [running-tests](./running-tests.md) |
| Configuring Automation in the Test Application | [configuring-automation](./configuring-automation.md) |
| Viewing Results + Viewing HTML Test Report | [viewing-results-and-report](./viewing-results-and-report.md) |
| Exiting the Test Application + Additional Settings | [exiting-and-additional-settings](./exiting-and-additional-settings.md) |

## Relationship to corpus

The **Keysight test-application framework** (D9020USBC / D9040USBC / D9040DPPC / D9050PCC etc.) is shared. UI surfaces for the framework are documented at [`../../../keysight-d9040/screens/`](../../../keysight-d9040/screens/) — 11 canonical screen `.md` files documenting Set Up, Select Tests, Configure, Run, Automate, Results, HTML Report, Preferences, Create Automation Commands (modal), Resource Arbiter, and Resource Arbiter Console. **USB3.2-specific test names appear in the Select Tests tree at run time; everything else mirrors the D9040USBC screens.**

This Online Help's 11 chunks heavily cross-reference those screens — when a chunk says "documented at `keysight-d9040/screens/X.md`," that screen is the canonical UI reference for the surface.

## Cross-references

- **Companion MOI** at [`../d9020usbc-usb3-moi/_index.md`](../d9020usbc-usb3-moi/_index.md) — the procedural test-by-test reference (11 chunks covering LFPS, 5G SSC/TP4/TP2/BLR/Jitter, 10G Skew/SCD).
- **Sibling `keysight-d9040` screens corpus** at [`../../../keysight-d9040/screens/`](../../../keysight-d9040/screens/) — UI documentation for the shared framework.
- **Competitive comparison** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — covers Tek-vs-Keysight at the platform level. Multiple chunks here cross-reference specific competitive dimensions (Project zip import/export, Email notification, Compliance/Debug mode flagging, etc.).

## Confidence notes

- 11 chunks cover the 12 TOC entries (Viewing Results + Viewing HTML Test Report folded into one chunk; Exiting + Additional Settings folded into one chunk).
- Page-range information is not transcribed because the source CHM-to-PDF conversion does not carry consistent page numbers (some chunks are short standalone topic pages).
- Heavy reliance on cross-references to the `keysight-d9040/screens/` corpus is deliberate — the framework is shared and the screen documentation is authoritative; this chunk family adds the USB3.2-specific narrative + workflow-walkthrough perspective.
