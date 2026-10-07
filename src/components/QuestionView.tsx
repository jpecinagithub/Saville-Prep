import type { Question } from "../types";
import { useT } from "../i18n/useT";
import { ChartView, TableView } from "./Chart";
import { DiagramPanelView, DiagramRow } from "./Diagram";

interface Props {
  q: Question;
  selectedId: string | null;
  onSelect: (id: string) => void;
  /** when true, options are not clickable */
  disabled?: boolean;
  /** highlight correct/incorrect (review & learn modes) */
  reveal?: boolean;
  /** mark the "?" panel caption for missing-piece items */
  compact?: boolean;
}

const LETTERS = ["A", "B", "C", "D"];

export function QuestionView({ q, selectedId, onSelect, disabled, reveal }: Props) {
  const { loc, t } = useT();
  const hasDiagramOptions = !!q.diagram?.optionPanels?.length;

  const optionClass = (id: string) => {
    const base =
      "flex w-full items-start gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition duration-150 focus-visible:outline-none";
    if (reveal) {
      if (id === q.correctAnswer)
        return `${base} border-emerald-600 bg-emerald-50 shadow-card`;
      if (id === selectedId)
        return `${base} border-red-500 bg-red-50`;
      return `${base} border-slate-200 bg-white opacity-70`;
    }
    if (id === selectedId)
      return `${base} cursor-pointer border-brand bg-brand-light shadow-card`;
    return `${base} cursor-pointer border-slate-200 bg-white hover:-translate-y-px hover:border-brand/60 hover:shadow-card`;
  };

  return (
    <div>
      {q.context && (
        <div className="mb-4 rounded-xl bg-slate-100 p-4 text-[15px] leading-relaxed text-slate-700 md:text-base">
          {loc(q.context)}
        </div>
      )}

      {q.numeric?.tableData && (
        <div className="mb-4">
          <TableView table={q.numeric.tableData} />
        </div>
      )}
      {q.numeric?.chartData && (
        <div className="mb-4">
          <ChartView chart={q.numeric.chartData} />
        </div>
      )}

      {q.diagram?.panels?.length ? (
        <div className="mb-5">
          <DiagramRow
            panels={q.diagram.panels}
            captions={q.diagram.panels.map((p) =>
              p.caption ? loc(p.caption) : undefined,
            )}
            size={110}
          />
        </div>
      ) : null}

      <h3 className="mb-4 text-lg font-semibold text-ink md:text-xl">
        {loc(q.question)}
      </h3>

      <div
        className={
          hasDiagramOptions
            ? "grid grid-cols-2 gap-3 md:grid-cols-4"
            : "flex flex-col gap-3"
        }
        role="radiogroup"
        aria-label={loc(q.question)}
      >
        {q.options.map((opt, i) => (
          <button
            key={opt.id}
            type="button"
            role="radio"
            aria-checked={selectedId === opt.id}
            disabled={disabled}
            onClick={() => onSelect(opt.id)}
            className={optionClass(opt.id)}
          >
            {hasDiagramOptions && q.diagram?.optionPanels?.[i] ? (
              <span className="flex w-full flex-col items-center gap-1">
                <span className="text-sm font-bold text-slate-500">
                  {LETTERS[i]}
                </span>
                <DiagramPanelView panel={q.diagram.optionPanels[i]} size={96} />
              </span>
            ) : (
              <>
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 text-xs font-bold text-slate-500">
                  {LETTERS[i]}
                </span>
                <span className="text-[15px] text-slate-800 md:text-base">
                  {loc(opt.label)}
                </span>
              </>
            )}
            <span className="sr-only">
              {reveal && opt.id === q.correctAnswer ? t("common.correct") : ""}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
