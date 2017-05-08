/* eslint-disable flowtype-errors/show-errors, no-console, import/extensions */
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import inject from 'rollup-plugin-inject';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import uglify from 'rollup-plugin-uglify';
import visualizer from 'rollup-plugin-visualizer';
const path = require('path');
const packageJsonPath = path.join(__dirname, './package.json');
const pkg = require(packageJsonPath);
const processShim = '\0process-shim';
const prod = process.env.PRODUCTION;
const mode = prod ? 'production' : 'development';

console.log(`Creating ${mode} bundle...`);

const targets = prod ?
[
  { dest: `dist/${pkg.name}.min.js`, format: 'umd' },
] :
[
  { dest: `dist/${pkg.name}.js`, format: 'umd' },
  { dest: `dist/${pkg.name}.es.js`, format: 'es' },
];

const plugins = [
  // Unlike Webpack and Browserify, Rollup doesn't automatically shim Node
  // builtins like `process`. This ad-hoc plugin creates a 'virtual module'
  // which includes a shim containing just the parts the bundle needs.
  {
    resolveId(importee) {
      if (importee === processShim) return importee;
      return null;
    },
    load(id) {
      if (id === processShim) return 'export default { argv: [], env: {} }';
      return null;
    },
  },
  nodeResolve(),
  commonjs({
    include: 'node_modules/**',
    namedExports:
    {
      './node_modules/react/react.js':
      [
        'cloneElement',
        'createElement',
        'PropTypes',
        'Children',
        'Component',
      ],
    },
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(prod ? 'production' : 'development'),
  }),
  inject({
    process: processShim,
  }),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    presets: [['es2015', { modules: false }], 'stage-0', 'react'],
    plugins: [
      'external-helpers',
      'transform-react-remove-prop-types',
      'transform-react-constant-elements',
      'transform-react-inline-elements',
      'array-includes',
    ].filter(Boolean),
  }),
  json(),
];

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }));

export default {
  entry: 'src/index.js',
  moduleName: pkg.name,
  external: ['react'],
  exports: 'named',
  targets,
  plugins,
  globals: { react: 'React' },
};
