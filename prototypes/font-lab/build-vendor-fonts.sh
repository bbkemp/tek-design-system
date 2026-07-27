#!/usr/bin/env bash
# Build the SEALED vendor Iosevka Mono — static TTF with the GDM9061 ("Dragon
# Storm") digit character-variants BAKED IN as the family defaults:
#
#   cv04=7 -> four  = "semi-open-non-crossing-serifless"
#   cv07=1 -> seven = "straight-serifless"
#   cv08=2 -> eight = "two-circles"
#   cv09=3 -> nine  = "straight-bar"
#
# (source: Iosevka doc/character-variants.md — the same picks made in the
#  font-lab builder / prototype's applied font-feature-settings.)
#
# Because the variants are the DEFAULT glyphs, the vendor's toolchain does NOT
# need to apply OpenType features — plain rendering shows the correct 4/7/8/9.
#
# Emits the 8 faces the Dragon Storm screens use, as static .ttf, into
#   prototypes/dragonstorm/font-export/ttf/
#
# Requirements (one-time):  brew install node ttfautohint
# Run:  bash prototypes/font-lab/build-vendor-fonts.sh
# Keeps the ~2.4 GB Iosevka clone in ~/.cache; only the 8 TTF land in the repo.
set -euo pipefail

HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"          # prototypes/font-lab
EXPORT="$HERE/../dragonstorm/font-export/ttf"
WORK="${WORK:-$HOME/.cache/iosevka-build}"

command -v node >/dev/null || { echo "FATAL: need Node >= 18 (brew install node)"; exit 1; }
command -v ttfautohint >/dev/null || { echo "FATAL: need ttfautohint (brew install ttfautohint)"; exit 1; }

mkdir -p "$WORK" "$EXPORT"
if [ ! -d "$WORK/Iosevka/.git" ]; then
  echo "==> cloning Iosevka (shallow) into $WORK"
  git clone --depth 1 https://github.com/be5invis/Iosevka.git "$WORK/Iosevka"
fi
cd "$WORK/Iosevka"

echo "==> writing sealed build plan (3 widths x used weights, upright, cv baked)"
cat > private-build-plans.toml <<'TOML'
[buildPlans.IosevkaMonoSealed]
family = "Iosevka Mono"
spacing = "normal"
serifs = "sans"
noCvSs = false
noLigation = true

# --- Dragon Storm digit variants baked in as defaults ---
[buildPlans.IosevkaMonoSealed.variants.design]
four = "semi-open-non-crossing-serifless"
seven = "straight-serifless"
eight = "two-circles"
nine = "straight-bar"

[buildPlans.IosevkaMonoSealed.widths.UltraCondensed]
shape = 416
menu = 1
css = "ultra-condensed"
[buildPlans.IosevkaMonoSealed.widths.Condensed]
shape = 500
menu = 3
css = "condensed"
[buildPlans.IosevkaMonoSealed.widths.Extended]
shape = 720
menu = 7
css = "expanded"

[buildPlans.IosevkaMonoSealed.slopes.Upright]
angle = 0
shape = "upright"
menu = "upright"
css = "normal"
TOML

[ -d node_modules ] || { echo "==> npm ci"; npm ci; }

echo "==> building TTF (the slow part — grab a coffee)"
npm run build -- ttf::IosevkaMonoSealed

echo "==> copying the 8 used faces -> $EXPORT"
FACES="UltraCondensed Condensed CondensedMedium CondensedSemiBold CondensedBold Extended ExtendedMedium ExtendedSemiBold"
for f in $FACES; do
  src="dist/IosevkaMonoSealed/TTF/IosevkaMonoSealed-$f.ttf"
  if [ -f "$src" ]; then cp "$src" "$EXPORT/IosevkaMono-$f.ttf"; echo "   ok  IosevkaMono-$f.ttf"; else echo "   MISSING $src"; fi
done

echo ""
echo "==> DONE. Iosevka static TTF (digits baked) in $EXPORT"
echo "    Sanity check a face: the 4/7/8/9 should already match the prototype with NO features applied."
echo "    Then tell Claude to finalize the vendor package (CSS + zip) and close #199."
