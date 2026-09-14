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

Open [http://localhost:3000](http://localhost:3000). The app serves mock events/fights/research from API routes.

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
| `apps/web` | `@ufc-cornerman/web` | Dashboard UI + mock API |
| `packages/db` | `@ufc-cornerman/db` | Prisma schema & client |
| `packages/research-engine` | `@ufc-cornerman/research-engine` | Source stubs + synthesis |
| `workers/research` | `@ufc-cornerman/worker-research` | `runResearch` worker stub |

## Prisma models

`Event`, `Fighter`, `Fight` (cardSection: EARLY_PRELIM \| PRELIM \| MAIN), `Venue`, `ResearchReport` (pick, method, confidence, whyBullets, status).

## Notes

- UI uses mock data by default so you can explore without Postgres/Redis/API keys.
- Research engine and worker are typed stubs — wire real scrapers/LLM later.
- Dark MMA aesthetic is the default theme.
