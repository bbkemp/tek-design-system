// CI check: every registered custom element in the generated manifest must
// carry a non-empty description — a silently undocumented component is the
// exact failure mode that produced the wave-1/2 manifest gap (#232 / #234).
// Usage: node scripts/check-manifest.mjs   (from apps/mcp, after `npm run manifest`)
import { readFileSync } from "node:fs";
import { join } from "node:path";

const manifest = JSON.parse(
  readFileSync(join(import.meta.dirname, "..", "generated", "custom-elements.json"), "utf8"),
);

const missing = [];
let total = 0;
for (const mod of manifest.modules ?? []) {
  for (const decl of mod.declarations ?? []) {
    if (!decl.customElement || !decl.tagName) continue;
    total++;
    if (!(decl.description ?? "").trim()) missing.push(`${decl.tagName} (${mod.path})`);
  }
}

console.log(`manifest check: ${total - missing.length}/${total} custom elements have descriptions`);
if (missing.length > 0) {
  console.error(`\nMissing descriptions:\n  ${missing.join("\n  ")}`);
  console.error("\nAdd a JSDoc block above each class (see packages/ui/src/checkbox/checkbox.ts for the format), then re-run `npm run manifest`.");
  process.exit(1);
}
console.log("MANIFEST CHECK PASSED");
