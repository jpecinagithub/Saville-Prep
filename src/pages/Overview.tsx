import { Link } from "react-router-dom";
import { ArrowRight, AlarmClock } from "lucide-react";
import { useT } from "../i18n/useT";

export function Overview() {
  const { t } = useT();

  const sections = [
    { label: t("common.verbal"), mins: 6, pct: 33.33 },
    { label: t("common.numerical"), mins: 6, pct: 33.33 },
    { label: t("common.diagrammatic"), mins: 6, pct: 33.34 },
  ];

  const areas = [
    { title: t("overview.verbalTitle"), text: t("overview.verbalText") },
    { title: t("overview.numericalTitle"), text: t("overview.numericalText") },
    { title: t("overview.diagrammaticTitle"), text: t("overview.diagrammaticText") },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("overview.title")}</h1>
      <p className="mt-1 text-lg font-semibold text-brand">{t("overview.subtitle")}</p>

      {/* Very visual 18-minute bar */}
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8" aria-label={t("overview.total")}>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-slate-500">
            <AlarmClock size={16} aria-hidden /> Swift Analysis
          </span>
          <span className="text-3xl font-extrabold text-brand md:text-4xl">{t("overview.total")}</span>
        </div>
        <div className="mt-4 flex h-20 w-full overflow-hidden rounded-xl md:h-24" role="img" aria-label={`Verbal 6 min, Numerical 6 min, Diagrammatic 6 min`}>
          {sections.map((s, i) => (
            <div
              key={s.label}
              style={{ width: `${s.pct}%` }}
              className={`flex flex-col items-center justify-center border-r border-white/60 last:border-r-0 ${
                i === 0 ? "bg-brand" : i === 1 ? "bg-teal-700" : "bg-slate-600"
              }`}
            >
              <span className="px-1 text-center text-xs font-bold uppercase tracking-wide text-white md:text-sm">
                {s.label}
              </span>
              <span className="font-mono text-lg font-bold text-white md:text-2xl">
                6 {t("common.minutes")}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-sm font-medium text-slate-500">
          <span>Verbal → Numerical → Diagrammatic</span>
          <span className="font-bold text-amber-700">{t("overview.summary")}</span>
        </div>
        <p className="mt-4 rounded-xl bg-slate-100 p-4 text-[15px] text-slate-700">
          {t("overview.separateTimers")}
        </p>
      </section>

      {/* What each area measures */}
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        {areas.map((a) => (
          <article key={a.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-brand">{a.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{a.text}</p>
          </article>
        ))}
      </section>

      <div className="mt-8 text-center">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white hover:bg-brand-dark"
        >
          {t("overview.cta")} <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
