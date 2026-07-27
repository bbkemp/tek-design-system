# GDM9061 "Dragon Storm" — vendor font export

Clean, **static `.ttf`** of the three families the prototype uses, at the used
weights, plus [`fonts.css`](./fonts.css) mirroring the type styling in the
[typography annotation](../../../audits/design-additions/2026-06-30-gw-gdm9061-reskin/typography-annotation.md).
All OpenType features are **baked** — plain rendering shows the correct glyphs,
so the vendor's toolchain does not need to apply features.

## Contents — `ttf/`

| File | Family / weight | Source |
|---|---|---|
| `IosevkaMono-UltraCondensed.ttf` | Iosevka Mono Ultra Condensed 400 | font-lab sealed build |
| `IosevkaMono-Condensed.ttf` | Iosevka Mono Condensed 400 | " |
| `IosevkaMono-CondensedMedium.ttf` | Iosevka Mono Condensed 500 | " |
| `IosevkaMono-CondensedSemiBold.ttf` | Iosevka Mono Condensed 600 | " |
| `IosevkaMono-CondensedBold.ttf` | Iosevka Mono Condensed 700 | " |
| `IosevkaMono-Extended.ttf` | Iosevka Mono Extended 400 | " |
| `IosevkaMono-ExtendedMedium.ttf` | Iosevka Mono Extended 500 | " |
| `IosevkaMono-ExtendedSemiBold.ttf` | Iosevka Mono Extended 600 | " |
| `Geist-Regular.ttf` | Geist 400 | canonical OFL, instanced |
| `Geist-Medium.ttf` | Geist 500 | " |
| `Geist-Bold.ttf` | Geist 700 | " |
| `Archivo_Expanded-Medium.ttf` | Archivo 500 · wdth 120 | canonical OFL, instanced |
| `Archivo_Expanded-SemiBold.ttf` | Archivo 600 · wdth 120 | canonical OFL, instanced |

## Baked details

- **Iosevka digits** — `cv04=7 · cv07=1 · cv08=2 · cv09=3` baked as defaults
  (semi-open-non-crossing-serifless 4, straight-serifless 7, two-circles 8,
  straight-bar 9). No feature-settings needed for 4/7/8/9.
- **Archivo** — the `wdth 120` (Expanded) axis is instanced into static cuts;
  no variable-font support required.
- **Geist** — static instances of the variable font at 400 / 500 / 700.

## Rebuilding the Iosevka faces

The 8 Iosevka `.ttf` come from a **sealed** build (variants baked in). To (re)generate:

```bash
cd /Users/u651717/kemp-sys/tek-design-system && bash prototypes/font-lab/build-vendor-fonts.sh
```

Requires `brew install node ttfautohint` once. It clones Iosevka to `~/.cache`,
builds with the four digit variants set as defaults, and drops the 8 TTF here in
`ttf/`. Geist and Archivo are already built (canonical OFL, instanced) and need
no rebuild.

*Licensing: Iosevka, Geist, and Archivo are all OFL — the vendor's legal team is
handling license terms, so no license files are bundled here.*
