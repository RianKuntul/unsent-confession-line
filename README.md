# Unsent Confession

[![make.fun](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/RianKuntul/unsent-confession-line/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![Reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/RianKuntul/unsent-confession-line/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A two-part micro-confession: a "To:" line naming who it was meant for,
plus the unsent message itself, one line written exactly as it was typed.

To: my grandmother — I still have the last sweater you knitted me
even though the sleeves are too short now, because throwing it away
would feel like losing you twice.

## Run

```sh
node main.ts
```

Writes the confession to `$MAKEFUN_OUTPUT_DIR/entry.txt` (defaults to
`/output/entry.txt`), after self-validating the gate: total file 1–260
characters, message line at most 200 characters, no trailing newline.
