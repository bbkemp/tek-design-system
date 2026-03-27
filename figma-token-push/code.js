// code.js — Token Push plugin (ES5 compatible)
// v3 — dimension px fix, multi-mode warning, improved error handling

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

  if (msg.type === "SAVE_PAT") {
    await figma.clientStorage.setAsync("gh_pat", msg.value);
  }

  if (msg.type === "GET_PAT") {
    var stored = await figma.clientStorage.getAsync("gh_pat");
    figma.ui.postMessage({ type: "LOAD_PAT", value: stored ? stored : "" });
  }

  if (msg.type === "CLOSE") {
    figma.closePlugin();
  }

  if (msg.type === "NOTIFY") {
    figma.notify(msg.message, { error: msg.error });
  }
};

// ── Groups that contain dimension values (floats that need px) ───────────────
// Unitless groups (like opacity, z-index) are NOT in this list.
var DIMENSION_GROUPS = {
  "spacing":    true,
  "borders":    true,
  "border":     true,
  "typography": true,
  "type":       true,
  "motion":     true,
  "animation":  true,
  "elevation":  true,
  "radius":     true,
  "size":       true,
  "sizing":     true
};

// ── Main collection → file builder ──────────────────────────────────────────

async function collectTokenFiles() {
  var collections = await figma.variables.getLocalVariableCollectionsAsync();
  var allVars     = await figma.variables.getLocalVariablesAsync();

  var varById = {};
  for (var i = 0; i < allVars.length; i++) {
    varById[allVars[i].id] = allVars[i];
  }

  var buckets  = {};
  var warnings = [];

  for (var ci = 0; ci < collections.length; ci++) {
    var col = collections[ci];

    if (col.name === "Figma Only") continue;

    // ── Mode handling ──────────────────────────────────────────────────────
    var modeMap = {};
    for (var mi = 0; mi < col.modes.length; mi++) {
      var mode = col.modes[mi];
      modeMap[mode.name] = mode.modeId;
    }
    var defaultModeId = col.defaultModeId;

    // Warn if multiple modes exist — data would be silently dropped otherwise
    if (col.modes.length > 1) {
      var modeNames = [];
      for (var mn = 0; mn < col.modes.length; mn++) {
        modeNames.push(col.modes[mn].name);
      }
      warnings.push("\"" + col.name + "\" has " + col.modes.length + " modes (" + modeNames.join(", ") + ") — only \"" + col.modes[0].name + "\" exported. Multi-mode support coming soon.");
    }

    // ── Variable loop ──────────────────────────────────────────────────────
    for (var vi = 0; vi < col.variableIds.length; vi++) {
      var v = varById[col.variableIds[vi]];
      if (!v) continue;

      var nameParts = v.name.split("/");
      for (var ni = 0; ni < nameParts.length; ni++) {
        nameParts[ni] = nameParts[ni].trim();
      }
      if (nameParts.length === 0) continue;

      var topGroup = nameParts[0].toLowerCase();

      // Determine if this float should be treated as a dimension (px)
      var isDimension = (v.resolvedType === "FLOAT") && DIMENSION_GROUPS[topGroup];

      var type = dtcgType(v.resolvedType, isDimension);
      if (!type) continue;

      var value = resolveValue(v, defaultModeId, varById, isDimension);
      if (value === null) continue;

      var token = { $value: value, $type: type };
      if (v.description) {
        token.$description = v.description;
      }

      // ── Route to correct file ────────────────────────────────────────────

      if (col.name === "Primitives") {
        var fileName = groupToFileName(topGroup);
        var filePath = "packages/tokens/src/primitives/" + fileName + ".json";
        if (!buckets[filePath]) buckets[filePath] = {};
        setNested(buckets[filePath], nameParts, token);

      } else if (col.name === "Semantic") {
        var semPath = "packages/tokens/src/semantic/tokens.json";
        if (!buckets[semPath]) buckets[semPath] = {};
        setNested(buckets[semPath], nameParts, token);
      }
    }
  }

  // Return files + any warnings
  var result = [];
  var paths = Object.keys(buckets).sort();
  for (var pi = 0; pi < paths.length; pi++) {
    var path = paths[pi];
    if (Object.keys(buckets[path]).length > 0) {
      result.push({ path: path, tokens: buckets[path] });
    }
  }

  return { files: result, warnings: warnings };
}

// ── Group name → file name ───────────────────────────────────────────────────

function groupToFileName(group) {
  var aliases = {
    "colors":     "color",
    "borders":    "border",
    "border":     "border",
    "spacing":    "spacing",
    "typography": "typography",
    "type":       "typography",
    "motion":     "motion",
    "animation":  "motion",
    "elevation":  "elevation",
    "shadow":     "elevation"
  };
  return aliases[group] ? aliases[group] : group;
}

// ── Value resolution ─────────────────────────────────────────────────────────

function resolveValue(variable, modeId, varById, isDimension) {
  var raw = variable.valuesByMode[modeId];
  if (raw === undefined || raw === null) return null;

  if (typeof raw === "object" && raw.type === "VARIABLE_ALIAS") {
    var ref = varById[raw.id];
    if (!ref) return null;
    var parts = ref.name.split("/");
    var normalized = [];
    for (var i = 0; i < parts.length; i++) {
      normalized.push(parts[i].trim());
    }
    return "{" + normalized.join(".") + "}";
  }

  if (variable.resolvedType === "COLOR")   return colorToHex(raw);
  if (variable.resolvedType === "STRING")  return raw;
  if (variable.resolvedType === "BOOLEAN") return raw;

  if (variable.resolvedType === "FLOAT") {
    // Dimension groups get px appended, unitless groups (opacity etc.) stay as numbers
    if (isDimension) {
      return raw + "px";
    }
    return raw;
  }

  return String(raw);
}

// ── Color conversion ─────────────────────────────────────────────────────────

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

// ── DTCG type mapping ────────────────────────────────────────────────────────

function dtcgType(resolvedType, isDimension) {
  if (resolvedType === "COLOR")   return "color";
  if (resolvedType === "STRING")  return "string";
  if (resolvedType === "BOOLEAN") return "boolean";
  if (resolvedType === "FLOAT")   return isDimension ? "dimension" : "number";
  return null;
}

// ── Nested object writer ─────────────────────────────────────────────────────

function setNested(obj, keys, value) {
  var cur = obj;
  for (var i = 0; i < keys.length - 1; i++) {
    var k = keys[i];
    if (!cur[k] || typeof cur[k] !== "object" || cur[k].$value !== undefined) {
      cur[k] = {};
    }
    cur = cur[k];
  }
  cur[keys[keys.length - 1]] = value;
}
