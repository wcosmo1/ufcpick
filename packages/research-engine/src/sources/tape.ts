import type { FightContext, SourceResult } from "../types";

/** Stub: film / tape study notes. */
export async function fetchTape(fight: FightContext): Promise<SourceResult> {
  return {
    source: "tape",
    fetchedAt: new Date().toISOString(),
    ok: true,
    data: {
      notes: [
        `${fight.fighterA.name}: strong jab, pressure walking, vulnerable to level changes`,
        `${fight.fighterB.name}: high-volume grappler, late-round cardio edge`,
      ],
      styles: {
        [fight.fighterA.id]: "striker-pressure",
        [fight.fighterB.id]: "wrestler-control",
      },
      note: "stub — replace with tape analysis pipeline",
    },
  };
}
