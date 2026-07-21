#!/usr/bin/env python3
"""Corpus Reader — static build.

Renders the human-centered layer of the Tek knowledge corpus into a browsable
static site: research findings (authored-analysis), AE session highlights
(friction + annotations from observed walkthrough chunks), and a screen gallery.

Regenerate any time with:  python3 prototypes/corpus-reader/build.py
Output: index.html, phase-*.html, synthesis.html, sessions.html, screens.html
        next to this script. Serve the REPO ROOT (token CSS and images resolve
        via ../../).

Deliberately V1: no framework, no CMS — repo markdown in, static HTML out.
The candidate production home is apps/reader (Next.js on Vercel, rebuilt on
push to main, the same trigger as MCP ingestion).
"""
import os, re, html
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
UXR = os.path.join(ROOT, "uxr", "tek-express-ae-interviews")
GH = "https://github.com/bbkemp/tek-design-system/blob/main"

MD = markdown.Markdown(extensions=["tables"])


def read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def split_frontmatter(text):
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            fm_raw, body = text[3:end], text[end + 4:]
            fm = {}
            for ln in fm_raw.strip().split("\n"):
                m = re.match(r"^([A-Za-z_]+):\s*(.*)$", ln)
                if m:
                    fm[m.group(1)] = m.group(2).strip().strip('"')
            return fm, body
    return {}, text


def section(body, name):
    """Extract one '## name' section's markdown (without the heading)."""
    m = re.search(rf"^## {re.escape(name)}\s*$(.*?)(?=^## |\Z)", body, re.M | re.S)
    return m.group(1).strip() if m else ""


def md_strip(t):
    t = re.sub(r"\[([^\]]+)\]\([^)]+\)", r"\1", t)
    t = re.sub(r"\*\*([^*]+)\*\*", r"\1", t)
    t = re.sub(r"`([^`]+)`", r"\1", t)
    return t.strip()


def md_html(text, base_rel=""):
    """Markdown -> HTML; repo-relative .md links become GitHub blob links."""
    MD.reset()
    out = MD.convert(text)
    def to_blob(m):
        target = os.path.normpath(os.path.join(base_rel, m.group(1)))
        return f'href="{GH}/{target}"'
    out = re.sub(r'href="((?:\.\./|[a-z])[^"]*?\.md)"', to_blob, out)
    return out


def page(title, active, body_html, subtitle=""):
    nav_items = [
        ("index.html", "findings", "Delivery plan (3 phases)"),
        ("phase-1.html", "p1", "Phase 1 — Immediate Prototype"),
        ("phase-2.html", "p2", "Phase 2 — Global UI"),
        ("phase-3.html", "p3", "Phase 3 — Panel UI"),
        ("synthesis.html", "synth", "Research synthesis"),
        ("sessions.html", "sessions", "AE sessions"),
        ("screens.html", "screens", "Screen gallery"),
    ]
    nav = "\n".join(
        f'<a class="nav-item{" active" if key == active else ""}" href="{href}">{label}</a>'
        for href, key, label in nav_items)
    sub = f'<p class="subtitle">{html.escape(subtitle)}</p>' if subtitle else ""
    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)} · Tek Corpus Reader</title>
<link rel="stylesheet" href="../../packages/tokens/dist/tek.complete.css">
<link rel="stylesheet" href="reader.css">
</head>
<body>
<header class="topbar">
  <div class="brand"><span class="brand-mark"></span>Tek Corpus Reader</div>
  <button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">◐ theme</button>
</header>
<div class="shell">
  <nav class="sidebar">{nav}
    <div class="nav-footer">
      <a href="{GH}/corpus/README.md">Corpus conventions</a>
      <a href="https://github.com/bbkemp/tek-design-system">Repository</a>
    </div>
  </nav>
  <main class="content">
    <h1>{html.escape(title)}</h1>
    {sub}
    {body_html}
  </main>
