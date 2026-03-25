import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/tek-ui.js',  format: 'es',  sourcemap: true },
    { file: 'dist/tek-ui.cjs', format: 'cjs', sourcemap: true }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' })],
  external: []
};
