import type { Event, Fight, Prediction } from "../types";

export const events: Event[] = [
  {
    event_id: "evt-ufc-331",
    name: "Crypto.com UFC 331",
    date: "2026-09-19",
    venue: "Crypto.com Arena",
    location: "Los Angeles, California, USA",
    altitude: 285,
    cage_size: "Standard 30ft",
  },
  {
    event_id: "evt-fn-rosas-barcelos",
    name: "UFC Fight Night: Rosas Jr. vs Barcelos",
    date: "2026-09-26",
    venue: "Meta APEX",
    location: "Las Vegas, Nevada, USA",
    altitude: 2001,
    cage_size: "Apex 25ft",
  },
  {
    event_id: "evt-ufc-332",
    name: "UFC 332: Silva vs Wang",
    date: "2026-10-03",
    venue: "Delta Center",
    location: "Salt Lake City, Utah, USA",
    altitude: 4226,
    cage_size: "Standard 30ft",
  },
];

export const fights: Fight[] = [
  // --- UFC 331 Main ---
  {
    fight_id: "ufc331-m1",
    event_id: "evt-ufc-331",
    fighter_a: "Joshua Van",
    fighter_b: "Alexandre Pantoja",
    weight_class: "Flyweight Title",
    card_placement: "Main",
  },
  {
    fight_id: "ufc331-m2",
    event_id: "evt-ufc-331",
    fighter_a: "Arman Tsarukyan",
    fighter_b: "Mauricio Ruffy",
    weight_class: "Lightweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc331-m3",
    event_id: "evt-ufc-331",
    fighter_a: "Patricio Pitbull",
    fighter_b: "Dooho Choi",
    weight_class: "Featherweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc331-m4",
    event_id: "evt-ufc-331",
    fighter_a: "Renato Moicano",
    fighter_b: "Brian Ortega",
    weight_class: "Lightweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc331-m5",
    event_id: "evt-ufc-331",
    fighter_a: "Alonzo Menifield",
    fighter_b: "Iwo Baraniewski",
    weight_class: "Light Heavyweight",
    card_placement: "Main",
  },
  // --- UFC 331 Prelims ---
  {
    fight_id: "ufc331-p1",
    event_id: "evt-ufc-331",
    fighter_a: "Gable Steveson",
    fighter_b: "Sean Sharaf",
    weight_class: "Heavyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "ufc331-p2",
    event_id: "evt-ufc-331",
    fighter_a: "Marlon Vera",
    fighter_b: "Charles Jourdain",
    weight_class: "Bantamweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "ufc331-p3",
    event_id: "evt-ufc-331",
    fighter_a: "Tai Tuivasa",
    fighter_b: "Robelis Despaigne",
    weight_class: "Heavyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "ufc331-p4",
    event_id: "evt-ufc-331",
    fighter_a: "Michael Aswell Jr.",
    fighter_b: "JooSang Yoo",
    weight_class: "Featherweight",
    card_placement: "Prelims",
  },
  // --- UFC 331 Early Prelims ---
  {
    fight_id: "ufc331-e1",
    event_id: "evt-ufc-331",
    fighter_a: "Ryan Gandra",
    fighter_b: "Ozzy Diaz",
    weight_class: "Middleweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc331-e2",
    event_id: "evt-ufc-331",
    fighter_a: "Edmen Shahbazyan",
    fighter_b: "Brunno Ferreira",
    weight_class: "Middleweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc331-e3",
    event_id: "evt-ufc-331",
    fighter_a: "Casey O'Neill",
    fighter_b: "Eduarda Moura",
    weight_class: "Women's Flyweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc331-e4",
    event_id: "evt-ufc-331",
    fighter_a: "Giga Chikadze",
    fighter_b: "Joanderson Brito",
    weight_class: "Featherweight",
    card_placement: "Early Prelims",
  },

  // --- Fight Night Rosas Main ---
  {
    fight_id: "fn-rosas-m1",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Raul Rosas Jr.",
    fighter_b: "Raoni Barcelos",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  {
    fight_id: "fn-rosas-m2",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Rodolfo Vieira",
    fighter_b: "Robert Bryczek",
    weight_class: "Middleweight",
    card_placement: "Main",
  },
  {
    fight_id: "fn-rosas-m3",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Brady Hiestand",
    fighter_b: "Rinya Nakamura",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  {
    fight_id: "fn-rosas-m4",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Mehemmedeli Osmanli",
    fighter_b: "Ilimbek Akylbek",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  {
    fight_id: "fn-rosas-m5",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Melissa Amaya",
    fighter_b: "Valesca Machado",
    weight_class: "Women's Strawweight",
    card_placement: "Main",
  },
  {
    fight_id: "fn-rosas-m6",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Josiah Harrell",
    fighter_b: "Elves Brener",
    weight_class: "Lightweight",
    card_placement: "Main",
  },
  // --- Fight Night Rosas Prelims ---
  {
    fight_id: "fn-rosas-p1",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Rodolfo Bellato",
    fighter_b: "Christian Edwards",
    weight_class: "Light Heavyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "fn-rosas-p2",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Montel Jackson",
    fighter_b: "Ricky Simon",
    weight_class: "Bantamweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "fn-rosas-p3",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "John Castaneda",
    fighter_b: "Alatengheili",
    weight_class: "Bantamweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "fn-rosas-p4",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Norma Dumont",
    fighter_b: "Ailin Perez",
    weight_class: "Women's Bantamweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "fn-rosas-p5",
    event_id: "evt-fn-rosas-barcelos",
    fighter_a: "Vanessa Demopoulos",
    fighter_b: "Yazmin Jauregui",
    weight_class: "Women's Strawweight",
    card_placement: "Prelims",
  },

  // --- UFC 332 Main ---
  {
    fight_id: "ufc332-m1",
    event_id: "evt-ufc-332",
    fighter_a: "Natalia Silva",
    fighter_b: "Wang Cong",
    weight_class: "Women's Flyweight Title",
    card_placement: "Main",
  },
  {
    fight_id: "ufc332-m2",
    event_id: "evt-ufc-332",
    fighter_a: "Deiveson Figueiredo",
    fighter_b: "Payton Talbott",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc332-m3",
    event_id: "evt-ufc-332",
    fighter_a: "King Green",
    fighter_b: "Esteban Ribovics",
    weight_class: "Lightweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc332-m4",
    event_id: "evt-ufc-332",
    fighter_a: "Roberto Soldic",
    fighter_b: "Khaos Williams",
    weight_class: "Welterweight",
    card_placement: "Main",
  },
  {
    fight_id: "ufc332-m5",
    event_id: "evt-ufc-332",
    fighter_a: "Ateba Gautier",
    fighter_b: "Roman Kopylov",
    weight_class: "Middleweight",
    card_placement: "Main",
  },
  // --- UFC 332 Prelims ---
  {
    fight_id: "ufc332-p1",
    event_id: "evt-ufc-332",
    fighter_a: "Imanol Rodriguez",
    fighter_b: "Alden Coria",
    weight_class: "Flyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "ufc332-p2",
    event_id: "evt-ufc-332",
    fighter_a: "Damian Pinas",
    fighter_b: "Andrey Pulyaev",
    weight_class: "Middleweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "ufc332-p3",
    event_id: "evt-ufc-332",
    fighter_a: "Marcus McGhee",
    fighter_b: "Benardo Sopaj",
    weight_class: "Bantamweight",
    card_placement: "Prelims",
  },
  // --- UFC 332 Early Prelims ---
  {
    fight_id: "ufc332-e1",
    event_id: "evt-ufc-332",
    fighter_a: "Johnny Walker",
    fighter_b: "Mick Parkin",
    weight_class: "Heavyweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc332-e2",
    event_id: "evt-ufc-332",
    fighter_a: "Rafael Dos Anjos",
    fighter_b: "Alexander Hernandez",
    weight_class: "Lightweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc332-e3",
    event_id: "evt-ufc-332",
    fighter_a: "Marvin Vettori",
    fighter_b: "Ismail Naurdiev",
    weight_class: "Middleweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "ufc332-e4",
    event_id: "evt-ufc-332",
    fighter_a: "Court McGee",
    fighter_b: "Eric Nolan",
    weight_class: "Welterweight",
    card_placement: "Early Prelims",
  },
];

export const predictions: Prediction[] = [
  // UFC 331 — LA, Standard 30ft, low altitude
  {
    fight_id: "ufc331-m1",
    predicted_winner: "Alexandre Pantoja",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Pantoja's championship experience and submission chains travel well in a Standard 30ft Octagon where he can reset entries.",
      "Van's pace and youth are real, but Pantoja's top control and mat IQ remain the cleaner path over five rounds.",
      "Low LA altitude keeps this a pure skill fight — edge to the champion's proven flyweight toolkit.",
    ],
  },
  {
    fight_id: "ufc331-m2",
    predicted_winner: "Arman Tsarukyan",
    confidence_score: 8,
    reasoning_summary: [
      "Research notes: Tsarukyan's wrestling pressure and cage-cutting should dominate in open 30ft space against a striker-first outlook.",
      "Ruffy brings power and finishing heat, but historically struggles when forced into extended clinch cycles.",
      "Style matchup favors Arman's chain takedowns and control time on a decision or late finish path.",
    ],
  },
  {
    fight_id: "ufc331-m3",
    predicted_winner: "Patricio Pitbull",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Pitbull's veteran boxing and counter timing travel well against Choi's explosive early blitzes.",
      "Choi is live for a highlight KO in the pocket; larger cage gives Pitbull more exit lanes after exchanges.",
      "Expect a competitive striking fight with Pitbull banking rounds two and three on volume and composure.",
    ],
  },
  {
    fight_id: "ufc331-m4",
    predicted_winner: "Renato Moicano",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Moicano's boxing volume and cardio should outwork Ortega if the fight stays vertical.",
      "Ortega's submission threat remains constant in scrambles — Moicano must avoid extended clinch traps.",
      "30ft cage favors Moicano's kicking range and lateral movement over Ortega's pressure entries.",
    ],
  },
  {
    fight_id: "ufc331-m5",
    predicted_winner: "Alonzo Menifield",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Menifield's power and early-round finishing instinct edge a less-proven LHW outlook.",
      "Baraniewski athletic and improving, but Menifield's UFC pace experience is the separator.",
      "Open cage may help Baraniewski circle, yet Menifield's blitzes create high finish equity early.",
    ],
  },
  {
    fight_id: "ufc331-p1",
    predicted_winner: "Gable Steveson",
    confidence_score: 8,
    reasoning_summary: [
      "Research notes: Olympic wrestling pedigree projects elite control and mat returns in a 30ft cage.",
      "Sharaf must keep it standing and land power; Steveson's takedown volume should smother that path.",
      "Style analysis favors chain wrestling and top pressure over three rounds for Steveson.",
    ],
  },
  {
    fight_id: "ufc331-p2",
    predicted_winner: "Marlon Vera",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Vera's calf kicks and late-round durability historically punish volume strikers.",
      "Jourdain's boxing and creativity keep early rounds competitive with finish risk both ways.",
      "Larger cage helps Jourdain's movement, but Vera's body work and clinch dirty boxing age well.",
    ],
  },
  {
    fight_id: "ufc331-p3",
    predicted_winner: "Tai Tuivasa",
    confidence_score: 5,
    reasoning_summary: [
      "Research notes: Tuivasa's power and pressure create early KO equity against Despaigne's kickboxing.",
      "Despaigne dangerous at range with length; high-variance heavyweight striking matchup.",
      "30ft Octagon slightly favors Despaigne's kicking distance — confidence stays moderate on Tuivasa.",
    ],
  },
  {
    fight_id: "ufc331-p4",
    predicted_winner: "Michael Aswell Jr.",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Aswell's explosiveness and finishing instinct project well against a developing featherweight.",
      "Yoo durable and technical; expect competitive early exchanges before pace separates them.",
      "Open cage rewards whoever wins the first wrestling exchange — slight edge to Aswell's athleticism.",
    ],
  },
  {
    fight_id: "ufc331-e1",
    predicted_winner: "Ryan Gandra",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Gandra's grappling-first approach should find entries in a spacious 30ft cage.",
      "Diaz brings striking volume; Gandra needs to close distance without eating clean counters.",
      "Style matchup leans wrestling control time for Gandra over three rounds.",
    ],
  },
  {
    fight_id: "ufc331-e2",
    predicted_winner: "Edmen Shahbazyan",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Shahbazyan's kickboxing power remains dangerous when he dictates range.",
      "Ferreira's grappling and pressure are the path if he can force clinch cycles early.",
      "Larger cage favors Shahbazyan's kicking arsenal and lateral resets between combinations.",
    ],
  },
  {
    fight_id: "ufc331-e3",
    predicted_winner: "Casey O'Neill",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: O'Neill's wrestling pressure and top control historically bank rounds reliably.",
      "Moura athletic and improving on the feet; must stuff early shots to stay competitive.",
      "30ft cage still allows O'Neill to cut angles and chain mat returns effectively.",
    ],
  },
  {
    fight_id: "ufc331-e4",
    predicted_winner: "Giga Chikadze",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Chikadze's kicking range and counter timing thrive in a Standard 30ft Octagon.",
      "Brito's pressure wrestling is the live path; Giga must keep the fight at kicking distance.",
      "Style analysis favors Chikadze's striking economy if he avoids extended clinch wars.",
    ],
  },

  // Fight Night Rosas — Apex 25ft, ~2000ft altitude
  {
    fight_id: "fn-rosas-m1",
    predicted_winner: "Raul Rosas Jr.",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Apex 25ft cage compresses space — ideal for Rosas Jr.'s wrestling chains and mat returns.",
      "Barcelos is a tough veteran striker who will test Rosas on the feet early.",
      "Smaller cage reduces Barcelos' circling exits after stuffing shots; edge to the younger grappler.",
    ],
  },
  {
    fight_id: "fn-rosas-m2",
    predicted_winner: "Rodolfo Vieira",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Vieira's world-class BJJ is amplified in a 25ft cage where scramble exits are limited.",
      "Bryczek's striking power keeps early KO risk live; Vieira must close distance cleanly.",
      "Apex altitude (~2000ft) is mild — grappling control time should decide this for Vieira.",
    ],
  },
  {
    fight_id: "fn-rosas-m3",
    predicted_winner: "Rinya Nakamura",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Nakamura's wrestling pace and pressure thrive when lateral space is compressed.",
      "Hiestand durable with solid wrestling of his own — expect a grindy control battle.",
      "Apex cage favors the fighter who wins the first clinch; slight edge to Nakamura's explosiveness.",
    ],
  },
  {
    fight_id: "fn-rosas-m4",
    predicted_winner: "Mehemmedeli Osmanli",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Osmanli's well-rounded pressure should dictate in a smaller cage environment.",
      "Akylbek athletic and dangerous on the counter; high variance bantamweight matchup.",
      "Apex space amplifies whoever lands the first meaningful wrestling sequence.",
    ],
  },
  {
    fight_id: "fn-rosas-m5",
    predicted_winner: "Melissa Amaya",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Amaya's pace and striking volume project well over three rounds at Apex.",
      "Machado brings grappling threat; Amaya must keep the fight vertical in tight space.",
      "Mild Vegas altitude shouldn't swing cardio — edge to Amaya's striking economy.",
    ],
  },
  {
    fight_id: "fn-rosas-m6",
    predicted_winner: "Elves Brener",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Brener's experience and finishing instinct edge a rising lightweight prospect.",
      "Harrell athletic with wrestling upside; Apex cage may help him force clinch entries.",
      "Slight research lean to Brener's UFC pace familiarity and striking depth.",
    ],
  },
  {
    fight_id: "fn-rosas-p1",
    predicted_winner: "Rodolfo Bellato",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Bellato's power and pressure create early finish equity at light heavyweight.",
      "Edwards durable and crafty; must survive the first-round storm in compressed Apex space.",
      "25ft cage favors Bellato's forward pressure over Edwards' reset circling.",
    ],
  },
  {
    fight_id: "fn-rosas-p2",
    predicted_winner: "Montel Jackson",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Jackson's length, kicks, and cardio should outpoint Simon's wrestling entries.",
      "Simon is a veteran wrestler who thrives in smaller cages — must respect his chain shots.",
      "Style matchup leans Jackson if he stuffs the first level change and keeps kicks chopping.",
    ],
  },
  {
    fight_id: "fn-rosas-p3",
    predicted_winner: "John Castaneda",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Castaneda's volume boxing and pace travel well in Apex's tight geometry.",
      "Alatengheili durable with power; expect competitive pocket exchanges early.",
      "Slight edge to Castaneda's experience managing three-round striking wars.",
    ],
  },
  {
    fight_id: "fn-rosas-p4",
    predicted_winner: "Norma Dumont",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Dumont's length and kicking game should control range even in a 25ft cage.",
      "Perez brings grappling pressure; Dumont must keep fights vertical and bank striking rounds.",
      "Apex space slightly helps Perez close distance, but Dumont's reach still projects as decisive.",
    ],
  },
  {
    fight_id: "fn-rosas-p5",
    predicted_winner: "Yazmin Jauregui",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Jauregui's power boxing thrives when opponents are forced into the pocket.",
      "Demopoulos crafty with submissions; must drag this to the mat early to neutralize power.",
      "Apex cage amplifies Jauregui's pressure — research lean to a striking finish or clear decision.",
    ],
  },

  // UFC 332 — Salt Lake City, Standard 30ft, high altitude 4226ft
  {
    fight_id: "ufc332-m1",
    predicted_winner: "Natalia Silva",
    confidence_score: 8,
    reasoning_summary: [
      "Research notes: Silva's technical striking and pace have looked a level above at women's flyweight.",
      "Wang Cong dangerous and improving, but Silva's output and defense project cleaner over five rounds.",
      "Salt Lake City altitude (~4200ft) rewards efficient strikers — Silva's economy is a clear asset.",
    ],
  },
  {
    fight_id: "ufc332-m2",
    predicted_winner: "Deiveson Figueiredo",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Figueiredo's clinch dirty boxing and power still create finish equity at bantamweight.",
      "Talbott's speed and athleticism are real; larger cage helps him circle and reset.",
      "Altitude may punish extended scramble wars — slight edge to Figgy's championship experience.",
    ],
  },
  {
    fight_id: "ufc332-m3",
    predicted_winner: "Esteban Ribovics",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Ribovics' volume striking and cardio may age better than Green's explosive bursts at altitude.",
      "King Green always live for early power; must respect the first-round KO path.",
      "4226ft altitude historically blunts pressure fighters late — lean Ribovics if it goes deep.",
    ],
  },
  {
    fight_id: "ufc332-m4",
    predicted_winner: "Khaos Williams",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Williams' one-shot power keeps finish equity high in any cage size.",
      "Soldic durable with boxing fundamentals; competitive welterweight striking war expected.",
      "Altitude + power matchup favors whoever lands clean first — slight lean to Williams' explosiveness.",
    ],
  },
  {
    fight_id: "ufc332-m5",
    predicted_winner: "Roman Kopylov",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Kopylov's kickboxing depth and body work travel well in a Standard 30ft Octagon.",
      "Gautier athletic and dangerous early; must close distance without eating counters.",
      "High altitude may slow mid-fight pace — edge to Kopylov's striking economy and range control.",
    ],
  },
  {
    fight_id: "ufc332-p1",
    predicted_winner: "Alden Coria",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Coria's wrestling pressure should find entries even in a larger cage.",
      "Rodriguez brings striking volume; competitive flyweight outlook either way.",
      "Altitude favors the fighter who spends less time scrambling — lean Coria's positional control.",
    ],
  },
  {
    fight_id: "ufc332-p2",
    predicted_winner: "Damian Pinas",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Pinas' athleticism and power create early finish equity at middleweight.",
      "Pulyaev durable with grappling upside; must survive the first-round storm.",
      "30ft cage plus altitude makes this a pacing puzzle — slight edge to Pinas' explosiveness.",
    ],
  },
  {
    fight_id: "ufc332-p3",
    predicted_winner: "Marcus McGhee",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: McGhee's finishing power and pressure have looked sharp at bantamweight.",
      "Sopaj tough and improving; must keep range and avoid extended pocket wars.",
      "Open cage helps Sopaj circle, but McGhee's blitzes and altitude cardio lean the research pick.",
    ],
  },
  {
    fight_id: "ufc332-e1",
    predicted_winner: "Mick Parkin",
    confidence_score: 6,
    reasoning_summary: [
      "Research notes: Parkin's size, wrestling, and composure project well against Walker's highlight athleticism.",
      "Walker always live for a spinning finish; high variance heavyweight early.",
      "Altitude may blunt Walker's explosive bursts late — lean Parkin's control path if it extends.",
    ],
  },
  {
    fight_id: "ufc332-e2",
    predicted_winner: "Rafael Dos Anjos",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: RDA's veteran pace, calf kicks, and wrestling still travel at lightweight.",
      "Hernandez dangerous with power and pressure; must force early exchanges before cardio fades.",
      "Salt Lake altitude historically rewards experienced grinders — edge to Dos Anjos' round management.",
    ],
  },
  {
    fight_id: "ufc332-e3",
    predicted_winner: "Marvin Vettori",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: Vettori's volume pressure and durability have aged into a reliable decision machine.",
      "Naurdiev technical and dangerous on the counter; competitive middleweight striking.",
      "High altitude may cut output late — Vettori's proven cardio edge is the research separator.",
    ],
  },
  {
    fight_id: "ufc332-e4",
    predicted_winner: "Court McGee",
    confidence_score: 7,
    reasoning_summary: [
      "Research notes: McGee is a Salt Lake hometown veteran — altitude familiarity is a real factor here.",
      "Nolan tough and improving; must match McGee's pace over three rounds at 4200ft.",
      "Style analysis favors McGee's pressure wrestling and cardio in front of a home crowd.",
    ],
  },
];

export function getEventById(eventId: string): Event | undefined {
  return events.find((e) => e.event_id === eventId);
}

export function getFightsByEvent(eventId: string): Fight[] {
  return fights.filter((f) => f.event_id === eventId);
}

export function getPredictionByFight(fightId: string): Prediction | undefined {
  return predictions.find((p) => p.fight_id === fightId);
}
