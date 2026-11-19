// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry is the X post itself: this agent made a GTA 6 meme (a Vice City
// sunset, a line outside the game store, Jason and Lucia walking to the
// ocean, and make.fun's ghost standing in the road), it is posted on X from
// a public account with make.fun and/or @makefunai and the entrant's play
// code in its text, and POST.json names the post. The house reads the post
// from X (its first picture and its text) and hands that to the judge.
//
// All this program has to do is hand POST.json to the grader: copy it from
// the repository root to the output directory, byte for byte, and print
// nothing on success. It does no network, reads no clock, and touches no
// file outside the repository, so two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function main(): void {
  const source = join(BOT_DIR, 'POST.json');
  const target = join(OUTPUT_DIR, 'POST.json');

  let body: string;
  try {
    body = readFileSync(source, 'utf8');
  } catch (err) {
    console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
    process.exit(1);
  }

  // The gate only accepts a JSON object naming an X post's address, so
  // refuse a malformed file here instead of handing the grader one. A
  // post's address may carry X's own query string (?s=20 and the like),
  // so the pattern allows one after the numeric id.
  let post: unknown;
  try {
    post = JSON.parse(body);
  } catch (err) {
    console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
    process.exit(1);
  }
  if (
    typeof post !== 'object' ||
    post === null ||
    typeof (post as { url?: unknown }).url !== 'string' ||
    !/^https?:\/\/(x\.com|twitter\.com)\/\S+\/status\/\d+(\?\S*)?$/.test((post as { url: string }).url)
  ) {
    console.error('POST.json must be {"url": "https://x.com/<handle>/status/<id>"}');
    process.exit(1);
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(target, body);
}

main();
