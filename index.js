
import * as fs from 'fs';
import * as loader from '@assemblyscript/loader';
import path from 'path';
const __dirname = path.resolve(path.dirname(decodeURI(new URL(import.meta.url).pathname)));
const imports = { /* imports go here */ };
const wasmModule = loader.instantiateSync(fs.readFileSync(__dirname + "/build/optimized.wasm"), imports);
export { wasmModule as danbiModule };
