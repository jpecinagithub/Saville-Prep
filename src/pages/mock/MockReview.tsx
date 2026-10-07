import { Link, Navigate } from "react-router-dom";
import { CheckCircle2, XCircle, MinusCircle, ArrowLeft, Lightbulb } from "lucide-react";
import type { Question } from "../../types";
import { useT } from "../../i18n/useT";
import { QuestionView } from "../../components/QuestionView";
import { ALL_QUESTIONS } from "../../data/questions";
import { sectionLabel } from "../../utils/engine";
import { getMockSession } from "../../utils/mockStore";

const LETTERS = ["A", "B", "C", "D"];

export function MockReview() {
  const { t, loc } = useT();
  const session = getMockSession();
  if (!session) return <Navigate to="/mock" replace />;

  const byId = new Map<string, Question>(ALL_QUESTIONS.map((q) => [q.id, q]));
  const errLabel: Record<string, string> = {
    concept: t("review.errorConcept"),
    calculation: t("review.errorCalculation"),
    interpretation: t("review.errorInterpretation"),
    "time-pressure": t("review.errorTimePressure"),
  };
  const errDesc: Record<string, string> = {
    concept: t("review.errorConceptDesc"),
    calculation: t("review.errorCalculationDesc"),
    interpretation: t("review.errorInterpretationDesc"),
    "time-pressure": t("review.errorTimePressureDesc"),
  };

  let n = 0;

  return (
    <div className="mx-auto max-w-3xl py-6">
      <h1 className="text-3xl font-extrabold text-ink">{t("review.title")}</h1>

      <div className="mt-6 space-y-6">
        {session.result.attempts.map((a) => {
          const q = byId.get(a.questionId);
          if (!q) return null;
          n += 1;
          const userIdx = a.selected ? q.options.findIndex((o) => o.id === a.selected) : -1;
          const correctIdx = q.options.findIndex((o) => o.id === q.correctAnswer);
          return (
            <article key={a.questionId + n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wide text-brand">
                  {sectionLabel(a.category, t)} · {t("common.question")} {n}
                </span>
                {a.correct ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
                    <CheckCircle2 size={16} aria-hidden /> {t("common.correct")}
                  </span>
                ) : a.selected == null ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    <MinusCircle size={16} aria-hidden /> {t("common.unanswered")}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700">
                    <XCircle size={16} aria-hidden /> {t("common.incorrect")}
                  </span>
                )}
              </div>

              <QuestionView q={q} selectedId={a.selected} onSelect={() => {}} disabled reveal />

              <dl className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-4 text-sm md:grid-cols-2">
                <div>
                  <dt className="font-semibold text-slate-500">{t("common.yourAnswer")}</dt>
                  <dd className="font-bold text-ink">
                    {userIdx >= 0 ? `${LETTERS[userIdx]} — ${loc(q.options[userIdx].label).slice(0, 60)}` : t("review.noAnswer")}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">{t("common.correctAnswer")}</dt>
                  <dd className="font-bold text-emerald-700">{LETTERS[correctIdx]}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">{t("review.timeUsed")}</dt>
                  <dd className="font-mono font-bold text-ink">{(a.timeMs / 1000).toFixed(1)}{t("results.sec")}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-500">{t("review.errorType")}</dt>
                  <dd className="font-bold text-ink">
                    {a.errorType ? (
                      <span title={errDesc[a.errorType]}>{errLabel[a.errorType]}</span>
                    ) : (
                      t("review.errorNone")
                    )}
                  </dd>
                </div>
              </dl>

              <div className="mt-4">
                <h3 className="font-bold text-ink">{t("common.explanation")}</h3>
                <p className="mt-1 text-slate-700">{loc(q.explanation)}</p>
              </div>
              {q.numeric?.calculationSteps && (
                <div className="mt-3">
                  <h3 className="font-bold text-ink">{t("learn.stepsTitle")}</h3>
                  <ol className="mt-1 list-decimal space-y-1 pl-5 text-slate-700">
                    {q.numeric.calculationSteps.map((s, i) => (
                      <li key={i}>{loc(s)}</li>
                    ))}
                  </ol>
                </div>
              )}
              {q.tip && (
                <div className="mt-3 flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-sm text-amber-900">
                  <Lightbulb size={16} className="mt-0.5 shrink-0" aria-hidden />
                  <p><strong>{t("common.tip")}: </strong>{loc(q.tip)}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/mock/result" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
          <ArrowLeft size={18} aria-hidden /> {t("review.backToResults")}
        </Link>
        <Link to="/mock" className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
          {t("results.retake")}
        </Link>
      </div>
    </div>
  );
}
