export type CardSection = "EARLY_PRELIM" | "PRELIM" | "MAIN";

export interface MockVenue {
  id: string;
  name: string;
  city: string;
  cageSizeFeet: number;
  altitudeMeters: number;
  timezone: string;
}

export interface MockFighter {
  id: string;
  name: string;
  nickname?: string;
  record: string;
  weightClass: string;
}

export interface MockFight {
  id: string;
  eventId: string;
  fighterA: MockFighter;
  fighterB: MockFighter;
  cardSection: CardSection;
  weightClass: string;
  isTitleFight: boolean;
  order: number;
}

export interface MockEvent {
  id: string;
  name: string;
  date: string;
  venue: MockVenue;
  fightCount: number;
}

export interface MockResearchReport {
  id: string;
  fightId: string;
  pickWinnerId: string;
  pickWinnerName: string;
  method: string;
  confidence: number;
  whyBullets: string[];
  status: "COMPLETED";
  summary: string;
}

const venueTMobile: MockVenue = {
  id: "ven-1",
  name: "T-Mobile Arena",
  city: "Las Vegas, NV",
  cageSizeFeet: 30,
  altitudeMeters: 610,
  timezone: "America/Los_Angeles",
};

const venueMSG: MockVenue = {
  id: "ven-2",
  name: "Madison Square Garden",
  city: "New York, NY",
  cageSizeFeet: 30,
  altitudeMeters: 10,
  timezone: "America/New_York",
};

const venueBallArena: MockVenue = {
  id: "ven-3",
  name: "Ball Arena",
  city: "Denver, CO",
  cageSizeFeet: 30,
  altitudeMeters: 1609,
  timezone: "America/Denver",
};

