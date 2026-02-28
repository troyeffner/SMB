# AGENTS.md — Where to Start · SMB Business Needs Tool

## Repo Mission and Scope

A 4-step client-side toolkit that helps SMB directors (insurance company level) identify, prioritize, map, and summarize their core business challenges. No backend, no auth — pure browser-based HTML/CSS/JS deployed as a static site.

Repo: https://github.com/troyeffner/SMB
Live: https://troyeffner.github.io/SMB/ (historical Pages URL; active deploy via Vercel)
Owner: Troy Effner · Business Solutions

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Language | Vanilla HTML5 / CSS3 / ES6+ JS | No framework, no transpilation |
| Content library | `challenges-content.js` | Single source of truth for all challenge data |
| Package manager | pnpm | `pnpm-lock.yaml` present; zero managed deps |
| Dev server | browser-sync (npx) | Live-reload on file save |
| Deploy — active | Vercel | `.github/workflows/static.yml` + `vercel.json` |
| Deploy — previous | GitHub Pages | Historical workflow replaced during migration |
| Database | Supabase (not yet active) | Tables not provisioned; see `CODEX_CONTEXT.md` Data Readiness |
| State (client) | localStorage | 4 keys — see Architecture Map |
| PWA | `manifest.json` | Installable on iOS/Android |

---

## Canonical Commands

```bash
# Install (no-op; zero managed deps — run to validate lockfile)
pnpm install

# Dev server — opens browser at http://localhost:3000
pnpm dev

# Build — NONE (static files; no build step)
# TODO: add build step if/when CSS extraction or bundling is introduced

# Test — NONE
# TODO: add Playwright or Vitest e2e before any backend work begins

# Lint — NONE
# TODO: add Biome (pnpm add -D @biomejs/biome)

# Typecheck — NONE (vanilla JS)
# TODO: add JSDoc types or migrate to TypeScript

# Deploy preview (PR -> main)
# Automatic via GitHub Actions + Vercel secrets
# Optional local preview: npx vercel

# Deploy production (push -> main)
# Automatic via GitHub Actions + Vercel secrets
# Optional local production: npx vercel --prod
```

---

## Architecture Map

```
/
├── index.html                          Landing page — entry point, links to 4 steps
├── businessopps.html                   Step 1: Discover — 10 challenge selection cards
├── prioritization.html                 Step 2: Prioritize — 2D drag/tap matrix
├── intersection.html                   Step 3: Map — challenge intersection grid
├── results.html                        Step 4: Summary — PDF export + contact card
├── InteractionSkills.html              Supplementary resource (not in main flow)
├── challenges-content.js               CONTENT SOURCE OF TRUTH — all challenge data
├── manifest.json                       PWA manifest (icons TODO)
├── package.json                        pnpm config + dev script
├── .github/workflows/static.yml        GitHub Actions deploy → Vercel (preview + production)
├── vercel.json                         Vercel project config for static deployment
├── 07_Strategy_Canon_Artifacts/        Migration baseline + strategy docs
├── 08_Data_Model_and_API_Contracts/    Data model + API contracts + checklists
└── .claude/                            Claude Code local config (not committed to CI)
```

**State keys (localStorage):**

| Key | Set in | Consumed in | Value |
|---|---|---|---|
| `smb_selected` | Step 1 | Steps 2–4 | Array of challenge IDs (`["1","3","7"]`) |
| `smb_placements` | Step 2 | Steps 3–4 | JSON: `{ axisId, items: { id: {x_pct, y_pct, label, quadrant} } }` |
| `smb_axis` | Step 2 | Steps 3–4 | String: `"importance-satisfaction"` (default) or `"risk-pain"` |
| `smb_intersections` | Step 3 | Step 4 | JSON: array of marked intersection pairs |

**Challenge IDs (10 total):** alignment, process, handoffs, workarounds, scaling, technology, priorities, quality, onboarding, roles

> ⚠️ HTML uses numeric `data-id` attributes (1–10); `challenges-content.js` uses string IDs. Mapping is positional (index 0 = "alignment"). This is a known drift risk — see checklist.

---

## Working Agreements for AI Agents

### Branch Naming

```
feat/<short-description>      # new capability
fix/<short-description>       # bug fix
chore/<short-description>     # tooling, config, docs
content/<short-description>   # challenges-content.js or copy changes
```

All branches cut from `main`. PR required before merge to `main`.

### Destructive Git Commands — PROHIBITED

Never run without explicit user approval in chat:
- `git push --force` / `git push -f`
- `git reset --hard`
- `git checkout .` / `git restore .`
- `git clean -f` / `git clean -fd`
- `git branch -D` on any shared branch
- Any flag that bypasses hooks: `--no-verify`

### Unrelated Dirty Files

If untracked or modified files exist that are unrelated to the current task, **do not stage them**. Stage only files directly changed by the task. Notify the user of dirty state before committing.

### Test Requirements Before Merge

- [ ] Manual smoke test: open all 5 pages, complete the 4-step flow end-to-end
- [ ] Mobile check: verify at 390px viewport (iPhone 13 Pro width)
- [ ] PDF export: verify `results.html` saves clean PDF via "Save as PDF" button
- [ ] TODO: Playwright e2e required before any backend or Supabase work begins

### Code Review Expectations

- One human review required for all PRs touching `challenges-content.js`
- Self-merge permitted for docs-only PRs (`AGENTS.md`, `CODEX_CONTEXT.md`, `README.md`)
- Squash-merge preferred to keep `main` history clean
- PR description must explain **what** changed and **why**

---

## UXOS Alignment Rules

### Versioned Changes Only

- All content changes to `challenges-content.js` must go through a PR — never edit directly on `main`
- All structural HTML changes (navigation, flow, new pages) require a dedicated PR
- Commit messages: imperative, descriptive, scoped — e.g. `fix(prioritization): prevent page scroll while placing chips`

### Canon Lock Expectations

- `challenges-content.js` is the **canon lock** for all challenge definitions, symptoms, recommendations, and intersection patterns
- No challenge copy may live outside this file
- No inline content strings in HTML that duplicate or contradict `challenges-content.js`

### Drift Detection Expectations

- Any change to challenge IDs in `challenges-content.js` must be reflected in all 5 HTML files
- Any new axis config must update both the dropdown in `prioritization.html` and the `AXIS_CONFIGS` JS object
- TODO: add a CI script that validates all challenge IDs referenced in HTML exist in `challenges-content.js`

---

## Definition of Done Checklist

- [ ] All 5 pages load without console errors
- [ ] 4-step flow completes: select → place → mark intersections → view results
- [ ] PDF export renders correctly (no blank pages)
- [ ] Mobile layout passes at 390px (iPhone 13 Pro width)
- [ ] No new inline content strings outside `challenges-content.js`
- [ ] Commit message is descriptive and scoped
- [ ] PR description explains what changed and why
- [ ] No secrets or API keys committed (`.env.local` is gitignored)
