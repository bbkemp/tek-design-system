# TekExpress DisplayPortTx 2.1 Compliance Test Application Help

**Doc ID:** `tek-express-displayporttx-2-1` · **Applies to:** `tek-express` · **Source:** `uploads/pdfs/TekExpress DisplayPortTx 2.1 - Unknown.pdf` (Calibre conversion of the original .chm; gitignored)

Generated **2026-06-26** by the `document-pdf` skill.

The **DisplayPort 2.1 spec update** to the base TekExpress DisplayPortTx variant. Same TekExpress framework, updated test suite to cover DisplayPort 2.1 (UHBR rates, additional measurement methods). Chunks here parallel the chunks in [`../tek-express-displayporttx/`](../tek-express-displayporttx/_index.md) (the base variant) — refer there for the broader framework reference; this folder captures the 2.1-specific deltas.

## Sections

| Section | Pages | Chunk |
|---|---|---|
| Welcome, Key features, and Getting help | 1–35 | [welcome-and-help](./welcome-and-help.md) |
| Getting started — Hardware and software requirements | 26–55 | [getting-started](./getting-started.md) |
| Setting up the test environment | 56–80 | [setting-up-test-environment](./setting-up-test-environment.md) |
| Starting the application — Application controls, Options menu, Email settings, Instrument control | 81–100 | [starting-application](./starting-application.md) |
| Setup panel — DUT tab | 100–120 | [setup-dut-panel](./setup-dut-panel.md) |

## Cross-references

- **Base DisplayPortTx variant** at [`../tek-express-displayporttx/`](../tek-express-displayporttx/_index.md) — covers the same framework with the pre-2.1 spec set. Each chunk here flags spec-version deltas relative to the base manual in its `## Confidence notes`.
- **Documented UI screens** at [`../../screens/`](../../screens/) — the AppEmulator screen corpus describes the framework UI surfaces this manual documents.
- **Other TekExpress manuals**: [`../tek-express-ddr5-tx-user-manual/`](../tek-express-ddr5-tx-user-manual/_index.md), [`../tek-express-pci-express/`](../tek-express-pci-express/_index.md), [`../tek-express-app-emulator/`](../tek-express-app-emulator/_index.md).
- **Competitive comparison** at [`audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/`](../../../../../audits/competitive/2026-06-25-tek-express-vs-keysight-d9040dppc/) — the Tek-authored audit specifically compares **TekExpress DisplayPortTx 2.1 vs Keysight D9040DPPC**, making this manual the **most-cited Tek source** for that competitive analysis.

## Confidence notes

- This 2.1 manual is structurally similar to the base DisplayPortTx manual but covers DisplayPort 2.1-specific test methods (UHBR 10 / 13.5 / 20 transmitter compliance).
- The 2.1 spec adds measurement methods not in the base; chunks here flag those deltas in their bodies and confidence notes.
- Pages overlap with the base manual structurally (Welcome → Getting Started → Operating Basics flow); the page-range numbers diverge because the 2.1 manual is shorter overall.
- The PDF filename `TekExpress DisplayPortTx 2.1 - Unknown.pdf` carries the "- Unknown" suffix as an artifact of Calibre's CHM-to-PDF conversion (the original CHM lacked a title-metadata field). The Tek-authored content cover confirms it's the DisplayPortTx 2.1 variant.
- Only 5 top-level chunks were extracted; the manual is somewhat shorter than the base. Future spec-update passes will add chunks as more of the manual is processed.
