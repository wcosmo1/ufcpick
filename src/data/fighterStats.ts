import type { FighterStats } from "../types";
import { fights } from "./mockData";

/** Plausible mock stats keyed by fighter display name. */
const BY_NAME: Record<string, Omit<FighterStats, "name">> = {
  // --- UFC 331 ---
  "Joshua Van": {
    camp: "Sanford MMA",
    slpm: 5.4,
    tdd: 72,
    td_avg: 1.2,
    style: "Boxing",
  },
  "Alexandre Pantoja": {
    camp: "American Top Team",
    slpm: 4.0,
    tdd: 68,
    td_avg: 2.1,
    style: "BJJ",
  },
  "Arman Tsarukyan": {
    camp: "Tiger Muay Thai",
    slpm: 4.3,
    tdd: 82,
    td_avg: 3.2,
    style: "Wrestling",
  },
  "Mauricio Ruffy": {
    camp: "American Top Team",
    slpm: 4.8,
    tdd: 58,
    td_avg: 0.6,
    style: "Kickboxing",
  },
  "Patricio Pitbull": {
    camp: "Chute Boxe Diego Lima",
    slpm: 4.6,
    tdd: 70,
    td_avg: 1.0,
    style: "Boxing",
  },
  "Dooho Choi": {
    camp: "Korean Top Team",
    slpm: 4.2,
    tdd: 64,
    td_avg: 0.5,
    style: "Boxing",
  },
  "Renato Moicano": {
    camp: "American Top Team",
    slpm: 5.1,
    tdd: 66,
    td_avg: 1.4,
    style: "Boxing",
  },
  "Brian Ortega": {
    camp: "Black House",
    slpm: 3.6,
    tdd: 54,
    td_avg: 1.5,
    style: "BJJ",
  },
  "Alonzo Menifield": {
    camp: "Fortis MMA",
    slpm: 4.0,
    tdd: 62,
    td_avg: 1.8,
    style: "Wrestling",
  },
  "Iwo Baraniewski": {
    camp: "Independent",
    slpm: 3.7,
    tdd: 55,
    td_avg: 1.1,
    style: "Kickboxing",
  },
  "Gable Steveson": {
    camp: "Kill Cliff FC",
    slpm: 2.8,
    tdd: 88,
    td_avg: 5.5,
    style: "Wrestling",
  },
  "Sean Sharaf": {
    camp: "Independent",
    slpm: 3.5,
    tdd: 52,
    td_avg: 0.8,
    style: "Boxing",
  },
  "Marlon Vera": {
    camp: "Chute Boxe",
    slpm: 4.1,
    tdd: 60,
    td_avg: 0.7,
    style: "Kickboxing",
  },
  "Charles Jourdain": {
    camp: "Tristar Gym",
    slpm: 4.9,
    tdd: 58,
    td_avg: 0.9,
    style: "Boxing",
  },
  "Tai Tuivasa": {
    camp: "City Kickboxing",
    slpm: 3.9,
    tdd: 55,
    td_avg: 0.3,
    style: "Kickboxing",
  },
  "Robelis Despaigne": {
    camp: "American Top Team",
    slpm: 3.4,
    tdd: 48,
    td_avg: 0.2,
    style: "Kickboxing",
  },
  "Michael Aswell Jr.": {
    camp: "Factory X",
    slpm: 4.5,
    tdd: 61,
    td_avg: 1.3,
    style: "Wrestling",
  },
  "JooSang Yoo": {
    camp: "Korean Top Team",
    slpm: 3.8,
    tdd: 65,
    td_avg: 1.0,
    style: "Boxing",
  },
  "Ryan Gandra": {
    camp: "Independent",
    slpm: 3.2,
    tdd: 58,
    td_avg: 2.6,
    style: "Wrestling",
  },
  "Ozzy Diaz": {
    camp: "Syndicate MMA",
    slpm: 4.4,
    tdd: 60,
    td_avg: 0.7,
    style: "Boxing",
  },
  "Edmen Shahbazyan": {
    camp: "Glendale Fighting Club",
    slpm: 4.2,
    tdd: 55,
    td_avg: 0.9,
    style: "Kickboxing",
  },
  "Brunno Ferreira": {
    camp: "American Top Team",
    slpm: 3.6,
    tdd: 62,
    td_avg: 2.4,
    style: "BJJ",
  },
  "Casey O'Neill": {
    camp: "Tristar Gym",
    slpm: 3.9,
    tdd: 70,
    td_avg: 3.1,
    style: "Wrestling",
  },
  "Eduarda Moura": {
    camp: "Nova União",
    slpm: 4.1,
    tdd: 64,
    td_avg: 1.5,
    style: "Boxing",
  },
  "Giga Chikadze": {
    camp: "Syndicate MMA",
    slpm: 4.0,
    tdd: 72,
    td_avg: 0.4,
    style: "Kickboxing",
  },
  "Joanderson Brito": {
    camp: "American Top Team",
    slpm: 3.8,
    tdd: 58,
    td_avg: 2.8,
    style: "Wrestling",
  },

  // --- Fight Night Rosas ---
  "Raul Rosas Jr.": {
    camp: "Syndicate MMA",
    slpm: 3.5,
    tdd: 69,
    td_avg: 3.0,
    style: "Wrestling",
  },
  "Raoni Barcelos": {
    camp: "Nova União",
    slpm: 4.3,
    tdd: 71,
    td_avg: 1.2,
    style: "Boxing",
  },
  "Rodolfo Vieira": {
    camp: "American Top Team",
    slpm: 2.6,
    tdd: 60,
    td_avg: 3.8,
    style: "BJJ",
  },
  "Robert Bryczek": {
    camp: "Independent",
    slpm: 4.5,
    tdd: 55,
    td_avg: 0.6,
    style: "Kickboxing",
  },
  "Brady Hiestand": {
    camp: "The MMA Lab",
    slpm: 3.4,
    tdd: 68,
    td_avg: 2.9,
    style: "Wrestling",
  },
  "Rinya Nakamura": {
    camp: "Paraestra",
    slpm: 3.7,
    tdd: 75,
    td_avg: 4.0,
    style: "Wrestling",
  },
  "Mehemmedeli Osmanli": {
    camp: "Independent",
    slpm: 4.0,
    tdd: 63,
    td_avg: 1.8,
    style: "Boxing",
  },
  "Ilimbek Akylbek": {
    camp: "Independent",
    slpm: 3.6,
    tdd: 58,
    td_avg: 1.4,
    style: "Kickboxing",
  },
  "Melissa Amaya": {
    camp: "Syndicate MMA",
    slpm: 4.2,
    tdd: 62,
    td_avg: 0.8,
    style: "Boxing",
  },
  "Valesca Machado": {
    camp: "Nova União",
    slpm: 3.3,
    tdd: 55,
    td_avg: 2.2,
    style: "BJJ",
  },
  "Josiah Harrell": {
    camp: "Elevation Fight Team",
    slpm: 3.9,
    tdd: 70,
    td_avg: 2.5,
    style: "Wrestling",
  },
  "Elves Brener": {
    camp: "American Top Team",
    slpm: 4.4,
    tdd: 64,
    td_avg: 1.1,
    style: "Kickboxing",
  },
  "Rodolfo Bellato": {
    camp: "American Top Team",
    slpm: 4.1,
    tdd: 58,
    td_avg: 1.6,
    style: "Boxing",
  },
  "Christian Edwards": {
    camp: "Independent",
    slpm: 3.5,
    tdd: 60,
    td_avg: 1.3,
    style: "Wrestling",
  },
  "Montel Jackson": {
    camp: "Roufusport",
    slpm: 4.6,
    tdd: 74,
    td_avg: 0.9,
    style: "Kickboxing",
  },
  "Ricky Simon": {
    camp: "Team Alpha Male",
    slpm: 3.9,
    tdd: 72,
    td_avg: 4.2,
    style: "Wrestling",
  },
  "John Castaneda": {
    camp: "The Academy",
    slpm: 4.8,
    tdd: 66,
    td_avg: 1.0,
    style: "Boxing",
  },
  Alatengheili: {
    camp: "China Top Team",
    slpm: 3.7,
    tdd: 68,
    td_avg: 1.5,
    style: "Wrestling",
  },
  "Norma Dumont": {
    camp: "American Top Team",
    slpm: 4.0,
    tdd: 72,
    td_avg: 0.6,
    style: "Kickboxing",
  },
  "Ailin Perez": {
    camp: "Independent",
    slpm: 3.2,
    tdd: 58,
    td_avg: 3.4,
    style: "Wrestling",
  },
  "Vanessa Demopoulos": {
    camp: "Syndicate MMA",
    slpm: 3.4,
    tdd: 52,
    td_avg: 1.8,
    style: "BJJ",
  },
  "Yazmin Jauregui": {
    camp: "Lobo Gym",
    slpm: 5.6,
    tdd: 67,
    td_avg: 0.3,
    style: "Boxing",
  },

  // --- UFC 332 ---
  "Natalia Silva": {
    camp: "Nova União",
    slpm: 5.3,
    tdd: 76,
    td_avg: 0.9,
    style: "Kickboxing",
  },
  "Wang Cong": {
    camp: "China Top Team",
    slpm: 4.5,
    tdd: 68,
    td_avg: 1.2,
    style: "Boxing",
  },
  "Deiveson Figueiredo": {
    camp: "Team Figueiredo",
    slpm: 3.8,
    tdd: 66,
    td_avg: 2.3,
    style: "Wrestling",
  },
  "Payton Talbott": {
    camp: "Xtreme Couture",
    slpm: 5.2,
    tdd: 70,
    td_avg: 0.8,
    style: "Boxing",
  },
  "King Green": {
    camp: "Factory X",
    slpm: 4.7,
    tdd: 58,
    td_avg: 1.4,
    style: "Boxing",
  },
  "Esteban Ribovics": {
    camp: "Independent",
    slpm: 5.0,
    tdd: 65,
    td_avg: 0.5,
    style: "Kickboxing",
  },
  "Roberto Soldic": {
    camp: "American Top Team",
    slpm: 4.4,
    tdd: 62,
    td_avg: 0.9,
    style: "Boxing",
  },
  "Khaos Williams": {
    camp: "Kill Cliff FC",
    slpm: 4.1,
    tdd: 55,
    td_avg: 0.4,
    style: "Boxing",
  },
  "Ateba Gautier": {
    camp: "Independent",
    slpm: 4.3,
    tdd: 60,
    td_avg: 1.6,
    style: "Wrestling",
  },
  "Roman Kopylov": {
    camp: "Independent",
    slpm: 4.8,
    tdd: 68,
    td_avg: 0.3,
    style: "Kickboxing",
  },
  "Imanol Rodriguez": {
    camp: "Independent",
    slpm: 4.0,
    tdd: 58,
    td_avg: 0.7,
    style: "Boxing",
  },
  "Alden Coria": {
    camp: "Serra-Longo",
    slpm: 3.3,
    tdd: 70,
    td_avg: 3.2,
    style: "Wrestling",
  },
  "Damian Pinas": {
    camp: "Independent",
    slpm: 4.2,
    tdd: 55,
    td_avg: 1.0,
    style: "Boxing",
  },
  "Andrey Pulyaev": {
    camp: "Independent",
    slpm: 3.5,
    tdd: 62,
    td_avg: 2.0,
    style: "Wrestling",
  },
  "Marcus McGhee": {
    camp: "Fight Ready",
    slpm: 4.6,
    tdd: 64,
    td_avg: 0.8,
    style: "Boxing",
  },
  "Benardo Sopaj": {
    camp: "Independent",
    slpm: 3.8,
    tdd: 60,
    td_avg: 1.2,
    style: "Kickboxing",
  },
  "Johnny Walker": {
    camp: "Lobo Gym",
    slpm: 3.6,
    tdd: 52,
    td_avg: 0.9,
    style: "Kickboxing",
  },
  "Mick Parkin": {
    camp: "Independent",
    slpm: 3.2,
    tdd: 74,
    td_avg: 2.8,
    style: "Wrestling",
  },
  "Rafael Dos Anjos": {
    camp: "Kings MMA",
    slpm: 3.9,
    tdd: 70,
    td_avg: 1.9,
    style: "Kickboxing",
  },
  "Alexander Hernandez": {
    camp: "Fortis MMA",
    slpm: 4.3,
    tdd: 62,
    td_avg: 1.5,
    style: "Boxing",
  },
  "Marvin Vettori": {
    camp: "Sanford MMA",
    slpm: 4.5,
    tdd: 72,
    td_avg: 1.8,
    style: "Kickboxing",
  },
  "Ismail Naurdiev": {
    camp: "Independent",
    slpm: 4.0,
    tdd: 66,
    td_avg: 1.1,
    style: "Boxing",
  },
  "Court McGee": {
    camp: "The Pit Elevates",
    slpm: 3.7,
    tdd: 68,
    td_avg: 2.2,
    style: "Wrestling",
  },
  "Eric Nolan": {
    camp: "Independent",
    slpm: 4.1,
    tdd: 58,
    td_avg: 0.9,
    style: "Boxing",
  },
};

