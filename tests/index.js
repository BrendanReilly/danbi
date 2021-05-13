import {danbiModule } from '../index.js';

import assert from 'assert';

assert.strictEqual(danbiModule.instance.exports.add(1, 2), 3);
console.log("ok");
assert.strictEqual(danbiModule.instance.exports.multiply(2, 2), 4);
console.log("ok");
