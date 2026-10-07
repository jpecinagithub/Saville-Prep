import { Link, Navigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ScatterChart, Scatter, ZAxis } from "recharts";
import { RotateCcw, ListChecks, Home, Info } from "lucide-react";
import { useT } from "../../i18n/useT";
import { pct } from "../../utils/storage";
import { sectionLabel } from "../../utils/engine";
import { getMockSession } from "../../utils/mockStore";

export function MockResults() {
  const { t, lang } = useT();
  const session = getMockSession();
  if (!session) return <Navigate to="/mock" replace />;

  const { result } = session;
  const cats = ["verbal", "numerical", "diagrammatic"] as const;
  const secData = cats.map((c) => {
    const s = result[c];
    return {
      name: sectionLabel(c, t),
      accuracy: s.total ? Math.round((s.correct / s.total) * 100) : 0,
      correct: s.correct,
      total: s.total,
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
    return { x: Math.round(mean * 10) / 10, y: Math.round(acc), name: sectionLabel(c, t) };
  });

  const strongest = cats.reduce((a, b) =>
    result[a].correct / Math.max(1, result[a].total) >= result[b].correct / Math.max(1, result[b].total) ? a : b,
  );
  const weakest = cats.reduce((a, b) =>
    result[a].correct / Math.max(1, result[a].total) <= result[b].correct / Math.max(1, result[b].total) ? a : b,
  );

  return (
    <div className="mx-auto max-w-4xl py-6">
      <h1 className="text-center text-3xl font-extrabold text-ink">{t("results.title")}</h1>

      {/* Overall practice score */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          {t("results.practiceScore")}
        </p>
        <div className="mt-2 text-7xl font-extrabold text-brand">{pct(result.overall)}</div>
        <div className="mt-4 flex items-start justify-center gap-2">
          <Info size={16} className="mt-0.5 shrink-0 text-slate-400" aria-hidden />
          <p className="max-w-xl text-sm text-slate-500">{t("results.disclaimer")}</p>
        </div>
        <p className="mt-2 text-xs text-emerald-700">{t("results.saved")}</p>
      </section>

      {/* Per-section cards */}
      <section className="mt-6 grid gap-4 md:grid-cols-3" aria-label={t("results.perSection")}>
        {secData.map((s) => (
          <div key={s.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="font-bold text-ink">{s.name}</h2>
            <div className="mt-2 text-3xl font-extrabold text-brand">
              {s.correct} <span className="text-lg text-slate-400">/ {s.total}</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200" role="img" aria-label={`${s.accuracy}%`}>
              <div className="h-full rounded-full bg-brand" style={{ width: `${s.accuracy}%` }} />
            </div>
            <div className="mt-1 text-sm text-slate-500">{s.accuracy}%</div>
          </div>
        ))}
      </section>

      {/* Metrics */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          <Metric label={t("results.correct")} value={String(correct)} tone="text-emerald-700" />
          <Metric label={t("results.incorrect")} value={String(incorrect)} tone="text-red-600" />
          <Metric label={t("results.unanswered")} value={String(unanswered)} tone="text-slate-500" />
          <Metric label={t("results.meanTime")} value={`${meanSec.toFixed(1)}${t("results.sec")}`} tone="text-brand" />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t("results.strength")}</div>
            <div className="font-bold text-emerald-700">{sectionLabel(strongest, t)}</div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t("results.weakness")}</div>
            <div className="font-bold text-amber-700">{sectionLabel(weakest, t)}</div>
          </div>
        </div>
      </section>

      {/* Accuracy vs speed */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-ink">{t("results.accuracyVsSpeed")}</h2>
        <p className="text-sm text-slate-500">
          {lang === "es" ? "Precisión (%) frente a tiempo medio por pregunta (s), por sección." : "Accuracy (%) vs mean time per question (s), by section."}
        </p>
        <div className="mt-2 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 16, right: 16, bottom: 16, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" dataKey="x" name={t("results.meanTime")} unit="s" tick={{ fontSize: 12 }} />
              <YAxis type="number" dataKey="y" name={t("results.accuracy")} unit="%" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <ZAxis type="number" range={[120]} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                formatter={(value: number | string, name: string) => [value, name]}
                labelFormatter={(_, payload) => payload?.[0]?.payload?.name ?? ""}
              />
              <Scatter data={scatter} fill="#1e3a5f" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={secData} margin={{ top: 8, right: 8, bottom: 0, left: -12 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
              <Tooltip formatter={(v: number | string) => [`${v}%`, t("results.accuracy")]} />
              <Bar dataKey="accuracy" fill="#1e3a5f" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/mock/review" className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark">
          <ListChecks size={18} aria-hidden /> {t("results.reviewAnswers")}
        </Link>
        <Link to="/mock" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
          <RotateCcw size={18} aria-hidden /> {t("results.retake")}
        </Link>
        <Link to="/" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100">
          <Home size={18} aria-hidden /> {t("results.backHome")}
        </Link>
      </div>
    </div>
  );
}

function Metric({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div>
      <div className={`text-3xl font-extrabold ${tone}`}>{value}</div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
    </div>
  );
}
