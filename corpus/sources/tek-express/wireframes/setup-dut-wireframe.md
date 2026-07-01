---
provenance: observed
class: wireframe
product: tek-express
wireframe_id: setup-dut
target_screen: setup-dut
source: figma
source_url: https://www.figma.com/design/ALtZjw0TqRdBSKffgpMuRD/TekExpress-Wireframes?node-id=1-400
source_node: "1:400"
file_key: ALtZjw0TqRdBSKffgpMuRD
canvas_dimensions: "1440 x 900"
fetched_date: 2026-06-01
applies_to: [tek-express]
related_screens: [setup-dut, setup-test-selection, setup-acquisitions, setup-preferences]
authored_in: OLD design system
fidelity: structural-only
---

# Setup › DUT — Wireframe (Structural Reference)

## Purpose

Structural reference for the redesigned Setup › DUT screen. **Authored in the OLD design system; ignore every visual property** (colours, type, spacing, components, glyphs, button styling). Use this only for:

- The new navigation/tab layout (horizontal top nav replacing the legacy vertical 5-pill side nav).
- The new wizard step structure (5 steps; the legacy had 4).
- The new section organisation in the form (Device Profile / Signal Probe Type subsections).
- New control patterns (inline Setup buttons; top-right Options ▼; right-side action cluster).

The bitmap render lives next to this file at [`setup-dut-wireframe.png`](./setup-dut-wireframe.png) (221 KB, 1440 × 900). Pulled directly from Figma via the MCP on 2026-06-01.

## Structural deltas from the legacy

### Navigation — vertical → horizontal

The biggest structural change. Legacy: 5-pill **vertical side-nav** on the left (Setup · Status · Results · Plots · Reports). Wireframe: 4-tab **horizontal top nav** centred in the title bar (Setup · Status · Results · Reports), each with a leading icon. **Plots is no longer a top-level panel.** Either folded into Results, accessed via a sub-tab, or removed from the top-level information architecture entirely — open question for CD.

| Region | Legacy | Wireframe |
|---|---|---|
| Top-left | Brand mark (Tektronix logo) | Title-bar text: `TekExpress DDR Tx - (Untitled)*` (product/test context + session ID + unsaved indicator) |
| Top-centre | n/a | 4 horizontal nav tabs: Setup (active, orange dot indicator) · Status · Results · Reports — each with a leading 22 px icon |
| Top-right | Window chrome (mail, minimise, close) + Options ▼ pill in the title bar | Single Options ▼ pill (orange-tinted, with arrow icon and the same divider line pattern as the legacy); window chrome not visible in this frame |

The title-bar text encodes more product context than the legacy `TekExpress AppEmulator — (9346)*` — it surfaces the active **test context** ("DDR Tx" — the DDR transmitter compliance suite) instead of the application name alone. Worth preserving in the redesign: the title bar should reflect what the user is testing, not the app brand.

### Wizard — 4 steps → 5 steps

Legacy: 4-step wizard (DUT · Test Selection · Acquisitions · Preferences). Wireframe: **5-step wizard** (DUT · Test Selection · Acquisitions · **Configuration** · Preferences). The new "Configuration" step inserts between Acquisitions and Preferences. In the legacy app, per-test configuration lived inside a *Configure* dialog on Test Selection — the wireframe promotes that to a first-class wizard step.

Wizard step indicator visual: circular badges with state variants:
- **In progress** (current step): solid orange-filled circle with `Status Badge/in-progress` symbol.
- **Pending / not yet reached** (other 4 steps): outlined circle with `Status Badge/Variant4` symbol.

Each badge sits on a vertical guide-line connecting the steps. Each step label is to the right of its badge.

### Form structure — flat → sectioned with inline Setup actions

The legacy Setup › DUT form had three section headings (Device Profile / Device Characteristics / Execution Settings) as group-box headers stacked vertically. The wireframe restructures this:

**Top row (above sections):**
- Two radio buttons stacked on the left: `Acquire Live Waveforms` · `Use pre-recorded waveform files`.
- One toggle on the right: `User Defined Acquisition`. Visually a toggle/switch, not the legacy checkbox pattern.

