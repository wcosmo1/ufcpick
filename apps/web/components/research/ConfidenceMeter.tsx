"use client";

import { cn } from "@/lib/utils";

export function ConfidenceMeter({
  value,
  max = 10,
}: {
  value: number;
  max?: number;
}) {
  const clamped = Math.max(0, Math.min(max, value));
  const pct = (clamped / max) * 100;

  const tone =
    clamped >= 8
      ? "bg-emerald-500"
      : clamped >= 5
        ? "bg-octagon-gold"
        : "bg-octagon-red";

  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between text-xs">
        <span className="text-muted-foreground uppercase tracking-wide">
          Confidence
        </span>
        <span className="font-mono font-semibold tabular-nums">
          {clamped}
          <span className="text-muted-foreground">/{max}</span>
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn("h-full rounded-full transition-all duration-500", tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
