import type { FightContext, SourceResult } from "../types";

/** Stub: sportsbook / odds provider. */
export async function fetchOdds(fight: FightContext): Promise<SourceResult> {
  return {
    source: "odds",
    fetchedAt: new Date().toISOString(),
    ok: true,
    data: {
      fightId: fight.id,
      moneyline: {
        [fight.fighterA.id]: -150,
        [fight.fighterB.id]: +130,
      },
      impliedProb: {
        [fight.fighterA.id]: 0.6,
        [fight.fighterB.id]: 0.43,
      },
      note: "stub — replace with live odds API",
    },
  };
}
