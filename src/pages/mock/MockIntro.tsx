import { Link } from "react-router-dom";
import { AlarmClock, Play } from "lucide-react";
import { useT } from "../../i18n/useT";

export function MockIntro() {
  const { t } = useT();
  const sections = [t("mock.sectionVerbal"), t("mock.sectionNumerical"), t("mock.sectionDiagrammatic")];

  return (
    <div className="mx-auto max-w-2xl py-8 text-center">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("mock.title")}</h1>
      <p className="mt-3 text-xl font-semibold text-slate-700">{t("mock.introTitle")}</p>

      <div className="mx-auto mt-8 max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <AlarmClock size={36} className="mx-auto text-brand" aria-hidden />
        <div className="mt-2 font-mono text-6xl font-extrabold tabular-nums text-brand">
          {t("mock.totalTime")}
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-slate-600">
          {sections.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="rounded-lg bg-brand-light px-3 py-1.5 text-brand">{s}</span>
              {i < sections.length - 1 && <span aria-hidden>→</span>}
            </span>
          ))}
        </div>
        <div className="mt-4 font-mono text-lg font-bold text-slate-500">
          06:00 · 06:00 · 06:00
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-xl text-[15px] text-slate-600">{t("mock.introText")}</p>

      <Link
        to="/mock/run"
        className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-brand px-12 py-5 text-2xl font-extrabold tracking-wide text-white shadow-md transition hover:bg-brand-dark"
      >
        <Play size={24} aria-hidden /> {t("mock.start")}
      </Link>
    </div>
  );
}
