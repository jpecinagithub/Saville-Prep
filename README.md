# Saville Prep

**Understand → Practice → Simulate → Review.** An independent, bilingual (EN/ES) web app that helps candidates prepare for [Saville Assessment](https://www.savilleassessment.com.au/) aptitude tests — focused on the **Swift Analysis Aptitude** battery (18 minutes: Verbal 6 min · Numerical 6 min · Diagrammatic 6 min).

The core idea: *in these tests, knowing how to solve a problem is not enough — you must solve it correctly under strong time pressure.* The app trains **accuracy + speed + familiarity**, not theory.

🌐 Bilingual EN/ES (EN default) · 📱 PWA with offline support · 📊 Practice score only — **no percentiles, no invented scoring**

---

## Features

- **Landing** — hero, *Start* / *Take a mock test*, Understand / Practice / Simulate cards, and a *Welcome back* dashboard when mock history exists.
- **Which test will you take?** — battery selector (Swift Analysis, Swift Executive, Swift Global, Verbal & Numerical, *Not sure*) with a comparison table of officially published durations.
- **Before you start** — the 18-minute Swift Analysis structure as a highly visual bar, plus what each area measures.
- **Learn** — interactive worked examples for Verbal, Numerical (with real tables/charts and step-by-step solutions) and Diagrammatic (SVG INPUT → OPERATOR → OUTPUT puzzles), each with explanations, why the other options fail, and tips.
- **Practice** — by skill (Verbal / Numerical / Diagrammatic / Mixed) × difficulty (Easy / Medium / Hard) × untimed or timed (60 s per question), with a rule-based **Pace Coach** (🟢 on pace / 🟡 slightly slow / 🔴 too slow + a written summary).
- **Swift Analysis Mock** — the centerpiece: 18:00 intro, three independent 06:00 section countdowns with automatic advance, distraction-free exam layout, robust `performance.now()` timer (accurate across re-renders and tab-focus loss), amber highlight under 60 s and subtle pulse under 10 s.
- **Results** — overall *Practice score* with an explicit disclaimer that it is **not** an official Saville score, per-section cards, correct/incorrect/unanswered, accuracy, mean time, and Accuracy-vs-Speed visuals. No percentiles — Saville doesn't publish the data to compute them.
- **Review answers** — every question with your answer, the correct answer, explanation, time used, tip, and a rule-based error classification (Concept / Calculation / Interpretation / Time pressure).
- **Quick Maths** — 10-question mental-arithmetic drills (percentages, % change, ratios, rule of three, averages, differences, unit conversion) with an optional 20 s timer.
- **Diagram trainer** — endless procedurally generated SVG puzzles with configurable element count, transformation (rotate / move / invert / fill / add-remove / swap / sequence) and difficulty.
- **History** — last 10 mocks in `localStorage` (table + trend chart + clear), no login, no database.
- **Ready in 3 sessions** — a minimal preparation plan (Understand → Speed → Simulate).
- **Before the real test** — exam-day checklist (always defers to the invitation for what is allowed).
- **Sources** — every structural fact traced to official Saville Assessment pages, with the last-review date.

## Question bank

78 fully **original** bilingual questions — nothing copied from official materials:

| Category      | Easy | Medium | Hard | Total |
|---------------|------|--------|------|-------|
| Verbal        | 8    | 8      | 8    | 24    |
| Numerical     | 10   | 10     | 10   | 30    |
| Diagrammatic  | 8    | 8      | 8    | 24    |

Questions live as typed data in `src/data/questions/` (`verbal.ts`, `numerical.ts`, `diagrammatic.ts`) — no question text is hardcoded in components, so adding more is just appending to these files. Numerical items carry `tableData` / `chartData` / `calculationSteps`; diagrammatic items carry SVG shape specs rendered by the app.

## Stack

- Vite 6 + React 19 + TypeScript (strict)
- Tailwind CSS v4 · react-router-dom · Recharts · lucide-react
- `vite-plugin-pwa` (manifest, service worker, offline essentials, controlled updates)
- `@vercel/analytics` (general analytics only — no personal data; enable it in the Vercel dashboard)
- `localStorage` for language, mock history and checklist state — no backend, no auth

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build (dist/)
npm run preview  # serve the production build
```

## Project structure

```text
src/
  components/   # Layout, Timer, QuestionView, Chart/Table (SVG), Diagram (SVG), …
  pages/        # Landing, WhichTest, Overview, Learn, Practice, QuickMaths,
                # DiagramTrainer, History, Plan, ExamDay, Sources
  pages/mock/   # MockIntro, MockRun, MockResults, MockReview
  data/
    questions/  # verbal.ts, numerical.ts, diagrammatic.ts, index.ts
  i18n/         # translations.ts (ES/EN dictionary), useT hook
  hooks/        # useCountdown (performance.now timer), useLang, usePwaUpdate
  utils/        # engine (shuffle, scoring, error classification, pace rules),
                # storage (localStorage history), mockStore
  types/        # Question model
public/
  icons/        # PWA icons (192 / 512 / maskable)
  favicon.svg
```

## Deploying to Vercel

The app is static-first: `npm run build` → deploy `dist/`. A `vercel.json` with SPA rewrites is included so deep links (e.g. `/mock/run`) work on refresh. Import the GitHub repo in Vercel, keep the defaults, and enable **Web Analytics** in the project dashboard (the code is already wired via `@vercel/analytics`).

## PWA

Installable via `manifest.webmanifest`; the service worker precaches the app shell for offline use (essential parts work offline). Updates are controlled: when a new version is deployed, the app shows an *Update* banner instead of reloading silently.

## Sources & fact policy

Test-structure facts (battery names, officially published durations, measured areas) were verified against official Saville Assessment pages on **2026-10-07** — see the in-app **Sources** page for the full list. The app deliberately does **not** show question counts, scoring rules, percentiles or pass marks: Saville does not publish them, and this simulator reports a *practice score* only.

## Disclaimer

**EN:** Saville Prep is an independent preparation tool and is not affiliated with, sponsored by, or endorsed by Saville Assessment. Saville Assessment and its products are trademarks of their respective owners. Practice questions on this site are original and are not official assessment questions.

**ES:** Saville Prep es una herramienta independiente de preparación y no está afiliada, patrocinada ni respaldada por Saville Assessment. Saville Assessment y sus productos son marcas de sus respectivos propietarios. Las preguntas de práctica de este portal son originales y no son preguntas oficiales.

---

Built by Jon Peciña — jpecina@gmail.com
