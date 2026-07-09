#!/usr/bin/env bash
# Build "Iosevka Mono" — Tek's custom mono — full matrix, subset for web.
#
# Produces the exploration set for the font-lab tester: sans, all 9 weights x
# all 7 widths x {upright, oblique} x {mono, quasi-proportional} = 252 faces,
# PLAIN base (no inherits) so the ss##/cv## OpenType toggles actually work,
# ligatures off. Mono = spacing "normal"; QP = spacing "quasi-proportional".
#
# Keeps the 2.4 GB Iosevka clone in a scratch dir (~/.cache) — only the small
# subset .woff2 land in the repo.
#
# Requirements (one-time):
#   brew install node ttfautohint
#   (python3 + fonttools/brotli are auto-installed below)
#
# Run:  bash prototypes/font-lab/build-fonts.sh
# Re-run after editing the plan below; it reuses the clone and rebuilds.
set -euo pipefail

# Two parallel builds — monospace + quasi-proportional — same matrix, only the
# `spacing` key differs. Format: key|family|spacing. Web filenames stem from key.
PLANS=(
  "IosevkaMono|Iosevka Mono|normal"
  "IosevkaMonoQP|Iosevka Mono QP|quasi-proportional"
)
IOSEVKA_REF="${IOSEVKA_REF:-}"    # optional: pin a release tag e.g. v33.2.7 (empty = latest)

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"   # prototypes/font-lab
WOFF2_OUT="$HERE/fonts"
WORK="${WORK:-$HOME/.cache/iosevka-build}"

# Subset charset: Basic Latin + Latin-1 + the symbols instrument readouts need
# (Ω ohm, µ micro, ° deg, − minus, arrows, etc.). --layout-features='*' keeps
# ALL cv##/ss## features so the tester toggles still work after subsetting.
UNICODES="U+0020-007E,U+00A0-00FF,U+2010-2015,U+2018-201F,U+2020-2022,U+2026,U+2030,U+2032-2033,U+2039-203A,U+20AC,U+2122,U+2126,U+212B,U+2190-2193,U+2212,U+221E,U+03A9,U+00B5,U+00B0,U+00B1,U+00D7,U+00F7"

echo "==> checking tools"
command -v node >/dev/null || { echo "FATAL: need Node >= 18 (brew install node)"; exit 1; }
command -v git  >/dev/null || { echo "FATAL: need git"; exit 1; }
command -v ttfautohint >/dev/null || { echo "FATAL: need ttfautohint (brew install ttfautohint)"; exit 1; }
python3 -c "import fontTools, brotli" 2>/dev/null || { echo "==> installing fonttools+brotli"; python3 -m pip install --quiet --user fonttools brotli; }

echo "==> cloning Iosevka into $WORK (shallow)"
mkdir -p "$WORK"
if [ ! -d "$WORK/Iosevka/.git" ]; then
  if [ -n "$IOSEVKA_REF" ]; then
    git clone --depth 1 --branch "$IOSEVKA_REF" https://github.com/be5invis/Iosevka.git "$WORK/Iosevka"
  else
    git clone --depth 1 https://github.com/be5invis/Iosevka.git "$WORK/Iosevka"
  fi
fi
cd "$WORK/Iosevka"
BUILT_VER="$(git describe --tags --always 2>/dev/null || echo unknown)"

echo "==> writing build plans (mono + quasi-proportional, plain base, 7 widths x 9 weights x 2 slopes each)"

emit_plan() {   # $1=key  $2=family  $3=spacing
  cat <<TOML
[buildPlans.$1]
family = "$2"
spacing = "$3"
serifs = "sans"
noCvSs = false
exportGlyphNames = false
noLigation = true

[buildPlans.$1.widths.UltraCondensed]
shape = 416
menu = 1
css = "ultra-condensed"
[buildPlans.$1.widths.ExtraCondensed]
shape = 456
menu = 2
css = "extra-condensed"
[buildPlans.$1.widths.Condensed]
shape = 500
menu = 3
css = "condensed"
[buildPlans.$1.widths.SemiCondensed]
shape = 548
menu = 4
css = "semi-condensed"
[buildPlans.$1.widths.Normal]
shape = 600
menu = 5
css = "normal"
[buildPlans.$1.widths.SemiExtended]
shape = 658
menu = 6
css = "semi-expanded"
[buildPlans.$1.widths.Extended]
shape = 720
menu = 7
css = "expanded"

[buildPlans.$1.slopes.Upright]
angle = 0
shape = "upright"
menu = "upright"
css = "normal"
[buildPlans.$1.slopes.Oblique]
angle = 9.4
shape = "oblique"
menu = "oblique"
css = "oblique"

TOML
}

{ for p in "${PLANS[@]}"; do IFS='|' read -r k f s <<< "$p"; emit_plan "$k" "$f" "$s"; done; } > private-build-plans.toml

[ -d node_modules ] || { echo "==> npm ci"; npm ci; }

echo "==> subsetting woff2 -> $WOFF2_OUT"
mkdir -p "$WOFF2_OUT"
rm -f "$WOFF2_OUT"/*.woff2
n=0
for p in "${PLANS[@]}"; do
  IFS='|' read -r k f s <<< "$p"
  if ls dist/"$k"/WOFF2/*.woff2 >/dev/null 2>&1 && [ -z "${REBUILD:-}" ]; then
    echo "==> reusing existing $k build (set REBUILD=1 to force a full rebuild)"
  else
    echo "==> building $k webfonts (126 faces — the slow part, grab a coffee)"
    npm run build -- "webfont::$k"
  fi
  for file in dist/"$k"/WOFF2/*.woff2; do
    python3 -m fontTools.subset "$file" \
      --flavor=woff2 \
      --layout-features='*' \
      --name-IDs='*' \
      --unicodes="$UNICODES" \
      --output-file="$WOFF2_OUT/$(basename "$file")"
    n=$((n+1))
  done
done

echo ""
echo "==> DONE — Iosevka $BUILT_VER"
echo "    $n subset woff2 in $WOFF2_OUT ($(du -sh "$WOFF2_OUT" | cut -f1))"
echo "    Tell Claude to 'seal it' to wire the tester to these + QA + merge."
