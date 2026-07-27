import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/tek-ui.js',  format: 'es',  sourcemap: true },
    { file: 'dist/tek-ui.cjs', format: 'cjs', sourcemap: true }
  ],
  // lit is bundled (not external) so prototype pages can import dist/tek-ui.js
  // directly without a module resolver.
  plugins: [nodeResolve(), typescript({ tsconfig: './tsconfig.json' })],
  external: []
};
