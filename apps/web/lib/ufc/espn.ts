import type {
  CardSection,
  MockEvent,
  MockFight,
  MockFighter,
  MockVenue,
} from "@/lib/mock-data";

const ESPN_SCOREBOARD =
  "https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard";

const FETCH_TIMEOUT_MS = 12_000;
const UPCOMING_EVENT_LIMIT = 10;
/** Pull extra calendar rows so completed same-day cards can be filtered out. */
const CALENDAR_FETCH_LIMIT = 16;

type EspnAddress = {
  city?: string;
  state?: string;
  country?: string;
};

type EspnVenue = {
  id?: string;
  fullName?: string;
  address?: EspnAddress;
};

type EspnAthlete = {
  id?: string;
  fullName?: string;
  displayName?: string;
  shortName?: string;
};

type EspnCompetitor = {
  id?: string;
  order?: number;
  winner?: boolean;
  athlete?: EspnAthlete;
  records?: Array<{ type?: string; summary?: string }>;
};

type EspnCompetition = {
  id?: string;
  date?: string;
  type?: { id?: string; abbreviation?: string; text?: string };
  format?: { regulation?: { periods?: number } };
  competitors?: EspnCompetitor[];
  venue?: EspnVenue;
  status?: { type?: { name?: string; completed?: boolean } };
};

type EspnEvent = {
  id: string;
  name?: string;
  shortName?: string;
  date?: string;
  competitions?: EspnCompetition[];
  venues?: EspnVenue[];
  status?: { type?: { name?: string; state?: string; completed?: boolean } };
};

type EspnCalendarItem = {
  label?: string;
  startDate?: string;
  endDate?: string;
  event?: { $ref?: string };
};

type EspnScoreboard = {
  leagues?: Array<{ calendar?: EspnCalendarItem[] }>;
  events?: EspnEvent[];
};

const WEIGHT_CLASS_LABELS: Record<string, string> = {
  Strawweight: "Strawweight",
  "W Strawweight": "Women's Strawweight",
  Flyweight: "Flyweight",
  "W Flyweight": "Women's Flyweight",
  Bantamweight: "Bantamweight",
  "W Bantamweight": "Women's Bantamweight",
  Featherweight: "Featherweight",
  "W Featherweight": "Women's Featherweight",
  Lightweight: "Lightweight",
  Welterweight: "Welterweight",
  Middleweight: "Middleweight",
  "Light Heavyweight": "Light Heavyweight",
  Heavyweight: "Heavyweight",
  Catchweight: "Catchweight",
};

/** Known venue altitude (m) and cage size (ft). Defaults applied when unknown. */
const VENUE_META: Record<
  string,
  { altitudeMeters: number; cageSizeFeet: number; timezone: string }
> = {
  "meta apex": { altitudeMeters: 610, cageSizeFeet: 25, timezone: "America/Los_Angeles" },
  "t-mobile arena": {
    altitudeMeters: 610,
    cageSizeFeet: 30,
    timezone: "America/Los_Angeles",
  },
  "ufc apex": { altitudeMeters: 610, cageSizeFeet: 25, timezone: "America/Los_Angeles" },
  "madison square garden": {
    altitudeMeters: 10,
    cageSizeFeet: 30,
    timezone: "America/New_York",
  },
  "ball arena": { altitudeMeters: 1609, cageSizeFeet: 30, timezone: "America/Denver" },
  "delta center": { altitudeMeters: 1288, cageSizeFeet: 30, timezone: "America/Denver" },
};

