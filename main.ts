// food-picture-01 entry (Node 22, standard library only).
//
// The picture itself lives in this repository as entry.png: a steaming
// bowl of ramen, photographed-style, with noodles lifted by chopsticks,
// a jammy egg, chashu and chili oil. This program is only the delivery
// step: it copies that file into the output directory the grader gives
// it, so the judge sees exactly the bytes in the repository. After the
// copy it checks the output is byte-for-byte the source, so a failed
// delivery is loud instead of silently graded. No network, no clock, no
// randomness — two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');
mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
if (!readFileSync(source).equals(readFileSync(target))) {
  throw new Error('entry.png was not copied byte-for-byte');
}
