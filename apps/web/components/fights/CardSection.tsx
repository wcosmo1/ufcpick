"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FightCard } from "./FightCard";
import type { CardSection as CardSectionType, MockFight } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const LABELS: Record<CardSectionType, string> = {
  MAIN: "Main Card",
  PRELIM: "Prelims",
  EARLY_PRELIM: "Early Prelims",
};

export function CardSection({
  section,
  fights,
  defaultOpen = false,
}: {
  section: CardSectionType;
  fights: MockFight[];
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  if (!fights.length) return null;

  const sorted = [...fights].sort((a, b) => a.order - b.order);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="rounded-lg border border-border bg-card"
    >
      <CollapsibleTrigger className="px-4 py-3 hover:bg-muted/40 rounded-lg">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            {LABELS[section]}
          </h2>
          <p className="text-xs text-muted-foreground">
            {sorted.length} fight{sorted.length === 1 ? "" : "s"}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-3 px-4 pb-4">
        {sorted.map((fight) => (
          <FightCard key={fight.id} fight={fight} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}