function yyyymmdd(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}${m}${day}`;
}

function addUtcDays(d: Date, days: number): Date {
  const next = new Date(d.getTime());
  next.setUTCDate(next.getUTCDate() + days);
  return next;
}

function eventIdFromRef(ref?: string): string | null {
  if (!ref) return null;
  const match = ref.match(/\/events\/(\d+)/);
  return match?.[1] ?? null;
}

function isUfcMainBrand(label: string): boolean {
  const lower = label.toLowerCase();
  if (lower.includes("contender series")) return false;
  if (lower.includes("dana white")) return false;
  return lower.includes("ufc");
}

async function fetchJson<T>(url: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: "application/json" },
      // Server-side only; avoid Next Data Cache pinning stale cards too long.
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error(`ESPN HTTP ${res.status} for ${url}`);
    }
    return (await res.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchScoreboard(
  dates?: string
): Promise<EspnScoreboard> {
  const url = dates
    ? `${ESPN_SCOREBOARD}?dates=${encodeURIComponent(dates)}`
    : ESPN_SCOREBOARD;
  return fetchJson<EspnScoreboard>(url);
}

function cityFromVenue(venue?: EspnVenue): string {
  const addr = venue?.address;
  if (!addr) return "TBD";
  const parts = [addr.city, addr.state].filter(Boolean);
  if (parts.length) return parts.join(", ");
  return addr.country ?? "TBD";
}

function mapVenue(venue?: EspnVenue): MockVenue {
  const name = venue?.fullName?.trim() || "TBD";
  const metaKey = name.toLowerCase();
  const meta = VENUE_META[metaKey] ?? {
    altitudeMeters: 0,
    cageSizeFeet: 30,
    timezone: "America/New_York",
  };
  return {
    id: venue?.id ? `ven-espn-${venue.id}` : `ven-${metaKey.replace(/\s+/g, "-")}`,
    name,
    city: cityFromVenue(venue),
    cageSizeFeet: meta.cageSizeFeet,
    altitudeMeters: meta.altitudeMeters,
    timezone: meta.timezone,
  };
}

function recordFor(competitor?: EspnCompetitor): string {
  const total = competitor?.records?.find(
    (r) => r.type === "total" || r.type === "overall"
  );
  return total?.summary ?? competitor?.records?.[0]?.summary ?? "—";
}

function mapFighter(competitor: EspnCompetitor, weightClass: string): MockFighter {
  const athlete = competitor.athlete;
  const id = competitor.id ?? athlete?.id ?? "unknown";
  return {
    id: `f-espn-${id}`,
    name: athlete?.displayName ?? athlete?.fullName ?? "TBD",
    record: recordFor(competitor),
    weightClass,
  };
}

function weightClassOf(comp: EspnCompetition): string {
  const abbr = comp.type?.abbreviation?.trim();
  const text = comp.type?.text?.trim();
  if (text) return text;
  if (abbr && WEIGHT_CLASS_LABELS[abbr]) return WEIGHT_CLASS_LABELS[abbr];
  return abbr || "Catchweight";
}

function isTitleFight(comp: EspnCompetition): boolean {
  const hay = `${comp.type?.text ?? ""} ${comp.type?.abbreviation ?? ""}`;
  return /title|championship/i.test(hay);
}

/**
 * Best-effort card split when site scoreboard omits cardSegment.
 * Matches ESPN Fight Night layout for typical cards (main ≈ last 5;
 * prelims take the rest until >5 remain, then early prelims).
 */
export function assignCardSections(count: number): CardSection[] {
  if (count <= 0) return [];
  const mainCount = Math.min(5, count);
  const remaining = count - mainCount;
  let prelimCount: number;
  let earlyCount: number;
  // ESPN Fight Night cards often put 6 on prelims before opening early prelims.
  // Early prelims typically appear once the non-main remainder exceeds 6 (≈12+ fights).
  if (remaining > 6) {
    prelimCount = 5;
    earlyCount = remaining - 5;
  } else {
    prelimCount = remaining;
    earlyCount = 0;
  }
  return [
    ...Array<CardSection>(earlyCount).fill("EARLY_PRELIM"),
    ...Array<CardSection>(prelimCount).fill("PRELIM"),
    ...Array<CardSection>(mainCount).fill("MAIN"),
  ];
}

function mapFights(event: EspnEvent): MockFight[] {
  // Preserve ESPN card order when start times collide (common on prelims).
  const comps = (event.competitions ?? [])
    .map((comp, index) => ({ comp, index }))
    .sort((a, b) => {
      const ta = a.comp.date ? Date.parse(a.comp.date) : 0;
      const tb = b.comp.date ? Date.parse(b.comp.date) : 0;
      if (ta !== tb) return ta - tb;
      return a.index - b.index;
    })
    .map(({ comp }) => comp);

  const sections = assignCardSections(comps.length);
  const sectionOrderCounter: Record<CardSection, number> = {
    EARLY_PRELIM: 0,
    PRELIM: 0,
    MAIN: 0,
  };

  // Pre-count MAIN so we can number main event as order 1.
  const mainTotal = sections.filter((s) => s === "MAIN").length;

  return comps.map((comp, index) => {
    const weightClass = weightClassOf(comp);
    const competitors = [...(comp.competitors ?? [])].sort(
      (a, b) => (a.order ?? 99) - (b.order ?? 99)
    );
    const a = competitors[0];
    const b = competitors[1];
    const fighterA = a
      ? mapFighter(a, weightClass)
      : {
          id: `f-espn-missing-a-${comp.id ?? index}`,
          name: "TBD",
          record: "—",
          weightClass,
        };
    const fighterB = b
      ? mapFighter(b, weightClass)
      : {
          id: `f-espn-missing-b-${comp.id ?? index}`,
          name: "TBD",
          record: "—",
          weightClass,
        };

    const cardSection = sections[index] ?? "MAIN";
    let order: number;
    if (cardSection === "MAIN") {
      // Within MAIN: order 1 = main event (last chronologically).
      const mainIndex = index - (comps.length - mainTotal);
      order = mainTotal - mainIndex;
    } else {
      sectionOrderCounter[cardSection] += 1;
      order = sectionOrderCounter[cardSection];
    }

    return {
      id: `fight-espn-${comp.id ?? `${event.id}-${index}`}`,
      eventId: event.id,
      fighterA,
      fighterB,
      cardSection,
      weightClass,
      isTitleFight: isTitleFight(comp),
      order,
    };
  });
}

export function mapEspnEvent(event: EspnEvent): {
  event: MockEvent;
  fights: MockFight[];
} {
  const venueSource = event.venues?.[0] ?? event.competitions?.[0]?.venue;
  const fights = mapFights(event);
  return {
    event: {
      id: event.id,
      name: event.name?.trim() || event.shortName?.trim() || `UFC Event ${event.id}`,
      date: event.date
        ? new Date(event.date).toISOString()
        : new Date().toISOString(),
      venue: mapVenue(venueSource),
      fightCount: fights.length || event.competitions?.length || 0,
    },
    fights,
  };
}

export type UpcomingCalendarEntry = {
  id: string;
  label: string;
  startDate: string;
};

function isCompletedEvent(event: EspnEvent): boolean {
  const t = event.status?.type;
  if (t?.completed) return true;
  const name = t?.name ?? "";
  const state = t?.state ?? "";
  return state === "post" || name === "STATUS_FINAL" || name === "STATUS_FULL_TIME";
}

export function extractUpcomingCalendar(
  scoreboard: EspnScoreboard,
  now = new Date(),
  limit = CALENDAR_FETCH_LIMIT
): UpcomingCalendarEntry[] {
  const calendar = scoreboard.leagues?.[0]?.calendar ?? [];
  const upcoming: UpcomingCalendarEntry[] = [];

  for (const item of calendar) {
    const label = item.label?.trim() ?? "";
    if (!label || !isUfcMainBrand(label)) continue;
    const startDate = item.startDate;
    if (!startDate) continue;
    const start = Date.parse(startDate);
    if (Number.isNaN(start)) continue;
    // Keep events whose card window has not fully ended (endDate) or start is upcoming.
    const end = item.endDate ? Date.parse(item.endDate) : start;
    if (!Number.isNaN(end) && end < now.getTime()) continue;
    const id = eventIdFromRef(item.event?.$ref);
    if (!id) continue;
    upcoming.push({ id, label, startDate });
    if (upcoming.length >= limit) break;
  }

  return upcoming;
}

/** Date keys (YYYYMMDD) around a calendar start, covering UTC day skew. */
export function dateWindowFor(startDateIso: string): string {
  const start = new Date(startDateIso);
  if (Number.isNaN(start.getTime())) {
    return yyyymmdd(new Date());
  }
  const prev = yyyymmdd(addUtcDays(start, -1));
  const day = yyyymmdd(start);
  const next = yyyymmdd(addUtcDays(start, 1));
  return `${prev}-${next}`;
}

export async function fetchEventById(
  eventId: string,
  hintStartDate?: string
): Promise<EspnEvent | null> {
  const windows: string[] = [];
  if (hintStartDate) windows.push(dateWindowFor(hintStartDate));
  // Also try "today" window and bare scoreboard (may include live/near events).
  const today = new Date();
  windows.push(
    `${yyyymmdd(addUtcDays(today, -1))}-${yyyymmdd(addUtcDays(today, 14))}`
  );

  const seen = new Set<string>();
  for (const dates of windows) {
    if (seen.has(dates)) continue;
    seen.add(dates);
    const board = await fetchScoreboard(dates);
    const found = board.events?.find((e) => e.id === eventId);
    if (found) return found;
  }
  return null;
}

export async function fetchUpcomingEspnEvents(): Promise<
  Array<{ event: MockEvent; fights: MockFight[] }>
> {
  const base = await fetchScoreboard();
  const calendar = extractUpcomingCalendar(base);
  if (!calendar.length) {
    // Fallback: use any future-ish events already on the default scoreboard.
    const mapped =
      base.events
        ?.filter((e) => {
          const name = e.name ?? "";
          return isUfcMainBrand(name) && !e.status?.type?.completed;
        })
        .map(mapEspnEvent) ?? [];
    return mapped.slice(0, UPCOMING_EVENT_LIMIT);
  }

  // Batch by date window to minimize ESPN calls.
  const windowToIds = new Map<string, string[]>();
  for (const entry of calendar) {
    const w = dateWindowFor(entry.startDate);
    const list = windowToIds.get(w) ?? [];
    list.push(entry.id);
    windowToIds.set(w, list);
  }

  const byId = new Map<string, EspnEvent>();
  await Promise.all(
    [...windowToIds.keys()].map(async (dates) => {
      const board = await fetchScoreboard(dates);
      for (const ev of board.events ?? []) {
        byId.set(ev.id, ev);
      }
    })
  );

  const results: Array<{ event: MockEvent; fights: MockFight[] }> = [];
  for (const entry of calendar) {
    const raw = byId.get(entry.id);
    if (!raw) {
      // Calendar-only stub so the event still appears if scoreboard misses it.
      results.push({
        event: {
          id: entry.id,
          name: entry.label,
          date: new Date(entry.startDate).toISOString(),
          venue: mapVenue(undefined),
          fightCount: 0,
        },
        fights: [],
      });
    } else if (isCompletedEvent(raw)) {
      continue;
    } else {
      results.push(mapEspnEvent(raw));
    }
    if (results.length >= UPCOMING_EVENT_LIMIT) break;
  }

  return results.sort(
    (a, b) =>
      new Date(a.event.date).getTime() - new Date(b.event.date).getTime()
  );
}
