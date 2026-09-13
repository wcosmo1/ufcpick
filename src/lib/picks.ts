import { useCallback, useEffect, useState } from "react";
import type { UserPick } from "../types";

const STORAGE_KEY = "ufcpick:picks";
const PICKS_EVENT = "ufcpick:picks-updated";

function readStore(): Record<string, UserPick> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, UserPick>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeStore(picks: Record<string, UserPick>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(picks));
  window.dispatchEvent(new CustomEvent(PICKS_EVENT));
}

export function getPicks(): Record<string, UserPick> {
  return readStore();
}

export function getPick(fightId: string): UserPick | undefined {
  return readStore()[fightId];
}

export function savePick(pick: UserPick): void {
  const picks = readStore();
  picks[pick.fight_id] = pick;
  writeStore(picks);
}

export function clearPick(fightId: string): void {
  const picks = readStore();
  if (!(fightId in picks)) return;
  delete picks[fightId];
  writeStore(picks);
}

export function usePicks(): {
  picks: Record<string, UserPick>;
  getPick: (fightId: string) => UserPick | undefined;
  savePick: (pick: UserPick) => void;
  clearPick: (fightId: string) => void;
  refresh: () => void;
} {
  const [picks, setPicks] = useState<Record<string, UserPick>>(() =>
    readStore()
  );

  const refresh = useCallback(() => {
    setPicks(readStore());
  }, []);

  useEffect(() => {
    const onUpdate = () => setPicks(readStore());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY || e.key === null) onUpdate();
    };
    window.addEventListener(PICKS_EVENT, onUpdate);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(PICKS_EVENT, onUpdate);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return {
    picks,
    getPick: (fightId: string) => picks[fightId],
    savePick,
    clearPick,
    refresh,
  };
}
