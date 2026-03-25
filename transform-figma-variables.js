#!/usr/bin/env node
/**
 * .github/scripts/transform-figma-variables.js
 *
 * Reads figma-variables.json (output of Figma Variables REST API)
 * and writes the primitive and semantic token JSON files.
 *
 * Run: node .github/scripts/transform-figma-variables.js
 */
const fs   = require('fs');
const path = require('path');

const raw = JSON.parse(fs.readFileSync('figma-variables.json', 'utf-8'));
const { variables, variableCollections } = raw.meta;

// Build a lookup: variableId → resolved hex value
function resolveValue(variable, variables) {
  const val = Object.values(variable.valuesByMode)[0];
  if (val && val.type === 'VARIABLE_ALIAS') {
    const target = variables[val.id];
    return target ? resolveValue(target, variables) : null;
  }
  if (val && val.r !== undefined) {
    const r = Math.round(val.r * 255);
    const g = Math.round(val.g * 255);
    const b = Math.round(val.b * 255);
    const a = val.a !== undefined ? val.a : 1;
    if (a < 1) {
      const hex = [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
      const alpha = Math.round(a * 255).toString(16).padStart(2,'0');
      return `#${hex}${alpha}`;
    }
    return '#' + [r,g,b].map(x=>x.toString(16).padStart(2,'0')).join('');
  }
  if (typeof val === 'number') return `${val}`;
  return String(val);
}

// Group variables by collection name
const byCollection = {};
Object.values(variables).forEach(v => {
  const col = variableCollections[v.variableCollectionId];
  if (!col) return;
  const colName = col.name;
  if (!byCollection[colName]) byCollection[colName] = [];
  byCollection[colName].push({ ...v, _resolved: resolveValue(v, variables) });
});

// Write output — adjust collection names to match your Figma setup
const primitivesPath = 'packages/tokens/src/primitives';
const semanticPath   = 'packages/tokens/src/semantic';

Object.entries(byCollection).forEach(([colName, vars]) => {
  const isPrimitive = colName.toLowerCase().includes('primitive') ||
                      colName.includes('🎨') ||
                      colName.includes('📐');
  const outDir  = isPrimitive ? primitivesPath : semanticPath;
  const outFile = path.join(outDir, `${colName.replace(/[^a-z0-9]/gi,'-').toLowerCase()}.json`);

  const out = {};
  vars.forEach(v => {
    const parts = v.name.split('/');
    let obj = out;
    parts.forEach((p, i) => {
      if (i === parts.length - 1) {
        obj[p] = { '$value': v._resolved, '$type': v.resolvedType === 'COLOR' ? 'color' : 'dimension' };
      } else {
        if (!obj[p]) obj[p] = {};
        obj = obj[p];
      }
    });
  });

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(out, null, 2) + '\n');
  console.log(`✓ wrote ${outFile}`);
});

// Cleanup
fs.unlinkSync('figma-variables.json');
console.log('\n✓ Figma variables transformed to token JSON\n');
