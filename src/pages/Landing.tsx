import { Link } from "react-router-dom";
import { BookOpen, Timer, Gauge, ArrowRight, AlarmClock } from "lucide-react";
import { useT } from "../i18n/useT";
import { loadHistory, pct } from "../utils/storage";
import { sectionLabel } from "../utils/engine";

/**
 * Stylised 18-minute timer visual: three skill-colored arcs around a
 * stopwatch face. Pure SVG/CSS, decorative.
 */
function TimerVisual({ labels, minutes }: { labels: [string, string, string]; minutes: string }) {
  const cx = 130;
  const cy = 118;
  const r = 88;
  const arc = (fromDeg: number, toDeg: number) => {
    const rad = (d: number) => ((d - 90) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(rad(fromDeg));
    const y1 = cy + r * Math.sin(rad(fromDeg));
    const x2 = cx + r * Math.cos(rad(toDeg));
    const y2 = cy + r * Math.sin(rad(toDeg));
    return `M ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 0 1 ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  };
  return (
    <div className="relative mx-auto w-full max-w-md" aria-hidden>
      {/* soft glow blobs */}
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-verbal/15 via-numerical/10 to-diagram/15 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-dark shadow-glow">
        <div className="texture-dots-light absolute inset-0 opacity-60" />
        <div className="relative p-6 md:p-8">
          <div className="flex items-center justify-between">
            <span className="kicker text-slate-300">Swift Analysis</span>
            <AlarmClock size={18} className="text-slate-300" />
          </div>
          <svg viewBox="0 0 260 236" className="mx-auto mt-2 w-full max-w-[280px]" role="img">
            {/* track */}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="14" />
            {/* three 6-minute segments */}
            <path d={arc(0, 116)} fill="none" stroke="#5b8def" strokeWidth="14" strokeLinecap="round" />
            <path d={arc(122, 238)} fill="none" stroke="#2dd4bf" strokeWidth="14" strokeLinecap="round" />
            <path d={arc(244, 360)} fill="none" stroke="#a78bfa" strokeWidth="14" strokeLinecap="round" />
            {/* face */}
            <circle cx={cx} cy={cy} r={64} fill="rgba(255,255,255,0.06)" />
            <text x={cx} y={cy - 6} textAnchor="middle" fill="#ffffff" fontSize="34" fontWeight="700" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">
              18:00
            </text>
            <text x={cx} y={cy + 22} textAnchor="middle" fill="rgba(255,255,255,0.65)" fontSize="11" letterSpacing="3">
              {minutes.toUpperCase()}
            </text>
            {/* ticks */}
            {[0, 60, 120, 180, 240, 300].map((d) => {
              const rad = ((d - 90) * Math.PI) / 180;
              const x1 = cx + 76 * Math.cos(rad);
              const y1 = cy + 76 * Math.sin(rad);
              const x2 = cx + 80 * Math.cos(rad);
              const y2 = cy + 80 * Math.sin(rad);
              return <line key={d} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.4)" strokeWidth="2" />;
            })}
          </svg>
          {/* segment legend */}
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            {[
              { label: labels[0], mins: "6:00", dot: "bg-[#5b8def]" },
              { label: labels[1], mins: "6:00", dot: "bg-[#2dd4bf]" },
              { label: labels[2], mins: "6:00", dot: "bg-[#a78bfa]" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 px-2 py-2 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-1.5">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white">{s.label}</span>
                </div>
                <div className="mt-0.5 font-mono text-sm font-bold text-white/90">{s.mins}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Landing() {
  const { t, lang } = useT();
  const history = loadHistory();
  const last = history[0] ?? null;

  const cards = [
    { icon: BookOpen, title: t("landing.cardUnderstandTitle"), text: t("landing.cardUnderstandText"), to: "/overview", tint: "bg-verbal-soft text-verbal-ink" },
    { icon: Gauge, title: t("landing.cardPracticeTitle"), text: t("landing.cardPracticeText"), to: "/practice", tint: "bg-numerical-soft text-numerical-ink" },
    { icon: Timer, title: t("landing.cardSimulateTitle"), text: t("landing.cardSimulateText"), to: "/mock", tint: "bg-diagram-soft text-diagram-ink" },
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
      <section className="hero-wash relative -mx-4 -mt-8 px-4 pb-12 pt-12 md:-mt-8 md:pb-16 md:pt-16">
        <div className="texture-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="text-center lg:text-left">
            <p className="kicker text-brand">Swift Analysis Aptitude</p>
            <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-7xl">
              {t("landing.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl lg:mx-0">
              {t("landing.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link to="/overview" className="btn-primary w-full sm:w-auto">
                {t("landing.ctaStart")} <ArrowRight size={20} aria-hidden />
              </Link>
              <Link to="/mock" className="btn-secondary w-full sm:w-auto">
                <Timer size={20} aria-hidden /> {t("landing.ctaMock")}
              </Link>
            </div>
            <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-amber-200/70 bg-amber-50/90 px-6 py-4 text-[15px] font-medium leading-relaxed text-amber-900 shadow-card md:text-base lg:mx-0">
              {t("landing.keyMessage")}
            </p>
          </div>
          <TimerVisual
            labels={[t("common.verbal"), t("common.numerical"), t("common.diagrammatic")]}
            minutes={t("common.minutes")}
          />
        </div>
      </section>

      {/* Welcome back */}
      {last && strongest && weakest && (
        <section className="card mb-10 mt-10 p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">{t("landing.welcomeBack")}</h2>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div>
              <div className="kicker text-slate-500">
                {t("landing.lastMock")}
              </div>
              <div className="mt-1 font-display text-4xl font-semibold text-brand">{pct(last.overall)}</div>
            </div>
            <div>
              <div className="kicker text-slate-500">
                {t("landing.strongest")}
              </div>
              <div className="mt-1 text-xl font-bold text-emerald-700">{sectionLabel(strongest, t)}</div>
            </div>
            <div>
              <div className="kicker text-slate-500">
                {t("landing.focusOn")}
              </div>
              <div className="mt-1 text-xl font-bold text-amber-700">{sectionLabel(weakest, t)}</div>
            </div>
            <div className="flex items-end">
              <Link
                to="/mock"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-brand to-brand-dark px-5 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
              >
                {t("landing.startAnother")} <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Three cards */}
      <section aria-label={t("landing.oneMinute")} className="mt-12">
        <p className="kicker mb-5 text-center text-slate-500">
          {t("landing.oneMinute")}
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="card card-hover group p-6 md:p-7"
            >
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${c.tint}`}>
                <c.icon size={24} aria-hidden />
              </span>
              <h2 className="mt-4 font-display text-2xl font-semibold text-ink">{c.title}</h2>
              <p className="mt-1.5 leading-relaxed text-slate-600">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                {lang === "es" ? "Ir" : "Go"}{" "}
                <ArrowRight size={16} className="transition group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
