import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      plugins: [
        autoprefixer(), // Use directly without require
        cssnano() // Use directly without require
      ],
      extract: true,
      minimize: true,
      extensions: ['.css']
    }),
    terser(),
  ],
  external: ['react', 'react-dom'],
};
