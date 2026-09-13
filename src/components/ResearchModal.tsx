import { useEffect, useState } from "react";
import type { CageSize, Fight, FighterStats, Prediction, UserPick } from "../types";
import { clearPick, getPick, savePick } from "../lib/picks";

type Props = {
  fight: Fight;
  prediction: Prediction;
  fighterStats?: [FighterStats, FighterStats];
  cageSize?: CageSize;
  altitude?: number;
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

function StatRow({
  label,
  a,
  b,
}: {
  label: string;
  a: string | number;
  b: string | number;
}) {
  return (
    <div className="grid grid-cols-3 gap-2 items-center py-1.5 border-b border-border/60 last:border-0">
      <span className="text-right text-sm text-cream/90 tabular-nums">{a}</span>
      <span className="text-center font-heading text-[10px] uppercase tracking-wider text-muted">
        {label}
      </span>
      <span className="text-left text-sm text-cream/90 tabular-nums">{b}</span>
    </div>
  );
}

export function ResearchModal({
  fight,
  prediction,
  fighterStats,
  cageSize,
  altitude,
  onClose,
}: Props) {
  const existing = getPick(fight.fight_id);
  const [selected, setSelected] = useState<string>(
    existing?.predicted_winner ?? ""
  );
  const [confidence, setConfidence] = useState<number>(
    existing?.confidence_score ?? 5
  );
  const [savedPick, setSavedPick] = useState<UserPick | undefined>(existing);
  const [justSaved, setJustSaved] = useState(false);

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

  const handleSave = () => {
    if (!selected) return;
    const pick: UserPick = {
      fight_id: fight.fight_id,
      predicted_winner: selected,
      confidence_score: confidence,
      updated_at: new Date().toISOString(),
    };
    savePick(pick);
    setSavedPick(pick);
    setJustSaved(true);
  };

  const handleClear = () => {
    clearPick(fight.fight_id);
    setSavedPick(undefined);
    setSelected("");
    setConfidence(5);
    setJustSaved(false);
  };

  const agrees =
    savedPick &&
    savedPick.predicted_winner === prediction.predicted_winner;

  const [statsA, statsB] = fighterStats ?? [];

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
          <p className="font-heading text-sm uppercase tracking-wide text-muted mb-3">
            {fight.weight_class} · {fight.card_placement}
          </p>

          {(cageSize || altitude != null) && (
            <div className="flex flex-wrap gap-2 mb-5">
              {altitude != null && (
                <span className="badge-cage inline-flex rounded px-2 py-0.5 font-heading text-[10px] font-semibold bg-blood/15 text-blood border border-blood/40">
                  ▲ {altitude.toLocaleString()} ft
                </span>
              )}
              {cageSize && (
                <span className="badge-cage inline-flex rounded px-2 py-0.5 font-heading text-[10px] font-semibold bg-surface-2 text-cream/80 border border-border">
                  Cage · {cageSize}
                </span>
              )}
            </div>
          )}

          {statsA && statsB && (
            <div className="rounded-lg border border-border bg-charcoal p-4 mb-6">
              <p className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted mb-3 text-center">
                Fighter Stats
              </p>
              <div className="grid grid-cols-3 gap-2 mb-2">
                <p className="text-right font-heading text-xs uppercase tracking-wide text-cream truncate">
                  {statsA.name.split(" ").slice(-1)[0]}
                </p>
                <p className="text-center font-heading text-[10px] uppercase tracking-wider text-muted">
                  vs
                </p>
                <p className="text-left font-heading text-xs uppercase tracking-wide text-cream truncate">
                  {statsB.name.split(" ").slice(-1)[0]}
                </p>
              </div>
              <StatRow label="SLpM" a={statsA.slpm.toFixed(1)} b={statsB.slpm.toFixed(1)} />
              <StatRow label="TDD %" a={`${statsA.tdd}%`} b={`${statsB.tdd}%`} />
              <StatRow label="TD Avg" a={statsA.td_avg.toFixed(1)} b={statsB.td_avg.toFixed(1)} />
              <StatRow label="Camp" a={statsA.camp} b={statsB.camp} />
              <StatRow label="Style" a={statsA.style} b={statsB.style} />
            </div>
          )}

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

          <div className="mb-6">
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

          <div className="rounded-lg border border-gold/30 bg-charcoal p-4">
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold mb-3 flex items-center gap-2">
              <span className="inline-block h-px w-6 bg-gold" />
              Your Pick
            </h3>

            <div className="grid grid-cols-2 gap-2 mb-4">
              {[fight.fighter_a, fight.fighter_b].map((name) => {
                const active = selected === name;
                return (
                  <button
                    key={name}
                    type="button"
                    onClick={() => {
                      setSelected(name);
                      setJustSaved(false);
                    }}
                    className={`rounded border px-3 py-2.5 font-heading text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                      active
                        ? "border-gold bg-gold/15 text-gold"
                        : "border-border bg-surface-2 text-muted hover:text-cream hover:border-cream/30"
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="pick-confidence"
                  className="font-heading text-[10px] uppercase tracking-[0.2em] text-muted"
                >
                  Confidence
                </label>
                <span className="font-display text-2xl text-cream tracking-wider">
                  {confidence}
                  <span className="text-sm text-muted">/10</span>
                </span>
              </div>
              <input
                id="pick-confidence"
                type="range"
                min={1}
                max={10}
                step={1}
                value={confidence}
                onChange={(e) => {
                  setConfidence(Number(e.target.value));
                  setJustSaved(false);
                }}
                className="w-full accent-[#c9a227] cursor-pointer"
              />
              <div className="flex justify-between mt-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => {
                      setConfidence(n);
                      setJustSaved(false);
                    }}
                    className={`font-heading text-[10px] w-5 h-5 rounded transition-colors cursor-pointer border-0 ${
                      confidence === n
                        ? "bg-gold/20 text-gold"
                        : "bg-transparent text-muted hover:text-cream"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleSave}
                disabled={!selected}
                className="flex-1 rounded border border-gold/50 bg-gold/10 px-4 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-gold hover:bg-gold hover:text-charcoal transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Save Pick
              </button>
              {savedPick && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="rounded border border-border bg-surface-2 px-4 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-muted hover:text-cream hover:border-cream/30 transition-colors cursor-pointer"
                >
                  Clear Pick
                </button>
              )}
            </div>

            {justSaved && savedPick && (
              <div className="mt-3 rounded border border-border bg-surface-2 px-3 py-2">
                <p className="font-heading text-xs uppercase tracking-wider text-cream mb-1">
                  Pick saved · {savedPick.predicted_winner} ({savedPick.confidence_score}/10)
                </p>
                <p
                  className={`font-heading text-[11px] uppercase tracking-wider ${
                    agrees ? "text-gold" : "text-blood"
                  }`}
                >
                  {agrees
                    ? "You agree with Research"
                    : "You lean different"}
                </p>
              </div>
            )}

            {!justSaved && savedPick && (
              <p className="mt-3 font-heading text-[11px] uppercase tracking-wider text-muted">
                Current: {savedPick.predicted_winner} · {savedPick.confidence_score}/10
                {" · "}
                <span className={agrees ? "text-gold" : "text-blood"}>
                  {agrees ? "Agree with Research" : "Lean different"}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
