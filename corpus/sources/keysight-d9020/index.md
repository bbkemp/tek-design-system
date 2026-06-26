# keysight-d9020 — subject index

**Keysight D9020USBC / D9320USBC USB3.2 Compliance Test Application** — Keysight's automated compliance test software for USB3.2 (covers both the D9020USBC and D9320USBC SKUs per the manual cover). Currently at **Software Version 4.0.0.0** (January 2026 manual cover). Competitor product to Tek's TekExpress USB3 test suite.

This subject was scaffolded **2026-06-26** to correct a misroute discovered during the content-scan pass of batch 2: the 2026-06-25 batch 1 intake (PR #86) routed `D9020USBC-USB3-Test-Software-MOI-latest.pdf` and its `.chm` companion to `tek-express/uploads/pdfs/` based on filename keywords, but a page-1 peek of the converted PDF (this turn) revealed the cover reads "**Keysight D9020USBC/D9320USBC USB3.2 Compliance Test Application** · © Keysight Technologies 2026" — Keysight, not Tektronix.

## Status

**Newly scaffolded. No chunks processed yet.** `uploads/pdfs/` holds:

- **D9020USBC-USB3-Test-Software-MOI-latest.pdf** — Method of Implementation (procedural guide for running the USB3.2 compliance tests). **Moved from tek-express/uploads/pdfs/ this turn.**
- **D9020USBC-USB3-Test-Software-Online-Help-latest.chm** — Compiled HTML Help (Windows binary). **Moved from tek-express/uploads/pdfs/ this turn.**
- **D9020USBC-USB3-Test-Software-Online-Help-latest.pdf** — PDF conversion of the Online Help via Calibre. **Routed this turn from the inbox.**

When `/document-pdf` is run against the MOI and Online Help PDFs, this index will be regenerated to enumerate the resulting chunks.

## Open questions (for the team)

- **D9020USBC vs D9320USBC distinction.** The cover lists both SKUs as sharing the software. Do they share a corpus subject (`keysight-d9020`) with chunks declaring `applies_to: [keysight-d9020, keysight-d9320]`, or is D9320 distinct enough to warrant its own subject? Defer until D9320-specific material lands.
- **Relationship to `keysight-d9040`.** Both are Keysight compliance apps in the D9XXX family. Future cross-subject queries against Keysight as a vendor will rely on consistent naming and `applies_to:` cross-references.
- **Why two near-identical Online Help files** (`.chm` original + `.pdf` Calibre conversion)? The `.chm` is the source-of-truth Windows format; the `.pdf` is the LLM-readable conversion. When `/document-pdf` processes the `.pdf`, the `.chm` can be deleted from `uploads/` — both are gitignored.

## Cross-subject relationships

- **tek-express** — TekExpress is the Tek competitor product for USB3/USB3.2 compliance testing. Future chunks here may declare `applies_to: [keysight-d9020]` only, but **competitive comparisons live in [`audits/competitive/`](../../../audits/competitive/), not here.**
- **keysight-d9040** — Sibling Keysight subject (USB4 + DisplayPort test apps). Both are Infiniium-scope automation surfaces; cross-product UX patterns are likely shared.
