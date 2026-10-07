import { Link } from "react-router-dom";
import { BookOpen, Timer, Gauge, ArrowRight } from "lucide-react";
import { useT } from "../i18n/useT";
import { loadHistory, pct } from "../utils/storage";
import { sectionLabel } from "../utils/engine";

export function Landing() {
  const { t, lang } = useT();
  const history = loadHistory();
  const last = history[0] ?? null;

  const cards = [
    { icon: BookOpen, title: t("landing.cardUnderstandTitle"), text: t("landing.cardUnderstandText"), to: "/overview" },
    { icon: Gauge, title: t("landing.cardPracticeTitle"), text: t("landing.cardPracticeText"), to: "/practice" },
    { icon: Timer, title: t("landing.cardSimulateTitle"), text: t("landing.cardSimulateText"), to: "/mock" },
  ];

  const strongest = last
    ? (["verbal", "numerical", "diagrammatic"] as const).reduce((a, b) =>
        last[a].correct / Math.max(1, last[a].total) >=
        last[b].correct / Math.max(1, last[b].total)
          ? a
          : b,
      )
    : null;
  const weakest = last
    ? (["verbal", "numerical", "diagrammatic"] as const).reduce((a, b) =>
        last[a].correct / Math.max(1, last[a].total) <=
        last[b].correct / Math.max(1, last[b].total)
          ? a
          : b,
      )
    : null;

  return (
    <div>
      {/* Hero */}
      <section className="py-10 text-center md:py-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-6xl">
          {t("landing.title")}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
          {t("landing.subtitle")}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/overview"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:w-auto"
          >
            {t("landing.ctaStart")} <ArrowRight size={20} aria-hidden />
          </Link>
          <Link
            to="/mock"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-brand px-8 py-4 text-lg font-semibold text-brand transition hover:bg-brand-light sm:w-auto"
          >
            <Timer size={20} aria-hidden /> {t("landing.ctaMock")}
          </Link>
        </div>
        <p className="mx-auto mt-8 max-w-3xl rounded-xl bg-amber-50 px-6 py-4 text-[15px] font-medium text-amber-900 md:text-base">
          {t("landing.keyMessage")}
        </p>
      </section>

      {/* Welcome back */}
      {last && strongest && weakest && (
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold text-ink">{t("landing.welcomeBack")}</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("landing.lastMock")}
              </div>
              <div className="text-3xl font-extrabold text-brand">{pct(last.overall)}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("landing.strongest")}
              </div>
              <div className="text-xl font-bold text-emerald-700">{sectionLabel(strongest, t)}</div>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {t("landing.focusOn")}
              </div>
              <div className="text-xl font-bold text-amber-700">{sectionLabel(weakest, t)}</div>
            </div>
            <div className="flex items-end">
              <Link
                to="/mock"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-brand-dark"
              >
                {t("landing.startAnother")} <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Three cards */}
      <section aria-label={t("landing.oneMinute")}>
        <p className="mb-4 text-center text-sm font-semibold uppercase tracking-widest text-slate-500">
          {t("landing.oneMinute")}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <c.icon size={32} className="text-brand" aria-hidden />
              <h2 className="mt-3 text-xl font-bold text-ink">{c.title}</h2>
              <p className="mt-1 text-slate-600">{c.text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                {lang === "es" ? "Ir" : "Go"}{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
