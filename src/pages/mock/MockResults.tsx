import { Link, Navigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ScatterChart, Scatter, ZAxis, Cell } from "recharts";
import { RotateCcw, ListChecks, Home, Info } from "lucide-react";
import { useT } from "../../i18n/useT";
import { pct } from "../../utils/storage";
import { sectionLabel } from "../../utils/engine";
import { getMockSession } from "../../utils/mockStore";

const SECTION_THEME = {
  verbal: { soft: "bg-verbal-soft", ink: "text-verbal-ink", bar: "#2563eb", ring: "#2563eb" },
  numerical: { soft: "bg-numerical-soft", ink: "text-numerical-ink", bar: "#0d9488", ring: "#0d9488" },
  diagrammatic: { soft: "bg-diagram-soft", ink: "text-diagram-ink", bar: "#7c3aed", ring: "#7c3aed" },
} as const;

/** Score ring: SVG progress circle around the big percentage. */
function ScoreRing({ value }: { value: number }) {
  const r = 84;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value);
  return (
    <div className="relative mx-auto h-56 w-56" role="img" aria-label={`${Math.round(value * 100)}%`}>
      <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
        <defs>
          <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b4f7e" />
            <stop offset="100%" stopColor="#0e1c33" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r={r} fill="none" stroke="#e2e8f0" strokeWidth="14" />
        <circle
          cx="100"
          cy="100"
          r={r}
          fill="none"
          stroke="url(#scoreGrad)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-6xl font-semibold text-brand-deep">{pct(value)}</span>
      </div>
    </div>
  );
}

