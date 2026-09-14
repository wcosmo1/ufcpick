"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Swords } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatEventDate } from "@/lib/utils";
import type { MockEvent } from "@/lib/mock-data";

export function EventCard({ event }: { event: MockEvent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <Link href={`/events/${event.id}`} className="block group">
        <Card className="transition-colors hover:border-octagon-red/50 hover:bg-card/80">
          <CardHeader className="pb-3">
            <CardTitle className="group-hover:text-octagon-red transition-colors">
              {event.name}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-octagon-gold" />
              {formatEventDate(event.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-octagon-gold" />
              {event.venue.city}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Swords className="h-4 w-4 text-octagon-gold" />
              {event.fightCount} fights
            </span>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
