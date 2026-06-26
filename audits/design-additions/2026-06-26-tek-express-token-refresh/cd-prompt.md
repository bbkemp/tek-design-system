# CD prompt — TekExpress prototype: token refresh + version selector

**Date:** 2026-06-26 · **Target prototype:** [`prototypes/tek-express/index.html`](../../../prototypes/tek-express/index.html) · **Live URL:** https://bbkemp.github.io/tek-design-system/prototypes/tek-express/

This is a **token-only refresh** of the existing TekExpress prototype. It is *not* a redesign. Functionality stays. Layout stays. Component selection stays. What changes: DS-v2 token bindings, design-system component instantiation discipline, mock data fidelity per TekExpress variant, and one additive feature — a **version selector** in the Tweaks panel that switches the mock data set across all five documented TekExpress installations.

The corpus has substantial documentation of every TekExpress variant. Use it.

---

## §0 Mission

1. **Audit** the current `prototypes/tek-express/index.html` for token-binding gaps, paint-not-compose regressions (bare `<button>`/`<input>` where `<tek-button>`/`<tek-input>` should be instantiated), and design-token escape hatches (hardcoded hex, raw px, ad-hoc font sizes).
2. **Replace** every escape hatch with the corresponding DS-v2 token (`var(--tek-*)`) or the corresponding shipped DS-v2 component instance.
3. **Add** a Version selector in the Tweaks panel that switches the prototype's mock data set across all five documented TekExpress installations: **AppEmulator, DDR5 Tx, DisplayPortTx, DisplayPortTx 2.1, PCI Express**. Per-variant mock data is specified in §6 below.
4. **Update** the existing mock data fields (Suite, DUT ID, test names, probe types, etc.) to use accurate variant-specific values rather than the current single hardcoded "DDR5" placeholder.
5. **Preserve** the rest of the prototype byte-for-byte where possible. Same routes, same controls, same wizard steps, same panels, same side-nav-vs-right-rail mode toggle.

---

## §1 Hard constraints — do not violate

These are the rules that previous CD rounds (v3 paint-not-compose; v4 prompt audit) flagged as load-bearing. They apply with full force here.

### 1.1 File subscription — instantiate, do not rebuild

- Subscribe to the **DS-v2 Figma library** (key `3wbYstse9TYKlPtCPpZH5X`).
- **Use the components** already shipped in `@bbkemp/ui` 1.0.12. The shipped surface is: `tek-button`, `tek-character-count`, `tek-checkbox`, `tek-footer`, `tek-input`, `tek-label`, `tek-modal`, `tek-radio`, `tek-selector`, `tek-selector-label`, `tek-text-link`, `tek-toggle`. Do not re-implement any of these. Find them in the library, instantiate them, bind their attributes — never paint a `<button>` element when a `<tek-button>` instance is the right unit of expression.
- **Use the tokens** already shipped in `@bbkemp/tokens` 1.0.16. Every color, spacing, border-radius, font-family, font-size in the prototype must resolve to a `var(--tek-*)` reference with a sensible fallback. No raw hex, no raw px (with one carved-out exception in §1.4 below).

### 1.2 New primitives — flag, do not build

The prototype currently uses **proposed new primitives** that are not yet shipped in DS-v2:

- `tek-field`, `tek-dropdown`, `tek-wizard-stepper`, `tek-tabs`, `tek-status-bar`, `tek-status-pill`, `tek-empty-state`, `tek-group-box`

These are real proposed primitives (documented in the [2026-06-25 prototype audit](../2026-06-25-tek-express-ds-v2-baseline/report.md)). For this refresh:

- **Keep them named as `tek-*` web components** in the HTML.
- **Style them with DS-v2 tokens only.** Their internals can be CSS targeting the custom element name — that's the bridge until the real primitives ship.
- **Do NOT** invent new tokens or new component categories under the `tek-*` namespace as part of this refresh. If something feels missing, flag it in the deliverable's `cd-notes.md` and continue with the closest available token.

### 1.3 Container queries — preserve

The prototype implements container queries for its responsive layout (the `.mode-sn` ↔ `.mode-rr` switch + the sm/md/lg internal breakpoints). Bryan's 2026-04-23 commitment (`corpus/sources/tek-express/walkthroughs/ds-architecture-presentation.md` at 51:56) is that responsiveness is **container-level**, not viewport-level. Keep every `@container` rule and every `container-type` declaration. Do not regress this.

### 1.4 The one raw-px carve-out

