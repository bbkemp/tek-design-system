const StyleDictionary = require('style-dictionary');
const fs              = require('fs');

// ── W3C DTCG parser ─────────────────────────────────────────────────────────
// Style Dictionary 3 expects `value` and `type` (no $).
// Our token JSON uses W3C DTCG format ($value, $type, $description).
// This parser converts $-prefixed keys before SD3 processes anything.
// Without it, SD3 sees zero tokens and outputs an empty :root {}.
StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents }) => {
    const convert = (node) => {
      if (typeof node !== 'object' || node === null) return node;
      const out = {};
      for (const key of Object.keys(node)) {
        if      (key === '$value')       out.value   = node[key];
        else if (key === '$type')        out.type    = node[key];
        else if (key === '$description') out.comment = node[key];
        else                             out[key]    = convert(node[key]);
      }
      return out;
    };
    return convert(JSON.parse(contents));
  }
});

// ── Custom transforms ────────────────────────────────────────────────────────
StyleDictionary.registerTransform({
  name: 'name/tek/kebab',
  type: 'name',
  transformer: (token) =>
    ['tek', ...token.path].join('-').replace(/[^a-zA-Z0-9-]/g, '-').replace(/-+/g, '-').toLowerCase()
});

// Adds px to number tokens (font sizes, spacing, border radii, etc.).
// Matcher: type === 'number' — skips strings (font families) and colors.
StyleDictionary.registerTransform({
  name: 'size/px',
  type: 'value',
  matcher: (token) => token.type === 'number',
  transformer: (token) => `${token.value}px`
});

StyleDictionary.registerTransformGroup({
  name: 'tek/css',
  transforms: ['attribute/cti', 'name/tek/kebab', 'color/css', 'size/px']
});

// ── Custom formats ───────────────────────────────────────────────────────────
StyleDictionary.registerFormat({
  name: 'tek/css',
  formatter: ({ dictionary, options }) => {
    const sel  = options.selector || ':root';
    const vars = dictionary.allTokens.map(t => `  --${t.name}: ${t.value};`).join('\n');
    return `/* @bbkemp/tokens — auto-generated from Figma variables. Do not edit. */\n\n${sel} {\n${vars}\n}\n`;
  }
});

StyleDictionary.registerFormat({
  name: 'tek/esm',
  formatter: ({ dictionary }) => {
    const obj = {};
    dictionary.allTokens.forEach(t => { obj[t.name] = t.value; });
    return `// @bbkemp/tokens — auto-generated\nexport const tokens = ${JSON.stringify(obj, null, 2)};\nexport default tokens;\n`;
  }
});

// ── Primitives ───────────────────────────────────────────────────────────────
// All raw values — colors, type scale, spacing, border.
// Output: tek.primitives.css + tek.primitives.js
StyleDictionary.extend({
  source: ['src/primitives/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{ destination: 'tek.primitives.css', format: 'tek/css', options: { selector: ':root' } }]
    },
    js: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{ destination: 'tek.primitives.js', format: 'tek/esm' }]
    }
  }
}).buildAllPlatforms();

// ── Semantic — dark (default) ─────────────────────────────────────────────────
// Source: semantic/tokens.json ONLY.
// IMPORTANT: do NOT include tokens.light.json here — both files share the
// same root key `color`, so SD3 merges them and the later file overwrites
// the earlier one. Each mode needs its own StyleDictionary.extend() call.
// Output: tek.tokens.css (:root — dark defaults)
StyleDictionary.extend({
  source: ['src/primitives/**/*.json', 'src/semantic/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.css',
        format: 'tek/css',
        filter: t => t.filePath.includes('semantic/tokens.json'),
        options: { selector: ':root', outputReferences: false }
      }]
    },
    js: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.js',
        format: 'tek/esm',
        filter: t => t.filePath.includes('semantic/tokens.json')
      }]
    }
  }
}).buildAllPlatforms();

