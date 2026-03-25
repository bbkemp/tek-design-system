const StyleDictionary = require('style-dictionary');

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

StyleDictionary.registerFormat({
  name: 'tek/css',
  formatter: ({ dictionary, options }) => {
    const sel = options.selector || ':root';
    const vars = dictionary.allTokens.map(t => `  --${t.name}: ${t.value};`).join('\n');
    return `/* @tek/tokens — auto-generated from Figma variables. Do not edit. */\n\n${sel} {\n${vars}\n}\n`;
  }
});

StyleDictionary.registerFormat({
  name: 'tek/esm',
  formatter: ({ dictionary }) => {
    const obj = {};
    dictionary.allTokens.forEach(t => { obj[t.name] = t.value; });
    return `// @tek/tokens — auto-generated\nexport const tokens = ${JSON.stringify(obj, null, 2)};\nexport default tokens;\n`;
  }
});

// Primitives
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

// Semantic
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
        options: { selector: ':root', outputReferences: true }
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

console.log('\n✓ @tek/tokens built\n');
