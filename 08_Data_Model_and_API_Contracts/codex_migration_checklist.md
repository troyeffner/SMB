# Codex Migration Checklist — Data Model & API Contracts

**Repo:** Where to Start · SMB Business Needs Tool
**Date:** 2026-02-28
**Owner:** TODO(owner: @troyeffner)

---

## Canonical Entity Mapping

- [ ] **Challenge** — 10 entities defined in `challenges-content.js`
  - IDs: `alignment`, `process`, `handoffs`, `workarounds`, `scaling`, `technology`, `priorities`, `quality`, `onboarding`, `roles`
  - HTML numeric IDs (1–10) map positionally to string IDs above
  - Fields per entity: `id`, `name`, `whatThisMeans`, `symptoms[]`, `whyThisHappens`, intersection patterns, Starting Points recommendations
- [ ] **Session** — TODO: define Supabase schema (links selected challenges, placements, axis, intersections for one user run)
- [ ] **Placement** — `{ x_pct, y_pct, quadrant_label, challenge_id, axis_id }`
- [ ] **Intersection** — `{ challenge_a_id, challenge_b_id, marked: boolean }`
- [ ] **Result** — Aggregated view: selected challenges + placements + intersections + Starting Points per challenge
- [ ] TODO(owner: @troyeffner): Validate this entity list is complete before writing first Supabase migration

---

## Epistemic Ingestion

### Assumptions
- [ ] Users complete the 4-step flow in a single session (no need for cross-session server persistence in V1)
- [ ] 10 challenges cover the core SMB problem space for the target audience
- [ ] Director-level users prefer plain language and concrete actions over frameworks
- [ ] `html2canvas` PDF export is sufficient for V1 sharing and reporting needs

### Hypotheses
- [ ] Adding a results-capture backend (Supabase) will increase tool value for repeat and team use
- [ ] Extracting challenge content to a lightweight CMS will reduce maintenance friction as content evolves
- [ ] Vercel preview deploys will accelerate iteration speed for content and UX changes

### Experiments
- [ ] TODO: A/B test instruction framing on Step 2 ("Tap" vs "Drag" on mobile — currently detected by viewport width)
- [ ] TODO: Measure step drop-off rate once session analytics are added

### Evidence
- [ ] Mobile UX validated: iPhone 13 Pro+ with iOS 26+, tap-to-place shipped and tested (2026-02)
- [ ] Plain-voice recommendations validated by user review — warm, director-level language confirmed (2026-02)
- [ ] 4-step flow architecture validated through iterative design sessions with owner

---

## Metaphor + Public Copy Alignment Ingestion

- [ ] **Tool name:** "Where to Start — A Business Needs Tool" — verify consistent across all HTML `<title>` tags, nav, `manifest.json`, `AGENTS.md`, `README.md`
- [ ] **Short name:** "Where to Start" — verify used in nav and PWA `manifest.json` `short_name`
- [ ] **Attribution:** "Troy Effner · Business Solutions" — verify in footer across all 5 main pages
- [ ] **Voice check:** All `challenges-content.js` recommendations verified as warm, plain, director-level language (validated 2026-02)
- [ ] TODO: Confirm `InteractionSkills.html` branding and copy aligns with the above, or mark for deprecation

---

## Governance Rule Activation

- [ ] **RULE-01 — Canon lock:** `challenges-content.js` is the only source for challenge content. No inline challenge copy permitted in HTML files.
- [ ] **RULE-02 — No destructive git:** `push --force`, `reset --hard`, `--no-verify` are prohibited without explicit user approval in chat.
- [ ] **RULE-03 — Versioned migrations only:** No ad-hoc Supabase table creation. All schema changes via `/supabase/migrations/*.sql` committed to the repo.
- [ ] **RULE-04 — No secrets committed:** `.env.local` is gitignored. Only `.env.example` (with placeholder values, no secrets) is committed.
- [ ] **RULE-05 — Test before merge:** Manual 4-step smoke test required for all PRs. Playwright e2e required once scaffold exists.
- [ ] **RULE-06 — Drift detection:** Challenge IDs referenced in HTML must match string IDs in `challenges-content.js`. TODO: enforce via CI script.
- [ ] **RULE-07 — RLS required:** Every Supabase table must have Row Level Security enabled at creation time. Default: deny all.
- [ ] **RULE-08 — Branch + PR required:** No direct commits to `main`. All changes via feature branch + pull request.

---

## Drift Scan and Blocking Issue Triage

- [ ] **HTML ↔ JS ID mapping** — HTML uses numeric `data-id` (1–10); `challenges-content.js` uses string IDs (`alignment`, etc.). Mapping is positional. This is undocumented — document it explicitly.
  - Manual verification: `businessopps.html` chip `data-id="1"` → `challenges-content.js` index 0 → `alignment` ✅
- [ ] **PWA icon paths** — `manifest.json` references `/icons/icon-192.png` and `/icons/icon-512.png` — **MISSING** (blocking full homescreen install on iOS/Android)
- [ ] **Axis default** — `smb_axis` default value `"importance-satisfaction"` matches `prioritization.html` dropdown default → ✅ Verified
- [ ] **`InteractionSkills.html`** — not linked from main navigation → does not block 4-step flow ✅. Status: orphaned.

---

## CI/Merge Gate Wiring

- [ ] Add `pnpm lint` step to `.github/workflows/static.yml` (requires Biome added first)
- [ ] Add `pnpm test` step (requires Playwright scaffold added first)
- [ ] Add challenge ID drift check: `node scripts/check-drift.js` (script TODO)
- [ ] Add Vercel preview deploy action (requires `vercel.json` added first)
- [ ] Add GitHub Action to comment preview URL on PR
- [ ] Enable `main` branch protection rule: require 1 human review + all CI checks green

---

## Ownership and Sign-Off

| Area | Owner | Status |
|---|---|---|
| Challenge content (`challenges-content.js`) | @troyeffner | Active |
| HTML/CSS/JS pages (all 5 main + 1 supplementary) | @troyeffner | Active |
| Supabase schema design | TODO(owner: @troyeffner) | Not started |
| Vercel migration (`vercel.json`) | TODO(owner: @troyeffner) | Not started |
| Test scaffold (Playwright) | TODO(owner: @dev) | Not started |
| Lint/format config (Biome) | TODO(owner: @dev) | Not started |
| CSS extraction (`styles.css`) | TODO(owner: @dev) | Not started |
| CI hardening (drift check + branch protection) | TODO(owner: @dev) | Not started |