const STYLES = ["Wrestling", "Boxing", "Kickboxing", "BJJ"] as const;
const CAMPS = [
  "American Top Team",
  "Tiger Muay Thai",
  "Jackson Wink",
  "Alliance MMA",
  "Factory X",
  "Independent",
] as const;

function hashName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h * 31 + name.charCodeAt(i)) >>> 0;
  }
  return h;
}

function generateFallback(name: string): FighterStats {
  const h = hashName(name);
  return {
    name,
    camp: CAMPS[h % CAMPS.length],
    slpm: Math.round((2.5 + (h % 50) / 10) * 10) / 10,
    tdd: 50 + (h % 40),
    td_avg: Math.round(((h % 60) / 10) * 10) / 10,
    style: STYLES[h % STYLES.length],
  };
}

export function getFighterStats(name: string): FighterStats {
  const known = BY_NAME[name];
  if (known) return { name, ...known };
  return generateFallback(name);
}

export function getFighterStatsForFight(
  fightId: string
): [FighterStats, FighterStats] | undefined {
  const fight = fights.find((f) => f.fight_id === fightId);
  if (!fight) return undefined;
  return [getFighterStats(fight.fighter_a), getFighterStats(fight.fighter_b)];
}

/** Ensure every fight in mock data has stats (dev sanity). */
export function assertAllFightsHaveStats(): boolean {
  return fights.every((f) => {
    const pair = getFighterStatsForFight(f.fight_id);
    return !!pair;
  });
}
