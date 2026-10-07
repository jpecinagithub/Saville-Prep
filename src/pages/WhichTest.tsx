import { useState } from "react";
import { Link } from "react-router-dom";
import { HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useT } from "../i18n/useT";

type Choice = "analysis" | "executive" | "global" | "vn" | "unsure" | null;

export function WhichTest() {
  const { t } = useT();
  const [choice, setChoice] = useState<Choice>(null);

  const options: { id: Exclude<Choice, null>; label: string }[] = [
    { id: "analysis", label: t("selector.swiftAnalysis") },
    { id: "executive", label: t("selector.swiftExecutive") },
    { id: "global", label: t("selector.swiftGlobal") },
    { id: "vn", label: t("selector.verbalNumerical") },
    { id: "unsure", label: t("selector.notSure") },
  ];

  const rows = [
    {
      battery: t("selector.swiftAnalysis"),
      duration: t("selector.rowAnalysisDuration"),
      areas: t("selector.rowAnalysisAreas"),
      typical: t("selector.rowAnalysisTypical"),
    },
    {
      battery: t("selector.swiftExecutive"),
      duration: t("selector.rowExecutiveDuration"),
      areas: t("selector.rowExecutiveAreas"),
      typical: t("selector.rowExecutiveTypical"),
      note: t("selector.rowExecutiveNote"),
    },
    {
      battery: t("selector.swiftGlobal"),
      duration: t("selector.rowGlobalDuration"),
      areas: t("selector.rowGlobalAreas"),
      typical: t("selector.rowGlobalTypical"),
    },
    {
      battery: t("selector.verbalNumerical"),
      duration: t("selector.rowVNDuration"),
      areas: t("selector.rowVNAreas"),
      typical: t("selector.rowVNTypical"),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("selector.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("selector.subtitle")}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="radiogroup" aria-label={t("selector.subtitle")}>
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            role="radio"
            aria-checked={choice === o.id}
            onClick={() => setChoice(o.id)}
            className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left font-semibold transition ${
              choice === o.id
                ? "border-brand bg-brand-light text-brand"
                : "border-slate-200 bg-white text-slate-700 hover:border-brand"
            }`}
          >
            <span className="flex items-center gap-2">
              {o.id === "unsure" && <HelpCircle size={18} aria-hidden />}
              {o.label}
            </span>
            {choice === o.id && <CheckCircle2 size={20} aria-hidden />}
          </button>
        ))}
      </div>

      {choice && choice !== "unsure" && (
        <div className="mt-6 rounded-xl bg-emerald-50 p-5 text-emerald-900">
          <p className="font-medium">{t("selector.selectedFocus")}</p>
          <Link
            to="/overview"
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            {t("overview.cta")} <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      )}

      {choice === "unsure" && (
        <div className="mt-6">
          <div className="rounded-xl bg-amber-50 p-5 text-amber-900">
            <h2 className="font-bold">{t("selector.unsureTitle")}</h2>
            <p className="mt-1">{t("selector.unsureText")}</p>
          </div>

          <h2 className="mt-8 text-xl font-bold text-ink">{t("selector.compareTitle")}</h2>
          <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[640px] border-collapse bg-white text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("selector.colBattery")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("selector.colDuration")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("selector.colAreas")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("selector.colTypical")}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.battery} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-semibold text-ink">{r.battery}</td>
                    <td className="px-4 py-3 font-bold text-brand">{r.duration}</td>
                    <td className="px-4 py-3">
                      {r.areas}
                      {r.note && <div className="mt-1 text-xs text-slate-500">{r.note}</div>}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{r.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate-500">{t("selector.otherBatteries")}</p>
          <p className="mt-1 text-sm text-slate-500">{t("selector.durationsNote")}</p>
          <Link
            to="/overview"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 font-semibold text-white hover:bg-brand-dark"
          >
            {t("overview.cta")} <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      )}
    </div>
  );
}
