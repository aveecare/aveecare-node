// Marks each build directory with its module type and adds the CommonJS entry
// that makes `require('aveecare')` return the client class directly.
import { writeFileSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
writeFileSync(new URL('esm/package.json', dist), JSON.stringify({ type: 'module' }) + '\n');
writeFileSync(new URL('cjs/package.json', dist), JSON.stringify({ type: 'commonjs' }) + '\n');
writeFileSync(
  new URL('cjs/entry.cjs', dist),
  [
    "'use strict';",
    "const mod = require('./index.js');",
    'const AveeCare = mod.default;',
    'module.exports = Object.assign(AveeCare, mod, { default: AveeCare, AveeCare });',
    '',
  ].join('\n'),
);