**Identity row:**
- `DUT ID` text input (left, ~half width)
- `Device` dropdown (right, ~half width) — current value `DDR5` in the wireframe (the test-suite-specific value).

**Section: Device Profile**
- `Data Rate` dropdown + `Burst Detection Method` dropdown (two columns)
- An inline **[Setup]** button to the right of `Burst Detection Method` — opens a sub-configuration dialog for the burst-detection method.

**Section: Signal Probe Type**
- `Clock` dropdown + `EQ1` dropdown (two columns) — each with state values like `Differential`.
- An inline **[Setup]** button to the right of Clock.
- `Voltage Settings` and `TriMode Probe Setup` — both rendered as labels with inline **[Setup]** buttons (no main-line dropdown value). Indicates these are sub-configurations.
- `Filter Files Path` (label) + `Disable` dropdown.

**Action row (bottom-right):**
- `Power Test` button (outlined / secondary)
- `Start Test` button (filled / primary, blue)
- `Back` text-link (lower-right corner)
- `Next` button (primary, lower-right corner)

The "Setup" button is a recurring inline pattern in the wireframe — it's a *contextual setup* action that opens a sub-configuration without leaving the parent screen. This is a meaningful pattern shift: legacy had separate dialog launches (Probe Config from a top-bar button, etc.); wireframe inlines them next to the field they configure.

## Element inventory (from Figma metadata)

Direct extraction from the node tree at `1:400` (the `TekExpress_WIREFRAME` frame). Element names are Figma layer names from the OLD DS authoring; ignore them for visual interpretation.

### Top navigation (frame `1:401` — `Top Navigation`, 1440 × 88)

| Element | Type | Position |
|---|---|---|
| `Rectangle 3585` | rounded-rect (background bar) | full width |
| `Logo` | instance | x=48, w=90 |
| `Dashboard` frame (icon + "Setup" text) | nav tab | x=443 |
| `Test` frame (icon + "Status" text) | nav tab | x=602 |
| `Manage` frame (icon + "Results" text) | nav tab | x=760 |
| `About` frame (icon + "Reports" text) | nav tab | x=928 |
| `Group 48097984` (Options ▼) | right-side group | x=1117, w=323 |

Frame names (`Dashboard`, `Test`, `Manage`, `About`) appear to be **leftover from another product's wireframe template** — the actual text labels read `Setup`, `Status`, `Results`, `Reports`. Use the text labels; the frame names are noise.

### Left rail (wizard steps)

| Element | Position | State |
|---|---|---|
| `Rectangle 3354` | x=48, y=163, w=250, h=654 | left-rail background |
| `DUT` label + `Status Badge/in-progress` (badge `1:448`) | y≈179 | **active** |
| `Test Selection` label + `Status Badge/Variant4` | y≈244 | pending |
| `Acquisitions` label + `Status Badge/Variant4` | y≈308 | pending |
| `Configuration` label + `Status Badge/Variant4` | y≈375 | pending (**NEW step**) |
| `Preferences` label + `Status Badge/Variant4` | y≈439 | pending |
| `Line 1…10` (multiple) | between badges | vertical connecting guide |

### Content area

| Element | Type | Position | Notes |
|---|---|---|---|
| Rectangle 3357 | top section background | x=323, y=163, w=1094, h=104 | acquisition mode + user-defined toggle row |
| Rectangle 3355 | mid section background | x=323, y=287, w=1094, h=107 | DUT ID + Device row + Device Profile heading region |
| Rectangle 3356 | bottom section background | x=323, y=453, w=1094, h=364 | Signal Probe Type + actions |
| Acquire Live Waveforms (radio) | radio + label | x=339, y=183 | text `1:458` |
| Use pre-recorded waveform files (radio) | radio + label | x=339, y=223 | text `1:462` |
| v-input--selection-controls (User Defined Acquisition) | toggle | x=655, y=183 | + text `User Defined Acquisition` |
| Input (DUT ID) | text input | x=339, y=298, w=300×72 | |
| Dropdown (Device) | dropdown | x=655, y=298, w=300×72 | |
| Dropdown (Data Rate) | dropdown | x=347, y=477, w=180×72 | |
| Button "Setup" | inline action | x=987, y=509, w=110×40 | for Burst Detection Method |
| Dropdown (Burst Detection Method) | dropdown | x=655, y=477, w=300×72 | |
| Dropdown (Clock) | dropdown | x=655, y=589, w=300×72 | |
| Dropdown (EQ1) | dropdown | x=971, y=588, w=300×72 | |
| Dropdown (Filter Files Path > Disable) | dropdown | x=971, y=692, w=283×72 | |
| Button "Setup" (multiple) | inline action | various | Setup buttons inline next to fields |
| Button (Power Test, Start Test) | primary actions | x=1112 / 1260, y=840, w=132×40 each | grouped in `Group 1410133133` |
| Button (Back) | secondary | x=816, y=840, w=132 | with play_circle icon (per layer name) — likely repurposed as back-arrow |
| Button (Next) | secondary | x=964, y=840, w=132 | with play_circle icon — likely repurposed as forward-arrow |
| Lines 6 & 7 | horizontal section dividers | x=344, y=573 / y=677, w=1053 | section separation within Signal Probe Type |