// ── Semantic — light ──────────────────────────────────────────────────────────
// Source: semantic/tokens.light.json ONLY.
// Output: tek.tokens.light.css ([data-theme="light"] overrides)
StyleDictionary.extend({
  source: ['src/primitives/**/*.json', 'src/semantic/tokens.light.json'],
  platforms: {
    css: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.light.css',
        format: 'tek/css',
        filter: t => t.filePath.includes('tokens.light.json'),
        options: { selector: '[data-theme="light"]', outputReferences: false }
      }]
    },
    js: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.light.js',
        format: 'tek/esm',
        filter: t => t.filePath.includes('tokens.light.json')
      }]
    }
  }
}).buildAllPlatforms();

// ── Combined: dark + light + prefers-color-scheme ────────────────────────────
// Post-build step: reads the two individual CSS files and assembles a single
// combined file with all four blocks in the correct cascade order.
//
// Cascade order (lowest → highest specificity/priority):
//   1. :root                              — dark defaults, always applied
//   2. @media (prefers-color-scheme:light) — OS preference, no JS required
//   3. [data-theme="light"]               — JS override: force light
//   4. [data-theme="dark"]                — JS override: force dark
//                                           (needed for light-OS users who
//                                            manually select dark mode)
//
// Usage (single import, recommended):
//   @import '@bbkemp/tokens/css/combined';
//
// The [data-theme] attribute is set on <html> by the theme toggle:
//   document.documentElement.setAttribute('data-theme', 'light' | 'dark');
//
// Output: tek.tokens.combined.css

const extractVars = (css) => {
  // Pulls the variable declarations out of the first { } block in a CSS string.
  // Input:  "/* comment */\n\n:root {\n  --x: y;\n  --z: w;\n}\n"
  // Output: "  --x: y;\n  --z: w;"
  const match = css.match(/\{([^}]+)\}/s);
  return match ? match[1].replace(/^\n/, '').replace(/\n$/, '') : '';
};

const darkCSS  = fs.readFileSync('dist/tek.tokens.css',       'utf8');
const lightCSS = fs.readFileSync('dist/tek.tokens.light.css', 'utf8');

const darkVars  = extractVars(darkCSS);
const lightVars = extractVars(lightCSS);

// Indent light vars one extra level for the nested @media { :root { } } block
const lightVarsIndented = lightVars.split('\n').map(l => l ? '  ' + l : l).join('\n');

const combined = `/* @bbkemp/tokens — combined dark + light — auto-generated. Do not edit.
 *
 * Single-import file. Handles:
 *   - Dark mode as the default
 *   - Light mode via OS preference (prefers-color-scheme) — no JS required
 *   - Explicit theme lock via [data-theme="light"] or [data-theme="dark"] on <html>
 *
 * Usage:
 *   @import '@bbkemp/tokens/css/combined';
 */

/* ── 1. Dark defaults (:root) ─────────────────────────────────────────────── */
/* Applied to all pages. Dark is the default. */
:root {
${darkVars}
}

/* ── 2. Light via OS preference (prefers-color-scheme) ─────────────────────── */
/* Applied automatically when the OS is set to light mode, before any JS runs. */
/* Prevents a flash of dark UI on light-OS devices. */
/* Overridden by [data-theme] if present (higher specificity). */
@media (prefers-color-scheme: light) {
  :root {
${lightVarsIndented}
  }
}

/* ── 3. Explicit light override [data-theme="light"] ───────────────────────── */
/* Set by JS: document.documentElement.setAttribute('data-theme', 'light') */
/* Higher specificity than :root — beats the media query above. */
[data-theme="light"] {
${lightVars}
}

/* ── 4. Explicit dark override [data-theme="dark"] ────────────────────────── */
/* Set by JS: document.documentElement.setAttribute('data-theme', 'dark') */
/* Needed for users on a light-OS who manually select dark mode. */
/* Without this block, prefers-color-scheme: light would override :root dark. */
[data-theme="dark"] {
${darkVars}
}
`;

fs.writeFileSync('dist/tek.tokens.combined.css', combined);
console.log('✓ tek.tokens.combined.css written');

console.log('\n✓ @bbkemp/tokens built\n');