The fixed content area `875 × 773` is the canonical TekExpress window size used in the original screen photos (and called out in the prototype's own internal comments). Preserve those specific px values — they're the artboard. Every other px should bind to a token (`--tek-spacing-*` for spacing, raw `px` only inside `var(--tek-spacing-*, <fallback>)` calls).

### 1.5 No functionality changes

Bryan is explicit: **no functionality changes, no UI changes outside of design-system token/color/spacing updates.** This means:

- The Options ▾ menu shows the same items in the same order (About, Open Recent, Open / Save / Save As Test Setup, Continuous Run Setup, Default Test Setup, Deskew, Instrument Control Settings, Email Settings, Preferences, Keep On Top, Message Font Size, Paste).
- The wizard has the same 5 steps in the same order (DUT, Test Selection, Acquisitions, Configuration, Preferences).
- The 5 top-level panels stay the same (Setup, Status, Results, Plots, Reports).
- The side-nav ↔ right-rail mode toggle stays.
- No new icons, no new menu items, no relocated controls, no relabeled wizards.

The only **additive** change is the Version selector in Tweaks (§6 below). Everything else is token-only.

### 1.6 Mock data must be accurate per variant

The current prototype hardcodes "DDR5" everywhere. With the version selector landing, mock data must change per variant. Use the variant-specific test names, parameters, and DUT identifiers from §6 — these come from the actual product manuals processed into the corpus, not made up.

### 1.7 Three-artifact contract

Deliver three artifacts:

1. **Updated `index.html`** — the prototype.
2. **`cd-notes.md`** at `audits/design-additions/2026-06-26-tek-express-token-refresh/cd-notes.md` — what you changed, what tokens you bound, what you couldn't bind and why, what you punted on.
3. **`cd-additions.md`** at the same path — every proposed new token or new component you encountered that isn't in DS-v2 today, with rationale. Even if you didn't add any, write `none` — the file is the contract.

---

## §2 Read order — corpus paths CD must consume

The TekExpress corpus is comprehensive. Read in this order before you touch the prototype.

### 2.1 First — the redesign baseline

- [`audits/prototype/2026-06-25-tek-express-ds-v2-baseline/report.md`](../../prototype/2026-06-25-tek-express-ds-v2-baseline/report.md) — the 28-pattern audit + the **Strategic resolutions addendum** that captures: chart library deferred, Push-Button Pete designed as legacy / Midway Max + AI as primary, "Dashboard Messy" noted as top complaint, TekRx scaffolded, D9020USBC/D9320USBC share `keysight-d9020`.
- [`audits/design-additions/2026-06-08-tek-express-v4-prompt/cd-prompt.v2.md`](../2026-06-08-tek-express-v4-prompt/cd-prompt.v2.md) — the corrected prompt template that the previous v4 round used. Same hard-constraint pattern as this one.

### 2.2 Second — the canonical screen + framework reference

- `corpus/sources/tek-express/screens/setup-dut.md` — canonical screen reference; this is the screen the prototype currently shows
- `corpus/sources/tek-express/screens/setup-dut-comments.md` — the Comments dialog
- `corpus/sources/tek-express/screens/setup-dut-session-browser.md` — Run/Config Sessions dialog
- `corpus/sources/tek-express/screens/options-dropdown.md` — the Options ▾ menu
- `corpus/sources/tek-express/screens/setup-test-selection.md`, `setup-test-selection-config.md`, `setup-test-selection-limits-editor.md` — Test Selection panel + its dialogs
- `corpus/sources/tek-express/screens/setup-acquisitions.md`, `setup-acquisitions-probe-config.md` — Acquisitions panel + probe config dialog
- `corpus/sources/tek-express/screens/setup-preferences.md`, `setup-preferences-email-settings.md` — Preferences panel + email settings
- `corpus/sources/tek-express/screens/status-test-status.md`, `status-log-view.md` — Status panel
- `corpus/sources/tek-express/screens/results.md` — Results panel
- `corpus/sources/tek-express/screens/plots.md` — Plots panel
- `corpus/sources/tek-express/screens/reports-configuration.md`, `reports-view-settings.md` — Reports panel + tabs
- `corpus/sources/tek-express/screens/running-test.md` — Running-Test minimised window state

### 2.3 Third — the framework manual + variant-specific manuals

- `corpus/sources/tek-express/docs/tek-express-app-emulator/` — the **framework reference**. The AppEmulator is Tek's reference app showcasing the panel structure, Options menu, SCPI surface, save/recall, and report engine with placeholder tests. Reading this gives you the canonical *what every TekExpress variant has*.
- `corpus/sources/tek-express/docs/tek-express-ddr5-tx-user-manual/` — DDR5 Tx variant (15 chunks). Covers BIST pattern injection, DPOJET integration, DDR5/LPDDR5 specs.
- `corpus/sources/tek-express/docs/tek-express-displayporttx/` — DisplayPort Tx base variant (6 chunks).
- `corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/` — DisplayPort Tx 2.1 variant (5 chunks). Covers UHBR 10 / 13.5 / 20.
- `corpus/sources/tek-express/docs/tek-express-pci-express/` — PCI Express variant (13 chunks). Covers CTLE optimization, scope noise compensation, NI USB 6501 DUT control, Switch Matrix companion app, CXL support, SRIS Tx Test Board.

The variant-specific deltas matter for §6. Read the `_index.md` of each to get the topic structure; read the chunks that touch DUT / Test Selection / Acquisitions for variant-specific mock data.

### 2.4 Fourth — the personas + redesign mantras

- `corpus/sources/tek-express/walkthroughs/personas-and-jobs-to-be-done.md` — the 3 personas (Guru Gus, Push-Button Pete, Midway Max) and the 4-stage JTBD landscape. The baseline audit's strategic resolution: design for **Midway Max + AI as primary**, **Pete as legacy**. Read both. Token refresh doesn't change personas — but every mock-data choice in the prototype should feel plausible to Midway Max (the AI-augmented operator who runs the wizard semi-automatically across regions and time zones).
- `corpus/sources/tek-express/walkthroughs/ui-redesign-mantras-and-transition-strategy.md` — the three mantras: guided customer engagement, Mazda-to-Jaguar transition, bandwagon respect. The "no manual to drive" principle applies to this refresh: a current TekExpress 5 user opening the refreshed prototype must still know how to drive.
- `corpus/sources/tek-express/walkthroughs/persona-evolution-physical-ai-and-voc-methodology.md` — "Push-Button Pete will no longer exist after a year or so." For mock data, lean Midway-Max-aware: if you need to invent a user (DUT ID, session name, comment text), the user is on a global automation cycle, not a sit-at-the-scope operator.

### 2.5 Fifth — the customer-direct signal

- `corpus/sources/tek-express/uploads/artifacts/TekExpress_Needed_Features 1.md` — direct customer-requested features summary. Use this to ground your mock data choices.
- `corpus/sources/tek-express/decks/india-customer-voc-2023-march/empathy-map-nvidia.md` — *"Gen4 was late by Tek, we moved to KS"*. PCIe generation latency is a competitive risk. If you set a default version, **default to PCI Express** to surface this signal in the prototype's primary state.
- `corpus/sources/tek-express/decks/india-customer-voc-2023-march/empathy-map-infineon.md` — *"Test only one interface at a time · need to check multiple lanes together"*. Multi-lane is real customer pain. Mock data for PCIe variant should show a multi-lane DUT (4 lanes) per §6.4.
- `corpus/sources/tek-flow/decks/tekflow-voc-synthesis-2022-12/voc-summary-and-synthesis.md` — *"Dashboard is Messy"* is the top customer complaint, unresolved 2022 → 2026. Baseline audit's strategic resolution: **note as top complaint, do not address in this refresh.** Don't redesign the dashboard; don't fix the table density; don't try to clean it up. Token-bind and move on.

### 2.6 Use the `/corpus-query` skill

The `corpus-query` skill at `.claude/skills/corpus-query/SKILL.md` is the playbook for navigating the corpus. Run it as your first move. It tells you:

- Index-first (every subject's `index.md` first, screens'/docs' `_index.md` second)
- Filename + frontmatter match second
- Verbatim grep last
- Cite every product-specific claim
- Surface confidence flags

---

## §3 What to preserve (functionality + UI)

A taxonomy of what stays. If the previous prototype shows X, this refresh shows X — same position, same behavior, same visible label.

### 3.1 The canonical screen

The prototype renders **Setup → DUT** as its anchor. Keep that anchor. Other wizard steps are pending in the current prototype (`state="pending"` on the `<tek-step>` elements). Keep them pending. **Do not** implement Setup → Test Selection, Acquisitions, Configuration, or Preferences screens as functional pages in this round — they stay as wizard placeholders.

### 3.2 The top-level chrome

- **Title bar** — Tektronix logo at left, "TekExpress AppEmulator" (or whichever variant per the version selector — see §6) wordmark, Options ▾ pill at right, window controls (mail, minimise, close) far right.
- **Side nav (5 vertical pills)**: Setup · Status · Results · Plots · Reports. Orange-fill on the active pill (`Setup`).
- **Wizard stepper**: 5 steps — DUT (current) / Test Selection / Acquisitions / Configuration / Preferences (pending).
- **Right-rail toolbar (.mode-rr) OR side-nav foot (.mode-sn)**: Start ▶, Pause ‖. (Clear × only appears on Results, which is out of scope for this refresh.)
- **Status bar (bottom edge)**: "Ready." + progress fill placeholder.
- **"Not Intended For Public Release"** red notice at lower-left.

### 3.3 The Options ▾ menu

Same 14 items in this order, same checkmarks where applicable:

1. About TekExpress
2. Open Recent ▸
3. Open Test Setup…
4. Save Test Setup
5. Save Test Setup As…
6. Default Test Setup
7. Continuous Run Setup
8. Deskew
9. Instrument Control Settings…
10. Email Settings…
11. Preferences…
12. Keep On Top (toggleable check)
13. Message Font Size ▸
14. Paste (Ctrl+V)

### 3.4 The .mode-sn / .mode-rr layout switch

Both layouts must continue to work. The current prototype uses CSS custom properties (`--sn-nav-width`, `--rr-nav-width`, `--rr-rail-width`, etc.) to size the variants. Keep these custom properties. Bind every value to a DS-v2 token where one fits; otherwise leave as a raw px with a comment (`/* layout artboard — see §1.4 */`).

### 3.5 The Setup → DUT panel content

Inside the canonical 875 × 773 content area, the DUT panel shows (from top to bottom):

- DUT ID field (`tek-field` with `tek-input`)
- Suite dropdown (`tek-field` with `tek-dropdown` — this becomes variant-aware per §6)
- Acquire mode toggle (Live / Pre-recorded)
- Device dropdown (variant-aware)
- Probing settings group:
  - Signal Probe Type (`tek-dropdown` with options Single-Ended / Differential / TriMode)
  - Offset (`tek-input`)
  - Signal Validation (`tek-toggle`)
- Comments field (`tek-input` multiline — currently a textarea pattern in the prototype)

Preserve every label, every field, every dropdown's options. Update the dropdown contents per the version selector (§6).

---

## §4 What to change (tokens + components)

The actual diff. Three categories.

### 4.1 Color tokens

Every hex value in the prototype must bind to a `--tek-color-*` token. The shipped semantic tokens in DS-v2:

- `--tek-color-canvas-background-default` (dark mode default; light mode override)
- `--tek-color-button-background-default` / `-hover` / `-inactive` / `-text-default` / `-text-hover` / `-text-inactive` / `-border-default` / `-border-hover` / `-border-inactive`
- `--tek-color-input-background-default` / `-border-default` / `-border-focus` / `-border-filled` / `-border-error` / `-border-disabled` / `-character-count-default` / `-character-count-error` / `-character-count-filled`
- `--tek-color-footer-background-default` / `-text-default`
- `--tek-color-icons-default`
- `--tek-color-text-link-default`
- `--tek-color-selector-background-unchecked`
- `--tek-color-error`

For colors that don't have a clear semantic match in the shipped tokens (e.g. the orange active-pill fill, the "Not Intended For Public Release" red notice color, the green Start / red Stop right-rail indicator dot), bind to the **closest primitive token** and add a `cd-additions.md` entry noting "needs semantic token: <name>." Examples:

- Active-pill orange → bind to a primary-accent or warning-accent primitive; flag for `tek-color-nav-active`
- "Not Intended For Public Release" red → bind to `tek-color-error`
- Start green / Stop red on the right-rail → bind to primitive success/danger; flag for `tek-color-run-state-go` / `tek-color-run-state-stop`

### 4.2 Spacing tokens

Every margin/padding/gap that's a raw px must bind to `--tek-spacing-sNN` (`s01` through ~`s11`). Use the closest existing spacing token; if the prototype uses an odd value like 7px, bind to the nearest token and let the layout breathe by 1px. Don't invent new spacing tokens for the refresh.

### 4.3 Component instantiation discipline

- Audit every `<button>` in the prototype. If it's an interactive action button, replace with `<tek-button>`. Keep icon-only / circular / outlined / danger variants as `<tek-button>` instances with the variant attribute set (even if those variants are proposed-not-shipped — flag in `cd-additions.md`).
- Audit every `<input>` and `<select>`. Form fields become `<tek-input>` (text), `<tek-input type="number">` (numeric), or `<tek-dropdown>` (select). Wrap each in `<tek-field>` for label + helper text + error.
- Audit every `<svg>` icon. The shipped DS doesn't have an icon system today; per the baseline audit, icons are temporarily Lucide substitutions. Keep the existing SVGs; do not redraw them. Flag the icon-set decision as a `cd-additions.md` open question.

---

## §5 What stays out

Things to explicitly NOT do:

- **Do not** redesign the dashboard / table density. It's the top complaint, and the strategic resolution is "note, don't fix this turn."
- **Do not** add the Plots screen or implement chart visualization. Chart library is deferred (P0 unresolved from the baseline audit).
- **Do not** add new icons, new menu items, new wizard steps, new panels.
- **Do not** introduce dark/light theme toggle controls (the prototype already supports `data-theme="dark"` / `"light"` — keep that mechanic but don't add a UI for it).
- **Do not** add user-research findings as visible UI affordances. Personas, JTBDs, mantras inform mock-data choices but don't become UI elements.
- **Do not** rebuild any `tek-button`, `tek-input`, `tek-checkbox`, `tek-modal`, `tek-radio`, `tek-selector`, `tek-toggle` from scratch. Instantiate the DS-v2 components.

---

## §6 Version selector spec

Add a single new control to the Tweaks panel: a dropdown labeled **"TekExpress installation"**. The dropdown's value drives mock data across the prototype. Implement it with `<tek-dropdown>` inside `<tek-field label="TekExpress installation">`.

When the selected variant changes:

- The **title bar wordmark** updates ("TekExpress AppEmulator" → "TekExpress DDR5 Tx" / "TekExpress DisplayPort Tx" / "TekExpress DisplayPort Tx 2.1" / "TekExpress PCI Express").
- The **HTML `<title>`** updates ("TekExpress · Setup › DUT" → "TekExpress DDR5 Tx · Setup › DUT", etc.).
- The **Suite dropdown** in the DUT panel changes its options per variant (§6.1–6.5 below).
- The **Device dropdown** changes its options per variant.
- The **DUT ID placeholder / default value** changes.
- The **default Signal Probe Type** may change per variant.
- Any other variant-specific labeling (e.g. CTLE optimization toggle for PCIe — see §6.4) appears/disappears.

The Tweaks panel already has the .mode-sn / .mode-rr toggle. Add the version selector above the layout toggle.

### Default selection

**Default to PCI Express** when the page first loads. Rationale: PCIe is the variant with the strongest competitive signal (NVIDIA Bangalore's *"Gen4 was late"*), the highest customer impact (~600 interfaces per AMD AI server per Subhasis's framing), and the richest mock data surface (Switch Matrix, CTLE, scope noise comp, NI USB 6501, CXL, SRIS). It shows the prototype at its most signal-dense first state.

### 6.1 AppEmulator — reference/training variant

- **Wordmark:** "TekExpress AppEmulator"
- **Suite options:** Group1 (only — placeholder)
- **Device options:** TX-Device, RX-Device, RX-Device-LB
- **DUT ID default:** `TX-Device-001`
- **Default test in inventory shown elsewhere if relevant:** "Algorithm Library Measurement", "Period using SCOPE", "Period using DPOJET"
- **Spec version visible:** "Spec 1.0"
- **About-dialog version string:** "5.6.999.31 (DAILY)"
- **Framework note:** explicit placeholder content. Show on the Confirm-version tooltip: *"Reference framework for compliance-application developers. Tests, DUT, suite are placeholders — there is no real spec being implemented."*
- **Probe type default:** Single-Ended
- Source: `corpus/sources/tek-express/docs/tek-express-app-emulator/_index.md`

### 6.2 DDR5 Tx — full product manual

- **Wordmark:** "TekExpress DDR5 Tx"
- **Suite options:** DDR5, LPDDR5, LPDDR 5X
- **Device options:** DDR5 DRAM, LPDDR5 DRAM, LPDDR5X-7500, LPDDR5X-8533, LPDDR5X-9600
- **DUT ID default:** `MICRON-LPDDR5X-9600-A1`
- **Spec version visible:** "JESD79-5C (DDR5) / JESD209-5C (LPDDR5)"
- **Manual reference:** 077-1648-04
- **Test-name examples (for Test Selection panel, if shown):** "BIST Pattern Burst", "tDS / tDH Setup-Hold", "Eye Diagram Tx Centered", "Jitter Decomposition (Rj/Dj/Tj)", "DCD Skew", "Vix AC Crossing"
- **Probe type default:** Differential
- **Multi-lane:** typically 8-lane DDR5 / 16-lane LPDDR5; show as "Lanes: 8" or "Lanes: 16" depending on Device selection
- Source: `corpus/sources/tek-express/docs/tek-express-ddr5-tx-user-manual/setup-dut-panel.md`

### 6.3 DisplayPort Tx (base + 2.1)

Treat as two separate variants since the prototype must distinguish them:

#### 6.3a DisplayPortTx (base)

- **Wordmark:** "TekExpress DisplayPort Tx"
- **Suite options:** DisplayPort 1.4
- **Device options:** Source Device, GPU Source, Embedded eDP Source
- **DUT ID default:** `DP14-GPU-PRP1`
- **Spec version visible:** "DisplayPort 1.4a / 1.4b (VESA)"
- **Test-name examples:** "HBR3 Eye Mask Test (8.1 Gbps)", "HBR2 Pre-Cursor / Post-Cursor", "Total Jitter at TP3_EQ", "Intra-pair Skew"
- **Probe type default:** Differential
- Source: `corpus/sources/tek-express/docs/tek-express-displayporttx/_index.md`

#### 6.3b DisplayPortTx 2.1

- **Wordmark:** "TekExpress DisplayPort Tx 2.1"
- **Suite options:** DisplayPort 2.1
- **Device options:** UHBR Source, UHBR 10 Source, UHBR 13.5 Source, UHBR 20 Source
- **DUT ID default:** `DP21-UHBR20-A2`
- **Spec version visible:** "DisplayPort 2.1 (VESA)"
- **Test-name examples:** "UHBR 20 Tx Eye (20 Gbps)", "UHBR 13.5 Tx Eye (13.5 Gbps)", "UHBR 10 Tx Eye (10 Gbps)", "Total Jitter at TP3_EQ (per-rate)", "RJ / DDJ separation"
- **Probe type default:** Differential
- **Note:** The "2.1" suffix is integral to the wordmark; don't drop it
- Source: `corpus/sources/tek-express/docs/tek-express-displayporttx-2-1/_index.md`

### 6.4 PCI Express — full product manual (default)

This is the default variant on first page load.

- **Wordmark:** "TekExpress PCI Express"
- **Suite options:** PCIe Gen 3, PCIe Gen 4, PCIe Gen 5, PCIe Gen 6, CXL 2.0, CXL 3.0
- **Device options:** Add-in Card, Root Complex, CEM Slot, Endpoint, Riser Card, Retimer
- **DUT ID default:** `NVIDIA-GEN5-X16-A1`
- **Spec version visible:** "PCIe Base Spec 5.0 / CEM 5.0"
- **Manual reference:** 077-1762-05
- **Test-name examples:** "Tx Eye Width at TP4 (Gen 5, 32 GT/s)", "Tx Voltage Swing", "Reference EQ — CTLE Sweep", "Jitter Decomposition (Rj/Dj/Tj)", "SRIS Reference Clock Tx", "Tx Preset Sweep (P0–P9)"
- **PCIe-specific UI affordances** (these may already exist in the prototype as text; preserve labeling):
  - **CTLE optimization** — when PCIe variant selected, show a small "CTLE: optimize" indicator near the Configuration step's progress
  - **Scope noise characterization** — when PCIe variant selected, show indicator near the Acquisitions step
  - **NI USB 6501 controller** — when PCIe variant selected, the Probing settings group shows an additional "Automated DUT Control" field with a dropdown that includes "NI USB 6501" alongside "Manual"
  - **Switch Matrix** — when PCIe variant selected with Lanes > 1, show a small "Switch Matrix: routed" indicator
- **Multi-lane:** 4-lane or 16-lane PCIe DUTs; show "Lanes: 4" or "Lanes: 16" per Device selection
- **Probe type default:** Differential
- Source: `corpus/sources/tek-express/docs/tek-express-pci-express/setup-dut-panel.md` + `setup-configuration-and-preferences.md` + `switch-matrix-application.md`

### Per-variant Suite + Device dropdown summary

| Variant | Suite | Device default | DUT ID default |
|---|---|---|---|
| AppEmulator | Group1 | TX-Device | `TX-Device-001` |
| DDR5 Tx | DDR5 | DDR5 DRAM | `MICRON-LPDDR5X-9600-A1` |
| DisplayPort Tx | DisplayPort 1.4 | Source Device | `DP14-GPU-PRP1` |
| DisplayPort Tx 2.1 | DisplayPort 2.1 | UHBR 20 Source | `DP21-UHBR20-A2` |
| PCI Express *(default)* | PCIe Gen 5 | Add-in Card | `NVIDIA-GEN5-X16-A1` |

---

## §7 Mock data updates — meaningful user flow examples

Beyond the per-variant dropdown contents (§6), the prototype's other mock content should reflect realistic flows.

### 7.1 Comments field

The Comments field on the DUT panel currently is empty or has placeholder text. Per variant, seed with a realistic mid-session annotation (max 80 chars):

- **AppEmulator:** `Reference run — verifying SCPI command continuity after framework update.`
- **DDR5 Tx:** `Lane 0 skew larger than expected at 9600 MT/s — re-running with tightened deskew.`
- **DisplayPort Tx (base):** `HBR3 eye margin tight at -2C ambient — rerun with cable B.`
- **DisplayPort Tx 2.1:** `UHBR 20 TJ marginal on lane 3 — switch matrix to bypass and rerun.`
- **PCI Express:** `Gen 5 x16, CTLE sweep deferred to overnight — Midway Max queueing rerun in TWN.`

The PCI Express comment is the canonical example — the Midway Max reference grounds the user identity in the persona model.

### 7.2 Open Recent ▸ submenu

When opened, populate with 5 mock recent sessions per variant (not interactive — just visible labels):

- **PCI Express (default):**
  - `gen5-x16-nvidia-a1.tex` — Today 14:22
  - `gen4-x8-amd-genoa.tex` — Yesterday 09:51
  - `gen5-cem-asrock.tex` — 2026-06-22 16:04
  - `cxl3-type2-microchip.tex` — 2026-06-18 11:15
  - `gen6-preview-marvell.tex` — 2026-06-09 (deprecated)

- **DDR5 Tx:**
  - `lpddr5x-9600-micron.tex` — Today 13:10
  - `ddr5-6400-samsung.tex` — Yesterday 16:33
  - `lpddr5-7500-hynix.tex` — 2026-06-21 10:02

- **DisplayPort Tx 2.1:**
  - `uhbr20-amd-gpu-rdna4.tex` — Today 11:48
  - `uhbr13_5-source-validation.tex` — Yesterday 17:25
  - `uhbr10-edp-panel-bringup.tex` — 2026-06-20 09:14

- **DisplayPort Tx (base):**
  - `hbr3-source-validation.tex` — Today 10:11
  - `hbr2-precursor-sweep.tex` — Yesterday 14:46
  - `embedded-edp-rev3.tex` — 2026-06-19 13:30

- **AppEmulator:**
  - `framework-smoke-test.tex` — Today 09:00
  - `scpi-continuity-check.tex` — Yesterday 08:30
  - `default-config-baseline.tex` — 2026-06-15 11:00

### 7.3 Status-bar text

Current: "Ready." — keep as the default. Per variant, when the prototype is showing a non-Ready state placeholder, use:

- **PCI Express:** `Discovering scope at 192.168.1.42... CTLE optimization queued.`
- **DDR5 Tx:** `Initializing BIST pattern... Lane mapping verified.`
- **DisplayPort Tx 2.1:** `Locking on UHBR 20 SSC... eye open at TP3_EQ.`
- **DisplayPort Tx:** `Connecting to source... HBR3 lock acquired.`
- **AppEmulator:** `Reference framework ready. No real instruments connected.`

If the prototype only shows the static "Ready.", that's also fine — variant-specific status text is a nice-to-have, not a requirement.

### 7.4 Email Settings dialog mock recipient (if visible)

The current prototype likely doesn't render this dialog at full fidelity, but if any email-recipient field is visible, use:

- Mock recipient: `pete.midway-max@tek-validation.example`
- This name explicitly references the **persona model** — Midway Max is the recipient because, per the strategic resolution, Midway Max + AI is the primary persona. Push-Button Pete is being absorbed; the email handle nods at that.

---

## §8 Component usage — the strict instantiation rules

### 8.1 Shipped DS-v2 — instantiate

For every interactive element in the prototype, the rule is **prefer the shipped tek-* component over a raw HTML element**.

| If you see | Replace with |
|---|---|
| `<button>` for any clickable action | `<tek-button>` (set `variant` / `size` / `state` attrs) |
| `<input type="text">` / `<textarea>` | `<tek-input>` (use `multiline` attribute for textarea) |
| `<select>` | `<tek-dropdown>` wrapped in `<tek-field>` |
| `<input type="checkbox">` (single) | `<tek-checkbox>` |
| `<input type="radio">` | `<tek-radio>` |
| Toggle switch | `<tek-toggle>` |
| Modal / dialog overlay | `<tek-modal>` |
| Footer chrome | `<tek-footer>` |
| Labels paired with controls | `<tek-label>` (or rely on `<tek-field label="...">` slot) |
| Hyperlink in body text | `<tek-text-link>` |
| Segmented selection (one-of-N) | `<tek-selector>` |
| Character-count counter | `<tek-character-count>` |

### 8.2 Proposed primitives — keep named, style with tokens

For the proposed (not-yet-shipped) primitives the prototype already uses (`tek-field`, `tek-dropdown`, `tek-wizard-stepper`, `tek-tabs`, `tek-status-bar`, `tek-status-pill`, `tek-empty-state`, `tek-group-box`), keep them named as custom-element tags. Style them via CSS targeting the element name. They are placeholders for real future components — keeping the names anchors the migration when those primitives ship.

### 8.3 Out-of-scope (don't touch)

- Window chrome (mail icon, minimise, close) — OS surface, leave alone
- The Tek logo SVG at top-left — brand asset, leave alone
- The "Not Intended For Public Release" red notice — preserve text + position; bind color to `--tek-color-error`

---

## §9 Verification checklist — run before declaring done

Before you submit, verify each:

- [ ] Page renders with **PCI Express** as the default variant
- [ ] Version selector dropdown lists all 5 variants in this order: PCI Express, DDR5 Tx, DisplayPort Tx, DisplayPort Tx 2.1, AppEmulator
- [ ] Switching variants updates the wordmark, the HTML title, the Suite dropdown contents, the Device dropdown contents, the DUT ID default, and the Comments seed text
- [ ] Both `.mode-sn` and `.mode-rr` layouts still work after the refresh
- [ ] Wizard stepper still shows 5 steps with DUT current and the others pending
- [ ] All 5 side-nav panel pills (Setup, Status, Results, Plots, Reports) present, Setup active
- [ ] Options ▾ menu has 14 items in the documented order
- [ ] Every visible color resolves to a `var(--tek-color-*)` with fallback
- [ ] Every visible spacing/border value resolves to `var(--tek-spacing-*)` or `var(--tek-borders-*)` with fallback (except the 875 × 773 artboard exception)
- [ ] Container queries still drive responsive layout (no viewport-only `@media` rules added)
- [ ] No new bare `<button>` introduced (every clickable becomes `<tek-button>`)
- [ ] `cd-notes.md` written
- [ ] `cd-additions.md` written (even if `none`)
- [ ] Spot-check: the previous v4 prompt audit's P0 fixes (file subscription, container queries, three-artifact contract) are all honored in this build

---

## §10 Out-of-scope reminder

This refresh is the smallest possible change that closes the token-binding gap and adds the version selector. No new flows. No new screens. No feature work.

User feedback (the *"Dashboard is Messy"* complaint, multi-lane testing, deployment friction, AI-driven automation) is acknowledged in the corpus and the audit doc. **It does not get addressed in this refresh.** A subsequent design round will tackle those.

The Mazda-to-Jaguar mantra applies: a current TekExpress 5 user should open this refresh and **know how to drive without reading a manual**. If anything in this refresh would surprise that user, it's wrong.

---

## §11 What success looks like

- The prototype's deployed URL renders the same screen Bryan has been showing — Setup → DUT — but every color, spacing, font-size, and component now binds cleanly to DS-v2.
- The Version selector switches mock data across 5 documented variants accurately.
- `cd-notes.md` reads like a careful diff — "I bound X to token Y because Z; I couldn't bind A so I flagged it."
- `cd-additions.md` is short (no surprise net-new tokens), or if it has entries, each is a legitimate gap with a real proposed token name.
- The next CD round (a real redesign) has a clean, well-tokenized prototype to start from.

---

## §12 Where to ask the corpus directly

Bring `/corpus-query` into the loop liberally. The corpus has answers for almost every "what should this label be?" / "what test is in this suite?" / "what's the typical DUT name?" question. Don't invent.

Three sample queries to run as a smoke test before starting:

1. *"What does the Setup → DUT screen show in TekExpress today?"* — should land on [`corpus/sources/tek-express/screens/setup-dut.md`](../../../corpus/sources/tek-express/screens/setup-dut.md).
2. *"What's the difference between PCIe and DDR5 in TekExpress?"* — should land on the variant-specific `_index.md` files and surface PCIe-specific features (CTLE, scope noise comp, Switch Matrix, CXL, SRIS).
3. *"Who is the canonical TekExpress user persona?"* — should land on [`corpus/sources/tek-express/walkthroughs/personas-and-jobs-to-be-done.md`](../../../corpus/sources/tek-express/walkthroughs/personas-and-jobs-to-be-done.md) and the persona evolution chunk.

If those three queries don't yield clean retrievals, stop and re-read §2 before continuing.

---

## §13 Provenance

This prompt is the 2026-06-26 token-refresh brief. It supersedes the previous CD prompts ([2026-06-02 v3](../2026-06-02-tek-express-setup-dut/), [2026-06-08 v4](../2026-06-08-tek-express-v4-prompt/cd-prompt.v2.md)) only for token-refresh scope; the v4 prompt's hard-constraint structure stays canonical for any subsequent redesign rounds.

The corpus state at this prompt's authoring date — every TekExpress variant manual processed, persona model documented, customer signal captured, strategic resolutions captured in the baseline audit addendum — is the richest the corpus has ever been for TekExpress redesign work. Use it.