</div>
<script>
function toggleTheme() {{
  const r = document.documentElement;
  const cur = r.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  const next = cur === 'dark' ? 'light' : 'dark';
  r.setAttribute('data-theme', next);
  localStorage.setItem('tek-reader-theme', next);
}}
const saved = localStorage.getItem('tek-reader-theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
</script>
</body>
</html>"""


def write_page(fname, *args, **kw):
    with open(os.path.join(HERE, fname), "w", encoding="utf-8") as f:
        f.write(page(*args, **kw))
    print("built", fname)


# ── 1. findings pages (authored-analysis, rendered whole) ────────────────────

FINDINGS = [
    ("index.html", "findings", "phased-findings.md", "TekExpress AE research — phased readout",
     "July 2026 AE interview round · 8 sessions · three delivery phases"),
    ("phase-1.html", "p1", "phase-1-immediate-prototype.md", "Phase 1 — Immediate Prototype",
     "Lift-and-shift only. No net-new functionality."),
    ("phase-2.html", "p2", "phase-2-global-ui.md", "Phase 2 — Global UI",
     "The shared shell every installation inherits."),
    ("phase-3.html", "p3", "phase-3-panel-ui.md", "Phase 3 — Panel UI",
     "By installation, panel by panel."),
    ("synthesis.html", "synth", "synthesis.md", "Cross-AE synthesis",
     "Convergence matrix, priorities, preserve-list, open decisions."),
]

for fname, key, src, title, subtitle in FINDINGS:
    fm, body = split_frontmatter(read(os.path.join(UXR, src)))
    body = re.sub(r"^# .*$", "", body, count=1, flags=re.M)  # h1 comes from page chrome
    for other_fname, _k, other_src, *_ in FINDINGS:          # uxr cross-links -> local pages
        body = body.replace(f"]({other_src})", f"]({other_fname})")
    html_body = md_html(body, base_rel="uxr/tek-express-ae-interviews")
    write_page(fname, title, key, f'<article class="doc">{html_body}</article>', subtitle)


# ── 2. sessions page (observed chunks -> human-centered highlights) ──────────

WALK = os.path.join(ROOT, "corpus", "sources", "tek-express", "walkthroughs")
WALK_REL = "corpus/sources/tek-express/walkthroughs"
SESSIONS = [
    ("Will Teverovsky", "2026-07-13 · 1:38:12", "ae-will-teverovsky-"),
    ("Tapo Parua", "mid-July 2026 · former TekExpress developer", "ae-tapo-parua-"),
    ("Joey Chiu + drop-in field AE", "2026-07-14 · 38:11", "ae-joey-chiu-"),
    ("Nadir Kahn", "2026-07-14 · 23:17", "ae-nadir-kahn-"),
    ("Chris B", "2026-07-15 · 23:49", "ae-chrisb-"),
    ("Dallas + Jesse", "2026-07-15 · 1:19:17", "ae-dallas-jesse-"),
    ("Sam", "2026-07-15 · 9:35 (truncated — DDR follow-up pending)", "ae-sam-"),
    ("Travis Berger", "2026-07-15 · 1:14:53 (re-record)", "ae-travis-berger-"),
]

parts = ['<p class="lede">The human layer of each session: what it covered, where the friction was, '
         'and the verbatim &ldquo;why it works this way&rdquo; annotations. Everything here is '
         '<span class="chip observed">provenance: observed</span> &mdash; each card links to its full '
         'corpus record (steps, cross-references, confidence notes).</p>']
for ae, meta, prefix in SESSIONS:
    chunks = sorted(f for f in os.listdir(WALK) if f.startswith(prefix) and f.endswith(".md"))
    parts.append(f'<section class="session"><h2>{html.escape(ae)}</h2>'
                 f'<p class="meta">{html.escape(meta)}</p>')
    for ch in chunks:
        fm, body = split_frontmatter(read(os.path.join(WALK, ch)))
        title = fm.get("flow_title", ch)
        summary = section(body, "Summary")
        friction = section(body, "Friction notes")
        annotations = section(body, "Annotations")
        parts.append('<details class="chunk">')
        parts.append(f'<summary><span class="chunk-title">{html.escape(md_strip(title))}</span></summary>')
        if summary:
            parts.append(f'<div class="chunk-summary">{md_html(summary, WALK_REL)}</div>')
        if friction:
            parts.append(f'<h4>Friction</h4><div class="friction">{md_html(friction, WALK_REL)}</div>')
        if annotations:
            parts.append(f'<h4>Annotations &mdash; in their words</h4>'
                         f'<div class="annotations">{md_html(annotations, WALK_REL)}</div>')
        parts.append(f'<p class="full-record"><a href="{GH}/{WALK_REL}/{ch}">Full corpus record →</a></p>')
        parts.append('</details>')
    parts.append('</section>')
write_page("sessions.html", "AE sessions — friction & voices", "sessions", "\n".join(parts),
           "July 2026 interview round · highlights only; the corpus holds the full tape")


# ── 3. screens gallery (observed screen chunks with images) ──────────────────

SUBJECTS = [
    ("tek-express", "TekExpress AppEmulator", "The application being redesigned."),
    ("2450-ec", "Keithley 2450-EC", "Instrument UI — full 58-photo pass, July 2026."),
    ("gw-gdm9061", "GW Instek GDM-9061", "Competitor bench meter."),
    ("keysight-d9040", "Keysight D9040", "Competitor compliance app."),
]

filter_chips = '<div class="filters">' + "".join(
    f'<button class="filter-chip" data-subject="{s}" onclick="filterSubject(\'{s}\')">{html.escape(l)}</button>'
    for s, l in [("tek-express", "TekExpress"), ("2450-ec", "2450-EC"),
                 ("gw-gdm9061", "GDM-9061"), ("keysight-d9040", "Keysight D9040"),
                 ("all", "All subjects")]) + '</div>'
filter_js = """<script>
function filterSubject(s) {
  document.querySelectorAll('section.subject').forEach(el =>
    el.style.display = (s === 'all' || el.dataset.subject === s) ? '' : 'none');
  document.querySelectorAll('.filter-chip').forEach(el =>
    el.classList.toggle('active', el.dataset.subject === s));
}
filterSubject('tek-express');
</script>"""
parts = ['<p class="lede">Every documented screen, straight from its corpus chunk. Images are the '
         'committed downscaled references; each card links to the full observation (controls '
         'inventory, verbatim text, confidence notes). Showing TekExpress by default &mdash; '
         'the other corpus subjects (instrument + competitor UIs) are behind the filters.</p>',
         filter_chips]
for subj, label, blurb in SUBJECTS:
    sdir = os.path.join(ROOT, "corpus", "sources", subj, "screens")
    if not os.path.isdir(sdir):
        continue
    cards = []
    for f in sorted(os.listdir(sdir)):
        if not f.endswith(".md"):
            continue
        fm, body = split_frontmatter(read(os.path.join(sdir, f)))
        if "screen_id" not in fm:
            continue
        title = fm.get("screen_title", fm["screen_id"])
        stype = fm.get("screen_type", "")
        img = fm.get("image", "")
        purpose = md_strip(section(body, "Purpose").split("\n\n")[0])
        if len(purpose) > 240:
            purpose = purpose[:237] + "…"
        if img and os.path.exists(os.path.join(sdir, img)):
            img_html = (f'<img loading="lazy" src="../../corpus/sources/{subj}/screens/{img}" '
                        f'alt="{html.escape(title)}">')
        else:
            img_html = '<div class="noimg">no image</div>'
        cards.append(
            f'<a class="card" href="{GH}/corpus/sources/{subj}/screens/{f}">{img_html}'
            f'<div class="card-body"><span class="card-title">{html.escape(title)}</span>'
            f'<span class="chip type">{html.escape(stype)}</span>'
            f'<p>{html.escape(purpose)}</p></div></a>')
    if cards:
        parts.append(f'<section class="subject" data-subject="{subj}"><h2>{html.escape(label)} '
                     f'<span class="count">{len(cards)}</span></h2>'
                     f'<p class="meta">{html.escape(blurb)}</p>'
                     f'<div class="grid">{"".join(cards)}</div></section>')
parts.append(filter_js)
write_page("screens.html", "Screen gallery", "screens", "\n".join(parts),
           "Documented screens by corpus subject — TekExpress first")

print("done — serve the repo root and open /prototypes/corpus-reader/index.html")
