# Where to Start — A Business Needs Tool

> A 4-step interactive toolkit for SMB directors to identify, prioritize, map, and summarize their core business challenges.

**Live:** https://troyeffner.github.io/SMB/
**Repo:** https://github.com/troyeffner/SMB
**Owner:** Troy Effner · Business Solutions · [LinkedIn](https://www.linkedin.com/in/troyeffner/) · [Book a call](https://calendly.com/troyeffner/orgskillsintro)

---

## The Tool

| Step | Page | Purpose |
|---|---|---|
| 1 · Discover | `businessopps.html` | Select 2+ challenge areas that resonate |
| 2 · Prioritize | `prioritization.html` | Place each challenge on a 2D priority matrix |
| 3 · Map | `intersection.html` | Mark where challenges overlap and compound |
| 4 · Summary | `results.html` | Review recommendations, export as PDF |

**Supplementary:** `InteractionSkills.html` — standalone reference (not in main flow)

---

## Tech Stack

- Vanilla HTML5 / CSS3 / ES6+ (no framework, no build step)
- pnpm (package manager; zero managed dependencies today)
- `challenges-content.js` — single source of truth for all challenge content
- localStorage for cross-step state (keys: `smb_selected`, `smb_placements`, `smb_axis`, `smb_intersections`)
- Vercel (active deploy target via GitHub Actions)
- PWA-ready (`manifest.json`; icons TODO)
- Mobile-optimized for iPhone 13 Pro+ / iOS 26+

---

## Quick Start

```bash
# Clone
git clone https://github.com/troyeffner/SMB.git
cd SMB

# Install (validates lockfile; zero deps to install today)
pnpm install

# Dev server — opens http://localhost:3000 with live reload
pnpm dev
```

Open `http://localhost:3000` — you'll land on the index page.

---

## Environment Variables

No runtime environment variables are required today (fully client-side).

**Policy:** Never commit secrets. `.env.local` is gitignored. Only `.env.example` (placeholder values, no secrets) is committed.

---

## Deploy

### Active: Vercel via GitHub Actions
- PRs to `main` trigger preview deployments
- Pushes to `main` trigger production deployment
- Workflow: `.github/workflows/static.yml`
- Project config: `vercel.json`

Required GitHub Actions secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Migration History
GitHub Pages was previously used for deployment. Vercel is now the active CI deploy target.

---

## Using Codex Desktop in this Repo

### Startup Commands
```bash
git clone https://github.com/troyeffner/SMB.git
cd SMB
pnpm install
pnpm dev        # http://localhost:3000
```

### Expected Daily Loop

1. Read `CODEX_CONTEXT.md` → check **Active Priorities**
2. `git pull origin main` → get latest
3. `git checkout -b feat/<task>` → branch for your work
4. Edit files; verify at http://localhost:3000
5. Manual smoke test: all 5 pages, full 4-step flow
6. `git push origin feat/<task>` → open PR
7. Human review → squash-merge to `main` → auto-deploy

### Where Specs and Contracts Go

| Artifact | Location |
|---|---|
| Challenge content (canon) | `challenges-content.js` |
| Strategy docs + migration baseline | `07_Strategy_Canon_Artifacts/` |
| Data model + API contracts | `08_Data_Model_and_API_Contracts/` |
| Supabase migrations (future) | `supabase/migrations/` |
| Environment variable contract | `.env.example` (TODO) |

### Migration Artifacts

- [`07_Strategy_Canon_Artifacts/MIGRATION_BASELINE.md`](07_Strategy_Canon_Artifacts/MIGRATION_BASELINE.md) — gap table + 7-day execution plan
- [`08_Data_Model_and_API_Contracts/codex_migration_checklist.md`](08_Data_Model_and_API_Contracts/codex_migration_checklist.md) — entity map, governance rules, ownership table

### Key Reference Files

| File | Purpose |
|---|---|
| [`AGENTS.md`](AGENTS.md) | Commands, architecture map, working agreements |
| [`CODEX_CONTEXT.md`](CODEX_CONTEXT.md) | Product context, priorities, glossary, data readiness |
| [`challenges-content.js`](challenges-content.js) | **Canon lock** — do not duplicate content from this file |
