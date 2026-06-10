# Setup › DUT — design notes & open questions

**Prototype:** `tek-express-setup-dut.html` · **Additions audit:** `tek-express-redesign-additions.md`
**Author:** cd (Claude Design) · **Date:** 2026-06-01 · **Status:** for Bryan + DS-team + PM review

This is the format-lock screen. Once signed off, the chrome (top nav, wizard rail, action cluster, status bar) and the form-layout language propagate to the rest of TekExpress.

---

## 0. Inputs gap — surfaced, not papered over

The brief points to a **DS-baseline audit** at `audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`. **That file does not exist in `bbkemp/tek-design-system@main`** — the only audit present is `audits/prototype/2026-05-12-2450-ec-corpus-snapshot/report.md`. I proceeded by treating the 2450-EC audit as the authoritative methodology + primitive-name reservation source (it already proposes `tek-tabs`, `tek-dropdown`, `tek-status-pill`, `tek-plot`, `tek-axis` for the instrument family), and by taking the 11 reserved names from the brief itself. **Action:** confirm whether the baseline audit was meant to ship and, if so, reconcile this additions file against it.

Two smaller source conflicts, resolved in favour of the visual render and flagged here:

- **DQS vs EQ1.** The wireframe `.md` element inventory names the second Signal-Probe dropdown `EQ1`; the wireframe **render** labels it `DQS`. I used **DQS** (matches the render and a DDR Tx context). Confirm.
- **Pause Test vs Power Test.** The wireframe `.md` layer names read `Power Test`; the **render** reads `Pause Test` (with a pause glyph), which also matches the legacy Start/Pause pair. I used **Pause Test**. Confirm.

---

## 1. Flow-preservation map

The user community approves of the existing workflow (Srevats, 2026-04-23: "a very well received application"). The redesign modernises the visual layer and reorganises layout **only**; no step was reordered or removed. Legacy control → redesign element:

| Legacy control (corpus `setup-dut.md`) | Redesign element | Notes |
|---|---|---|
| Vertical 5-pill side-nav (Setup·Status·Results·**Plots**·Reports) | **Vertical left side-nav** (Setup·Status·Results·**Plots**·Reports) | **Reverted to the legacy vertical side-nav (2026-06-04, Bryan).** The wireframe's horizontal 4-tab top nav was rolled back; Plots is restored as a top-level panel. Active item uses a tek-blue left accent + tint (the DS has no orange). Persistent across all screens. |
| 4-step wizard (DUT·Test Selection·Acquisitions·Preferences) | 5-step `tek-wizard-stepper` (+ **Configuration**) | New step inserted — open question, §3. |
| Title `TekExpress AppEmulator — (9346)*` | **Topnav file-name label** `DDR Tx — (Untitled)*` (Geist, beside the wordmark) | Per Bryan (2026-06-03): the large stage title was removed; the test-setup file name + unsaved `*` now sits in the top nav next to the `TekExpress` wordmark, styled like the selector label. |
| Brand mark | Logomark top-left, borderless | Per Bryan: border removed, logomark enlarged to fill its box. |
| Theme toggle (DS footer convention) | **Status-bar bottom-right** (next to progress) | Per Bryan, and matches the DS guide (theme toggle lives in the footer). |
| Options ▼ (app menu) | Options ▼ button → menu | **Now populated from the real `options-dropdown.md`** (14 items: Default/Open/Save/Save As Test Setup, Open Recent▶, Continuous Run Setup, Instrument Control Settings, Keep On Top, Email Settings, Deskew▶, **Suite▶**, Message Font Size▶, Help, About TekExpress). |
| Window chrome (mail/min/close) | — | Host-OS chrome, **out of scope** (per brief). Not drawn. |
| DUT ID text input + pencil edit | `tek-field` "DUT ID" `tek-input` + edit icon → **Comments `tek-modal`** | Edit icon launches the Comments dialog (corpus `setup-dut-comments.md`: title "Comments", textarea, Clear/Copy/Paste/Cancel/OK). DUT ID is **empty** in this fresh "(Untitled)" session (corpus value `KARTHIKSAMPLE` belongs to a saved session). |
| Acquire Live Waveforms / Use pre-recorded radios | `tek-selector type=radio` pair | Labels verbatim from wireframe; **pre-recorded selected** (corpus active state). |
| **View** preset dropdown (Compliance) | **Not surfaced in this screen** | The wireframe form has no View control and the real Options menu has no View item. Its redesign home is **undetermined — open question, §3.** Not invented into the UI. |
| **Session : 9346** + ellipsis browser | **Not surfaced in this screen** | Same as View — absent from both the wireframe form and the Options menu. The session browser dialog (`setup-dut-session-browser.md`) has no launch affordance in this view. **Open question, §3.** |
| Device / Suite / Version dropdowns | `tek-dropdown` "Device" (DDR5) only | The wireframe identity row keeps **only DUT ID + Device** (value `DDR5`). **Suite** moves to the Options **Suite ▶** submenu (per `options-dropdown.md`). **Version** is not surfaced anywhere in the wireframe — **open question, §3.** |
| Device Profile group box (Probing Type, Vertical Offset, SSC, Signal Validation Threshold, Analyze-on-Golden, Show-Model-Info) | `tek-group-box` "Device Profile" with the wireframe's **DDR-suite** fields (Data Rate, Burst Detection Method [Setup], Clock [Setup], EQ1, Voltage Settings [Setup], TriMode Probe Setup [Setup], Filter Files Path) | **Source conflict, resolved toward the wireframe** (the redesign authority). The legacy corpus fields (Probing Type / Vertical Offset / SSC / Signal Validation Threshold / Analyze-on-Golden / Show-Model-Info) are the *pre-redesign* field set; they're suite-dependent and would reappear for other suites in the same layout. Values shown only where a source gives one — Device `DDR5`, Filter `Disable`, Clock/EQ1 `Differential` (wireframe: "values like Differential"); Data Rate and Burst Detection Method are **unset ("Select…")** because no source specifies a value. See §6 QA. |
| (legacy boolean checkboxes) | `tek-toggle` "User Defined Acquisition" | Confirms the brief/audit recommendation: on/off settings use `tek-toggle`. Label from wireframe. |
| Inline sub-configs (Burst Detection Method, Clock, Voltage Settings, TriMode Probe Setup) | `tek-field` + secondary `tek-button` "Setup" | The recurring inline-Setup pattern — **on exactly the four fields the wireframe shows** (not Filter Files Path). Behaviour (modal vs drawer) is **open, §3.** |
| Right-rail **Start** (green) / **Pause** toolbar | **Bottom-right action cluster**: Start Test (green) · Pause Test · Back · Next | The right rail is gone (per wireframe); run controls move to the cluster. Green Start is corpus-grounded ("green circular Start button"). Secondary run control labelled **Pause Test** (corpus "Pause"); the wireframe's "Power Test" is treated as template noise — see §6. |
| `Not Intended For Public Release` notice | **Removed** (per stakeholder request) | Corpus build-mode flag; intentionally dropped from the redesigned status bar. |
| `Ready.` status + idle progress | `tek-status-bar` (status text + progress track) | Preserved verbatim. No added run-state pill (removed in QA — not in corpus). |

### Run-state behaviour (where Stop/Pause go during a run)
The legacy right-rail toolbar is gone, so run controls live in the bottom action cluster. The prototype implements the corpus-documented run-state (`setup-dut.md`: "swaps Start for Stop and Pause becomes enabled; the wizard panel is read-only"):
- **Idle:** `Start Test` (green) enabled · `Pause Test` disabled · status `Ready.`
- **Running:** `Start Test` → **`Stop`** · `Pause Test` enabled (toggles Pause/Resume) · status bar progress track animates · the form becomes **read-only** (dimmed, non-interactive).
- **Complete/Stopped:** returns to Idle.

**Confirm** this is the canonical pattern for every screen.

---

## 2. Container-breakpoint rationale

Per Bryan's 2026-04-23 commitment, responsiveness is on the **container**, not the viewport — so the whole screen is wrapped in one `container-type: inline-size` element (`.app`) and every reflow is a CSS `@container` query. The screen renders inside a **resizable 875×773 window frame** (the real TekExpress content area); drag its handle and the breakpoints fire live — this is the prototype's main advantage over a Figma-only deliverable. Proposed scale (also in the additions audit §1.5), re-tuned for the 875px window:

| Breakpoint | Width | Why this value | What transforms |
|---|---|---|---|
| **cb-xs** | `< 600px` | Patterson's "tall, skinny, one-third width" docked case (2026-04-23). Below this the two-column form is unreadable. | Single column everywhere; top nav → **icons-only** (labels hidden); wordmark hidden; wizard labels shrink; action cluster **stacks full-width**. |
| **cb-sm** | `600px` | The point where a 184px rail + a usable form no longer coexist horizontally. | Wizard rail **moves above** the content and becomes a **horizontal** stepper; form is single/2-col as it fits. |
| **cb-md** | `760px` | A 184px rail + a comfortable two-column form both fit. **The 875×773 production window sits here.** | Vertical rail; 2-col field grids. |
| **cb-lg** | `820px` | Enough width for the probe-row to go 3-up. | Probe-row = subhead + Clock + DQS on one line; comfortable gutters. |

### Confidence per breakpoint (open, §3)
- **cb-sm (600) and cb-md (760): high confidence** — driven by real content (the 184px rail + a two-column form's minimum legible width).
- **cb-lg (820): medium** — the probe-row 3-up threshold; cosmetic.
- **cb-xs (<600): medium** — the half-screen-dock UX itself is *unvalidated* (Srevats flagged it for expert validation; no commitment). The breakpoint works, but whether users actually dock this narrow is unconfirmed.

---

## 3. Open questions (do not silently resolve)

1. **Plots in the nav — RESOLVED (2026-06-04).** The wireframe had removed Plots and dropped to a horizontal 4-tab top nav; stakeholders reverted to the **legacy vertical side-nav with all 5 panels** (Setup·Status·Results·**Plots**·Reports). Plots is a top-level panel again. IA now matches the legacy app.
2. **The new "Configuration" wizard step.** It promotes the legacy per-test *Configure* dialog (Pranavi's 26:28 demo) to a first-class step between Acquisitions and Preferences. Does it **fully replace** the dialog or **coexist** with it? Scope unconfirmed.
3. **`tek-tabs` vs. extending `tek-selector`.** A new `tek-tabs` primitive carries the nav; it now runs in **vertical (side-nav) mode** after the 2026-06-04 revert (left-accent active indicator) as well as horizontal/sub-tab modes. Navigation/routing remains semantically distinct from a value picker (additions §3.2).
4. **Wizard tap-to-jump.** The design **assumes** completed + current steps are tap-to-jump and pending steps are inert (matches the corpus's "tap to jump" note, but the audit PDF doesn't state it explicitly). Confirm against a live build.
5. **Vertical Offset units.** The corpus flags `250V` as possibly `250 mV` (legibility edge). No Vertical Offset field appears in the DDR wireframe, so it is absent here; it returns via its suite's Device Profile. The `tek-field` primitive supports an optional `unit` suffix for when it does — **confirm whether numeric fields should be unit-*aware* (auto-format mV/V) or remain free-text.**
6. **Inline-Setup behaviour.** Burst Detection / Voltage Settings / TriMode / Filter all open a sub-configuration. **Modal? Drawer? Inline expansion?** The prototype stubs them (status-bar acknowledgement). Pick one and lock it — it recurs across the app.
7. **Run-state pattern** (see §1) — confirm the right-rail→action-cluster move is canonical and that read-only-during-run is the desired behaviour.
8. **Filled buttons.** The `solid`/`success` button emphasis (additions §3.1) introduces a hierarchy the DS deliberately omitted. Does the DS want filled buttons, or keep the restrained bordered-only system?
9. **Container-breakpoint values** — confidence levels in §2; lock after more screens.
10. **Carry-forward caveat:** the Reports panel's audit-PDF tab/content swap (corpus) doesn't affect Setup › DUT but is a known item for the Reports screen.
11. **`applies_to`.** This screen is `[tek-express]` only. TekRx is a sibling product (heavier wizard, BERT-dependent, save/resume calibration); not redesigned here. If a later screen turns out shared, set `applies_to: [tek-express, tek-rx]`.

---

## 4. Out of scope (per brief)
- **Charts** — none on this screen. When they appear (Results/Plots), use `tek-empty-state` as the placeholder until the charting-library decision lands (Kuhlman's chart-richness friction note).
- **Window chrome** (mail/minimise/close) — host-OS, not drawn.
- **TekRx** — sibling product, not redesigned.

---

## 5. Verification done
Both themes and all interactions were verified against the **live DOM** (the screenshot tools flatten shadow-DOM internals, so visual QA was done via DOM/computed-style probes + real-browser rendering):
theme toggle (persisted), wizard tap-to-jump, dropdown open/keyboard, run-state (Start→Stop, Pause/Resume, progress, read-only form), Options menu, DUT-comments modal, top-nav routing to `tek-empty-state` placeholders, and the live `@container` reflow at every breakpoint (nav→icons, wizard→horizontal, single-column stacking). Keyboard nav + 2px tek-blue focus rings work on every interactive element.

---

## 6. Corpus-fidelity QA (content accuracy pass)

Every interactive element, label, and value was audited against the corpus ground truth: `screens/setup-dut.md` (frontmatter `controls[]` + Visible text), `wireframes/setup-dut-wireframe.md` (redesign structure), `screens/options-dropdown.md`, and `screens/setup-dut-comments.md`. Each item below is traced to its source; nothing in the UI is fabricated.

**Source-of-truth precedence:** corpus `setup-dut.md` Visible text = ground truth for *what exists in the legacy app*; the wireframe `.md` = ground truth for *the redesign's structure and field set*; `options-dropdown.md` / `setup-dut-comments.md` = ground truth for those overlays.

### Corrections made in this QA pass (previously invented → now sourced)
| Item | Before (invented) | After (sourced) | Source |
|---|---|---|---|
| Options menu | 7 made-up items (Open session / Save / Save as / View / Session / Preferences / Exit) | The 14 real items | `options-dropdown.md` Visible text |
| Signal-probe 2nd dropdown | `DQS` | `EQ1` | wireframe `.md` prose + element inventory |
| Inline Setup buttons | on Burst Detection, Voltage, TriMode, **Filter Files Path** | on Burst Detection, **Clock**, Voltage, TriMode (not Filter) | wireframe `.md` ("Setup next to Burst Detection Method… and Clock") |
| DUT ID value | `DUT001` | empty (fresh "(Untitled)" session) | corpus value `KARTHIKSAMPLE` is a *saved* session; wireframe is Untitled |
| Data Rate / Burst Detection values | `3200 MT/s` / `Auto` (+ fabricated option lists) | unset — `Select…` | no value in any source |
| Device options | DDR4 / DDR5 / LPDDR5 / GDDR6 | `DDR5` only | wireframe gives current value `DDR5` only |
| Comments dialog | title "DUT comments", "Notes for DUT001", Cancel/Save | title **Comments**, textarea, **Clear / Copy / Paste / Cancel / OK** | `setup-dut-comments.md` |
| "Unsaved changes" pill | added next to title | removed — only the documented `*` remains | corpus uses `*` only |
| Run-state pill (Idle/Running) | added to status bar | removed — status text + progress only | corpus status bar = state text + progress |
| Acquisition selection | Live selected | **pre-recorded** selected | corpus: prerecorded is active |

### Deliberate source-conflict resolutions (flagged, not silent)
- **Device Profile field set.** The corpus legacy fields (Probing Type, Vertical Offset, SSC, Signal Validation Threshold, Analyze-on-Golden, Show-Model-Info) vs. the wireframe DDR fields (Data Rate, Burst Detection, Clock, EQ1, Voltage Settings, TriMode, Filter Files Path) are **two suite-specific instances of the same group box**. The redesign follows the **wireframe** field set (the brief names these exact fields as the redesign targets). Legacy fields return for their own suites.
- **"Power Test" vs "Pause Test".** The wireframe action row labels the secondary run button `Power Test`; the corpus right-rail labels it `Pause`. The wireframe `.md` itself warns its layer names are template noise (e.g. `Dashboard`/`Test`/`Manage`/`About` → actually Setup/Status/Results/Reports), so `Power Test` is treated as noise and the **corpus `Pause`** wins → "Pause Test". **Confirm.**
- **Casing.** Radio/field labels use the wireframe's exact strings (`Acquire Live Waveforms`) even though DS house style is sentence case (corpus: `Acquire live waveforms`). Kept source-verbatim for fidelity; the DS team may re-case.

### Dropdown options caveat
Where a source gives a current value it is shown verbatim (`DDR5`, `Disable`, `Differential`). Clock/EQ1 options (Single-Ended / Differential / TriMode) are all corpus-grounded domain terms (Probing Type `Single-Ended`; `TriMode Probe Setup`; wireframe "values like Differential"). Fields with **no** sourced value render as unset `Select…` rather than a fabricated value/option list.

### Items confirmed accurate against source (no change)
Title `TekExpress DDR Tx — (Untitled)*` (wireframe) · **5-item vertical side-nav Setup/Status/Results/Plots/Reports (reverted to legacy layout, 2026-06-04)** · 5-step wizard DUT·Test Selection·Acquisitions·Configuration·Preferences, DUT current/others pending (wireframe) · `User Defined Acquisition` toggle (wireframe) · `Ready.` (corpus) · green Start (corpus "green circular Start button") · Comments launched from DUT-ID edit affordance (corpus). *(The corpus `Not Intended For Public Release` build flag was present and accurate but removed at stakeholder request.)*

### Out-of-scope screens shown as honest placeholders
Status / Results / Reports tabs and wizard steps 2–5 route to a `tek-empty-state` that states the screen locks in a later pass — no fabricated content for screens not yet in scope.

---

## 7. Multi-screen build (2026-06-03)

The prototype now spans the full corpus IA, not just Setup › DUT. All content is corpus ground truth (see `tek-express-build-spec.md`); the DUT screen remains authored HTML, every other screen is built by `tek-express-app.js` as light DOM.

**Screens:** Setup wizard — DUT · Test Selection (`tek-checkbox-tree`, bulk-select, Test Description, Show MOI/Schematic/Configure) · Acquisitions (`tek-data-table`, Refresh Sources/View Probes, Show Acquire Parameters) · **Configuration** (the promoted per-test Configure form: Compliance/User-Defined, Global/Measurements, Acquire/Analyze) · Preferences (3 group boxes). Nav — Status (Test Status grid + Log View) · Results (7-col results table, Debug/Preferences outlined pills, Clear) · Reports (Configuration + View Settings sub-tabs).

**Dialogs (corpus):** DUT Comments · Run/Config Sessions · Configure · Limits Editor · Probe Configuration · Email Settings · the Reports "Report file not generated" blocking modal.

**Run engine:** Start Test → switches to Status, animates per-row Acquire/Analysis status (To be started → In progress → Completed), accumulates the verbatim Log View lines, populates Results (Pass rows with corpus values) past 80%, drives the status-bar progress, and makes the form read-only. Stop/Pause/Resume wired; a status-bar minimise control opens the corpus "Running Test — minimised window" (compact log + Stop/Pause + state squares). Completion → status "Completed".

**Decisions/flags:** Configuration step built from `setup-test-selection-config` (closest corpus source) — confirm scope (§3.2). **Plots is reachable as a sub-tab under Results** (Overall Test Result | Plots) and now renders a real `tek-plot` waveform (DPOJET period, axes + cursors + readout per `plots.md`) — charts were moved into scope at stakeholder request (2026-06-03), overriding the brief's original out-of-scope note. Reports tab/content mapping follows Bryan's filenames over the audit PDF (flagged in corpus). The three failure-action checkboxes are rendered independent (corpus shows checkbox UI; likely radio semantics — confirm).

---

## 8. Legacy source (side-by-side reference)

The legacy Setup › DUT screen the redesign modernises (`uploads/photos/1. Setup-DUT_Landing screen.png`, downscaled):

![Legacy TekExpress AppEmulator — Setup › DUT](assets/legacy-setup-dut.jpg)

The structural wireframe (old DS — **structure only**, every visual property ignored per the brief):

![Setup › DUT structural wireframe](assets/setup-dut-wireframe.png)
