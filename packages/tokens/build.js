const StyleDictionary = require('style-dictionary');

// ── W3C DTCG parser ─────────────────────────────────────────────────────────
// Style Dictionary 3 expects `value` and `type` (no $).
// Our token JSON uses the W3C DTCG format ($value, $type, $description).
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

StyleDictionary.registerTransformGroup({
  name: 'tek/css',
  transforms: ['attribute/cti', 'name/tek/kebab', 'color/css']
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

// ── Semantic ─────────────────────────────────────────────────────────────────
StyleDictionary.extend({
  source: ['src/primitives/**/*.json', 'src/semantic/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.css',
        format: 'tek/css',
        filter: t => t.filePath.includes('semantic'),
        options: { selector: ':root', outputReferences: false }
      }]
    },
    js: {
      transformGroup: 'tek/css',
      buildPath: 'dist/',
      files: [{
        destination: 'tek.tokens.js',
        format: 'tek/esm',
        filter: t => t.filePath.includes('semantic')
      }]
    }
  }
}).buildAllPlatforms();

console.log('\n✓ @bbkemp/tokens built\n');
