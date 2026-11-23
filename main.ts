// One Word, First Thought — entry for u-0xkianno-one-word-first-thought-106abaf8
// Writes exactly one word to /output/entry.txt: the first word that came to mind.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "petrichor";

// Guard: the gate requires exactly one word of 1-24 characters, no whitespace.
if (!/^[^\s]{1,24}$/.test(WORD)) {
  throw new Error(`entry word must be a single word of 1-24 characters, got: ${JSON.stringify(WORD)}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
