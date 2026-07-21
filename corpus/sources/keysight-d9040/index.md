# Keysight D9040 (D9040USBC USB4 Test Application / D9040DPPC DisplayPort Test App) — screen index

Generated **2026-06-26**. Eleven screens documented from the initial 36-photo intake (`uploads/photos/IMG_6999.jpg` through `IMG_7038.jpg`). The D9040USBC USB4 Test Application is the dominant subject in the photo set; the D9040DPPC DisplayPort Test App is visible only indirectly via the **Resource Arbiter** (which lists both apps' capability strings — `D9040USBC_Acquire`, `D9040USBC_Measure`, `D9040DPPC_Acquire`, `D9040DPPC_Measure`). DPPC-specific screens are not yet captured.

## Screen graph

```
resource-arbiter-console  (status)               ← boot-time CLI; required precursor
└── resource-arbiter      (config)               ← browser UI for the arbiter service

USB4 Test Application — workflow tabs (Set Up → HTML Report)
set-up                    (config)               ← documented; navigational root for the app
├── select-tests          (config)               ← documented; Tools menu surfacing Preferences
│   └── preferences       (dialog, 8 tabs)       ← documented; 8 tab-state variations in one .md
├── configure             (config)               ← documented
├── (connect)             — pending  (no photo captures Connect tab body)
├── run                   (status)                ← documented
│   └── (results)         (graph)                 ← documented
├── automate              (config)                ← documented
│   └── create-automation-commands  (dialog, 6 tabs)  ← documented; 6 tab-state variations in one .md
├── results               (graph)                 ← documented
└── html-report           (readout)               ← documented
```

## All documented screens

| screen_id | screen_title | screen_type | function_state |
|---|---|---|---|
| [resource-arbiter-console](screens/resource-arbiter-console.md) | Resource Arbiter — Console | status | TAP Engine running; instruments discovered; lock granted |
| [resource-arbiter](screens/resource-arbiter.md) | Resource Arbiter | config | AGGC2_USB4 row selected; capability D9040USBC_Measure being edited |
| [set-up](screens/set-up.md) | Set Up | config | DUT = Host, Both lanes, 10 Gb/s; Test Setup Completed; Calibration Passed |
| [select-tests](screens/select-tests.md) | Select Tests | config | Host Transmitter Tests (Port 1 / 10 GB/s) showing 8/62 tests unavailable; Tools menu open |
| [configure](screens/configure.md) | Configure | config | Mode = Compliance; USB4 Transmitter Tests variable tree visible |
| [run](screens/run.md) | Run | status | Overall Run Status = PASS; 0 pending; Manager (Acquire,Report) |
| [automate](screens/automate.md) | Automate | config | Empty script; Execute commands from Script; `[Success] UpdateScratchpad` |
| [results](screens/results.md) | Results | graph | 1 row — Tx TP2 Eye Diagram (10 Gb/s) Port 1 Lane 0 Pass / 100.000 margin |
| [html-report](screens/html-report.md) | HTML Report | readout | Test Report PASS; D9040USBC USB4 Test 1.30.0.0; Compliance Limits USB4 Spec Ver 2.00 (official) |
| [preferences](screens/preferences.md) | Preferences | dialog | Run tab active; Resource Arbiter address `http://192.168.1.66:55441/`; phases = Acquire,Measure,Report |
| [create-automation-commands](screens/create-automation-commands.md) | Create Automation Commands | dialog | Single Command + Run Tab active; no command staged |

## Pending screens — likely candidates not yet in `uploads/photos/`

| Pending screen | Notes |
|---|---|
| `connect` | Sixth slot in the eight-tab workflow row. Visible in every photo's tab bar but never the active tab — body is not captured. Drop a Connect-tab screenshot and rerun `document-screens`. |
| `tools-data-analytics` | `Tools > Data Analytics` is visible with a submenu chevron in IMG_7027 but the submenu was not captured. |
| DPPC application screens | D9040DPPC capability strings appear in the `resource-arbiter` dropdown (`D9040DPPC_Acquire`, `D9040DPPC_Measure`, `D9040DPPC_Report`) but the DPPC test application itself was not captured. |
| Run-in-progress states | The Run tab is captured at idle / PASS only. A photo of a run in progress (counters incrementing, task grid populated, status mid-PASS-or-FAIL) would document a different state of the same `run` screen. |
| Fail-state Results / HTML Report | The captured set is all-PASS. A FAIL-state Results row + HTML Report `FAIL` badge would document the inverse state of the same screens. |

State variations of already-documented screens that **do not** need a separate chunk: every Preferences sub-tab (folded into `preferences.md`), every Create Automation Commands sub-tab (folded into `create-automation-commands.md`), the dropdown-open and Utilization-visible state of `resource-arbiter` (folded into `resource-arbiter.md`), and the wider-monitor framing of `run` and `results` (folded into their respective `.md` files).

## Documented hardware

Three hardware views documented from the four bench / setup photos in the initial intake (`IMG_6999`, `IMG_7001`, `IMG_7037`, `IMG_7038`).

| part_id | part_title | view | source_photo |
|---|---|---|---|
| [scope-detail](hardware/scope-detail.md) | Keysight Infiniium MXR-Series scope — front view | scope-detail | IMG_7001.jpg |
| [bench-overview](hardware/bench-overview.md) | Test bench — overview | bench-overview | IMG_6999.jpg |
| [dut-setup](hardware/dut-setup.md) | Host laptop and DUT fixture | dut-setup | IMG_7038.jpg |

The fourth photo (**IMG_7037**) is a second bench-overview frame from a different angle (laptop showing the Resource Arbiter console instead of the test app splash); it is folded into `bench-overview.md` as a companion source rather than getting its own chunk, since it documents the same hardware view as `IMG_6999` and `IMG_6999` is the stronger framing.

### Pending hardware views — candidates not yet in `uploads/photos/`

| Pending view | Notes |
|---|---|
| `rear-panel` of scope | AC inlet, LAN, GPIB, trigger I/O, AUX-out, calibration outputs of the Infiniium MXR-Series. |
| `closeup-scope-model-badge` | Lower-left scope bezel close-up to resolve the specific MXR-Series model (`MXR604A`, etc.) — currently TBD. |
| `closeup-dut-fixture` | Close-up of the black AGGC2-style fixture in `dut-setup.md` to resolve port count, LED labels, asset sticker, and confirm specific model. |
| `closeup-wgen-model-badge` | Close-up of the Keysight Trueform waveform generator badge to resolve `33500A` vs `33600A` and the specific channel-count model. |
| `rack-detail` | Closer view of the gray rack-mount chassis stack in the background of `bench-overview.md` — to identify the AGGC2 enclosure (if rack-mounted) vs. supporting mainframes. |

## Paired manual sections

None yet. Drop a Keysight D9040USBC USB4 Test Application User Guide PDF into `corpus/sources/keysight-d9040/uploads/pdfs/` and run `/document-pdf` to produce `corpus/sources/keysight-d9040/docs/...`; then run `/pair-manual` to back-fill the **Manual references** section of every screen .md.

## How this index is regenerated

Each pass of the `document-screens`, `document-hardware`, or `document-pdf` skill updates the relevant section of this file from the frontmatter of every `.md` under `screens/`, `hardware/`, and `docs/`. Hand-edits are overwritten on the next run.

<!-- /AUTO -->

> Generated by /refresh-index on 2026-07-21. Edits above the `<!-- /AUTO -->` marker are preserved; everything below is regenerated.

## Screens (11)

| screen_id | screen_title | screen_type | function_state | applies_to |
|---|---|---|---|---|
| [automate](screens/automate.md) | Automate | config | Empty script body; Execute commands from Script selected; Command status [Success] UpdateScratchpad | — |
| [configure](screens/configure.md) | Configure | config | Mode = Compliance; USB4 Transmitter Tests config variable tree visible | — |
| [create-automation-commands](screens/create-automation-commands.md) | Create Automation Commands | dialog | Modal open over Automate tab; Create = Single Command; Run Tab active; no command staged | — |
| [html-report](screens/html-report.md) | HTML Report | readout | Test Report PASS; Application D9040USBC USB4 Test 1.30.0.0; Host DUT; Both lanes Port 1 and Port 2; Automation Controller USB4-TPA-UC; Compliance Limits "USB4 Specification Version 2.00 (official)" | — |
| [preferences](screens/preferences.md) | Preferences | dialog | Preferences modal open; Run tab active; Resource Arbiter address http://192.168.1.66:55441/; Phases = Acquire,Measure,Report; Abort behavior = Cancel outgoing tasks and abort already transmitted tasks; If a test aborts = Continue the run | — |
| [resource-arbiter](screens/resource-arbiter.md) | Resource Arbiter | config | AGGC2_USB4 row selected; capability D9040USBC_Measure being edited | — |
| [resource-arbiter-console](screens/resource-arbiter-console.md) | Resource Arbiter — Console | status | TAP Engine running; instruments discovered; lock granted | — |
| [results](screens/results.md) | Results | graph | 1 test row — Tx TP2 Eye Diagram (10 Gb/s) Port 1 Lane 0 — Pass with 100.000 margin; eye-diagram preview rendered; Messages list selected | — |
| [run](screens/run.md) | Run | status | Overall Run Status = PASS; 0 pending acquisitions; Manager (Acquire,Report); Outbound Task Queue 0 | — |
| [select-tests](screens/select-tests.md) | Select Tests | config | USB4 Transmitter Tests tree expanded; Host Transmitter Tests (Port 1 / 10 GB/s) showing 8/62 tests unavailable; Tx TP2 Eye Diagram / Tx Eye Diagram (Lane 0) selected; File menu open | — |
| [set-up](screens/set-up.md) | Set Up | config | USB4 Test Application — NEW PROJECT; DUT = Host, Both lanes, 10 Gb/s; Test Setup Completed; Calibration Passed | — |

## Hardware (3)

| part_id | part_title | view | applies_to |
|---|---|---|---|
| [bench-overview](hardware/bench-overview.md) | Test bench — overview | bench-overview | keysight-d9040 |
| [dut-setup](hardware/dut-setup.md) | Host laptop and DUT fixture | dut-setup | keysight-d9040 |
| [scope-detail](hardware/scope-detail.md) | Keysight Infiniium MXR-Series scope — front view | scope-detail | keysight-d9040 |

## Cross-references

| Source | Target | Edge |
|---|---|---|
| screen `configure` | hardware `bench-overview` | related_hardware |
| screen `resource-arbiter` | hardware `dut-setup` | related_hardware |
| screen `resource-arbiter-console` | hardware `dut-setup` | related_hardware |
| screen `results` | hardware `bench-overview` | related_hardware |
| screen `run` | hardware `bench-overview` | related_hardware |
| screen `select-tests` | hardware `bench-overview` | related_hardware |
| screen `set-up` | hardware `bench-overview` | related_hardware |
| screen `set-up` | hardware `dut-setup` | related_hardware |
| hardware `bench-overview` | screen `set-up` | related_screens |
| hardware `bench-overview` | screen `select-tests` | related_screens |
| hardware `bench-overview` | screen `configure` | related_screens |
| hardware `bench-overview` | screen `run` | related_screens |
| hardware `bench-overview` | screen `results` | related_screens |
| hardware `dut-setup` | screen `resource-arbiter-console` | related_screens |
| hardware `dut-setup` | screen `resource-arbiter` | related_screens |
| hardware `dut-setup` | screen `set-up` | related_screens |

## Coverage notes

- Screens documented: 11
- Walkthroughs documented: 0
- Manual sections documented: 0
- Hardware views documented: 3
- API snapshots: 0
- Code snapshots: 0
- Cross-references: 16
- Last regenerated: 2026-07-21 by /refresh-index
