import {
  getEventById as getMockEventById,
  getFightById as getMockFightById,
  getFightsForEvent as getMockFightsForEvent,
  mockEvents,
  type MockEvent,
  type MockFight,
} from "@/lib/mock-data";
import { getCached, setCache } from "./cache";
import {
  fetchEventById,
  fetchUpcomingEspnEvents,
  mapEspnEvent,
} from "./espn";

const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const EVENTS_CACHE_KEY = "ufc:events:upcoming";
const FIGHTS_CACHE_PREFIX = "ufc:fights:";

export type LiveDataMeta = {
  source: "espn" | "mock";
  cached: boolean;
  fetchedAt: string;
  error?: string;
};

type EventsBundle = {
  events: MockEvent[];
  fightsByEvent: Record<string, MockFight[]>;
  meta: LiveDataMeta;
};

function useMockOnly(): boolean {
  return process.env.USE_MOCK_EVENTS === "true";
}

function mockBundle(reason?: string): EventsBundle {
  const fightsByEvent: Record<string, MockFight[]> = {};
  for (const event of mockEvents) {
    fightsByEvent[event.id] = getMockFightsForEvent(event.id);
  }
  return {
    events: mockEvents,
    fightsByEvent,
    meta: {
      source: "mock",
      cached: false,
      fetchedAt: new Date().toISOString(),
      error: reason,
    },
  };
}

async function loadLiveBundle(): Promise<EventsBundle> {
  if (useMockOnly()) {
    return mockBundle("USE_MOCK_EVENTS=true");
  }

  const cached = getCached<EventsBundle>(EVENTS_CACHE_KEY);
  if (cached) {
    return {
      ...cached,
      meta: { ...cached.meta, cached: true },
    };
  }

  try {
    const live = await fetchUpcomingEspnEvents();
    if (!live.length) {
      return mockBundle("ESPN returned no upcoming UFC events");
    }

    const events = live.map((x) => x.event);
    const fightsByEvent: Record<string, MockFight[]> = {};
    for (const item of live) {
      fightsByEvent[item.event.id] = item.fights;
      setCache(
        `${FIGHTS_CACHE_PREFIX}${item.event.id}`,
        item.fights,
        CACHE_TTL_MS
      );
    }

    const bundle: EventsBundle = {
      events,
      fightsByEvent,
      meta: {
        source: "espn",
        cached: false,
        fetchedAt: new Date().toISOString(),
      },
    };
    setCache(EVENTS_CACHE_KEY, bundle, CACHE_TTL_MS);
    return bundle;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error(
      "[ufc/live] ESPN fetch failed, falling back to mock:",
      message
    );
    return mockBundle(message);
  }
}

export async function listEvents(): Promise<{
  events: MockEvent[];
  meta: LiveDataMeta;
}> {
  const bundle = await loadLiveBundle();
  return { events: bundle.events, meta: bundle.meta };
}

export async function getEvent(
  eventId: string
): Promise<MockEvent | undefined> {
  const bundle = await loadLiveBundle();
  const fromLive = bundle.events.find((e) => e.id === eventId);
  if (fromLive) return fromLive;

  if (!useMockOnly() && /^\d+$/.test(eventId)) {
    try {
      const raw = await fetchEventById(eventId);
      if (raw) {
        const mapped = mapEspnEvent(raw);
        setCache(
          `${FIGHTS_CACHE_PREFIX}${mapped.event.id}`,
          mapped.fights,
          CACHE_TTL_MS
        );
        return mapped.event;
      }
    } catch (err) {
      console.error("[ufc/live] getEvent ESPN lookup failed:", err);
    }
  }

  return getMockEventById(eventId);
}

export async function getFights(eventId: string): Promise<MockFight[]> {
  const fightCacheKey = `${FIGHTS_CACHE_PREFIX}${eventId}`;
  const cachedFights = getCached<MockFight[]>(fightCacheKey);
  if (cachedFights) return cachedFights;

  const bundle = await loadLiveBundle();
  if (bundle.fightsByEvent[eventId]) {
    return bundle.fightsByEvent[eventId];
  }

  if (!useMockOnly() && /^\d+$/.test(eventId)) {
    try {
      const raw = await fetchEventById(eventId);
      if (raw) {
        const mapped = mapEspnEvent(raw);
        setCache(fightCacheKey, mapped.fights, CACHE_TTL_MS);
        return mapped.fights;
      }
    } catch (err) {
      console.error("[ufc/live] getFights ESPN lookup failed:", err);
    }
  }

  return getMockFightsForEvent(eventId);
}

export async function getFight(
  fightId: string
): Promise<MockFight | undefined> {
  const bundle = await loadLiveBundle();
  for (const fights of Object.values(bundle.fightsByEvent)) {
    const found = fights.find((f) => f.id === fightId);
    if (found) return found;
  }
  return getMockFightById(fightId);
}
