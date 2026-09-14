"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Mountain, Ruler } from "lucide-react";
import { CardSection } from "@/components/fights/CardSection";
import { formatEventDate } from "@/lib/utils";
import type { MockEvent, MockFight, CardSection as Section } from "@/lib/mock-data";

interface EventDetailResponse {
  event: MockEvent;
  fights: MockFight[];
}

async function fetchEventDetail(id: string): Promise<EventDetailResponse> {
  const [eventsRes, fightsRes] = await Promise.all([
    fetch("/api/events"),
    fetch(`/api/fights?eventId=${encodeURIComponent(id)}`),
  ]);
  if (!eventsRes.ok || !fightsRes.ok) throw new Error("Failed to load event");
  const events = (await eventsRes.json()) as MockEvent[];
  const event = events.find((e) => e.id === id);
  if (!event) throw new Error("Event not found");
  const fights = (await fightsRes.json()) as MockFight[];
  return { event, fights };
}

const SECTION_ORDER: Section[] = ["MAIN", "PRELIM", "EARLY_PRELIM"];

export default function EventDetailPage() {
  const params = useParams();
  const id = String(params.id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["event", id],
    queryFn: () => fetchEventDetail(id),
  });

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="h-8 w-40 animate-pulse rounded bg-muted/40" />
        <div className="h-24 animate-pulse rounded-lg bg-muted/30" />
        <div className="h-40 animate-pulse rounded-lg bg-muted/30" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <p className="text-sm text-destructive">Event not found.</p>
      </div>
    );
  }

  const { event, fights } = data;

  return (
    <div className="space-y-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All events
      </Link>

      <div className="space-y-2">
        <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
          {event.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          {formatEventDate(event.date)} · {event.venue.name}, {event.venue.city}
        </p>
        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Ruler className="h-3.5 w-3.5 text-octagon-gold" />
            {event.venue.cageSizeFeet}ft cage
          </span>
          <span className="inline-flex items-center gap-1">
            <Mountain className="h-3.5 w-3.5 text-octagon-gold" />
            {event.venue.altitudeMeters}m altitude
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {SECTION_ORDER.map((section, i) => (
          <CardSection
            key={section}
            section={section}
            fights={fights.filter((f) => f.cardSection === section)}
            defaultOpen={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
