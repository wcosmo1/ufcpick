"use client";

import { useState } from "react";
import { Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ResearchButton } from "./ResearchButton";
import { ResearchReport } from "@/components/research/ResearchReport";
import type { MockFight, MockResearchReport } from "@/lib/mock-data";

export function FightCard({ fight }: { fight: MockFight }) {
  const [report, setReport] = useState<MockResearchReport | null>(null);

  return (
    <Card className="border-border/80 bg-background/40">
      <CardContent className="space-y-4 p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              {fight.isTitleFight && (
                <span className="inline-flex items-center gap-1 rounded-full bg-octagon-gold/15 px-2 py-0.5 text-xs font-medium text-octagon-gold">
                  <Trophy className="h-3 w-3" />
                  Title
                </span>
              )}
              <span className="text-xs uppercase tracking-wide text-muted-foreground">
                {fight.weightClass}
              </span>
            </div>
            <p className="text-base font-semibold leading-snug">
              <span>{fight.fighterA.name}</span>
              <span className="mx-2 text-muted-foreground font-normal">vs</span>
              <span>{fight.fighterB.name}</span>
            </p>
            <p className="text-xs text-muted-foreground">
              {fight.fighterA.record}
              {fight.fighterA.nickname ? ` · "${fight.fighterA.nickname}"` : ""}
              {"  ·  "}
              {fight.fighterB.record}
              {fight.fighterB.nickname ? ` · "${fight.fighterB.nickname}"` : ""}
            </p>
          </div>
          <ResearchButton fightId={fight.id} onComplete={setReport} />
        </div>
        {report && <ResearchReport report={report} />}
      </CardContent>
    </Card>
  );
}
