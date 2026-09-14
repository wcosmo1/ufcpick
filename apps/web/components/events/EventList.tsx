"use client";

import { useQuery } from "@tanstack/react-query";
import { EventCard } from "./EventCard";
import type { MockEvent } from "@/lib/mock-data";

async function fetchEvents(): Promise<MockEvent[]> {
  const res = await fetch("/api/events");
  if (!res.ok) throw new Error("Failed to load events");
  return res.json();
}

export function EventList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-28 animate-pulse rounded-lg border border-border bg-muted/30"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-sm text-destructive">
        Could not load events. Try refreshing.
      </p>
    );
  }

  if (!data?.length) {
    return <p className="text-sm text-muted-foreground">No upcoming events.</p>;
  }

  return (
    <div className="space-y-3">
      {data.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
