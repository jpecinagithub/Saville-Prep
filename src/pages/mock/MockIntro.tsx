import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useT } from "../../i18n/useT";

const PILLS = [
  { key: "mock.sectionVerbal", pill: "bg-[#5b8def]/20 text-[#bcd2ff] ring-1 ring-[#5b8def]/40" },
  { key: "mock.sectionNumerical", pill: "bg-[#2dd4bf]/15 text-[#a7f0e7] ring-1 ring-[#2dd4bf]/40" },
  { key: "mock.sectionDiagrammatic", pill: "bg-[#a78bfa]/20 text-[#d9ccff] ring-1 ring-[#a78bfa]/40" },
] as const;

export function MockIntro() {
  const { t } = useT();

  return (
    <div className="mx-auto max-w-2xl py-6 text-center md:py-10">
      <p className="kicker text-brand">Swift Analysis</p>
      <h1 className="section-head mt-2">{t("mock.title")}</h1>
      <p className="mt-3 text-lg text-slate-600 md:text-xl">{t("mock.introTitle")}</p>

      {/* Dramatic timer card */}
      <div className="relative mx-auto mt-8 max-w-md">
        <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-verbal/20 via-numerical/15 to-diagram/20 blur-2xl" aria-hidden />
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-brand-dark p-8 shadow-glow md:p-10">
          <div className="texture-dots-light absolute inset-0 opacity-50" aria-hidden />
          <div className="relative">
            <div className="font-mono text-7xl font-bold tabular-nums tracking-tight text-white drop-shadow-lg md:text-8xl">
              {t("mock.totalTime")}
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {PILLS.map((s, i) => (
                <span key={s.key} className="flex items-center gap-2">
                  <span className={`chip ${s.pill}`}>{t(s.key)}</span>
                  {i < PILLS.length - 1 && (
                    <span aria-hidden className="text-slate-400">→</span>
                  )}
                </span>
              ))}
            </div>
            <div className="mt-4 font-mono text-base font-semibold tabular-nums text-slate-300">
              06:00 · 06:00 · 06:00
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-slate-600">{t("mock.introText")}</p>

      <Link
        to="/mock/run"
        className="btn-primary mt-8 px-14 py-5 text-2xl"
      >
        <Play size={26} aria-hidden /> {t("mock.start")}
      </Link>
    </div>
  );
}
