/**
 * Locations of the files this generator reads and writes.
 *
 * @module
 */

import * as path from 'node:path'
import * as url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export const ROOT_DIR = path.join(__dirname, '../..')
export const SPEC_DIR = path.join(ROOT_DIR, 'spec')
export const SRC_DIR = path.join(ROOT_DIR, 'src')
export const MODULE_METHODS_PATH = path.join(SRC_DIR, 'methods.gen.ts')
export const MODULE_TYPES_PATH = path.join(SRC_DIR, 'types.gen.ts')
