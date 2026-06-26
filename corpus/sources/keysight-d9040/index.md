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

None yet. Four photos in the set capture **physical bench layout** rather than software UI:

- `uploads/photos/IMG_6999.jpg` — Keysight Infiniium oscilloscope on the bench beside another monitor running the test app; gives scale and shows the cabling environment.
- `uploads/photos/IMG_7001.jpg` — same bench from the operator's seat, with the scope in the foreground showing a Keysight 33500A waveform generator stacked on top and a laptop keyboard at the bottom of frame.
- `uploads/photos/IMG_7037.jpg` — wider bench shot showing the laptop running the Resource Arbiter console, the AGGC2 box, and the Infiniium scope side-by-side.
- `uploads/photos/IMG_7038.jpg` — laptop with the Resource Arbiter console window framed against a black AGGC2 fixture box.

These would land under `corpus/sources/keysight-d9040/hardware/` if processed by `/document-hardware`. They are **not** documented here because the skill scope is software screens, and the four photos do not document a single hardware view well enough to anchor a chunk. Rerun `document-hardware` once dedicated hardware photos (front panel, rear panel, AGGC2 detail, fixture closeups) land in `uploads/photos/`.

## Paired manual sections

None yet. Drop a Keysight D9040USBC USB4 Test Application User Guide PDF into `corpus/sources/keysight-d9040/uploads/pdfs/` and run `/document-pdf` to produce `corpus/sources/keysight-d9040/docs/...`; then run `/pair-manual` to back-fill the **Manual references** section of every screen .md.

## How this index is regenerated

Each pass of the `document-screens`, `document-hardware`, or `document-pdf` skill updates the relevant section of this file from the frontmatter of every `.md` under `screens/`, `hardware/`, and `docs/`. Hand-edits are overwritten on the next run.
