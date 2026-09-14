import type { FightContext, SourceResult } from "../types";

/** Stub: UFC Stats scrape / API. */
export async function fetchUfcStats(
  fight: FightContext
): Promise<SourceResult> {
  return {
    source: "ufc-stats",
    fetchedAt: new Date().toISOString(),
    ok: true,
    data: {
      fighterA: {
        id: fight.fighterA.id,
        name: fight.fighterA.name,
        sigStrikesLandedPerMin: 4.2,
        takedownAvg: 1.1,
        defense: 0.58,
      },
      fighterB: {
        id: fight.fighterB.id,
        name: fight.fighterB.name,
        sigStrikesLandedPerMin: 3.8,
        takedownAvg: 2.4,
        defense: 0.52,
      },
      note: "stub — replace with live UFC Stats fetcher",
    },
  };
}
