import {
  synthesizeResearch,
  type FightContext,
  type SynthesizedResearch,
} from "@ufc-cornerman/research-engine";

export interface RunResearchEvent {
  name: "research/fight.requested";
  data: {
    fightId: string;
    fight: FightContext;
  };
}

export interface RunResearchResult {
  fightId: string;
  status: "COMPLETED" | "FAILED";
  report?: SynthesizedResearch;
  error?: string;
}

/**
 * Inngest-style step function stub.
 * Wire to Inngest `inngest.createFunction` when deploying workers.
 */
export async function runResearch(
  event: RunResearchEvent
): Promise<RunResearchResult> {
  const { fightId, fight } = event.data;

  try {
    // step.run("synthesize", ...) in real Inngest
    const report = await synthesizeResearch({ fight });

    return {
      fightId,
      status: "COMPLETED",
      report,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return {
      fightId,
      status: "FAILED",
      error: message,
    };
  }
}

export default runResearch;
