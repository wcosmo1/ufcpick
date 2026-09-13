import { useEffect } from "react";
import type { Fight, Prediction } from "../types";

type Props = {
  fight: Fight;
  prediction: Prediction;
  onClose: () => void;
};

function confidenceColor(score: number) {
  if (score >= 8) return "text-blood";
  if (score >= 6) return "text-gold";
  return "text-muted";
}

function confidenceBar(score: number) {
  return Math.min(10, Math.max(1, score)) * 10;
}

export function ResearchModal({ fight, prediction, onClose }: Props) {
  // PHASE 2: call research engine (Firecrawl Tapology/UFCStats/Wikipedia + LLM) instead of mock prediction
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="research-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/75 backdrop-blur-sm border-0 cursor-pointer"
        aria-label="Close research modal"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg max-h-[90svh] overflow-y-auto rounded-t-2xl sm:rounded-xl border border-border bg-surface shadow-2xl shadow-black/50">
        <div className="h-1.5 w-full bg-gradient-to-r from-blood to-blood-dim" />

        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3 mb-1">
            <p className="font-heading text-[11px] uppercase tracking-[0.25em] text-blood">
              Research Report
            </p>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded border border-border bg-surface-2 px-2.5 py-1 font-heading text-xs uppercase tracking-wider text-muted hover:text-cream hover:border-cream/30 transition-colors"
            >
              Close
            </button>
          </div>

          <h2
            id="research-title"
            className="font-display text-3xl sm:text-4xl tracking-[0.05em] text-cream leading-none mb-1"
          >
            {fight.fighter_a}{" "}
            <span className="text-blood">vs</span> {fight.fighter_b}
          </h2>
          <p className="font-heading text-sm uppercase tracking-wide text-muted mb-6">
            {fight.weight_class} · {fight.card_placement}
          </p>

          <div className="rounded-lg border border-border bg-charcoal p-4 mb-6">
            <div className="flex items-end justify-between gap-4 mb-3">
              <div>
                <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                  Predicted Winner
                </p>
                <p className="font-display text-2xl tracking-wider text-cream">
                  {prediction.predicted_winner}
                </p>
              </div>
              <div className="text-right">
                <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted mb-1">
                  Confidence
                </p>
                <p
                  className={`font-display text-5xl leading-none tracking-wider ${confidenceColor(
                    prediction.confidence_score
                  )}`}
                >
                  {prediction.confidence_score}
                  <span className="text-xl text-muted">/10</span>
                </p>
              </div>
            </div>
            <div className="h-2 rounded-full bg-surface-2 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blood-dim to-blood transition-all duration-500"
                style={{ width: `${confidenceBar(prediction.confidence_score)}%` }}
              />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-cream mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-blood" />
              Why
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {prediction.reasoning_summary.map((bullet, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm leading-relaxed text-cream/85"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blood" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
