import { events } from "../data/mockData";
import { EventCard } from "../components/EventCard";

export function EventDashboard() {
  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <div>
      <div className="mb-8">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-blood mb-2">
          Upcoming Cards
        </p>
        <h1 className="font-display text-5xl sm:text-6xl tracking-[0.08em] text-cream leading-none mb-3">
          EVENT DASHBOARD
        </h1>
        <p className="max-w-xl text-sm text-muted leading-relaxed">
          Browse upcoming UFC events with altitude and cage-size context. Open a
          card to research every matchup.
        </p>
      </div>

      <div className="grid gap-4">
        {sorted.map((event) => (
          <EventCard key={event.event_id} event={event} />
        ))}
      </div>
    </div>
  );
}
