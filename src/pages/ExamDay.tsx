import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckSquare, Square, Home, AlertCircle } from "lucide-react";
import { useT } from "../i18n/useT";

export function ExamDay() {
  const { t, ts } = useT();
  const items = ts("examday.items");
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false));

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)));

  const done = checked.filter(Boolean).length;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("examday.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("examday.subtitle")}</p>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">
            {done} / {items.length}
          </span>
          <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-200" role="img" aria-label={`${done}/${items.length}`}>
            <div
              className="h-full rounded-full bg-brand transition-all"
              style={{ width: `${(done / items.length) * 100}%` }}
            />
          </div>
        </div>
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-pressed={checked[i]}
                className="flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
              >
                {checked[i] ? (
                  <CheckSquare size={22} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden />
                ) : (
                  <Square size={22} className="mt-0.5 shrink-0 text-slate-300" aria-hidden />
                )}
                <span className={`text-[15px] ${checked[i] ? "text-slate-400 line-through" : "text-slate-700"}`}>
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-[15px] text-amber-900">
        <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden />
        <p><strong>{t("examday.materialsNote")}</strong></p>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white hover:bg-brand-dark"
        >
          <Home size={20} aria-hidden /> {t("examday.cta")}
        </Link>
      </div>
    </div>
  );
}
