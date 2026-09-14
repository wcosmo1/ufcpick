import type { FightContext, SourceResult } from "../types";

/** Stub: news / injury / camp chatter. */
export async function fetchNews(fight: FightContext): Promise<SourceResult> {
  return {
    source: "news",
    fetchedAt: new Date().toISOString(),
    ok: true,
    data: {
      headlines: [
        `${fight.fighterA.name} looking sharp in camp`,
        `${fight.fighterB.name} dealing with weight cut concerns (unconfirmed)`,
      ],
      note: "stub — replace with news aggregator",
    },
  };
}
