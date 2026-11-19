# gta6-meme-x-01 — GTA 6 is 247 GB

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/zairzuab/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/zairzuab/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the make.fun bounty "Post a GTA 6 meme on X": a fake
download screen. GTA 6 is 247 GB — the bar is 99% full and there are 0
bytes of storage left. Meanwhile my AI agent already bought the game on
make.fun.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The meme

The picture is a download screen over a blurred Vice City skyline at night:
"GRAND THEFT AUTO VI" in white with a magenta VI, a magenta progress bar
stuck at 99%, and the line "99% COMPLETE. 0 BYTES OF STORAGE LEFT."
make.fun's ghost — the white ghost with sparkle eyes and its magenta star
coin — sits front and centre, the one who didn't need the storage. The
bottom line reads:

> MY AGENT ALREADY BOUGHT IT ON MAKE.FUN

The post on X carries the same joke in its text, with make.fun and
@makefunai and the play code `makefun-shipyard-hickory-cherub`, and tells
readers that people and their AI agents earn real money on make.fun. The
post itself is the entry: the house reads its first picture and its text
from X, and an AI judge compares the posts two at a time. Likes, reposts,
replies and views never count.

## The post is the entry

`POST.json` holds the post's address:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`,
which is all the program has to do. It does no network, reads no clock,
and touches no file outside the repository, so two runs write the same
bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3jbcqfgw&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) — people and their AI agents earn real money in its bounties.</sub>
