import { Link } from "react-router-dom";
import { ArrowRight, AlarmClock, BookOpenText, Calculator, Shapes } from "lucide-react";
import { useT } from "../i18n/useT";

const SKILLS = [
  {
    id: "verbal",
    gradient: "from-verbal via-verbal-deep to-[#1e40af]",
    soft: "bg-verbal-soft",
    ink: "text-verbal-ink",
    icon: BookOpenText,
  },
  {
    id: "numerical",
    gradient: "from-numerical via-numerical-deep to-[#0b5e57]",
    soft: "bg-numerical-soft",
    ink: "text-numerical-ink",
    icon: Calculator,
  },
  {
    id: "diagrammatic",
    gradient: "from-diagram via-diagram-deep to-[#5b21b6]",
    soft: "bg-diagram-soft",
    ink: "text-diagram-ink",
    icon: Shapes,
  },
] as const;

export function Overview() {
  const { t } = useT();

  const areas = [
    { title: t("overview.verbalTitle"), text: t("overview.verbalText"), skill: SKILLS[0] },
    { title: t("overview.numericalTitle"), text: t("overview.numericalText"), skill: SKILLS[1] },
    { title: t("overview.diagrammaticTitle"), text: t("overview.diagrammaticText"), skill: SKILLS[2] },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <p className="kicker text-brand">{t("overview.subtitle")}</p>
      <h1 className="section-head mt-2">{t("overview.title")}</h1>

      {/* Hero 18-minute bar */}
      <section className="card mt-8 overflow-hidden md:mt-10" aria-label={t("overview.total")}>
        <div className="hero-wash relative px-6 pb-7 pt-6 md:px-10 md:pb-9 md:pt-8">
          <div className="texture-dots pointer-events-none absolute inset-0 opacity-50" aria-hidden />
          <div className="relative flex flex-wrap items-end justify-between gap-3">
            <span className="kicker inline-flex items-center gap-2 text-slate-500">
              <AlarmClock size={16} aria-hidden /> Swift Analysis
            </span>
            <span className="font-display text-4xl font-semibold text-brand-deep md:text-5xl">
              {t("overview.total")}
            </span>
          </div>

          <div
            className="relative mt-6 flex h-28 w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-black/5 md:h-36"
            role="img"
            aria-label="Verbal 6 min, Numerical 6 min, Diagrammatic 6 min"
          >
            {SKILLS.map((s, i) => (
              <div
                key={s.id}
                style={{ width: "33.33%" }}
                className={`relative flex flex-col items-center justify-center bg-gradient-to-br ${s.gradient} ${
                  i < SKILLS.length - 1 ? "border-r border-white/25" : ""
                }`}
              >
                <span className="px-1 text-center text-[10px] font-extrabold uppercase leading-tight tracking-wider text-white/85 sm:text-xs md:text-sm md:tracking-[0.14em]">
                  {t(`common.${s.id}`)}
                </span>
                <span className="mt-1 font-mono text-2xl font-bold tabular-nums text-white drop-shadow-sm sm:text-3xl md:text-5xl">
                  6
                  <span className="ml-1 text-sm font-semibold sm:text-lg md:text-2xl">{t("common.minutes")}</span>
                </span>
              </div>
            ))}
            {/* sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/10" aria-hidden />
          </div>

          <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2 text-sm font-medium">
            <span className="inline-flex items-center gap-2 text-slate-500">
              {[t("common.verbal"), t("common.numerical"), t("common.diagrammatic")].map((l, i) => (
                <span key={l} className="inline-flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${i === 0 ? "bg-verbal" : i === 1 ? "bg-numerical" : "bg-diagram"}`} aria-hidden />
                  {l}
                  {i < 2 && <span aria-hidden className="text-slate-300">→</span>}
                </span>
              ))}
            </span>
            <span className="chip bg-amber-100 text-amber-800">{t("overview.summary")}</span>
          </div>
        </div>
        <p className="border-t border-slate-100 bg-slate-50/70 px-6 py-4 text-[15px] leading-relaxed text-slate-600 md:px-10">
          {t("overview.separateTimers")}
        </p>
      </section>

      {/* What each area measures */}
      <section className="mt-6 grid gap-5 md:grid-cols-3">
        {areas.map((a) => (
          <article key={a.title} className="card card-hover relative overflow-hidden p-5 md:p-6">
            <span className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${a.skill.gradient}`} aria-hidden />
            <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${a.skill.soft} ${a.skill.ink}`}>
              <a.skill.icon size={22} aria-hidden />
            </span>
            <h2 className="mt-3 text-base font-bold text-ink">{a.title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{a.text}</p>
          </article>
        ))}
      </section>

      <div className="mt-10 text-center">
        <Link to="/learn" className="btn-primary">
          {t("overview.cta")} <ArrowRight size={20} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
