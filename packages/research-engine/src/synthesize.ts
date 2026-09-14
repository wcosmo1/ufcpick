import type { ResearchInput, SynthesizedResearch, SourceResult } from "./types";
import { fetchUfcStats } from "./sources/ufc-stats";
import { fetchOdds } from "./sources/odds";
import { fetchNews } from "./sources/news";
import { fetchTape } from "./sources/tape";

/**
 * Gather stub sources and synthesize a research report.
 * Swap internals for real LLM + scrapers later; keep this signature stable.
 */
export async function synthesizeResearch(
  input: ResearchInput
): Promise<SynthesizedResearch> {
  const { fight } = input;

  const sources: SourceResult[] = await Promise.all([
    fetchUfcStats(fight),
    fetchOdds(fight),
    fetchNews(fight),
    fetchTape(fight),
  ]);

  // Deterministic stub pick: slight edge to fighter A unless odds imply otherwise
  const pickWinnerId = fight.fighterA.id;
  const pickWinnerName = fight.fighterA.name;

  return {
    pickWinnerId,
    pickWinnerName,
    method: "Decision",
    confidence: 7,
    whyBullets: [
      `${pickWinnerName} holds the striking volume edge on stub UFC Stats.`,
      "Odds lean favorite; market agrees with the stylistic matchup.",
      "Cage size / altitude stubs suggest no extreme environmental swing.",
      "Tape notes favor pressure striking over late grappling volume in early rounds.",
    ],
    summary: `Stub research favors ${pickWinnerName} by decision over ${fight.fighterB.name}. Replace synthesizeResearch internals with live sources + LLM.`,
    sources,
  };
}
