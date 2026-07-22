// code.js — Token Push plugin (ES5 compatible)
// v6 — multi-mode Semantic export: each mode gets its own file
//       dark (default) → semantic/tokens.json
//       light          → semantic/tokens.light.json
//       any future mode → semantic/tokens.{modename}.json

figma.showUI(__html__, { width: 420, height: 500, title: "Token Push" });

figma.ui.onmessage = async function(msg) {
  if (msg.type === "EXPORT_TOKENS") {
    try {
      var result = await collectTokenFiles();
      figma.ui.postMessage({ type: "TOKENS_READY", payload: result });
    } catch(e) {
      figma.ui.postMessage({ type: "ERROR", message: String(e) });
    }
  }
  if (msg.type === "SAVE_PAT") { await figma.clientStorage.setAsync("gh_pat", msg.value); }
  if (msg.type === "GET_PAT") {
    var stored = await figma.clientStorage.getAsync("gh_pat");
    figma.ui.postMessage({ type: "LOAD_PAT", value: stored ? stored : "" });
  }
  if (msg.type === "SAVE_BRANCH") { await figma.clientStorage.setAsync("gh_branch", msg.value); }
  if (msg.type === "GET_BRANCH") {
    var storedBranch = await figma.clientStorage.getAsync("gh_branch");
    figma.ui.postMessage({ type: "LOAD_BRANCH", value: storedBranch ? storedBranch : "main" });
  }
  if (msg.type === "CLOSE") { figma.closePlugin(); }
  if (msg.type === "NOTIFY") { figma.notify(msg.message, { error: msg.error }); }
};

var DIMENSION_GROUPS = {
  "spacing": true, "dimension": true, "borders": true, "border": true,
  "radius": true, "typography": true, "type": true, "motion": true,
  "animation": true, "elevation": true, "size": true, "sizing": true
};

function cleanName(str) {
  return str.replace(/[^\x00-\x7F]/g, "").replace(/\s+/g, " ").trim();
}

