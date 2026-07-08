Font lab assets — Iosevka Custom (built from the plan at
audits/design-additions/2026-06-30-gw-gdm9061-reskin/iosevka-build-plan.toml).

This folder holds the 30 real static faces the tester uses:
  5 widths (Condensed 456 / SemiCondensed 548 / Normal 600 / SemiExtended 658 / Extended 720)
  x 3 weights (Light 300 / Medium 500 / SemiBold 600)
  x 2 slopes (upright / oblique)

The tester (../index.html) loads a face by exact filename on demand
(IosevkaCustom-<Width><Weight><Oblique>.woff2), so Width/Weight/Slope switch
REAL files — no faux bolding or synthetic slant. No manifest needed.
