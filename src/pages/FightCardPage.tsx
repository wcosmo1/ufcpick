import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getEventById,
  getFightsByEvent,
  getPredictionByFight,
} from "../data/mockData";
import { FightRow } from "../components/FightRow";
import { ResearchModal } from "../components/ResearchModal";
import type { CardPlacement, Fight, Prediction } from "../types";

const SECTIONS: CardPlacement[] = ["Main", "Prelims", "Early Prelims"];

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function FightCardPage() {
  const { eventId } = useParams<{ eventId: string }>();
  const event = eventId ? getEventById(eventId) : undefined;
  const eventFights = useMemo(
    () => (eventId ? getFightsByEvent(eventId) : []),
    [eventId]
  );

  const [active, setActive] = useState<{
    fight: Fight;
    prediction: Prediction;
  } | null>(null);

  if (!event) {
    return (
      <div className="text-center py-16">
        <h1 className="font-display text-4xl tracking-wider text-cream mb-3">
          Event Not Found
        </h1>
        <Link
          to="/"
          className="font-heading text-sm uppercase tracking-widest text-blood hover:underline"
        >
          ← Back to Dashboard
        </Link>
      </div>
    );
  }

  const openResearch = (fight: Fight) => {
    // PHASE 2: call research engine here instead of reading mock predictions
    const prediction = getPredictionByFight(fight.fight_id);
    if (prediction) {
      setActive({ fight, prediction });
    }
  };

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-muted hover:text-cream transition-colors no-underline mb-6"
      >
        ← Back to Events
      </Link>

      <div className="mb-8">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-blood mb-2">
          Fight Card
        </p>
        <h1 className="font-display text-4xl sm:text-5xl tracking-[0.06em] text-cream leading-none mb-3">
          {event.name}
        </h1>
        <p className="font-heading text-sm uppercase tracking-wide text-muted mb-4">
          {formatDate(event.date)} · {event.venue} · {event.location}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="badge-cage inline-flex rounded px-2.5 py-1 font-heading text-[11px] font-semibold bg-blood/15 text-blood border border-blood/40">
            ▲ {event.altitude.toLocaleString()} ft
          </span>
          <span className="badge-cage inline-flex rounded px-2.5 py-1 font-heading text-[11px] font-semibold bg-surface-2 text-cream/80 border border-border">
            Cage · {event.cage_size}
          </span>
        </div>
      </div>

      <div className="space-y-10">
        {SECTIONS.map((section) => {
          const sectionFights = eventFights.filter(
            (f) => f.card_placement === section
          );
          if (sectionFights.length === 0) return null;
          return (
            <section key={section}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="font-display text-2xl tracking-[0.12em] text-cream">
                  {section.toUpperCase()}
                </h2>
                <div className="h-px flex-1 bg-border" />
                <span className="font-heading text-[10px] uppercase tracking-widest text-muted">
                  {sectionFights.length} fight
                  {sectionFights.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="space-y-2">
                {sectionFights.map((fight) => (
                  <FightRow
                    key={fight.fight_id}
                    fight={fight}
                    onResearch={openResearch}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {active && (
        <ResearchModal
          fight={active.fight}
          prediction={active.prediction}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}