The `Group 1410133133` ("Power Test" + "Start Test"), `Group 1410133134` ("Next"), and `Group 1410133136` ("Back") pattern at the bottom-right indicates the wizard advance/test-run controls are clustered in the lower-right rather than the right-rail toolbar of the legacy app. The legacy Start/Pause toolbar is gone in this view; the right rail is reclaimed by the form content.

### Other reference

| Element | Notes |
|---|---|
| `TEKEXPRESS OG` (frame `1:399`) | x=1629, w=1176 — a reference copy of the legacy (old) UI placed off to the right of the wireframe canvas for comparison. **Not part of the new design.** |

## Implications for DS-v2

Cross-reference against [`audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md`](../../../../audits/prototype/2026-06-01-tek-express-redesign-baseline/report.md):

1. **The new horizontal top nav reinforces the audit's recommendation** to extend `tek-selector` with a tab-bar mode (or introduce `tek-tabs`). The wireframe shows the navigation pattern with icons + labels in a single horizontal row.
2. **The wizard step indicator is reaffirmed as a P1 new primitive** (`tek-wizard-stepper`). The wireframe shows the canonical visual — circular badges with two state variants on a connected vertical guide.
3. **Inline Setup buttons** are a recurring micro-pattern: action button immediately adjacent to the field it configures. Worth surfacing as a layout convention in `tek-field` (one of the new primitives).
4. **Toggle (User Defined Acquisition)** indicates the redesign uses `tek-toggle` for on/off settings where the legacy used checkboxes — confirming the audit's note that the redesign should *replace* legacy boolean checkboxes with `tek-toggle` where the semantic is on/off.
5. **Plots is missing from top-level nav** — open question. The redesign may consolidate plot viewing into Results, eliminate Plots as a separate concept, or surface plots inside individual test rows.

## Open questions for CD

- Should Plots remain a top-level panel or move under Results? The wireframe suggests removed, but TekRx's wizard-driven flow may need a different answer.
- Is the new 5-step wizard order (DUT → Test Selection → Acquisitions → Configuration → Preferences) authoritative, or just one option? The Configuration step is the meaningful insertion; verify its scope.
- The right-rail Start/Pause toolbar is absent in this wireframe — instead, Start Test sits in the bottom-right action cluster. Worth confirming this is the new canonical pattern (and what happens to right-rail during a run).
- Inline Setup buttons (next to Burst Detection Method, Clock, Voltage Settings, TriMode Probe Setup) need behaviour clarified: modal dialog? Drawer? Inline expansion? CD should pick one and document in the additions audit.
- The wireframe is for the OLD DS — confirm with stakeholders before treating any visual decision (colour, type, icon style, button shape) as authoritative.

## Pending references

- A wireframe for the **new top-nav structure** alone (without the Setup › DUT content), to confirm whether other panels (Status, Results, Reports) share the same top-nav pattern.
- Wireframes for the other Setup wizard steps (Test Selection, Acquisitions, **Configuration** — the new step, Preferences) to lock the rest of the wizard's structural deltas.
- A wireframe for Plots's new home (Results sub-tab? gone entirely?).
