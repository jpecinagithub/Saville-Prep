import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb } from "lucide-react";
import type { Question } from "../types";
import { useT } from "../i18n/useT";
import { QuestionView } from "../components/QuestionView";
import { learnExample } from "../data/questions";

const ACCENTS = {
  verbal: {
    bar: "from-verbal to-verbal-deep",
    kicker: "text-verbal-ink",
    dot: "bg-verbal",
    exampleBg: "bg-verbal-soft/50",
  },
  numerical: {
    bar: "from-numerical to-numerical-deep",
    kicker: "text-numerical-ink",
    dot: "bg-numerical",
    exampleBg: "bg-numerical-soft/50",
  },
  diagrammatic: {
    bar: "from-diagram to-diagram-deep",
    kicker: "text-diagram-ink",
    dot: "bg-diagram",
    exampleBg: "bg-diagram-soft/50",
  },
} as const;

function LearnBlock({
  kicker,
  title,
  bullets,
  example,
  after,
  accent,
}: {
  kicker: string;
  title: string;
  bullets: string[];
  example?: Question;
  after?: React.ReactNode;
  accent: keyof typeof ACCENTS;
}) {
  const { t, loc } = useT();
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const a = ACCENTS[accent];

  return (
    <section className="card relative mb-10 overflow-hidden p-6 md:p-8">
      <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.bar}`} aria-hidden />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className={`kicker ${a.kicker}`}>{t("learn.verbalMeasures")}</span>
        <span className="chip bg-slate-100 font-mono tabular-nums text-slate-500">{kicker}</span>
      </div>
      <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">{title}</h2>
      <ul className="mt-5 grid gap-2.5 md:grid-cols-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-slate-700">
            <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${a.dot}`} aria-hidden />
            {b}
          </li>
        ))}
      </ul>

      {example && (
        <div className={`mt-6 rounded-2xl ${a.exampleBg} p-5 md:p-6`}>
          <h3 className="mb-4 font-display text-xl font-semibold text-ink">{t("learn.exampleTitle")}</h3>
          <QuestionView
            q={example}
            selectedId={selected}
            onSelect={(id) => {
              if (!revealed) setSelected(id);
            }}
            disabled={revealed}
            reveal={revealed}
          />
          {!revealed ? (
            <button
              type="button"
              onClick={() => selected && setRevealed(true)}
              disabled={!selected}
              className="mt-4 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-40"
            >
              {t("common.submit")}
            </button>
          ) : (
            <div className="mt-4 space-y-4">
              <div className={`rounded-xl p-4 font-semibold ${selected === example.correctAnswer ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"}`}>
                {selected === example.correctAnswer ? t("common.correct") : t("common.incorrect")} — {t("common.correctAnswer")}:{" "}
                {["A", "B", "C", "D"][example.options.findIndex((o) => o.id === example.correctAnswer)]}
              </div>
              <div>
                <h4 className="font-bold text-ink">{t("common.explanation")}</h4>
                <p className="mt-1 text-slate-700">{loc(example.explanation)}</p>
              </div>
              {example.numeric?.calculationSteps && (
                <div>
                  <h4 className="font-bold text-ink">{t("learn.stepsTitle")}</h4>
                  <ol className="mt-1 list-decimal space-y-1 pl-5 text-slate-700">
                    {example.numeric.calculationSteps.map((s, i) => (
                      <li key={i}>{loc(s)}</li>
                    ))}
                  </ol>
                </div>
              )}
              {example.diagram?.rule && (
                <div className="flex items-center gap-3 rounded-xl bg-brand-light p-4">
                  <Lightbulb size={20} className="shrink-0 text-brand" aria-hidden />
                  <p className="text-[15px] text-brand-dark">
                    <strong>{t("learn.operatorLabel")}: </strong>
                    {loc(example.diagram.rule)}
                  </p>
                </div>
              )}
              {example.whyWrong && example.whyWrong.length > 0 && (
                <div>
                  <h4 className="font-bold text-ink">{t("common.whyWrong")}</h4>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700">
                    {example.whyWrong.map((w, i) => (
                      <li key={i}>{loc(w)}</li>
                    ))}
                  </ul>
                </div>
              )}
              {example.tip && (
                <div className="flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-[15px] text-amber-900">
                  <Lightbulb size={18} className="mt-0.5 shrink-0" aria-hidden />
                  <p>
                    <strong>{t("common.tip")}: </strong>
                    {loc(example.tip)}
                  </p>
                </div>
              )}
              <button
                type="button"
                onClick={() => {
                  setSelected(null);
                  setRevealed(false);
                }}
                className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 hover:bg-slate-100"
              >
                {t("common.tryAgain")}
              </button>
            </div>
          )}
        </div>
      )}
      {after}
    </section>
  );
}

export function Learn() {
  const { t, ts } = useT();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="section-head">{t("learn.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("learn.subtitle")}</p>

      <div className="mt-8">
        <LearnBlock
          accent="verbal"
          kicker="06:00"
          title={t("learn.verbalTitle")}
          bullets={ts("learn.verbalBullets")}
          example={learnExample("verbal")}
        />
        <LearnBlock
          accent="numerical"
          kicker="06:00"
          title={t("learn.numericalTitle")}
          bullets={ts("learn.numericalBullets")}
          example={learnExample("numerical")}
        />
        <LearnBlock
          accent="diagrammatic"
          kicker="06:00"
          title={t("learn.diagrammaticTitle")}
          bullets={ts("learn.diagrammaticBullets")}
          example={learnExample("diagrammatic")}
          after={
            <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-100 p-4 text-sm font-semibold text-slate-600">
              <span>{t("learn.inputLabel")}</span>
              <span aria-hidden>→</span>
              <span className="rounded bg-brand px-2 py-0.5 text-white">{t("learn.operatorLabel")}</span>
              <span aria-hidden>→</span>
              <span>{t("learn.outputLabel")}</span>
            </div>
          }
        />
      </div>

      <div className="mb-4 text-center">
        <Link
          to="/practice"
          className="btn-primary"
        >
          {t("learn.gotIt")} <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
