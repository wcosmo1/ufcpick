import type { Fight } from "../types";

type Props = {
  fight: Fight;
  onResearch: (fight: Fight) => void;
};

export function FightRow({ fight, onResearch }: Props) {
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
        <p className="mt-1 font-heading text-xs uppercase tracking-wider text-muted">
          {fight.weight_class}
        </p>
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
