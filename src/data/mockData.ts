import type { Event, Fight, Prediction } from "../types";

export const events: Event[] = [
  {
    event_id: "evt-denver-fn",
    name: "UFC Fight Night: Denver",
    date: "2026-10-11",
    venue: "Ball Arena",
    location: "Denver, Colorado, USA",
    altitude: 5280,
    cage_size: "Standard 30ft",
  },
  {
    event_id: "evt-apex-fn",
    name: "UFC Fight Night: Apex",
    date: "2026-10-25",
    venue: "UFC APEX",
    location: "Las Vegas, Nevada, USA",
    altitude: 2001,
    cage_size: "Apex 25ft",
  },
  {
    event_id: "evt-cdmx-fn",
    name: "UFC Fight Night: Mexico City",
    date: "2026-11-15",
    venue: "Arena Ciudad de México",
    location: "Mexico City, Mexico",
    altitude: 7350,
    cage_size: "Standard 30ft",
  },
];

export const fights: Fight[] = [
  // --- Denver Main ---
  {
    fight_id: "den-m1",
    event_id: "evt-denver-fn",
    fighter_a: "Sean O'Malley",
    fighter_b: "Merab Dvalishvili",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  {
    fight_id: "den-m2",
    event_id: "evt-denver-fn",
    fighter_a: "Bo Nickal",
    fighter_b: "Marvin Vettori",
    weight_class: "Middleweight",
    card_placement: "Main",
  },
  {
    fight_id: "den-m3",
    event_id: "evt-denver-fn",
    fighter_a: "Erin Blanchfield",
    fighter_b: "Maycee Barber",
    weight_class: "Women's Flyweight",
    card_placement: "Main",
  },
  {
    fight_id: "den-m4",
    event_id: "evt-denver-fn",
    fighter_a: "Cub Swanson",
    fighter_b: "Dan Ige",
    weight_class: "Featherweight",
    card_placement: "Main",
  },
  {
    fight_id: "den-m5",
    event_id: "evt-denver-fn",
    fighter_a: "Cody Garbrandt",
    fighter_b: "Deiveson Figueiredo",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  // --- Denver Prelims ---
  {
    fight_id: "den-p1",
    event_id: "evt-denver-fn",
    fighter_a: "Andre Fili",
    fighter_b: "Calvin Kattar",
    weight_class: "Featherweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "den-p2",
    event_id: "evt-denver-fn",
    fighter_a: "Tim Elliott",
    fighter_b: "Tagir Ulanbekov",
    weight_class: "Flyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "den-p3",
    event_id: "evt-denver-fn",
    fighter_a: "Jessica Andrade",
    fighter_b: "Marina Rodriguez",
    weight_class: "Women's Strawweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "den-p4",
    event_id: "evt-denver-fn",
    fighter_a: "Drew Dober",
    fighter_b: "Rafael Fiziev",
    weight_class: "Lightweight",
    card_placement: "Prelims",
  },
  // --- Denver Early Prelims ---
  {
    fight_id: "den-e1",
    event_id: "evt-denver-fn",
    fighter_a: "Cory Sandhagen",
    fighter_b: "Song Yadong",
    weight_class: "Bantamweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "den-e2",
    event_id: "evt-denver-fn",
    fighter_a: "Natalia Silva",
    fighter_b: "Jasmine Jasudavicius",
    weight_class: "Women's Flyweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "den-e3",
    event_id: "evt-denver-fn",
    fighter_a: "Joaquin Buckley",
    fighter_b: "Roman Dolidze",
    weight_class: "Middleweight",
    card_placement: "Early Prelims",
  },

  // --- Apex Main ---
  {
    fight_id: "apx-m1",
    event_id: "evt-apex-fn",
    fighter_a: "Islam Makhachev",
    fighter_b: "Arman Tsarukyan",
    weight_class: "Lightweight",
    card_placement: "Main",
  },
  {
    fight_id: "apx-m2",
    event_id: "evt-apex-fn",
    fighter_a: "Alexandre Pantoja",
    fighter_b: "Brandon Royval",
    weight_class: "Flyweight",
    card_placement: "Main",
  },
  {
    fight_id: "apx-m3",
    event_id: "evt-apex-fn",
    fighter_a: "Ilia Topuria",
    fighter_b: "Max Holloway",
    weight_class: "Featherweight",
    card_placement: "Main",
  },
  {
    fight_id: "apx-m4",
    event_id: "evt-apex-fn",
    fighter_a: "Zhang Weili",
    fighter_b: "Tatiana Suarez",
    weight_class: "Women's Strawweight",
    card_placement: "Main",
  },
  {
    fight_id: "apx-m5",
    event_id: "evt-apex-fn",
    fighter_a: "Khamzat Chimaev",
    fighter_b: "Dricus Du Plessis",
    weight_class: "Middleweight",
    card_placement: "Main",
  },
  // --- Apex Prelims ---
  {
    fight_id: "apx-p1",
    event_id: "evt-apex-fn",
    fighter_a: "Charles Oliveira",
    fighter_b: "Beneil Dariush",
    weight_class: "Lightweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "apx-p2",
    event_id: "evt-apex-fn",
    fighter_a: "Petr Yan",
    fighter_b: "Marlon Vera",
    weight_class: "Bantamweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "apx-p3",
    event_id: "evt-apex-fn",
    fighter_a: "Yair Rodriguez",
    fighter_b: "Josh Emmett",
    weight_class: "Featherweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "apx-p4",
    event_id: "evt-apex-fn",
    fighter_a: "Manon Fiorot",
    fighter_b: "Rose Namajunas",
    weight_class: "Women's Flyweight",
    card_placement: "Prelims",
  },
  // --- Apex Early Prelims ---
  {
    fight_id: "apx-e1",
    event_id: "evt-apex-fn",
    fighter_a: "Paddy Pimblett",
    fighter_b: "Michael Chandler",
    weight_class: "Lightweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "apx-e2",
    event_id: "evt-apex-fn",
    fighter_a: "Sodiq Yusuff",
    fighter_b: "Arnold Allen",
    weight_class: "Featherweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "apx-e3",
    event_id: "evt-apex-fn",
    fighter_a: "Umar Nurmagomedov",
    fighter_b: "Rob Font",
    weight_class: "Bantamweight",
    card_placement: "Early Prelims",
  },

  // --- Mexico City Main ---
  {
    fight_id: "cdmx-m1",
    event_id: "evt-cdmx-fn",
    fighter_a: "Brandon Moreno",
    fighter_b: "Amir Albazi",
    weight_class: "Flyweight",
    card_placement: "Main",
  },
  {
    fight_id: "cdmx-m2",
    event_id: "evt-cdmx-fn",
    fighter_a: "Yair Rodriguez",
    fighter_b: "Brian Ortega",
    weight_class: "Featherweight",
    card_placement: "Main",
  },
  {
    fight_id: "cdmx-m3",
    event_id: "evt-cdmx-fn",
    fighter_a: "Alexa Grasso",
    fighter_b: "Valentina Shevchenko",
    weight_class: "Women's Flyweight",
    card_placement: "Main",
  },
  {
    fight_id: "cdmx-m4",
    event_id: "evt-cdmx-fn",
    fighter_a: "Kelvin Gastelum",
    fighter_b: "Nassourdine Imavov",
    weight_class: "Middleweight",
    card_placement: "Main",
  },
  {
    fight_id: "cdmx-m5",
    event_id: "evt-cdmx-fn",
    fighter_a: "Raul Rosas Jr.",
    fighter_b: "Ricky Simon",
    weight_class: "Bantamweight",
    card_placement: "Main",
  },
  // --- Mexico City Prelims ---
  {
    fight_id: "cdmx-p1",
    event_id: "evt-cdmx-fn",
    fighter_a: "Jesus Ulloa",
    fighter_b: "Daniel Zellhuber",
    weight_class: "Lightweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "cdmx-p2",
    event_id: "evt-cdmx-fn",
    fighter_a: "Loopy Godinez",
    fighter_b: "Amanda Ribas",
    weight_class: "Women's Strawweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "cdmx-p3",
    event_id: "evt-cdmx-fn",
    fighter_a: "Edgar Chairez",
    fighter_b: "Tatsuro Taira",
    weight_class: "Flyweight",
    card_placement: "Prelims",
  },
  {
    fight_id: "cdmx-p4",
    event_id: "evt-cdmx-fn",
    fighter_a: "Manuel Torres",
    fighter_b: "Chris Duncan",
    weight_class: "Lightweight",
    card_placement: "Prelims",
  },
  // --- Mexico City Early Prelims ---
  {
    fight_id: "cdmx-e1",
    event_id: "evt-cdmx-fn",
    fighter_a: "Josefine Knutsson",
    fighter_b: "Yazmin Jauregui",
    weight_class: "Women's Strawweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "cdmx-e2",
    event_id: "evt-cdmx-fn",
    fighter_a: "Ronaldo Rodriguez",
    fighter_b: "Fernando Padilla",
    weight_class: "Featherweight",
    card_placement: "Early Prelims",
  },
  {
    fight_id: "cdmx-e3",
    event_id: "evt-cdmx-fn",
    fighter_a: "Victor Henry",
    fighter_b: "Cristian Quinonez",
    weight_class: "Bantamweight",
    card_placement: "Early Prelims",
  },
];

export const predictions: Prediction[] = [
  // Denver
  {
    fight_id: "den-m1",
    predicted_winner: "Merab Dvalishvili",
    confidence_score: 8,
    reasoning_summary: [
      "Altitude favors relentless pace fighters; Merab's cardio is elite at mile-high.",
      "Wrestling volume and chain scrambling neutralize O'Malley's striking resets.",
      "O'Malley historically fades when forced into extended clinch exchanges.",
    ],
  },
  {
    fight_id: "den-m2",
    predicted_winner: "Bo Nickal",
    confidence_score: 6,
    reasoning_summary: [
      "Nickal's Olympic-level wrestling should control cage center in a 30ft Octagon.",
      "Vettori's durability and volume keep this competitive over three rounds.",
      "Altitude may blunt Vettori's late-round pressure more than Nickal's explosiveness.",
    ],
  },
  {
    fight_id: "den-m3",
    predicted_winner: "Erin Blanchfield",
    confidence_score: 7,
    reasoning_summary: [
      "Blanchfield's top pressure and submissions thrive in larger cages with space to shoot.",
      "Barber needs early striking exchanges; Denver air may slow her burst.",
      "Recent grappling improvements give Blanchfield a clear path to decision or finish.",
    ],
  },
  {
    fight_id: "den-m4",
    predicted_winner: "Dan Ige",
    confidence_score: 6,
    reasoning_summary: [
      "Ige's power and pace have aged better than Swanson's volume boxing.",
      "Swanson still dangerous early; Ige should look to bank rounds two and three.",
      "Home-crowd energy in Denver could push Ige's pace higher.",
    ],
  },
  {
    fight_id: "den-m5",
    predicted_winner: "Deiveson Figueiredo",
    confidence_score: 7,
    reasoning_summary: [
      "Figueiredo's clinch dirty boxing and power edge Garbrandt's timing.",
      "Altitude may punish Garbrandt's explosive style if the fight extends.",
      "Figgy's experience at championship pace is the separator.",
    ],
  },
  {
    fight_id: "den-p1",
    predicted_winner: "Calvin Kattar",
    confidence_score: 6,
    reasoning_summary: [
      "Kattar's boxing fundamentals travel well against Fili's unorthodox kicks.",
      "Fili dangerous on the counter; Kattar must avoid extended kicking range.",
      "Cardio edge likely decides a competitive three-rounder.",
    ],
  },
  {
    fight_id: "den-p2",
    predicted_winner: "Tagir Ulanbekov",
    confidence_score: 7,
    reasoning_summary: [
      "Dagestani wrestling control should smother Elliott's scramble chaos.",
      "Elliott dangerous in scrambles but historically loses control time battles.",
      "Altitude favors the fighter who spends less time scrambling for air.",
    ],
  },
  {
    fight_id: "den-p3",
    predicted_winner: "Jessica Andrade",
    confidence_score: 6,
    reasoning_summary: [
      "Andrade's power wrestling and clinch work overwhelm at strawweight.",
      "Rodriguez needs distance and volume; Andrade will force the pocket.",
      "Close on the feet early, Andrade likely takes over mid-fight.",
    ],
  },
  {
    fight_id: "den-p4",
    predicted_winner: "Rafael Fiziev",
    confidence_score: 7,
    reasoning_summary: [
      "Fiziev's kickboxing depth and power check Dober's pressure.",
      "Dober always live for a finish; Fiziev must respect early exchanges.",
      "Mile-high altitude could cut Dober's famous late-round gas tank.",
    ],
  },
  {
    fight_id: "den-e1",
    predicted_winner: "Cory Sandhagen",
    confidence_score: 7,
    reasoning_summary: [
      "Sandhagen's movement and kicking arsenal thrive in a 30ft cage.",
      "Song's pressure is real but Sandhagen has solved similar styles before.",
      "Altitude rewards Sandhagen's efficient striking economy.",
    ],
  },
  {
    fight_id: "den-e2",
    predicted_winner: "Natalia Silva",
    confidence_score: 8,
    reasoning_summary: [
      "Silva's technical striking and pace have looked a level above.",
      "Jasudavicius durable but struggles to match Silva's output.",
      "Expect volume decision or late finish for Silva.",
    ],
  },
  {
    fight_id: "den-e3",
    predicted_winner: "Joaquin Buckley",
    confidence_score: 6,
    reasoning_summary: [
      "Buckley's athleticism and power punching create finish equity.",
      "Dolidze's grappling is the path if he can close distance.",
      "Open cage favors Buckley's kicking range and scramble explosiveness.",
    ],
  },

  // Apex
  {
    fight_id: "apx-m1",
    predicted_winner: "Islam Makhachev",
    confidence_score: 8,
    reasoning_summary: [
      "25ft Apex cage compresses space — ideal for Islam's clinch and wrestling.",
      "Tsarukyan's pressure is elite but Islam's top control remains championship-tier.",
      "Smaller cage reduces Tsarukyan's circling exits after failed entries.",
    ],
  },
  {
    fight_id: "apx-m2",
    predicted_winner: "Alexandre Pantoja",
    confidence_score: 7,
    reasoning_summary: [
      "Pantoja's submission threat and pace punish Royval's wild scrambles.",
      "Apex cage limits Royval's lateral escape routes.",
      "Championship experience gives Pantoja the edge in a close decision path.",
    ],
  },
  {
    fight_id: "apx-m3",
    predicted_winner: "Ilia Topuria",
    confidence_score: 8,
    reasoning_summary: [
      "Topuria's boxing power has finished elite competition cleanly.",
      "Holloway's volume is legendary but Apex space favors power counters.",
      "Topuria's wrestling insurance covers any Holloway late-round surge.",
    ],
  },
  {
    fight_id: "apx-m4",
    predicted_winner: "Zhang Weili",
    confidence_score: 7,
    reasoning_summary: [
      "Weili's well-rounded game matches up well with Suarez's wrestling.",
      "Suarez dangerous early with grappling; Weili strong if it stays standing.",
      "Apex cage may help Weili keep fights vertical with less lateral space.",
    ],
  },
  {
    fight_id: "apx-m5",
    predicted_winner: "Khamzat Chimaev",
    confidence_score: 7,
    reasoning_summary: [
      "Chimaev's early wrestling storm is amplified in a 25ft cage.",
      "Du Plessis durable and crafty but must survive the first round storm.",
      "If Khamzat gets dominant position early, finish equity is very high.",
    ],
  },
  {
    fight_id: "apx-p1",
    predicted_winner: "Charles Oliveira",
    confidence_score: 6,
    reasoning_summary: [
      "Oliveira's submission IQ remains elite against Dariush's grappling.",
      "Dariush dangerous on the feet and in chains; close stylistic matchup.",
      "Apex cage favors whoever wins the first clinch exchange.",
    ],
  },
  {
    fight_id: "apx-p2",
    predicted_winner: "Petr Yan",
    confidence_score: 7,
    reasoning_summary: [
      "Yan's technical boxing and calf kicks should dictate range.",
      "Vera's power and unorthodox attacks keep finish risk live.",
      "Smaller cage may help Yan cut off angles more effectively.",
    ],
  },
  {
    fight_id: "apx-p3",
    predicted_winner: "Yair Rodriguez",
    confidence_score: 6,
    reasoning_summary: [
      "Yair's creativity and kicking arsenal create highlight-reel finish paths.",
      "Emmett's power is a constant threat in pocket exchanges.",
      "Apex space is a wash — edge to Yair's dynamic offense.",
    ],
  },
  {
    fight_id: "apx-p4",
    predicted_winner: "Manon Fiorot",
    confidence_score: 7,
    reasoning_summary: [
      "Fiorot's striking volume and cardio should outpoint Namajunas.",
      "Rose's experience and timing keep early rounds competitive.",
      "Expect Fiorot to pull away with pressure in rounds two and three.",
    ],
  },
  {
    fight_id: "apx-e1",
    predicted_winner: "Paddy Pimblett",
    confidence_score: 5,
    reasoning_summary: [
      "Pimblett's grappling and size could neutralize Chandler's explosiveness.",
      "Chandler live for an early KO; high variance matchup.",
      "Apex cage amplifies Chandler's blitzes — confidence stays moderate.",
    ],
  },
  {
    fight_id: "apx-e2",
    predicted_winner: "Arnold Allen",
    confidence_score: 6,
    reasoning_summary: [
      "Allen's well-rounded pressure edges Yusuff's counter striking.",
      "Yusuff dangerous early with boxing combinations.",
      "Allen's cardio and wrestling backup favor a decision path.",
    ],
  },
  {
    fight_id: "apx-e3",
    predicted_winner: "Umar Nurmagomedov",
    confidence_score: 8,
    reasoning_summary: [
      "Umar's wrestling control and striking polish are a tough puzzle.",
      "Font's boxing is crisp but historically struggles vs elite wrestlers.",
      "25ft Apex is a wrestling dream for chain rides and mat returns.",
    ],
  },

  // Mexico City
  {
    fight_id: "cdmx-m1",
    predicted_winner: "Brandon Moreno",
    confidence_score: 8,
    reasoning_summary: [
      "Home crowd and altitude experience give Moreno a massive edge.",
      "Albazi's wrestling is real but Moreno has solved similar styles.",
      "7350ft altitude punishes fighters not acclimated — Moreno thrives here.",
    ],
  },
  {
    fight_id: "cdmx-m2",
    predicted_winner: "Yair Rodriguez",
    confidence_score: 7,
    reasoning_summary: [
      "Yair in Mexico City is a different animal — pace and creativity spike.",
      "Ortega's submissions remain a constant threat in scrambles.",
      "Altitude favors Yair's kicking range over Ortega's clinch entries.",
    ],
  },
  {
    fight_id: "cdmx-m3",
    predicted_winner: "Valentina Shevchenko",
    confidence_score: 7,
    reasoning_summary: [
      "Shevchenko's technical mastery and cardio travel well to altitude.",
      "Grasso dangerous with boxing and late submissions; rematch intrigue.",
      "Expect Shevchenko to control range and bank rounds on volume.",
    ],
  },
  {
    fight_id: "cdmx-m4",
    predicted_winner: "Nassourdine Imavov",
    confidence_score: 7,
    reasoning_summary: [
      "Imavov's length and striking IQ should outpoint Gastelum.",
      "Gastelum still has power and grit but pace fades at altitude.",
      "Mexico City air is brutal for middleweight pressure fighters.",
    ],
  },
  {
    fight_id: "cdmx-m5",
    predicted_winner: "Raul Rosas Jr.",
    confidence_score: 7,
    reasoning_summary: [
      "Home-crowd phenom with improving wrestling and finishing instinct.",
      "Simon is a tough veteran wrestler who will test Rosas' maturity.",
      "Altitude + crowd energy tilt a close fight toward Rosas Jr.",
    ],
  },
  {
    fight_id: "cdmx-p1",
    predicted_winner: "Daniel Zellhuber",
    confidence_score: 6,
    reasoning_summary: [
      "Zellhuber's length and kicking game suit the larger Octagon.",
      "Ulloa brings local pressure; expect a competitive striking battle.",
      "Slight edge to Zellhuber's technical polish at altitude.",
    ],
  },
  {
    fight_id: "cdmx-p2",
    predicted_winner: "Amanda Ribas",
    confidence_score: 6,
    reasoning_summary: [
      "Ribas' experience and well-rounded skillset edge Godinez.",
      "Godinez dangerous with wrestling pressure in front of home fans.",
      "Expect a grind; Ribas' cardio should hold up better late.",
    ],
  },
  {
    fight_id: "cdmx-p3",
    predicted_winner: "Tatsuro Taira",
    confidence_score: 8,
    reasoning_summary: [
      "Taira's grappling and pace have looked next-level at flyweight.",
      "Chairez athletic but Taira's top control should dominate.",
      "Altitude may slow scramble wars — favors Taira's positional control.",
    ],
  },
  {
    fight_id: "cdmx-p4",
    predicted_winner: "Manuel Torres",
    confidence_score: 7,
    reasoning_summary: [
      "Torres' finishing power and home energy are a dangerous combo.",
      "Duncan tough and crafty but Torres has looked explosive lately.",
      "Expect early fireworks; Torres favored to find the finish.",
    ],
  },
  {
    fight_id: "cdmx-e1",
    predicted_winner: "Yazmin Jauregui",
    confidence_score: 7,
    reasoning_summary: [
      "Jauregui's power boxing thrives with home-crowd adrenaline.",
      "Knutsson technical and durable but may struggle with power shots.",
      "Altitude + aggression favor Jauregui's early pressure.",
    ],
  },
  {
    fight_id: "cdmx-e2",
    predicted_winner: "Fernando Padilla",
    confidence_score: 6,
    reasoning_summary: [
      "Padilla's unorthodox striking creates awkward looks.",
      "Rodriguez athletic and improving; competitive regional feel.",
      "Slight edge to Padilla's experience in UFC pace.",
    ],
  },
  {
    fight_id: "cdmx-e3",
    predicted_winner: "Cristian Quinonez",
    confidence_score: 6,
    reasoning_summary: [
      "Quinonez's volume boxing should outwork Henry over three rounds.",
      "Henry's power and dirty boxing keep knockout equity live.",
      "Home altitude advantage tips a razor-thin striking matchup.",
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