// Convert a Figma mode name to a safe filename segment.
// e.g. "🌚 dark" → "dark",  "🌝 light" → "light"
function modeToSlug(modeName) {
  return cleanName(modeName).toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

async function collectTokenFiles() {
  var collections = await figma.variables.getLocalVariableCollectionsAsync();
  var allVars = await figma.variables.getLocalVariablesAsync();
  var varById = {};
  for (var i = 0; i < allVars.length; i++) { varById[allVars[i].id] = allVars[i]; }
  var buckets = {};
  var warnings = [];

  for (var ci = 0; ci < collections.length; ci++) {
    var col = collections[ci];
    var colName = cleanName(col.name);

    if (colName === "Figma Only") continue;

    var isSemantic = (colName === "Semantic");

    // Warn about multi-mode only for non-Semantic collections
    // (Semantic multi-mode is fully handled below)
    if (!isSemantic && col.modes.length > 1) {
      var modeNames = [];
      for (var mn = 0; mn < col.modes.length; mn++) { modeNames.push(col.modes[mn].name); }
      warnings.push("\"" + colName + "\" has " + col.modes.length + " modes (" + modeNames.join(", ") + ") — only \"" + col.modes[0].name + "\" exported.");
    }

    for (var vi = 0; vi < col.variableIds.length; vi++) {
      var v = varById[col.variableIds[vi]];
      if (!v) continue;

      var nameParts = v.name.split("/");
      for (var ni = 0; ni < nameParts.length; ni++) {
        nameParts[ni] = cleanName(nameParts[ni]).trim();
      }
      nameParts = nameParts.filter(function(p) { return p.length > 0; });
      if (nameParts.length === 0) continue;

      var routingGroup = nameParts[0].toLowerCase();
      var isDimension = (v.resolvedType === "FLOAT") && DIMENSION_GROUPS[routingGroup];
      var type = dtcgType(v.resolvedType, isDimension);
      if (!type) continue;

      if (colName === "Primitives") {
        // Primitives: single mode, use defaultModeId
        var value = resolveValue(v, col.defaultModeId, varById, isDimension);
        if (value === null) continue;
        var token = { $value: value, $type: type };
        if (v.description) { token.$description = v.description; }
        var fileName = groupToFileName(routingGroup);
        var filePath = "packages/tokens/src/primitives/" + fileName + ".json";
        if (!buckets[filePath]) buckets[filePath] = {};
        setNested(buckets[filePath], nameParts, token);

      } else if (isSemantic) {
        // Semantic: export every mode to its own file.
        // Default mode (index 0) → tokens.json
        // Other modes           → tokens.{slug}.json
        for (var mi = 0; mi < col.modes.length; mi++) {
          var mode = col.modes[mi];
          var modeValue = resolveValue(v, mode.modeId, varById, isDimension);
          if (modeValue === null) continue;
          var modeToken = { $value: modeValue, $type: type };
          if (v.description) { modeToken.$description = v.description; }

          var semPath;
          if (mi === 0) {
            semPath = "packages/tokens/src/semantic/tokens.json";
          } else {
            var slug = modeToSlug(mode.name);
            semPath = "packages/tokens/src/semantic/tokens." + slug + ".json";
          }

          if (!buckets[semPath]) buckets[semPath] = {};
          setNested(buckets[semPath], nameParts, modeToken);
        }
      }
    }
  }

  var result = [];
  var paths = Object.keys(buckets).sort();
  for (var pi = 0; pi < paths.length; pi++) {
    if (Object.keys(buckets[paths[pi]]).length > 0) {
      result.push({ path: paths[pi], tokens: buckets[paths[pi]] });
    }
  }
  return { files: result, warnings: warnings };
}

function groupToFileName(group) {
  var aliases = {
    "colors": "color", "borders": "border", "border": "border",
    "spacing": "spacing", "dimension": "dimension",
    "typography": "typography", "type": "typography",
    "motion": "motion", "animation": "motion",
    "elevation": "elevation", "shadow": "elevation", "radius": "border",
    "fonts": "fonts"
  };
  return aliases[group] ? aliases[group] : group;
}

function resolveValue(variable, modeId, varById, isDimension) {
  var raw = variable.valuesByMode[modeId];
  if (raw === undefined || raw === null) return null;
  if (typeof raw === "object" && raw.type === "VARIABLE_ALIAS") {
    var ref = varById[raw.id];
    if (!ref) return null;
    var parts = ref.name.split("/");
    var normalized = [];
    for (var i = 0; i < parts.length; i++) { normalized.push(cleanName(parts[i]).trim()); }
    normalized = normalized.filter(function(p) { return p.length > 0; });
    return "{" + normalized.join(".") + "}";
  }
  if (variable.resolvedType === "COLOR") return colorToHex(raw);
  if (variable.resolvedType === "STRING") return raw;
  if (variable.resolvedType === "BOOLEAN") return raw;
  if (variable.resolvedType === "FLOAT") return isDimension ? (raw + "px") : raw;
  return String(raw);
}

function colorToHex(c) {
  if (!c || typeof c !== "object") return "#000000";
  var r = Math.round((c.r !== undefined ? c.r : 0) * 255).toString(16);
  var g = Math.round((c.g !== undefined ? c.g : 0) * 255).toString(16);
  var b = Math.round((c.b !== undefined ? c.b : 0) * 255).toString(16);
  if (r.length < 2) r = "0" + r;
  if (g.length < 2) g = "0" + g;
  if (b.length < 2) b = "0" + b;
  var hex = "#" + r + g + b;
  if (c.a !== undefined && c.a < 1) {
    var a = Math.round(c.a * 255).toString(16);
    if (a.length < 2) a = "0" + a;
    hex = hex + a;
  }
  return hex;
}

function dtcgType(resolvedType, isDimension) {
  if (resolvedType === "COLOR") return "color";
  if (resolvedType === "STRING") return "string";
  if (resolvedType === "BOOLEAN") return "boolean";
  if (resolvedType === "FLOAT") return isDimension ? "dimension" : "number";
  return null;
}

function setNested(obj, keys, value) {
  var cur = obj;
  for (var i = 0; i < keys.length - 1; i++) {
    var k = keys[i];
    if (!cur[k] || typeof cur[k] !== "object" || cur[k].$value !== undefined) { cur[k] = {}; }
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}
