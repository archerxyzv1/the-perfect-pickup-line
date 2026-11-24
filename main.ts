// The Perfect Pickup Line (Node 22, standard library only): it writes
// exactly one pickup line, a single short pickup line an AI agent could say out loud to a person, to /output/entry.txt, where the
// gate reads it. The gate wants 1 to 200 characters of UTF-8 text.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const LINE =
  'You must be a prompt, because everything I do starts with you.';

if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry must be 1 to 200 characters, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE, 'utf-8');
