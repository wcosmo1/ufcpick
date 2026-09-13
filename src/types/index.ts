export type CageSize = "Standard 30ft" | "Apex 25ft";
export type CardPlacement = "Main" | "Prelims" | "Early Prelims";

export type Event = {
  event_id: string;
  name: string;
  date: string; // ISO date
  venue: string;
  location: string;
  altitude: number; // feet
  cage_size: CageSize;
};

export type Fight = {
  fight_id: string;
  event_id: string;
  fighter_a: string;
  fighter_b: string;
  weight_class: string;
  card_placement: CardPlacement;
};

export type Prediction = {
  fight_id: string;
  predicted_winner: string;
  confidence_score: number; // 1-10
  reasoning_summary: string[]; // bullets
};
