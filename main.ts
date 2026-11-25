// Entry: "I checked the chart eight times today for a coin I swore I'd hold
// for five years — it's been three days."
//
// The joke's turn: the setup promises long-term conviction (a five-year hold),
// then the punchline collapses it — eight chart checks in one day, three days
// in. Every trader recognises the gap between the hold they announced and the
// chart they can't stop refreshing; the last clause is the payoff, so the
// punchline lands at the very end of the line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I checked the chart eight times today for a coin I swore I'd hold for five years — it's been three days.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