export function MockResults() {
  const { t, lang } = useT();
  const session = getMockSession();
  if (!session) return <Navigate to="/mock" replace />;

  const { result } = session;
  const cats = ["verbal", "numerical", "diagrammatic"] as const;
  const secData = cats.map((c) => {
    const s = result[c];
    const theme = SECTION_THEME[c];
    return {
      name: sectionLabel(c, t),
      accuracy: s.total ? Math.round((s.correct / s.total) * 100) : 0,
      correct: s.correct,
      total: s.total,
      fill: theme.bar,
      soft: theme.soft,
      ink: theme.ink,
    };
  });

  const correct = result.attempts.filter((a) => a.correct).length;
  const total = result.attempts.length;
  const unanswered = result.unanswered;
  const incorrect = total - correct - unanswered;
  const meanSec = result.meanTimeMs / 1000;

  // Accuracy vs speed: one point per section (x = mean seconds, y = accuracy %)
  const scatter = cats.map((c) => {
    const list = result.attempts.filter((a) => a.category === c);
    const mean = list.length ? list.reduce((s, a) => s + a.timeMs, 0) / list.length / 1000 : 0;
    const acc = list.length ? (list.filter((a) => a.correct).length / list.length) * 100 : 0;
    return { x: Math.round(mean * 10) / 10, y: Math.round(acc), name: sectionLabel(c, t), fill: SECTION_THEME[c].bar };
  });

  const strongest = cats.reduce((a, b) =>
    result[a].correct / Math.max(1, result[a].total) >= result[b].correct / Math.max(1, result[b].total) ? a : b,
  );
  const weakest = cats.reduce((a, b) =>
    result[a].correct / Math.max(1, result[a].total) <= result[b].correct / Math.max(1, result[b].total) ? a : b,
  );

  return (
    <div className="mx-auto max-w-4xl py-6">
      <h1 className="section-head text-center">{t("results.title")}</h1>

      {/* Overall practice score */}
      <section className="card hero-wash relative mt-8 overflow-hidden p-8 text-center md:p-10">
        <div className="texture-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
        <div className="relative">
          <p className="kicker text-slate-500">{t("results.practiceScore")}</p>
          <div className="mt-4">
            <ScoreRing value={result.overall} />
          </div>
          <div className="mt-5 flex items-start justify-center gap-2">
            <Info size={16} className="mt-0.5 shrink-0 text-slate-400" aria-hidden />
            <p className="max-w-xl text-sm leading-relaxed text-slate-500">{t("results.disclaimer")}</p>
          </div>
          <p className="mt-2 text-xs font-semibold text-emerald-700">{t("results.saved")}</p>
        </div>
      </section>

      {/* Per-section cards */}
      <section className="mt-6 grid gap-4 md:grid-cols-3" aria-label={t("results.perSection")}>
        {secData.map((s) => (
          <div key={s.name} className="card card-hover overflow-hidden">
            <div className={`px-5 pb-4 pt-5 ${s.soft}`}>
              <h2 className={`font-bold ${s.ink}`}>{s.name}</h2>
              <div className="mt-2 font-display text-4xl font-semibold text-brand-deep">
                {s.correct} <span className="text-xl text-slate-400">/ {s.total}</span>
              </div>
            </div>
            <div className="px-5 pb-5 pt-4">
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-100" role="img" aria-label={`${s.accuracy}%`}>
                <div className="h-full rounded-full" style={{ width: `${s.accuracy}%`, background: s.fill }} />
              </div>
              <div className="mt-1.5 font-mono text-sm font-bold tabular-nums text-slate-600">{s.accuracy}%</div>
            </div>
          </div>
        ))}
      </section>

      {/* Metrics */}
      <section className="card mt-6 p-6 md:p-8">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <Metric label={t("results.correct")} value={String(correct)} tone="text-emerald-700" />
          <Metric label={t("results.incorrect")} value={String(incorrect)} tone="text-red-600" />
          <Metric label={t("results.unanswered")} value={String(unanswered)} tone="text-slate-500" />
          <Metric label={t("results.meanTime")} value={`${meanSec.toFixed(1)}${t("results.sec")}`} tone="text-brand-deep" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 text-center">
          <div>
            <div className="kicker text-slate-500">{t("results.strength")}</div>
            <div className="mt-1 font-bold text-emerald-700">{sectionLabel(strongest, t)}</div>
          </div>
          <div>
            <div className="kicker text-slate-500">{t("results.weakness")}</div>
            <div className="mt-1 font-bold text-amber-700">{sectionLabel(weakest, t)}</div>
          </div>
        </div>
      </section>

      {/* Accuracy vs speed */}
      <section className="card mt-6 p-6 md:p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">{t("results.accuracyVsSpeed")}</h2>
        <p className="mt-1 text-sm text-slate-500">
          {lang === "es" ? "Precisión (%) frente a tiempo medio por pregunta (s), por sección." : "Accuracy (%) vs mean time per question (s), by section."}
        </p>
        <div className="mt-3 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 16, right: 16, bottom: 16, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis type="number" dataKey="x" name={t("results.meanTime")} unit="s" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis type="number" dataKey="y" name={t("results.accuracy")} unit="%" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <ZAxis type="number" range={[160]} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(value: number | string, name: string) => [value, name]}
                labelFormatter={(_, payload) => payload?.[0]?.payload?.name ?? ""}
              />
              <Scatter data={scatter}>
                {scatter.map((p, i) => (
                  <Cell key={i} fill={p.fill} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={secData} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#94a3b8" />
              <Tooltip formatter={(v: number | string) => [`${v}%`, t("results.accuracy")]} />
              <Bar dataKey="accuracy" radius={[8, 8, 0, 0]}>
                {secData.map((s, i) => (
                  <Cell key={i} fill={s.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/mock/review" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-brand to-brand-dark px-6 py-3 font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
          <ListChecks size={18} aria-hidden /> {t("results.reviewAnswers")}
        </Link>
        <Link to="/mock" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 shadow-card transition hover:-translate-y-0.5 hover:shadow-lift">
          <RotateCcw size={18} aria-hidden /> {t("results.retake")}
        </Link>
        <Link to="/" className="btn-ghost border border-slate-300 bg-white shadow-card">
          <Home size={18} aria-hidden /> {t("results.backHome")}
        </Link>
      </div>
    </div>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div>
      <div className={`font-display text-4xl font-semibold ${tone}`}>{value}</div>
      <div className="kicker mt-1 text-slate-500">{label}</div>
    </div>
  );
}
