import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle, MinusCircle, Gauge } from "lucide-react";
import type { Difficulty, Question, QuestionCategory } from "../types";
import { useT } from "../i18n/useT";
import { useCountdown, formatClock } from "../hooks/useCountdown";
import { QuestionView } from "../components/QuestionView";
import { ALL_QUESTIONS } from "../data/questions";
import { classifyError, paceStatus, pickQuestions, sectionLabel } from "../utils/engine";
import type { Attempt } from "../utils/storage";

type Cat = QuestionCategory | "mixed";
type Diff = Difficulty | "mixed";

const PRACTICE_COUNT = 6;
export const PRACTICE_SECONDS_PER_Q = 60;

export interface RunAttempt extends Attempt {
  q: Question;
}

/* ---------------- Setup ---------------- */

export function Practice() {
  const { t } = useT();
  const [cat, setCat] = useState<Cat>("mixed");
  const [diff, setDiff] = useState<Diff>("mixed");
  const [timed, setTimed] = useState(true);
  const [run, setRun] = useState<{ questions: Question[]; timed: boolean; key: number } | null>(null);

  const start = () => {
    const qs = pickQuestions(ALL_QUESTIONS, cat, diff, PRACTICE_COUNT);
    if (qs.length === 0) return;
    setRun({ questions: qs, timed, key: Date.now() });
  };

  if (run) {
    return <PracticeRun key={run.key} questions={run.questions} timed={run.timed} onExit={() => setRun(null)} onRestart={start} />;
  }

  const cats: { id: Cat; label: string }[] = [
    { id: "verbal", label: t("common.verbal") },
    { id: "numerical", label: t("common.numerical") },
    { id: "diagrammatic", label: t("common.diagrammatic") },
    { id: "mixed", label: t("common.mixed") },
  ];
  const diffs: { id: Diff; label: string }[] = [
    { id: "easy", label: t("common.easy") },
    { id: "medium", label: t("common.medium") },
    { id: "hard", label: t("common.hard") },
    { id: "mixed", label: t("common.mixed") },
  ];
  const chip = (active: boolean) =>
    `rounded-xl border-2 px-5 py-3 font-semibold transition ${
      active ? "border-brand bg-brand-light text-brand" : "border-slate-200 bg-white text-slate-700 hover:border-brand"
    }`;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("practice.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("practice.subtitle")}</p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="mb-3 text-lg font-bold text-ink">{t("practice.step1")}</h2>
          <div className="flex flex-wrap gap-3" role="radiogroup" aria-label={t("practice.step1")}>
            {cats.map((c) => (
              <button key={c.id} type="button" role="radio" aria-checked={cat === c.id} onClick={() => setCat(c.id)} className={chip(cat === c.id)}>
                {c.label}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-ink">{t("practice.step2")}</h2>
          <div className="flex flex-wrap gap-3" role="radiogroup" aria-label={t("practice.step2")}>
            {diffs.map((d) => (
              <button key={d.id} type="button" role="radio" aria-checked={diff === d.id} onClick={() => setDiff(d.id)} className={chip(diff === d.id)}>
                {d.label}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-ink">{t("practice.step3")}</h2>
          <div className="flex flex-wrap gap-3" role="radiogroup" aria-label={t("practice.step3")}>
            <button type="button" role="radio" aria-checked={!timed} onClick={() => setTimed(false)} className={chip(!timed)}>
              {t("common.withoutTimer")}
            </button>
            <button type="button" role="radio" aria-checked={timed} onClick={() => setTimed(true)} className={chip(timed)}>
              {t("common.withTimer")} · {t("practice.perQuestion", { sec: PRACTICE_SECONDS_PER_Q })}
            </button>
          </div>
          <p className="mt-2 text-sm text-slate-500">
            {timed ? t("practice.timedNote", { sec: PRACTICE_SECONDS_PER_Q }) : t("practice.untimedNote")}
          </p>
        </section>
        <button
          type="button"
          onClick={start}
          className="w-full rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white hover:bg-brand-dark sm:w-auto"
        >
          {t("practice.startPractice")} · {PRACTICE_COUNT} {t("practice.questions")}
        </button>
      </div>
    </div>
  );
}

/* ---------------- Run ---------------- */

function PracticeRun({
  questions,
  timed,
  onExit,
  onRestart,
}: {
  questions: Question[];
  timed: boolean;
  onExit: () => void;
  onRestart: () => void;
}) {
  const { t } = useT();
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<RunAttempt[]>([]);
  const [done, setDone] = useState(false);
  const qStartRef = useRef(performance.now());

  const recordAndAdvance = (sel: string | null) => {
    const q = questions[idx];
    const timeMs = performance.now() - qStartRef.current;
    const attempt: RunAttempt = {
      q,
      questionId: q.id,
      category: q.category,
      selected: sel,
      correct: sel === q.correctAnswer,
      timeMs,
      errorType: classifyError(q, { selected: sel, timeMs }, timed ? PRACTICE_SECONDS_PER_Q * 1000 : null),
    };
    const next = [...attempts, attempt];
    setAttempts(next);
    setSelected(null);
    if (idx + 1 >= questions.length) {
      setDone(true);
    } else {
      setIdx(idx + 1);
      qStartRef.current = performance.now();
    }
  };

  /** Called when the per-question timer expires. */
  const handleExpire = () => {
    setAttempts((prev) => {
      if (prev.length > idx) return prev; // already recorded (e.g. user answered at the last moment)
      const q = questions[idx];
      const timeMs = PRACTICE_SECONDS_PER_Q * 1000;
      const attempt: RunAttempt = {
        q,
        questionId: q.id,
        category: q.category,
        selected: null,
        correct: false,
        timeMs,
        errorType: classifyError(q, { selected: null, timeMs }, timeMs),
      };
      return [...prev, attempt];
    });
    setSelected(null);
    if (idx + 1 >= questions.length) setDone(true);
    else {
      setIdx(idx + 1);
      qStartRef.current = performance.now();
    }
  };

  if (done) return <PracticeDone attempts={attempts} timed={timed} onRestart={onRestart} onExit={onExit} />;

  const q = questions[idx];
  const elapsed = attempts.reduce((s, a) => s + a.timeMs, 0);
  const pace = timed ? paceStatus(elapsed, attempts.length, questions.length, questions.length * PRACTICE_SECONDS_PER_Q * 1000) : null;

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-500">
          {t("mock.questionOf", { n: idx + 1, total: questions.length })}
        </span>
        {timed && (
          <PerQuestionTimer key={idx} onExpire={handleExpire} />
        )}
      </div>
      {pace && <PaceBadge status={pace} />}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <QuestionView q={q} selectedId={selected} onSelect={setSelected} />
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => recordAndAdvance(null)}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-100"
          >
            {t("common.skip")}
          </button>
          <button
            type="button"
            onClick={() => selected && recordAndAdvance(selected)}
            disabled={!selected}
            className="rounded-xl bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-dark disabled:opacity-40"
          >
            {idx + 1 === questions.length ? t("common.finish") : t("common.next")}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Results + Pace Coach ---------------- */

function PracticeDone({
  attempts,
  timed,
  onRestart,
  onExit,
}: {
  attempts: RunAttempt[];
  timed: boolean;
  onRestart: () => void;
  onExit: () => void;
}) {
  const { t, lang } = useT();
  const total = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;
  const budgetMs = PRACTICE_SECONDS_PER_Q * 1000;

  let summary = "";
  if (timed && total > 0) {
    const meanMs = attempts.reduce((s, a) => s + a.timeMs, 0) / total;
    const slowQs = attempts
      .map((a, i) => ({ a, i: i + 1 }))
      .filter(({ a }) => a.timeMs > budgetMs * 1.3)
      .sort((x, y) => y.a.timeMs - x.a.timeMs)
      .slice(0, 2);
    if (slowQs.length > 0 && meanMs > budgetMs * 0.9) {
      const cats = [...new Set(slowQs.map(({ a }) => sectionLabel(a.category, t)))].join(", ");
      const qs = slowQs.map(({ i }) => i).join(lang === "es" ? " y " : " and ");
      summary = t("pace.summaryLostTime", { cat: cats, qs });
    } else if (correct / total >= 0.8 && meanMs > budgetMs * 0.7) {
      summary = t("pace.summarySpeed");
    } else if (correct / total < 0.6) {
      const worst = (["verbal", "numerical", "diagrammatic"] as const).reduce((a, b) => {
        const ra = attempts.filter((x) => x.category === a);
        const rb = attempts.filter((x) => x.category === b);
        const pa = ra.length ? ra.filter((x) => x.correct).length / ra.length : 1;
        const pb = rb.length ? rb.filter((x) => x.correct).length / rb.length : 1;
        return pa <= pb ? a : b;
      });
      summary = t("pace.summaryAccuracy", { cat: sectionLabel(worst, t) });
    } else {
      summary = t("pace.summaryGood");
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-ink">{t("practice.resultsTitle")}</h1>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-5xl font-extrabold text-brand">{correct}/{total}</div>
        <p className="mt-1 text-slate-600">
          {t("results.accuracy")}: {Math.round((correct / Math.max(1, total)) * 100)}%
        </p>
        {summary && (
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-light p-4 text-[15px] text-brand-dark">
            <Gauge size={18} className="mt-0.5 shrink-0" aria-hidden />
            <p><strong>{t("pace.title")}: </strong>{summary}</p>
          </div>
        )}
        <ul className="mt-4 space-y-2">
          {attempts.map((a, i) => (
            <li key={a.questionId} className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2 text-sm">
              {a.correct ? (
                <CheckCircle2 size={18} className="shrink-0 text-emerald-600" aria-label={t("common.correct")} />
              ) : a.selected == null ? (
                <MinusCircle size={18} className="shrink-0 text-slate-400" aria-label={t("common.unanswered")} />
              ) : (
                <XCircle size={18} className="shrink-0 text-red-500" aria-label={t("common.incorrect")} />
              )}
              <span className="font-medium text-slate-700">{t("common.question")} {i + 1}</span>
              <span className="text-slate-500">{sectionLabel(a.category, t)}</span>
              {timed && (
                <span className="ml-auto font-mono text-slate-500">{(a.timeMs / 1000).toFixed(1)}{t("results.sec")}</span>
              )}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={onRestart} className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
            {t("practice.newSet")}
          </button>
          <button type="button" onClick={onExit} className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
            {t("practice.backToSetup")}
          </button>
          <Link to="/mock" className="rounded-xl border-2 border-brand px-6 py-3 font-semibold text-brand hover:bg-brand-light">
            {t("landing.ctaMock")}
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Per-question countdown. Remounted (key=question index) so it re-arms each question. */
function PerQuestionTimer({ onExpire }: { onExpire: () => void }) {
  const { remainingMs } = useCountdown(PRACTICE_SECONDS_PER_Q * 1000, onExpire);
  return (
    <div
      role="timer"
      className={`font-mono text-2xl font-bold tabular-nums ${remainingMs <= 15000 ? "timer-critical text-red-700" : "text-brand"}`}
    >
      {formatClock(remainingMs)}
    </div>
  );
}

function PaceBadge({ status }: { status: "on" | "slow" | "tooSlow" }) {  const { t } = useT();
  const map = {
    on: { dot: "bg-emerald-500", label: t("pace.onPace") },
    slow: { dot: "bg-amber-500", label: t("pace.slightlySlow") },
    tooSlow: { dot: "bg-red-500", label: t("pace.tooSlow") },
  } as const;
  const m = map[status];
  return (
    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
      <span className={`h-2.5 w-2.5 rounded-full ${m.dot}`} aria-hidden />
      {m.label}
    </div>
  );
}
