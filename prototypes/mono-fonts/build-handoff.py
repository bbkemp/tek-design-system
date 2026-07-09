#!/usr/bin/env python3
"""
Build the Iosevka Mono iteration-1 handoff artifacts from the faces already
subset into prototypes/font-lab/fonts/.

Driven by the keep-list order ticket (2026-07-09, first iteration — NOT the LOCK):
  Widths:  UltraCondensed, ExtraCondensed, Condensed, SemiCondensed, Normal, SemiExtended, Extended
  Weights: Light (300), Regular (400), Medium (500)
  Slopes:  Upright, Oblique
  Spacing: Mono, Quasi-Proportional
  Default features: "cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3
  => 7 x 3 x 2 x 2 = 84 faces, in 14 families (width x spacing).

Emits (all under prototypes/mono-fonts/):
  css/<family-slug>.css     - self-contained base64 @font-face, one file per family (CSP-safe -> Claude Design)
  css/all.css               - @imports the 14 base64 files (normal web use)
  css/iosevka-mono--url.css - URL @font-face for all 84 (points at ../../font-lab/fonts, non-CSP)
  ttf/<face>.ttf            - every kept face as .ttf (Figma install / download)
  manifest.json             - families, faces, and the as-built Figma family/style names

Reproducible: re-run after the keep-list changes. Requires fontTools + brotli.
Run:  python3 prototypes/mono-fonts/build-handoff.py
"""
import base64, json, os, glob, zipfile
from fontTools.ttLib import TTFont

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.normpath(os.path.join(HERE, "..", "font-lab", "fonts"))   # subset woff2 live here
CSS_DIR = os.path.join(HERE, "css")
TTF_DIR = os.path.join(HERE, "ttf")

# keep-list ------------------------------------------------------------------
WIDTHS  = [("UltraCondensed", "Ultra Condensed", "ultra-condensed"),
           ("ExtraCondensed", "Extra Condensed", "extra-condensed"),
           ("Condensed",      "Condensed",       "condensed"),
           ("SemiCondensed",  "Semi Condensed",  "semi-condensed"),
           ("",               "",                "normal"),
           ("SemiExtended",   "Semi Extended",   "semi-expanded"),
           ("Extended",       "Extended",        "expanded")]
WEIGHTS = [("Light", 300), ("", 400), ("Medium", 500)]   # "" = Regular
SLOPES  = [("", "normal"), ("Oblique", "italic")]
SPACINGS = [("IosevkaMono-",   "Iosevka Mono"),
            ("IosevkaMonoQP-", "Iosevka Mono QP")]
FEATURES = '"cv04" 7, "cv07" 1, "cv08" 2, "cv09" 3'

def face_style(wkey, wtkey, slkey):
    s = wkey + wtkey + slkey
    return s or "Regular"

def slug(name):
    return name.lower().replace(" ", "-")

def main():
    os.makedirs(CSS_DIR, exist_ok=True)
    os.makedirs(TTF_DIR, exist_ok=True)
    manifest = {"features_default": FEATURES, "letter_spacing_default": "normal (0)", "families": []}
    all_import_lines = []
    url_blocks = []
    n_ttf = 0

    for prefix, base_family in SPACINGS:
        for wkey, wlabel, _css in WIDTHS:
            css_family = (base_family + (" " + wlabel if wlabel else "")).strip()
            fam_slug = slug(css_family)
            faces_meta, b64_blocks = [], []
            for wtkey, weight in WEIGHTS:
                for slkey, style in SLOPES:
                    face = prefix + face_style(wkey, wtkey, slkey)
                    woff2 = os.path.join(SRC, face + ".woff2")
                    if not os.path.exists(woff2):
                        raise SystemExit("MISSING " + woff2)
                    # --- ttf for Figma ---
                    f = TTFont(woff2)
                    fam16 = f["name"].getDebugName(16) or f["name"].getDebugName(1)
                    sub17 = f["name"].getDebugName(17) or f["name"].getDebugName(2)
                    f.flavor = None
                    f.save(os.path.join(TTF_DIR, face + ".ttf"))
                    n_ttf += 1
                    # --- base64 @font-face ---
                    with open(woff2, "rb") as fh:
                        b64 = base64.b64encode(fh.read()).decode("ascii")
                    b64_blocks.append(
                        "@font-face {\n"
                        f"  font-family: '{css_family}';\n"
                        f"  font-weight: {weight};\n"
                        f"  font-style: {style};\n"
                        "  font-display: swap;\n"
                        f"  src: url('data:font/woff2;base64,{b64}') format('woff2');\n"
                        "}")
                    url_blocks.append(
                        "@font-face {\n"
                        f"  font-family: '{css_family}';\n"
                        f"  font-weight: {weight};\n"
                        f"  font-style: {style};\n"
                        "  font-display: swap;\n"
                        f"  src: url('../../font-lab/fonts/{face}.woff2') format('woff2');\n"
                        "}")
                    faces_meta.append({"face": face, "weight": weight, "style": style,
                                       "figma_family": fam16, "figma_style": sub17})
            header = (f"/* {css_family} - Iosevka Mono handoff (iteration 1)\n"
                      f"   {len(faces_meta)} faces, base64-embedded (CSP-safe for Claude Design).\n"
                      f"   Default features: font-feature-settings: {FEATURES};\n"
                      f"   Default letter-spacing: normal. */\n")
            with open(os.path.join(CSS_DIR, fam_slug + ".css"), "w") as out:
                out.write(header + "\n" + "\n".join(b64_blocks) + "\n")
            all_import_lines.append(f"@import url('{fam_slug}.css');")
            manifest["families"].append({"css_family": css_family, "file": "css/" + fam_slug + ".css",
                                         "spacing": base_family, "width": wlabel or "Normal",
                                         "faces": faces_meta})

    with open(os.path.join(CSS_DIR, "all.css"), "w") as out:
        out.write("/* All 14 Iosevka Mono families (base64). @import works for normal web;\n"
                  "   Claude Design (CSP) should inline the single family file it needs instead. */\n\n"
                  + "\n".join(all_import_lines) + "\n")
    with open(os.path.join(CSS_DIR, "iosevka-mono--url.css"), "w") as out:
        out.write("/* URL @font-face for all 84 faces (non-CSP web). Points at the hosted\n"
                  "   font-lab woff2 so nothing is duplicated. */\n\n" + "\n".join(url_blocks) + "\n")
    with open(os.path.join(HERE, "manifest.json"), "w") as out:
        json.dump(manifest, out, indent=2)

    # Package the 84 loose .ttf into one download for Figma, then drop the loose
    # files (42M -> ~14M zip). The zip is what gets committed / served on Pages.
    zip_path = os.path.join(TTF_DIR, "iosevka-mono-ttf.zip")
    loose = sorted(glob.glob(os.path.join(TTF_DIR, "*.ttf")))
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
        for p in loose:
            z.write(p, os.path.basename(p))
    for p in loose:
        os.remove(p)

    print(f"families: {len(manifest['families'])}  ttf: {n_ttf} (zipped)  css: {len(all_import_lines)+2}")
    # unique Figma families/styles for README
    figfam = {}
    for fam in manifest["families"]:
        for fa in fam["faces"]:
            figfam.setdefault(fa["figma_family"], set()).add(fa["figma_style"])
    for k in sorted(figfam):
        print(f"  Figma family {k!r}: {len(figfam[k])} styles")

if __name__ == "__main__":
    main()
