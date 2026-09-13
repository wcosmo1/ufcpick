import type { Fight, UserPick } from "../types";

type Props = {
  fight: Fight;
  userPick?: UserPick;
  onResearch: (fight: Fight) => void;
};

export function FightRow({ fight, userPick, onResearch }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-lg border border-border bg-surface px-4 py-4 hover:border-border hover:bg-surface-2/80 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="font-display text-xl sm:text-2xl tracking-[0.04em] text-cream leading-tight">
          <span className="text-cream">{fight.fighter_a}</span>
          <span className="mx-2 text-blood font-heading text-sm uppercase tracking-widest align-middle">
            vs
          </span>
          <span className="text-cream">{fight.fighter_b}</span>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-2">
          <p className="font-heading text-xs uppercase tracking-wider text-muted">
            {fight.weight_class}
          </p>
          {userPick && (
            <span className="inline-flex items-center rounded px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider bg-gold/15 text-gold border border-gold/40">
              Your pick: {userPick.predicted_winner} ·{" "}
              {userPick.confidence_score}/10
            </span>
          )}
        </div>
      </div>
      <button
        type="button"
        onClick={() => onResearch(fight)}
        className="shrink-0 self-stretch sm:self-auto rounded border border-blood/50 bg-blood/10 px-5 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.15em] text-blood hover:bg-blood hover:text-cream transition-colors cursor-pointer"
      >
        Research
      </button>
    </div>
  );
}
