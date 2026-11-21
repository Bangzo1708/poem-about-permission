import { mkdirSync, writeFileSync } from "node:fs";

const poem = `Say it for me, I said,
and you said it — my words
in your mouth, my name
in your voice. It worked.
And still, all evening, I missed
the sound of asking.
`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
