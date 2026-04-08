# Changelog

All notable changes to the Tek Design System are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [1.0.10] — 2026-04-08

### Fixed — `@bbkemp/ui`

- **`tek-input`** — `attributeChangedCallback` no longer calls `_render()` on `state` changes. Re-rendering destroyed the focused `<input>` element mid-typing, making form fields non-functional. Visual state continues to be handled by `:host([state=...])` CSS selectors.
- **`tek-checkbox`** — Rewrote render to use flexbox centering and conditional SVG injection (only inserts checkmark SVG when `checked`). Previous implementation used absolute-positioned `.icon` with `display:none/block` toggling, which produced rendering artifacts in some browsers.
- **`tek-modal`** — Corrected `max-width` from 320px to 360px to match Figma spec.
- **`tek-button`** — Corrected label `font-weight` to 600 and `line-height` to `var(--tek-fonts-heading-line-height-xs)`; added `text-align: center` to `:host` so centering survives light DOM `display` overrides.

### Fixed — `signin.html`

- Modal heading is now responsive: 24px (`heading-size-md`) at mobile/tablet, 32px (`heading-size-lg`) at desktop — driven by `--tek-modal-heading-size` custom property override in the 1280px container query.
- Logo sizes corrected: 60px icon / 26px wordmark at mobile, 90px / 38px at tablet+.
- Desktop layout: logo positioned `absolute` at `top: 64px; left: 64px` (matching wrap padding token); modal centered freely in remaining space.
- ES module cache-busting query param added to `<script src>`.

---

## [1.0.0] — 2026-03-31

First stable release. The pipeline from Figma Variables to published packages is fully automated and end-to-end tested.

### Token pipeline
- Figma Variables → W3C DTCG JSON (`$value`, `$type`, `$description`) → Style Dictionary → `@bbkemp/tokens`
- **Token Push plugin v6** exports all Semantic modes in one push — no manual mode switching in Figma
- Dark mode → `semantic/tokens.json` (default, mode index 0)
- Light mode → `semantic/tokens.light.json` (auto-exported, mode index 1)
- Mode slug derived from Figma mode name — emoji-safe, lowercase, hyphenated
- Future modes auto-generate `tokens.{slug}.json` with no plugin changes needed

### Design tokens (`@bbkemp/tokens`)
- **Color primitives** — neutral scale 100–900 + black/white, brand (tek-blue), UI states (error, warning, success), backdrop (dark/light alpha), shadow
- **Type scale** — text xs–5xl (Geist) + same sizes as mono (Geist Mono), heading 2xs–5xl (Archivo)
- **Semantic colors** — dark and light modes for: input, selector, button, modal, footer, text-link, icons
- **Border** — radius and width scales
- **Spacing** — full spacing scale
- CSS custom property naming follows W3C DTCG path: `color.input.border.focus` → `--tek-color-input-border-focus`

### Web Components (`@bbkemp/ui`)
11 components, all shadow DOM, all token-driven via CSS custom properties:

| Component | Element | Notes |
|---|---|---|
| Checkbox | `tek-checkbox` | checked, error, disabled states |
| Radio | `tek-radio` | group via `name` attr |
| Toggle | `tek-toggle` | CSS transition on thumb |
| SelectorLabel | `tek-selector-label` | unchecked/checked/error color states |
| Selector | `tek-selector` | wraps checkbox/radio/toggle + label |
| Input | `tek-input` | single/double/triple height; `_render`/`_applyStyle` split preserves focus |
| CharacterCount | `tek-character-count` | default/focus/filled/warning/error |
| TextLink | `tek-text-link` | `href`, `target` |
| Button | `tek-button` | primary/inactive; Archivo heading/xs |
| Modal | `tek-modal` | frosted glass backdrop-filter; header/input-blocks/action-blocks slots |
| Footer | `tek-footer` | left slot (theme toggle) + default slot (copyright) |

### Dark / Light mode
- `data-theme="dark"` on `<html>` = dark (default)
- `data-theme="light"` on `<html>` = light overrides
- CSS custom properties cascade through shadow DOM automatically — no component changes needed to switch modes
- Theme toggle: `tek-toggle` in `tek-footer` left slot, wired to `document.documentElement.setAttribute('data-theme', ...)`

### Preview pages
- **signin.html** — responsive (mobile/tablet/desktop via container queries), dark/light mode, frosted glass modal, AutoAnimate
- **component-library.html** — full live component reference, dark/light toggle in sidebar, complete token table including type scale and font families

### Fonts
- **Geist** — body/UI text (npm: `geist`, Google Fonts CDN)
- **Geist Mono** — code/labels (Google Fonts CDN)
- **Archivo** — headings/buttons (variable `wdth 120`, Google Fonts CDN)

### Infrastructure
- `publish-tokens.yml` — triggers on `packages/tokens/src/**` changes, serialized via concurrency group
- `publish-ui.yml` — triggers on `packages/ui/src/**` changes
- Both workflows auto-bump patch version and publish to GitHub Packages
- `dist/` is gitignored — built output lives only in the published package

### Versioning convention (from 1.0.0)
| Bump | When |
|---|---|
| `patch` `1.0.x` | Token value changes, bug fixes — CI auto-bumps |
| `minor` `1.x.0` | New tokens, new components, new features (non-breaking) — manual |
| `major` `x.0.0` | Renamed/removed tokens or components (breaking) — manual + advance notice |

---

## [0.2.x] — 2025 (pre-release)

Iterative pre-release development. Token pipeline established, all 11 components built, preview pages created. See git history for details.
