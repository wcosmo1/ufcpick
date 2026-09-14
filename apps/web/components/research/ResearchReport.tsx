"use client";

import { motion } from "framer-motion";
import { ConfidenceMeter } from "./ConfidenceMeter";
import { WhyBullets } from "./WhyBullets";
import type { MockResearchReport } from "@/lib/mock-data";

export function ResearchReport({ report }: { report: MockResearchReport }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="overflow-hidden rounded-md border border-border/60 bg-muted/20 p-4"
    >
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Pick
          </p>
          <p className="text-lg font-semibold text-foreground">
            {report.pickWinnerName}
          </p>
          <p className="text-sm text-octagon-gold">{report.method}</p>
        </div>
        <div className="w-full max-w-[200px] sm:w-48">
          <ConfidenceMeter value={report.confidence} />
        </div>
      </div>
      <p className="mb-3 text-sm text-muted-foreground">{report.summary}</p>
      <WhyBullets bullets={report.whyBullets} />
    </motion.div>
  );
}
