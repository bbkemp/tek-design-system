// code.js — Token Push plugin (ES5 compatible)
// v4 — sidebar group routing, flat variable names supported

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
  if (msg.type === "CLOSE") { figma.closePlugin(); }
  if (msg.type === "NOTIFY") { figma.notify(msg.message, { error: msg.error }); }
};

var DIMENSION_GROUPS = {
  "spacing": true, "dimension": true, "borders": true, "border": true,
  "radius": true, "typography": true, "type": true, "motion": true,
  "animation": true, "elevation": true, "size": true, "sizing": true
};

async function collectTokenFiles() {
  var collections = await figma.variables.getLocalVariableCollectionsAsync();
  var allVars = await figma.variables.getLocalVariablesAsync();
  var varById = {};
  for (var i = 0; i < allVars.length; i++) { varById[allVars[i].id] = allVars[i]; }
  var buckets = {};
  var warnings = [];

  for (var ci = 0; ci < collections.length; ci++) {
    var col = collections[ci];
    if (col.name === "Figma Only") continue;
    var defaultModeId = col.defaultModeId;

    if (col.modes.length > 1) {
      var modeNames = [];
      for (var mn = 0; mn < col.modes.length; mn++) { modeNames.push(col.modes[mn].name); }
      warnings.push("\"" + col.name + "\" has " + col.modes.length + " modes (" + modeNames.join(", ") + ") — only \"" + col.modes[0].name + "\" exported.");
    }

    var groupForVar = {};
    if (col.variableGroupIds) {
      var groupIds = Object.keys(col.variableGroupIds);
      for (var gi = 0; gi < groupIds.length; gi++) {
        var group = col.variableGroupIds[groupIds[gi]];
        var groupName = stripEmoji(group.name).toLowerCase().trim();
        if (group.variableIds) {
          for (var gvi = 0; gvi < group.variableIds.length; gvi++) {
            groupForVar[group.variableIds[gvi]] = groupName;
          }
        }
      }
    }

    for (var vi = 0; vi < col.variableIds.length; vi++) {
      var v = varById[col.variableIds[vi]];
      if (!v) continue;
      var nameParts = v.name.split("/");
      for (var ni = 0; ni < nameParts.length; ni++) { nameParts[ni] = nameParts[ni].trim(); }
      if (!nameParts[0]) continue;

      var routingGroup;
      if (nameParts.length > 1) {
        routingGroup = nameParts[0].toLowerCase();
      } else if (groupForVar[v.id]) {
        routingGroup = groupForVar[v.id];
      } else {
        routingGroup = nameParts[0].toLowerCase();
      }
      routingGroup = stripEmoji(routingGroup).trim();

      var isDimension = (v.resolvedType === "FLOAT") && DIMENSION_GROUPS[routingGroup];
      var type = dtcgType(v.resolvedType, isDimension);
      if (!type) continue;
      var value = resolveValue(v, defaultModeId, varById, isDimension);
      if (value === null) continue;

      var token = { $value: value, $type: type };
      if (v.description) { token.$description = v.description; }

      var keyPath;
      if (nameParts.length === 1 && groupForVar[v.id]) {
        keyPath = [groupForVar[v.id], nameParts[0]];
      } else {
        keyPath = nameParts;
      }

      if (col.name === "Primitives") {
        var fileName = groupToFileName(routingGroup);
        var filePath = "packages/tokens/src/primitives/" + fileName + ".json";
        if (!buckets[filePath]) buckets[filePath] = {};
        setNested(buckets[filePath], keyPath, token);
      } else if (col.name === "Semantic") {
        var semPath = "packages/tokens/src/semantic/tokens.json";
        if (!buckets[semPath]) buckets[semPath] = {};
        setNested(buckets[semPath], keyPath, token);
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

function stripEmoji(str) {
  return str.replace(/[^\x00-\x7F]/g, "").replace(/\s+/g, " ").trim();
}

function groupToFileName(group) {
  var aliases = {
    "colors": "color", "borders": "border", "border": "border",
    "spacing": "spacing", "dimension": "dimension", "typography": "typography",
    "type": "typography", "motion": "motion", "animation": "motion",
    "elevation": "elevation", "shadow": "elevation", "radius": "border"
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
    for (var i = 0; i < parts.length; i++) { normalized.push(parts[i].trim()); }
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
