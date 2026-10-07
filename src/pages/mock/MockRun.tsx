import { useCallback, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Question } from "../../types";
import { useT } from "../../i18n/useT";
import { useCountdown, formatClock } from "../../hooks/useCountdown";
import { QuestionView } from "../../components/QuestionView";
import { ALL_QUESTIONS } from "../../data/questions";
import { buildMockResult, classifyError, pickQuestions, sectionLabel } from "../../utils/engine";
import { saveResult, type Attempt } from "../../utils/storage";
import { setMockSession } from "../../utils/mockStore";

const SECTIONS = ["verbal", "numerical", "diagrammatic"] as const;
const SECTION_THEME = {
  verbal: { pill: "bg-verbal-soft text-verbal-ink", bar: "bg-verbal" },
  numerical: { pill: "bg-numerical-soft text-numerical-ink", bar: "bg-numerical" },
  diagrammatic: { pill: "bg-diagram-soft text-diagram-ink", bar: "bg-diagram" },
} as const;
const SECTION_MS = 6 * 60 * 1000;
const QUESTIONS_PER_SECTION = 8;

interface SecState {
  cat: (typeof SECTIONS)[number];
  questions: Question[];
}

export function MockRun() {
  const { t } = useT();
  const navigate = useNavigate();

  // Build the exam once: 8 shuffled questions per section.
  const exam = useMemo<SecState[]>(
    () =>
      SECTIONS.map((cat) => ({
        cat,
        questions: pickQuestions(ALL_QUESTIONS, cat, "mixed", QUESTIONS_PER_SECTION),
      })),
    [],
  );

  const [secIdx, setSecIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [transitioning, setTransitioning] = useState(false);
  const qStartRef = useRef(performance.now());
  const finishedRef = useRef(false);

  const finish = useCallback(
    (allAttempts: Attempt[]) => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      const byId = new Map(ALL_QUESTIONS.map((q) => [q.id, q]));
      const result = buildMockResult(allAttempts, byId);
      saveResult(result);
      setMockSession(result);
      navigate("/mock/result", { replace: true });
    },
    [navigate],
  );

  /** Record the current answer (or skip) and advance within/between sections. */
  const advance = useCallback(
    (sel: string | null) => {
      const sec = exam[secIdx];
      const q = sec.questions[qIdx];
      const timeMs = performance.now() - qStartRef.current;
      const attempt: Attempt = {
        questionId: q.id,
        category: sec.cat,
        selected: sel,
        correct: sel === q.correctAnswer,
        timeMs,
        errorType: classifyError(q, { selected: sel, timeMs }, SECTION_MS),
      };
      const next = [...attempts, attempt];
      setAttempts(next);
      setSelected(null);

      const lastQ = qIdx + 1 >= sec.questions.length;
      const lastSec = secIdx + 1 >= exam.length;
      if (lastQ && lastSec) {
        finish(next);
      } else if (lastQ) {
        setTransitioning(true);
        setTimeout(() => {
          setSecIdx(secIdx + 1);
          setQIdx(0);
          qStartRef.current = performance.now();
          setTransitioning(false);
        }, 900);
      } else {
        setQIdx(qIdx + 1);
        qStartRef.current = performance.now();
      }
    },
    [attempts, exam, finish, qIdx, secIdx],
  );

  /** Section timer expired: mark the rest of the section unanswered, move on. */
  const handleSectionExpire = useCallback(() => {
    const sec = exam[secIdx];
    const now = performance.now();
    const next = [...attempts];
    for (let i = qIdx; i < sec.questions.length; i++) {
      const q = sec.questions[i];
      const timeMs = i === qIdx ? Math.max(0, now - qStartRef.current) : 0;
      next.push({
        questionId: q.id,
        category: sec.cat,
        selected: null,
        correct: false,
        timeMs,
        errorType: classifyError(q, { selected: null, timeMs }, SECTION_MS),
      });
    }
    setAttempts(next);
    setSelected(null);
    const lastSec = secIdx + 1 >= exam.length;
    if (lastSec) {
      finish(next);
    } else {
      setTransitioning(true);
      setTimeout(() => {
        setSecIdx(secIdx + 1);
        setQIdx(0);
        qStartRef.current = performance.now();
        setTransitioning(false);
      }, 900);
    }
  }, [attempts, exam, finish, qIdx, secIdx]);

  const sec = exam[secIdx];
  const q = sec.questions[qIdx];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header: SWFT ANALYSIS | SECTION | TIMER */}
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-sm font-extrabold uppercase tracking-widest text-slate-400">
            Swift Analysis
          </span>
          <span className={`chip ${SECTION_THEME[sec.cat].pill}`}>
            {sectionLabel(sec.cat, t)}
          </span>
          <SectionTimer key={secIdx} onExpire={handleSectionExpire} />
        </div>
        {/* Section progress */}
        <div className="flex h-1.5 w-full bg-slate-200/70" aria-hidden>
          {exam.map((s, i) => (
            <div
              key={s.cat}
              className={`h-full ${SECTION_THEME[s.cat].bar} ${i < secIdx ? "opacity-100" : i === secIdx ? "opacity-70" : "opacity-15"}`}
              style={{ width: `${100 / exam.length}%` }}
            />
          ))}
        </div>
      </header>

      {/* Body */}
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6">
        {transitioning ? (
          <div className="flex h-64 flex-col items-center justify-center gap-3">
            <div className="text-xl font-bold text-ink">{t("mock.sectionDone")}</div>
            <div className="text-slate-500">{t("mock.movingOn")}</div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <QuestionView q={q} selectedId={selected} onSelect={setSelected} />
            </div>
          </>
        )}
      </main>

      {/* Footer: Question X / Y ... NEXT */}
      {!transitioning && (
        <footer className="sticky bottom-0 border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <span className="text-sm font-semibold text-slate-500">
              {t("mock.questionOf", { n: qIdx + 1, total: sec.questions.length })}
            </span>
            {qIdx + 1 === sec.questions.length && (
              <span className="hidden text-xs text-slate-400 sm:block">{t("mock.lastQuestion")}</span>
            )}
            <button
              type="button"
              onClick={() => advance(selected)}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-brand to-brand-dark px-8 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              {t("mock.next")} <ArrowRight size={18} aria-hidden />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

/** Section countdown (06:00). Remounted per section so it re-arms. */
function SectionTimer({ onExpire }: { onExpire: () => void }) {
  const { remainingMs } = useCountdown(SECTION_MS, onExpire);
  const secs = remainingMs / 1000;
  const danger = secs <= 60;
  const critical = secs <= 10;
  return (
    <div
      role="timer"
      aria-label="Section time remaining"
      className={`font-mono text-3xl font-extrabold tabular-nums md:text-4xl ${
        critical ? "timer-critical text-red-700" : danger ? "text-amber-700" : "text-brand"
      }`}
    >
      {formatClock(remainingMs)}
    </div>
  );
}
