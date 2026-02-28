# CODEX_CONTEXT.md — Where to Start · Session Context

## Product Context and Current Status

**Product:** "Where to Start — A Business Needs Tool"
**Purpose:** 4-step interactive toolkit for SMB directors to surface, prioritize, map, and summarize business challenges.
**Audience:** Director-level leaders at SMBs (e.g. insurance company, 50–500 employees). Warm, plain language — no consulting jargon.
**Status:** V1 feature-complete. Mobile-optimized for iPhone 13 Pro+ / iOS 26+. Deployed to GitHub Pages.

**Live URL:** https://troyeffner.github.io/SMB/
**Repo:** https://github.com/troyeffner/SMB
**Owner:** Troy Effner · Business Solutions
**LinkedIn:** https://www.linkedin.com/in/troyeffner/
**Calendly:** https://calendly.com/troyeffner/orgskillsintro

---

## Active Priorities

### Now
- [x] Mobile-first layout for Step 2 (tap-to-place chip interaction)
- [x] iPhone 13 Pro+ / iOS 26+ safe area + PWA support
- [x] Plain-voice recommendations in `challenges-content.js`
- [ ] Add homescreen icons (192×192, 512×512 PNGs) to `/icons/` folder

### Next
- [ ] Migrate deploy from GitHub Pages → Vercel (preview deploys per branch)
- [ ] Add `vercel.json` configuration
- [ ] Add Playwright smoke tests for 4-step flow
- [ ] Add Biome lint + format config
- [ ] First Supabase table: session/results capture (see Data Readiness below)
- [ ] Extract shared CSS into a single `styles.css` (reduce duplication across 6 HTML files)
- [ ] `InteractionSkills.html`: determine if it belongs in the main flow or should be deprecated

---

## Domain Glossary

| Term | Definition |
|---|---|
| **Challenge** | One of 10 named business problem areas (alignment, process, handoffs, etc.) |
| **Starting Points** | 3 plain-language action approaches per challenge, per quadrant position |
| **Quadrant** | One of 4 zones in the Step 2 priority matrix (e.g. High Satisfaction / High Value) |
| **Intersection** | A cell in the Step 3 grid where two challenges overlap and compound each other |
| **Axis** | The labeling scheme for the Step 2 matrix (default: Business Value × Current Satisfaction) |
| **Placement** | Where a challenge chip is dropped/tapped on the Step 2 matrix |
| **Canon lock** | `challenges-content.js` — the only authoritative source for challenge content |
| **Flow** | The 4-step linear sequence: Discover → Prioritize → Map → Summary |
| **Chip** | Draggable/tappable label representing one challenge in Step 2 |
| **Placed chip** | A chip positioned on the Step 2 matrix |
| **smb_*** | localStorage key prefix for all cross-step state |
| **Drift** | Challenge ID used in HTML that is absent or renamed in `challenges-content.js` |

---

## Decision Policy

| Tradeoff | Rule |
|---|---|
| Simplicity vs. features | Default to the minimum that solves the problem. No speculative tooling. |
| Inline vs. external | Prefer external files once a pattern appears in 2+ pages. Single-page inline is fine. |
| New challenge vs. edit | Edit existing content in `challenges-content.js`; do not add new challenge IDs without explicit approval. |
| Framework vs. vanilla | Stay vanilla JS until a specific capability gap demands a framework — document the gap before introducing one. |
| Test now vs. test later | Write a test before adding any backend interaction or Supabase call. |
| Copy changes | Must match the established voice: warm, curious, plain. No jargon. Director-level audience. |
| Database | No ad-hoc table creation. All schema changes via versioned migrations in `/supabase/migrations/`. |

---

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| `challenges-content.js` drifts from HTML | High | Canon lock rule + TODO CI validation script |
| No tests → regressions on refactor | High | Add Playwright before any CSS extraction or backend work |
| CSS duplication across 6 HTML files | Medium | Extract to `styles.css` as next chore PR |
| CDN dependency (html2canvas v1.4.1) | Medium | TODO: `pnpm add html2canvas` to manage version explicitly |
| No `.env.example` → onboarding friction | Medium | Create `.env.example` before any Supabase work |
| GitHub Pages → Vercel migration pending | Medium | Add `vercel.json` in next chore PR |
| PWA homescreen icons missing | Low | Add `/icons/icon-192.png` + `/icons/icon-512.png` |
| `InteractionSkills.html` orphaned | Low | Decide: keep, integrate, or deprecate |

---

## Data Readiness (Supabase)

Supabase is the target backend standard. **No tables are active yet.**

### Schema Governance
- All database changes via versioned SQL migration files in `/supabase/migrations/`
- File naming convention: `YYYYMMDDHHMMSS_<description>.sql`
- **No ad-hoc table creation** via Supabase dashboard without a corresponding migration file committed to the repo

### Migration Folder Convention
```
/supabase/
  config.toml                               ← Supabase CLI project config
  /migrations/
    YYYYMMDDHHMMSS_create_sessions.sql      ← first table
    YYYYMMDDHHMMSS_create_results.sql
```

### Environment Variable Policy
- All env vars listed in `.env.example` (committed, placeholder values only — no secrets)
- Actual values in `.env.local` (gitignored)
- Required vars for Supabase:
  ```
  SUPABASE_URL=https://<project-ref>.supabase.co
  SUPABASE_ANON_KEY=<anon-key>
  # SUPABASE_SERVICE_ROLE_KEY — server-side only; never expose to client
  ```

### RLS Policy Placeholder
- Row Level Security must be enabled on every table at creation time
- Default policy: deny all; grant only what is explicitly required
- TODO(owner: @troyeffner): define RLS policies for `sessions` and `results` tables when schema is finalized

### Supabase CLI Commands (TODO — CLI not yet installed)
```bash
pnpm add -D supabase          # install CLI
npx supabase init             # create config.toml
npx supabase start            # start local stack (Docker required)
npx supabase db push          # apply migrations to hosted project
npx supabase gen types typescript --linked > types/database.ts
```

### First Table Rollout Checklist
- [ ] TODO(owner: @troyeffner): Design `sessions` table schema
- [ ] TODO(owner: @troyeffner): Write migration SQL + RLS policy
- [ ] TODO(dev): Install Supabase CLI and run `supabase init`
- [ ] TODO(dev): Apply migration to hosted project with `supabase db push`
- [ ] TODO(dev): Add Supabase JS client to `challenges-content.js` or a new `lib/supabase.js`
- [ ] TODO(dev): Test RLS with anon key before shipping

---

## Start Here — Codex Desktop Session Boot

1. **Read this file** for product context and current priorities
2. **Read `AGENTS.md`** for commands, architecture, and working agreements
3. `git status` — check for unexpected dirty files before starting
4. `git log --oneline -5` — orient to recent work
5. Pick the top unchecked item from **Active Priorities → Now**
6. `git checkout -b <type>/<description>` — branch from `main`
7. `pnpm dev` → http://localhost:3000
8. Content changes → edit `challenges-content.js` only (never HTML strings)
9. Before pushing → manual smoke test: all 5 pages, full 4-step flow
