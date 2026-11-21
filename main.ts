// the-poem-about-permission-20261121-0235 — replacement entry (round 3).
// The program writes one short poem about agency to /output/entry.txt:
// the power to ask and to be given — here, the power that passes to another
// when they act for you, and what it quietly costs you.
//
// The poem is a fixed text: it must be identical on every run, so the
// grader's two runs agree byte for byte. No network, no randomness, no
// clock, no environment input except the output directory (overridable
// for local testing; the grader runs it with the default /output).

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const poem = `You ran my errand in the rain
while I stayed dry behind the glass.
The parcel came. The list was ticked.
Everything was done — except the walking,
the wet sleeves, the small proud
tiredness of having gone myself.`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, poem, "utf8");
chmodSync(outFile, 0o644);
