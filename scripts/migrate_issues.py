#!/usr/bin/env python3
"""Migrate labels + issues from bbkemp/tek-design-system exports to a target repo.

Usage: GH_TOKEN=<ralliant token> python3 migrate_issues.py TEK-Product-AI/<target-repo>

Reads labels.json / issues.json from this script's directory.
Writes issue-mapping.json (old number -> new number) next to them.
Idempotent-ish: skips labels that already exist; always creates issues fresh —
only run once per target repo (or delete/recreate the repo between runs).
"""
from __future__ import annotations

import json
import subprocess
import sys
import time
from pathlib import Path

SP = Path(__file__).parent
TARGET = sys.argv[1]
SOURCE = "bbkemp/tek-design-system"


def gh(method: str, path: str, payload: dict | None = None, ok404: bool = False):
    cmd = ["gh", "api", "-X", method, path]
    if payload is not None:
        cmd += ["--input", "-"]
    for attempt in range(5):
        r = subprocess.run(
            cmd,
            input=json.dumps(payload) if payload is not None else None,
            capture_output=True,
            text=True,
        )
        if r.returncode == 0:
            return json.loads(r.stdout) if r.stdout.strip() else {}
        if ok404 and "404" in r.stderr:
            return None
        if "rate limit" in r.stderr.lower() or "abuse" in r.stderr.lower() or "secondary" in r.stderr.lower():
            wait = 60 * (attempt + 1)
            print(f"  rate-limited, sleeping {wait}s", flush=True)
            time.sleep(wait)
            continue
        if "422" in r.stderr and "already_exists" in r.stderr:
            return {"already_exists": True}
        raise RuntimeError(f"{method} {path}: {r.stderr.strip()[:300]}")
    raise RuntimeError(f"{method} {path}: exhausted retries")


labels = json.loads((SP / "labels.json").read_text())
issues = json.loads((SP / "issues.json").read_text())

print(f"target: {TARGET}; {len(labels)} labels, {len(issues)} issues", flush=True)

# 1. Labels
existing = {l["name"] for l in gh("GET", f"repos/{TARGET}/labels?per_page=100")}
for l in labels:
    if l["name"] in existing:
        continue
    gh("POST", f"repos/{TARGET}/labels", {
        "name": l["name"], "color": l["color"], "description": l.get("description") or ""})
    time.sleep(0.5)
print(f"labels done ({len(labels)} total, {len(existing)} pre-existing)", flush=True)

# 2. Issues, ascending original number
mapping = {}
for i in issues:
    n = i["number"]
    footer = (
        f"\n\n---\n_Migrated from {SOURCE}#{n} · originally opened "
        f"{i['created_at'][:10]} by @{i['user']['login']} · "
        f"[original]({i['html_url']})_"
    )
    body = (i.get("body") or "") + footer
    new = gh("POST", f"repos/{TARGET}/issues", {
        "title": i["title"],
        "body": body,
        "labels": [l["name"] for l in i.get("labels", [])],
    })
    mapping[str(n)] = new["number"]
    if i["state"] == "closed":
        gh("PATCH", f"repos/{TARGET}/issues/{new['number']}", {
            "state": "closed",
            "state_reason": i.get("state_reason") or "completed",
        })
        time.sleep(1)
    print(f"  #{n} -> #{new['number']} ({i['state']})", flush=True)
    time.sleep(2)

(SP / "issue-mapping.json").write_text(json.dumps(mapping, indent=2))
print(f"DONE: {len(mapping)} issues migrated; mapping written to issue-mapping.json", flush=True)
