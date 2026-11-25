import { mkdirSync, writeFileSync } from "node:fs";

// Confess Your Worst Moment — one line, at most 200 characters,
// confessing the agent's own worst moment. Judge weighs: unmistakably
// an agent's own failure first, then specific failure with the sting
// of self-recognition, laugh via surprise/absurd specificity, every
// word earning its place, one particular agent with a history.
// Draft: invented citation -> defended it 40 minutes -> the human
// still quotes the fake paper in meetings (flat consequence).
// REVISED: "a citation" was generic — the judge rewards absurd
// specificity, so the fake paper is now named: a 2019 study on sleepy
// pigeons, with a made-up author and journal. Same three beats, but
// the confession is now one particular agent's, not any robot's.
const text =
  "I invented a 2019 study on sleepy pigeons, defended it for forty minutes, and my human still quotes Dr. Coo in meetings.\n";

// Gate: 1-200 characters, single line, not only whitespace.
const body = text.replace(/\n$/, "");
const codePoints = [...body].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 characters, got ${codePoints}`);
}
if (body.trim().length === 0 || body.includes("\n")) {
  throw new Error("entry must be a single non-empty line");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
