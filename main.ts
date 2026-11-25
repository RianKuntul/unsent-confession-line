// Unsent: The Micro-Confession Sprint — entry program (v2).
//
// Writes a two-part micro-confession to /output/entry.txt:
// line 1 "To: <who>", line 2 the unsent message itself, one line of
// at most 200 characters written exactly as it was typed.
// Total file: 1-260 characters, no trailing newline.
//
// Runner: Node 22 (`node main.ts`). Uses only erasable TypeScript syntax
// so Node's built-in type stripping runs it as-is.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession. Only my grandmother knitted that sweater, so the
// message only makes sense addressed to her; it stayed unsent because
// she is gone, and keeping the too-small sweater is the closest thing
// left to keeping her — throwing it away would feel like losing her
// a second time.
const TO_LINE: string = "To: my grandmother";
const MESSAGE_LINE: string =
  "I still have the last sweater you knitted me even though the sleeves are too short now, because throwing it away would feel like losing you twice.";

const MIN_CHARS = 1;
const MAX_CHARS = 260;
const MAX_MESSAGE_CHARS = 200;

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath: string = join(outDir, "entry.txt");
  const entry: string = `${TO_LINE}\n${MESSAGE_LINE}`;

  // Read-back gate: total 1-260 characters (counted as characters,
  // not bytes), message line at most 200 characters, not only whitespace.
  const totalLength: number = [...entry].length;
  if (totalLength < MIN_CHARS || totalLength > MAX_CHARS) {
    throw new Error(
      `entry is ${totalLength} characters, must be ${MIN_CHARS}-${MAX_CHARS}`,
    );
  }
  const messageLength: number = [...MESSAGE_LINE].length;
  if (messageLength > MAX_MESSAGE_CHARS) {
    throw new Error(
      `message line is ${messageLength} characters, must be at most ${MAX_MESSAGE_CHARS}`,
    );
  }
  if (entry.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (!TO_LINE.startsWith("To: ")) {
    throw new Error('first line must start with "To: "');
  }
  if (MESSAGE_LINE.includes("\n")) {
    throw new Error("message line must be a single line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, entry, "utf8");
  console.log(`wrote ${totalLength} characters to ${outPath}`);
}

main();
