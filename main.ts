// Make the Judge Smile entry (Node 22, standard library only).
// The line is written verbatim to /output/entry.txt, so both runs of
// the grader write the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'The bus driver waited ten extra seconds for an old man running with a loaf of bread, and all twelve of us on board pretended not to notice.';

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line + '\n');
