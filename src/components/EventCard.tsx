import { Link } from "react-router-dom";
import type { Event } from "../types";

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function altitudeLabel(ft: number) {
  if (ft >= 5000) return "High Altitude";
  if (ft >= 3000) return "Elevated";
  return "Sea-level-ish";
}

export function EventCard({ event }: { event: Event }) {
  const highAlt = event.altitude >= 5000;
  const isApex = event.cage_size === "Apex 25ft";

  return (
    <Link
      to={`/event/${event.event_id}`}
      className="block group no-underline rounded-lg border border-border bg-surface hover:border-blood/60 hover:bg-surface-2 transition-all duration-200 overflow-hidden"
    >
      <div className="h-1 w-full bg-gradient-to-r from-blood via-blood-dim to-transparent" />
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <h2 className="font-display text-3xl sm:text-4xl tracking-[0.06em] text-cream group-hover:text-blood transition-colors leading-none">
            {event.name}
          </h2>
          <span className="font-heading text-sm uppercase tracking-wider text-muted shrink-0">
            {formatDate(event.date)}
          </span>
        </div>

        <p className="font-heading text-sm uppercase tracking-wide text-muted mb-4">
          {event.venue} · {event.location}
        </p>

        <div className="flex flex-wrap gap-2">
          <span
            className={`badge-cage inline-flex items-center gap-1.5 rounded px-2.5 py-1 font-heading text-[11px] font-semibold ${
              highAlt
                ? "bg-blood/15 text-blood border border-blood/40"
                : "bg-surface-2 text-muted border border-border"
            }`}
          >
            <span aria-hidden>▲</span>
            {event.altitude.toLocaleString()} ft · {altitudeLabel(event.altitude)}
          </span>
          <span
            className={`badge-cage inline-flex items-center rounded px-2.5 py-1 font-heading text-[11px] font-semibold border ${
              isApex
                ? "bg-gold/10 text-gold border-gold/40"
                : "bg-surface-2 text-cream/80 border-border"
            }`}
          >
            Cage · {event.cage_size}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-muted group-hover:text-cream transition-colors">
            View Fight Card →
          </span>
        </div>
      </div>
    </Link>
  );
}
