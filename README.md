# UFC Cornerman

AI-assisted fight research and card intelligence for UFC events. Turborepo monorepo with a Next.js dashboard, Prisma/PostgreSQL data layer, research engine stubs, and an Inngest-style worker.

## Stack

- **Turborepo** + **pnpm** workspaces
- **apps/web** — Next.js 15 (App Router), TypeScript, Tailwind, shadcn-style UI, TanStack Query, Framer Motion
- **packages/db** — Prisma schema (PostgreSQL) + typed client
- **packages/research-engine** — typed source stubs + `synthesizeResearch`
- **workers/research** — Inngest-style `runResearch` stub

## Prerequisites

- Node.js >= 20
- pnpm 9 (`corepack enable && corepack prepare pnpm@9.15.0 --activate`)
- PostgreSQL (optional for UI demo; required for real DB)
- Redis (optional for demo)

## Setup

```bash
cd ufc-cornerman
cp .env.example .env
pnpm install
pnpm db:generate
```

## Run (demo UI — no live DB required)

```bash
pnpm --filter @ufc-cornerman/web dev
```

Open [http://localhost:3000](http://localhost:3000). Event Dashboard and Fight Card load **live upcoming UFC events** from ESPN (see below). Research remains a stub.

## Live UFC event data

By default, `apps/web` fetches officially announced upcoming UFC events from ESPN’s public (undocumented) MMA scoreboard API:

- `https://site.api.espn.com/apis/site/v2/sports/mma/ufc/scoreboard`
- Date windows via `?dates=YYYYMMDD` or `?dates=YYYYMMDD-YYYYMMDD`

Implementation lives under `apps/web/lib/ufc/`:

| Piece | Behavior |
|-------|----------|
| Source | ESPN site scoreboard + season calendar (Contender Series filtered out) |
| Mapping | Events/fights → existing `MockEvent` / `MockFight` UI types |
| Card sections | Best-effort Early Prelims / Prelims / Main Card (Main ≈ last 5; Prelims take the rest until remainder &gt; 6, then Early). ESPN core `cardSegment` is not always on the site payload. |
| Cache | In-memory TTL **~10 minutes** (process-local) |
| Fallback | On HTTP/parse/empty failure → existing mock events in `lib/mock-data.ts` |
| Force mock | Set `USE_MOCK_EVENTS=true` |

API routes:

- `GET /api/events` — upcoming events (`X-UFC-Data-Source: espn|mock`)
- `GET /api/fights?eventId=` — card for an event
- `POST /api/research` — unchanged stub research (resolves fight from live cache or mock)

**Caveats:** ESPN endpoints are undocumented and can change; venue altitude/cage size use a small known-venue map with defaults; title-fight detection is heuristic; card-section split is best-effort when ESPN omits segments.

## Full monorepo scripts

```bash
pnpm dev          # all packages in parallel
pnpm build        # turbo build
pnpm typecheck    # TypeScript across packages
pnpm db:generate  # prisma generate
pnpm db:push      # prisma db push (needs DATABASE_URL)
```

## Packages

| Path | Name | Role |
|------|------|------|
| `apps/web` | `@ufc-cornerman/web` | Dashboard UI + live/mock API |
| `packages/db` | `@ufc-cornerman/db` | Prisma schema & client |
| `packages/research-engine` | `@ufc-cornerman/research-engine` | Source stubs + synthesis |
| `workers/research` | `@ufc-cornerman/worker-research` | `runResearch` worker stub |

## Prisma models

`Event`, `Fighter`, `Fight` (cardSection: EARLY_PRELIM \| PRELIM \| MAIN), `Venue`, `ResearchReport` (pick, method, confidence, whyBullets, status).

## Notes

- Live ESPN data is the default for events/fights; set `USE_MOCK_EVENTS=true` for offline/mock-only.
- Research engine and worker are typed stubs — wire real scrapers/LLM later.
- Dark MMA aesthetic is the default theme.
