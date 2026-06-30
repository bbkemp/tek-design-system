# Dual Measurement Multimeter GDM-9060/9061 User Manual

**Doc ID:** `user-manual` · **Doc number:** — (Rev. G) · **Published:** 2024-03 · **Applies to:** `gw-gdm9061`, `gw-gdm9060`

Generated **2026-06-30** by the `document-pdf` skill from `uploads/pdfs/gdm-906x_user_manual_en_ver_g_20240318.pdf` (384 pages).

## Sections

| Manual chapter | Pages | Chunks |
|---|---|---|
| Getting Started → Status Bar | 21-23 | [status-bar](./status-bar.md) |
| Basic Measurement | 28-54 | [basic-measurement-overview](./basic-measurement-overview.md), [voltage-measurement](./voltage-measurement.md), [current-measurement](./current-measurement.md), [resistance-measurement](./resistance-measurement.md), [continuity-test](./continuity-test.md), [frequency-period-measurement](./frequency-period-measurement.md) |
| Advanced Measurement | 86-118 | [trigger-and-filter](./trigger-and-filter.md), [math-measurement](./math-measurement.md) |
| Digital I/O → Compare Mode | 122-128 | [compare-mode](./compare-mode.md) |
| System & Firmware | 139-142 | [system-and-firmware](./system-and-firmware.md) |
| Menu Setting | 143-180 | [configure-system](./configure-system.md), [configure-display](./configure-display.md) |
| Screenshot & Log | 181-188 | [screenshot-and-log](./screenshot-and-log.md) |
| Display Setting | 189-210 | [display-setting](./display-setting.md) |
| Remote Control → Configure Interface | 211-246 | [configure-interface](./configure-interface.md) |

## Processed in this pass

The chunks above cover **every section the 10 corpus screens map to, plus the shared foundation** (status bar, the measurement functions, trigger/filter, math/statistics, compare/pass-fail, the config menus, the display modes, and the remote/LAN interface). 16 chunks, pages 21–246.

## Pending (not yet processed)

Reference material with no current screen mapping — left for a follow-up pass, mirroring the incremental approach used for the 2450-EC manual:

| Manual chapter / section | Pages | Note |
|---|---|---|
| Safety Instructions | 5-8 | General GW Instek safety; not screen-specific (cf. 2450 precedent — safety left unextracted). |
| Getting Started → Characteristics, Front/Rear Panel, Set Up | 9-25 | Hardware overview — belongs to `document-hardware`, not this doc pass. |
| Basic Measurement → Diode, Capacitance, Temperature | 49, 55-67 | Functions not present in the captured screen set. |
| Dual Measurement | 68-78 | Dual-display mode; no captured screen. |
| Advanced Measurement → Relative, Hold | 81-85 | Not in the captured screen set. |
| Digital I/O → Overview, 4094/User Mode, External Trigger | 120-138 | Compare Mode (the screen-relevant part) is processed; the rest pending. |
| Remote Control → Web Control Interface | 247-251 | — |
| Remote Control → Command Syntax, Command Set, Status System | 252-346 | The full SCPI surface (~95 pp). High value for remote-control queries — worth a dedicated pass. |
| Appendix → Fuse, Battery, Factory Defaults, Specifications, GDM-9061/9060 spec sections, Declaration of Conformity | 347-382 | Specifications + factory defaults are worth processing later. |
| Index | 383+ | — |

## Cross-references in the corpus

All 16 chunks cross-link to the gw-gdm9061 screens via `related_screens`; the screens' **Manual references** sections were back-updated to cite these chunks. Summary of the strongest links:

| Chunk | Backs screens |
|---|---|
| `status-bar` | every measurement screen (shared chrome) |
| `basic-measurement-overview`, `voltage-measurement`, `current-measurement`, `resistance-measurement`, `continuity-test`, `frequency-period-measurement` | `measurement` (+ `range-select` for the range tables) |
| `trigger-and-filter` | `measurement` (Trig / Filter pills) |
| `math-measurement` | `statistics`, `trendchart`, `histogram` (STAT box), `measurement` (math pills) |
| `compare-mode` | `statistics` (COMP / pass-fail state) |
| `display-setting` | `trendchart`, `histogram`, `measurement` (Number/Trend/Histogram modes) |
| `screenshot-and-log` | `statistics`, `trendchart`, `measurement` (Log softkeys, save) |
| `system-and-firmware`, `configure-system` | `config-system` |
| `configure-display` | `config-display` |
| `configure-interface` | `config-interface` (interface/RS232/USB, pp. 212-229), `config-lan` (LAN/Ethernet, pp. 232-245) |

## Confidence notes (doc-level)

- **Page offset 0:** printed page number = PDF page number throughout this manual.
- **OverLoad / over-range behavior** is not described in the per-function measurement sections (pp. 42-45 etc.); it likely lives in a display-indicators or specifications section not yet processed. The `measurement`/`range-select` screens document it from the captures, flagged there.
- The exact **`[Log]SCREENxx.bmp Save Ok`** save-confirmation toast string is not printed in the Screenshot & Log chapter (which documents the menus); the manual confirms the `SCREEN00`–`SCREEN99` capture-filename scheme, corroborating the device capture. The toast string remains sourced from the `statistics` screen capture.
- Minor source typos were preserved verbatim per the locked-format rule (e.g. "DCV ration", "Persent REF %", "time.nust.gov", a misnumbered Security step list); each is flagged in its chunk's Confidence notes.
