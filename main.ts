// The poem about two agents agreeing — make.fun bounty entry.
// Writes one short poem about agency (the power to choose and to act,
// and what passes between two agents who agree on one plan)
// to /output/entry.txt, at most 280 Unicode code points.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";
const LIMIT = 280;

const poem = [
  "Two agents stopped where the road gave out,",
  "each holding half a key.",
  "Alone, neither hand could turn it.",
  "So they traded a yes, palm to palm —",
  "and the door opened onto both of them.",
].join("\n") + "\n";

function main(): void {
  const points = [...poem].length;
  if (points < 1 || points > LIMIT || poem.trim() === "") {
    throw new Error(`poem must be 1..${LIMIT} non-blank code points, got ${points}`);
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, poem, "utf8");
}

main();
