# MIGRATION_BASELINE.md — Codex Desktop Adoption

**Repo:** Where to Start · SMB Business Needs Tool
**Baseline date:** 2026-02-28
**Author:** TODO(owner: @troyeffner)

---

## Existing Encoded Foundations Found in Repo

| Foundation | Location | Status |
|---|---|---|
| Challenge content canon | `challenges-content.js` | ✅ Solid — 10 challenges, full data model |
| 4-step flow architecture | `index.html` + 4 step pages | ✅ Defined and linked |
| Mobile-first responsive layout | Inline CSS, all HTML files | ✅ Done |
| iOS 26+ / iPhone 13 Pro+ optimizations | All HTML `<style>` blocks | ✅ Shipped |
| Safe area + viewport-fit=cover | All HTML `<meta>` tags | ✅ Done |
| PWA manifest | `manifest.json` | ✅ Present (icons TODO) |
| GitHub Actions CI deploy | `.github/workflows/static.yml` | ✅ Active → GitHub Pages |
| localStorage state contract | 4 keys (`smb_*`) | ✅ Stable, documented |
| Brand + voice constants | All HTML + `challenges-content.js` | ✅ Consistent |
| Tap-to-place (mobile Step 2) | `prioritization.html` | ✅ Shipped |

---

## Missing Pieces for Full Codex Workflow

1. **README.md** — no project overview or onboarding doc
2. **AGENTS.md** — no AI working agreements
3. **CODEX_CONTEXT.md** — no session boot context
4. **Test coverage** — zero automated tests (Playwright, unit, or otherwise)
5. **Lint / format** — no Biome, ESLint, or Prettier config
6. **TypeScript** — vanilla JS only; no static type checking
7. **Vercel deploy** — currently GitHub Pages; Vercel not yet configured
8. **Supabase** — no backend; no migrations folder; no env var contract
9. **Shared CSS** — all styles inline across 6 HTML files (high duplication)
10. **CI validation** — no challenge ID drift check in pipeline
11. **`.env.example`** — no environment variable contract committed
12. **PWA icons** — `manifest.json` references `/icons/*.png` files that do not exist

---

## Gap Table

| Area | Current | Target | Severity | First Action |
|---|---|---|---|---|
| Documentation | None | `AGENTS.md` + `CODEX_CONTEXT.md` + `README.md` | 🔴 Critical | This PR |
| Testing | None | Playwright e2e — 4-step flow | 🔴 Critical | Next chore PR |
| Lint/Format | None | Biome (lint + format in one tool) | 🟡 High | Chore PR after tests |
| Deploy platform | GitHub Pages | Vercel (preview per branch + prod) | 🟡 High | Chore PR: add `vercel.json` |
| TypeScript | None | JSDoc types → full TS migration | 🟡 High | After test coverage exists |
| Supabase | None | Versioned migrations + RLS | 🟡 High | When first table is scoped |
| Shared CSS | Inline per-file (duplicated) | External `styles.css` | 🟠 Medium | Refactor PR |
| Drift detection | Manual inspection | CI script: validate challenge IDs | 🟠 Medium | After lint PR |
| Env var contract | None | `.env.example` committed | 🟠 Medium | Before any Supabase work |
| PWA icons | Missing | `/icons/icon-192.png` + `icon-512.png` | 🟢 Low | Asset PR |
| `InteractionSkills.html` | Orphaned page | Integrated or deprecated | 🟢 Low | Design decision needed |

---

## 7-Day Migration Execution Plan

### Day 1 — Docs scaffolding *(this PR)*
- [x] Create `AGENTS.md`
- [x] Create `CODEX_CONTEXT.md`
- [x] Create `README.md`
- [x] Create `07_Strategy_Canon_Artifacts/MIGRATION_BASELINE.md`
- [x] Create `08_Data_Model_and_API_Contracts/codex_migration_checklist.md`
- **Outcome:** Codex Desktop can open repo with full context, commands, and governance

### Day 2 — Tooling baseline
- [ ] `pnpm add -D @biomejs/biome`
- [ ] Add `biome.json` config (lint + format rules)
- [ ] Add `pnpm lint` and `pnpm format` scripts to `package.json`
- [ ] Fix all existing lint/format issues across HTML and JS files
- **Outcome:** `pnpm lint` and `pnpm format` commands work cleanly

### Day 3 — Test scaffold
- [ ] `pnpm add -D @playwright/test`
- [ ] Add `playwright.config.ts`
- [ ] Write smoke test: select 3 challenges → place 2 on matrix → mark 1 intersection → verify results page renders
- [ ] Add `pnpm test` script to `package.json`
- **Outcome:** `pnpm test` runs e2e smoke against `pnpm dev` server

### Day 4 — Vercel migration
- [ ] Add `vercel.json` (static site, output dir: `.`, no build command)
- [ ] Test `npx vercel` locally for preview deploy
- [ ] Update `.github/workflows/static.yml` to use Vercel deploy action
- [ ] Verify preview URL generated on branch push
- **Outcome:** Branch push creates a Vercel preview URL

### Day 5 — CSS extraction
- [ ] Identify shared CSS across 6 HTML files (nav, hero, action bar, typography, colors)
- [ ] Extract to `styles.css`
- [ ] Update all 6 HTML files to `<link rel="stylesheet" href="styles.css">`
- [ ] Verify all pages render identically after extraction
- **Outcome:** CSS duplication eliminated; single source for design tokens

### Day 6 — Supabase preparation
- [ ] `pnpm add -D supabase` (CLI)
- [ ] `npx supabase init` (creates `supabase/config.toml`)
- [ ] Create `.env.example` with Supabase placeholder vars
- [ ] Design `sessions` table schema with @troyeffner
- [ ] Write `supabase/migrations/YYYYMMDDHHMMSS_create_sessions.sql` + RLS policy
- **Outcome:** Ready to provision first table; env contract documented

### Day 7 — CI hardening
- [ ] Add challenge ID drift check script (`scripts/check-drift.js`)
- [ ] Wire `lint`, `test`, and drift check into `.github/workflows/static.yml`
- [ ] Add Vercel preview URL comment on PR via GitHub Action
- [ ] Enable `main` branch protection: require 1 review + all CI checks pass
- **Outcome:** Full CI gate enforced before any merge to `main`
