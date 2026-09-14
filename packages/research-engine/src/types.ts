export type CardSection = "EARLY_PRELIM" | "PRELIM" | "MAIN";

export interface FighterRef {
  id: string;
  name: string;
  nickname?: string | null;
  record?: string | null;
}

export interface FightContext {
  id: string;
  fighterA: FighterRef;
  fighterB: FighterRef;
  weightClass?: string | null;
  isTitleFight?: boolean;
  cardSection: CardSection;
  venue?: {
    city: string;
    cageSizeFeet: number;
    altitudeMeters: number;
  };
}

export interface SourceResult {
  source: string;
  fetchedAt: string;
  data: Record<string, unknown>;
  ok: boolean;
  error?: string;
}

export interface SynthesizedResearch {
  pickWinnerId: string;
  pickWinnerName: string;
  method: string;
  confidence: number; // 1-10
  whyBullets: string[];
  summary: string;
  sources: SourceResult[];
}

export interface ResearchInput {
  fight: FightContext;
}
