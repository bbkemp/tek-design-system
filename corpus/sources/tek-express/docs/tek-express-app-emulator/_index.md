# TekExpress AppEmulator Application Help

**Doc ID:** `tek-express-app-emulator` · **Doc number:** `077-xxxx-xx` (not assigned) · **Published:** (not stated on cover) · **Applies to:** `tek-express`

Generated **2026-06-26** by the `document-pdf` skill from `uploads/pdfs/TekExpress AppEmulator (1).pdf`.

TekExpress AppEmulator is Tektronix's reference / starter framework distributed to compliance-application developers — an emulated TekExpress application whose UI exists to demonstrate the framework's panel structure (Setup, Status, Results, Plots, Reports), Options menu, SCPI command set, session model, and report engine. The DUT, suite, version, tests, and measurements are placeholders (e.g. `TX-Device`, `Group1`, `Spec 1.0`, `Algorithm Library Measurement`, `Period using SCOPE`, `Period using DPOJET`) — there is no real compliance specification being implemented. This help reflects framework version `5.6.999.31 (DAILY)` (from the About dialog).

## Sections

| Section | Pages | Chunk |
|---|---|---|
| Welcome, Getting help and support | 7–15 | [welcome-and-help](./welcome-and-help.md) |
| Getting started — Hardware/software requirements, install, license | 16–38 | [getting-started](./getting-started.md) |
| Setting up the test environment | 39–47 | [setting-up-test-environment](./setting-up-test-environment.md) |
| Starting the application — Application controls, Options menu, Email | 48–69 | [starting-application](./starting-application.md) |
| Setup panel — DUT tab and multiple-session run | 70–80 | [setup-dut-panel](./setup-dut-panel.md) |
| Setup panel — Test Selection and Acquisitions | 81–90 | [setup-test-selection-and-acquisitions](./setup-test-selection-and-acquisitions.md) |
| Setup panel — Configuration (limits) | 91–94 | [setup-configuration](./setup-configuration.md) |
| Setup panel — Preferences | 95–100 | [setup-preferences-panel](./setup-preferences-panel.md) |
| Status panel — Test Status and Log View | 101–110 | [status-panel](./status-panel.md) |
| Results panel — View summary of test results | 111–117 | [results-panel](./results-panel.md) |
| Reports panel — Configure report generation, View Settings, generated report | 118–135 | [reports-panel](./reports-panel.md) |
| Saving and recalling test setup | 136–155 | [saving-recalling-test-setup](./saving-recalling-test-setup.md) |
| SCPI Commands — remote control reference | 156–432 | [scpi-commands](./scpi-commands.md) |
| References — directories, file name extensions, test-related files | 433–444 | [references-and-appendices](./references-and-appendices.md) |

## Processed in this pass

**Whole document.** All substantive sections of the TekExpress AppEmulator Application Help — Welcome through References — are chunked. The PDF is a CHM export, so most pages are blank topic-stub pages with only headings and parent-topic backlinks; content is sparse and concentrated on the topic landing pages. The SCPI Commands chunk is treated as a single reference catalog since each command page is short and templated (Syntax, Command arguments, Returns, Examples).

## Cross-references in the corpus

| Chunk | Cross-links to existing screens |
|---|---|
| `starting-application` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/options-dropdown.md`](../../screens/options-dropdown.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md), [`screens/running-test.md`](../../screens/running-test.md) |
| `setup-dut-panel` | [`screens/setup-dut.md`](../../screens/setup-dut.md), [`screens/setup-dut-comments.md`](../../screens/setup-dut-comments.md), [`screens/setup-dut-session-browser.md`](../../screens/setup-dut-session-browser.md) |
| `setup-test-selection-and-acquisitions` | [`screens/setup-test-selection.md`](../../screens/setup-test-selection.md), [`screens/setup-acquisitions.md`](../../screens/setup-acquisitions.md), [`screens/setup-acquisitions-probe-config.md`](../../screens/setup-acquisitions-probe-config.md) |
| `setup-configuration` | [`screens/setup-test-selection-config.md`](../../screens/setup-test-selection-config.md), [`screens/setup-test-selection-limits-editor.md`](../../screens/setup-test-selection-limits-editor.md) |
| `setup-preferences-panel` | [`screens/setup-preferences.md`](../../screens/setup-preferences.md), [`screens/setup-preferences-email-settings.md`](../../screens/setup-preferences-email-settings.md) |
| `status-panel` | [`screens/status-test-status.md`](../../screens/status-test-status.md), [`screens/status-log-view.md`](../../screens/status-log-view.md) |
| `results-panel` | [`screens/results.md`](../../screens/results.md) |
| `reports-panel` | [`screens/reports-configuration.md`](../../screens/reports-configuration.md), [`screens/reports-view-settings.md`](../../screens/reports-view-settings.md) |

The Manual references section of each cross-linked screen is back-updated to cite the corresponding AppEmulator chunk(s), in addition to its existing UI-audit cross-references and DDR5 manual references where present.

## Open discrepancies surfaced by this pass

- **No cover Tektronix part number.** The Product documents table prints `Tektronix Part Number: 077-xxxx-xx` (literally `xxxx-xx`, no actual number). The cover page has no publication date. Both are likely artifacts of AppEmulator being an internal reference SDK rather than a customer-published manual.
- **Framework version inconsistency.** The Welcome / About dialog shows `5.6.999.31 (DAILY)` and the AppEmulator Solutions Version is `5.0.999.31`. The two version strings appear together in the About dialog with `5.6.999.31` labelled as Framework. Preserved as printed.
- **Dummy test names.** Tests like `Algorithm Library Measurement`, `Period using SCOPE (Acquire-Analyze Combined)`, `Period using DPOJET (Acquire-Analyze Combined)` and devices `TX-Device`, `Suite Group1`, `Version Spec 1.0` are placeholder labels — this is an emulator, not a real compliance application. Flagged in chunk Confidence notes.
- **No Configuration tab in AppEmulator setup wizard.** Unlike DDR5 (which has DUT → Test Selection → Acquisitions → Configuration → Preferences), the AppEmulator wizard has only four steps: DUT → Test Selection → Acquisitions → Preferences. A "Configuration" panel still exists conceptually in the manual (with Global Settings, Measurements, Limit Editor sub-sections), but it is documented in the same flow as the Test Selection > Configure button, not as its own wizard step. The `setup-configuration` chunk preserves this distinction.
- **No Plots panel content.** Plots is listed in the side nav (Setup, Status, Results, Plots, Reports) and called out by the Reports panel as a source of plot images. But the AppEmulator help does not contain a `Plots panel` topic page — only the side-nav button is documented. Flagged in `reports-panel` Confidence notes; no standalone `plots-panel` chunk is produced because the source has no content for it.
- **CHM-export whitespace.** Approximately 40 % of the 444 pages contain only a heading and a "Parent topic:" backlink. Topic stubs are not separately chunked; the meaningful content for each topic is captured in the parent chunk.

## Cross-product applicability

`applies_to: [tek-express]` for every chunk. AppEmulator is the canonical reference framework for the TekExpress family — DDR5 Tx, USB3, DisplayPort Tx, PCI Express, and other TekExpress compliance applications are all built on the same framework documented here. The SCPI commands chunk in particular (`TEKEXP:*` namespace) applies generically across all TekExpress applications. No cross-application content is in scope for this snapshot.
