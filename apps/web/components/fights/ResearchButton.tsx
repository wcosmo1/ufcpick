"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { MockResearchReport } from "@/lib/mock-data";

export function ResearchButton({
  fightId,
  onComplete,
}: {
  fightId: string;
  onComplete: (report: MockResearchReport) => void;
}) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    try {
      const res = await fetch("/api/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fightId }),
      });
      if (!res.ok) throw new Error("Research failed");
      const report = (await res.json()) as MockResearchReport;
      onComplete(report);
    } catch {
      // swallow for demo; parent can show empty state
    } finally {
      setLoading(false);
    }
  }

  return (
    <Button
      variant="octagon"
      size="sm"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Sparkles className="h-4 w-4" />
      )}
      {loading ? "Researching…" : "Research"}
    </Button>
  );
}
