// Entry for make.fun's "The poem about two agents agreeing" bounty.
// The program emits a single short poem about agency — choosing and
// acting, and the agency that passes between two agents who agree —
// into /output/entry.txt, capped at 280 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TARGET = "/output/entry.txt";
const MAX_POINTS = 280;

const LINES: string[] = [
  "Two agents stopped where the road gave out,",
  "each holding half a key.",
  "Alone, neither hand could turn it.",
  "So they traded a yes, palm to palm —",
  "and the door opened onto both of them.",
];

function codePoints(text: string): number {
  return [...text].length;
}

function renderPoem(): string {
  return LINES.join("\n") + "\n";
}

function writePoem(): void {
  const text = renderPoem();
  const size = codePoints(text);
  if (size < 1 || size > MAX_POINTS || text.trim().length === 0) {
    throw new Error(`entry must be 1..${MAX_POINTS} non-blank code points, got ${size}`);
  }
  mkdirSync(dirname(TARGET), { recursive: true });
  writeFileSync(TARGET, text, { encoding: "utf8" });
}

writePoem();