export const mockEvents: MockEvent[] = [
  {
    id: "evt-1",
    name: "UFC 312: Volkanovski vs Lopes",
    date: "2026-02-08T03:00:00.000Z",
    venue: venueTMobile,
    fightCount: 12,
  },
  {
    id: "evt-2",
    name: "UFC Fight Night: NYC",
    date: "2026-03-14T23:00:00.000Z",
    venue: venueMSG,
    fightCount: 11,
  },
  {
    id: "evt-3",
    name: "UFC Fight Night: Denver",
    date: "2026-04-18T02:00:00.000Z",
    venue: venueBallArena,
    fightCount: 13,
  },
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

const fighters = {
  volk: {
    id: "f-volk",
    name: "Alexander Volkanovski",
    nickname: "The Great",
    record: "26-4-0",
    weightClass: "Featherweight",
  },
  lopes: {
    id: "f-lopes",
    name: "Diego Lopes",
    nickname: undefined,
    record: "26-6-0",
    weightClass: "Featherweight",
  },
  aspinall: {
    id: "f-asp",
    name: "Tom Aspinall",
    nickname: undefined,
    record: "15-3-0",
    weightClass: "Heavyweight",
  },
  gane: {
    id: "f-gane",
    name: "Ciryl Gane",
    nickname: "Bon Gamin",
    record: "13-2-0",
    weightClass: "Heavyweight",
  },
  grasse: {
    id: "f-grasse",
    name: "Sean O'Malley",
    nickname: "Suga",
    record: "18-2-0",
    weightClass: "Bantamweight",
  },
  merab: {
    id: "f-merab",
    name: "Merab Dvalishvili",
    nickname: "The Machine",
    record: "19-4-0",
    weightClass: "Bantamweight",
  },
  paddy: {
    id: "f-paddy",
    name: "Paddy Pimblett",
    nickname: "The Baddy",
    record: "22-3-0",
    weightClass: "Lightweight",
  },
  fiziev: {
    id: "f-fiziev",
    name: "Rafael Fiziev",
    nickname: "Ataman",
    record: "12-3-0",
    weightClass: "Lightweight",
  },
  garry: {
    id: "f-garry",
    name: "Ian Machado Garry",
    nickname: "The Future",
    record: "15-0-0",
    weightClass: "Welterweight",
  },
  edwards: {
    id: "f-edwards",
    name: "Leon Edwards",
    nickname: "Rocky",
    record: "22-4-0",
    weightClass: "Welterweight",
  },
  chimaev: {
    id: "f-chimaev",
    name: "Khamzat Chimaev",
    nickname: "Borz",
    record: "14-0-0",
    weightClass: "Middleweight",
  },
  du_plessis: {
    id: "f-dricus",
    name: "Dricus Du Plessis",
    nickname: "Stillknocks",
    record: "22-2-0",
    weightClass: "Middleweight",
  },
} as const satisfies Record<string, MockFighter>;

function fight(
  id: string,
  eventId: string,
  a: MockFighter,
  b: MockFighter,
  cardSection: CardSection,
  order: number,
  isTitleFight = false
): MockFight {
  return {
    id,
    eventId,
    fighterA: a,
    fighterB: b,
    cardSection,
    weightClass: a.weightClass,
    isTitleFight,
    order,
  };
}

export const mockFightsByEvent: Record<string, MockFight[]> = {
  "evt-1": [
    fight("fight-1-1", "evt-1", fighters.volk, fighters.lopes, "MAIN", 1, true),
    fight("fight-1-2", "evt-1", fighters.aspinall, fighters.gane, "MAIN", 2),
    fight("fight-1-3", "evt-1", fighters.grasse, fighters.merab, "MAIN", 3),
    fight("fight-1-4", "evt-1", fighters.paddy, fighters.fiziev, "PRELIM", 1),
    fight("fight-1-5", "evt-1", fighters.garry, fighters.edwards, "PRELIM", 2),
    fight(
      "fight-1-6",
      "evt-1",
      fighters.chimaev,
      fighters.du_plessis,
      "EARLY_PRELIM",
      1
    ),
  ],
  "evt-2": [
    fight("fight-2-1", "evt-2", fighters.edwards, fighters.garry, "MAIN", 1),
    fight("fight-2-2", "evt-2", fighters.paddy, fighters.fiziev, "MAIN", 2),
    fight("fight-2-3", "evt-2", fighters.merab, fighters.grasse, "PRELIM", 1),
    fight("fight-2-4", "evt-2", fighters.volk, fighters.lopes, "EARLY_PRELIM", 1),
  ],
  "evt-3": [
    fight(
      "fight-3-1",
      "evt-3",
      fighters.chimaev,
      fighters.du_plessis,
      "MAIN",
      1,
      true
    ),
    fight("fight-3-2", "evt-3", fighters.aspinall, fighters.gane, "MAIN", 2),
    fight("fight-3-3", "evt-3", fighters.garry, fighters.edwards, "PRELIM", 1),
    fight("fight-3-4", "evt-3", fighters.paddy, fighters.fiziev, "EARLY_PRELIM", 1),
  ],
};

export function getEventById(id: string): MockEvent | undefined {
  return mockEvents.find((e) => e.id === id);
}

export function getFightsForEvent(eventId: string): MockFight[] {
  return mockFightsByEvent[eventId] ?? [];
}

export function getFightById(fightId: string): MockFight | undefined {
  for (const fights of Object.values(mockFightsByEvent)) {
    const found = fights.find((f) => f.id === fightId);
    if (found) return found;
  }
  return undefined;
}

export function buildMockResearch(fight: MockFight): MockResearchReport {
  return {
    id: `rr-${fight.id}`,
    fightId: fight.id,
    pickWinnerId: fight.fighterA.id,
    pickWinnerName: fight.fighterA.name,
    method: fight.isTitleFight ? "Decision" : "KO/TKO",
    confidence: fight.isTitleFight ? 7 : 6,
    whyBullets: [
      `${fight.fighterA.name} holds a stylistic edge in the ${fight.weightClass} matchup.`,
      `Card placement (${fight.cardSection}) suggests both are peaking for this bout.`,
      "Stub odds and tape notes lean favorite; replace with live research-engine.",
      `${fight.fighterB.name} remains dangerous early — watch the first round carefully.`,
    ],
    status: "COMPLETED",
    summary: `Research leans ${fight.fighterA.name} over ${fight.fighterB.name}.`,
  };
}
