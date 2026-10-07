import { useState } from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Trash2, Timer } from "lucide-react";
import { useT } from "../i18n/useT";
import { clearHistory, loadHistory, pct, type MockResult } from "../utils/storage";
import { sectionLabel } from "../utils/engine";

export function History() {
  const { t, lang } = useT();
  const [history, setHistory] = useState<MockResult[]>(() => loadHistory());

  const clear = () => {
    if (window.confirm(t("history.confirmClear"))) {
      clearHistory();
      setHistory([]);
    }
  };

  const trend = [...history].reverse().map((r, i) => ({
    n: i + 1,
    score: Math.round(r.overall * 100),
    date: new Date(r.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
      day: "numeric",
      month: "short",
    }),
  }));

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("history.title")}</h1>
          <p className="mt-2 text-slate-600">{t("history.subtitle")}</p>
        </div>
        {history.length > 0 && (
          <button
            type="button"
            onClick={clear}
            className="inline-flex items-center gap-2 rounded-xl border border-red-300 px-4 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-50"
          >
            <Trash2 size={16} aria-hidden /> {t("history.clear")}
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm">
          <p className="text-slate-500">{t("history.empty")}</p>
          <Link
            to="/mock"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark"
          >
            <Timer size={18} aria-hidden /> {t("history.takeMock")}
          </Link>
        </div>
      ) : (
        <>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("common.date")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("common.overall")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("history.colVerbal")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("history.colNumerical")}</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold">{t("history.colDiagrammatic")}</th>
                </tr>
              </thead>
              <tbody>
                {history.map((r) => (
                  <tr key={r.id} className="border-t border-slate-200">
                    <td className="px-4 py-3 text-slate-600">
                      {new Date(r.date).toLocaleString(lang === "es" ? "es-ES" : "en-GB", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="px-4 py-3 text-lg font-extrabold text-brand">{pct(r.overall)}</td>
                    <td className="px-4 py-3">{r.verbal.correct}/{r.verbal.total}</td>
                    <td className="px-4 py-3">{r.numerical.correct}/{r.numerical.total}</td>
                    <td className="px-4 py-3">{r.diagrammatic.correct}/{r.diagrammatic.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {trend.length >= 2 && (
            <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-ink">{t("history.trend")}</h2>
              <div className="mt-2 h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trend} margin={{ top: 8, right: 16, bottom: 0, left: -12 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
                    <Tooltip formatter={(v: number | string) => [`${v}%`, t("common.overall")]} />
                    <Line type="monotone" dataKey="score" stroke="#1e3a5f" strokeWidth={2.5} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-2 text-center font-mono text-sm text-slate-500">
                {trend.map((p) => p.score).join(" → ")}%
              </p>
            </section>
          )}

          <p className="mt-4 text-sm text-slate-500">
            {sectionLabel("verbal", t)} · {sectionLabel("numerical", t)} · {sectionLabel("diagrammatic", t)}
          </p>
        </>
      )}
    </div>
  );
}
