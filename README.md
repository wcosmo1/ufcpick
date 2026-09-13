# UFC Prediction & Research

**Live preview (no install):** https://wcosmo1.github.io/ufcpick/

Pushes to `main` auto-deploy via GitHub Pages. You do not need to run anything locally.

Phase 1 — dark-mode MMA Event Dashboard, Fight Card, and Research modal with **mock data only**. No Supabase, no Firecrawl, no real API keys. Built for visual review before Phase 2.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (`@tailwindcss/vite`)
- React Router (client-only)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

Production build:

```bash
npm run build
npm run preview
```

## Phase 1 features

- **Event Dashboard** — upcoming events with venue, location, altitude, and cage-size badges
- **Fight Card** — Main / Prelims / Early Prelims sections per event
- **Research modal** — confidence score (1–10) + bulleted Why from mock predictions
- Back navigation from fight card → dashboard

## Phase 2 plan

Wire a real research engine behind the Research button (see `// PHASE 2:` comments in the Research modal / fight card page).

### Data (Supabase)

- Tables: `Events`, `Fights`, `Predictions` matching Phase 1 TypeScript shapes
- Client reads via Supabase JS; seed/migrate from mock data first

### Research pipeline

- **Firecrawl** scrape: Tapology, UFCStats, Wikipedia fighter pages
- **LLM analysis** → confidence score + Why bullets stored as `Predictions`

### Env placeholders (do not commit secrets)

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
FIRECRAWL_API_KEY=
```

## Project layout

```
src/
  types/          # Event, Fight, Prediction, CageSize, CardPlacement
  data/mockData.ts
  components/     # Layout, EventCard, FightRow, ResearchModal
  pages/          # EventDashboard, FightCardPage
```
