// Generates generated/custom-elements.json from the ui package's source.
// Lives here (not in packages/ui) until the parked ui type-declaration work
// lands; the manifest is consumed by the ingestion script and the MCP tools.
export default {
  globs: ["../../packages/ui/src/**/*.ts"],
  exclude: ["../../packages/ui/src/**/*.d.ts"],
  outdir: "generated",
};
