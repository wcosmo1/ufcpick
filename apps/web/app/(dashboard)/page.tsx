import { EventList } from "@/components/events/EventList";

export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold">Upcoming events</h2>
        <p className="text-sm text-muted-foreground">
          Chronological — tap an event for card sections and research.
        </p>
      </div>
      <EventList />
    </section>
  );
}
