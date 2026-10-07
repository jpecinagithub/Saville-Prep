import { Link } from "react-router-dom";
import { BookOpen, Gauge, Timer, ArrowRight } from "lucide-react";
import { useT } from "../i18n/useT";

export function Plan() {
  const { t } = useT();
  const sessions = [
    { icon: BookOpen, title: t("plan.s1Title"), time: t("plan.s1Time"), text: t("plan.s1Text"), cta: t("plan.cta1"), to: "/overview" },
    { icon: Gauge, title: t("plan.s2Title"), time: t("plan.s2Time"), text: t("plan.s2Text"), cta: t("plan.cta2"), to: "/practice" },
    { icon: Timer, title: t("plan.s3Title"), time: t("plan.s3Time"), text: t("plan.s3Text"), cta: t("plan.cta3"), to: "/mock" },
  ];

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("plan.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("plan.subtitle")}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {sessions.map((s, i) => (
          <article key={s.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <s.icon size={28} className="text-brand" aria-hidden />
              <span className="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-brand">{s.time}</span>
            </div>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-slate-400">
              {["01", "02", "03"][i]}
            </p>
            <h2 className="text-xl font-bold text-ink">{s.title}</h2>
            <p className="mt-2 flex-1 text-[15px] text-slate-600">{s.text}</p>
            <Link
              to={s.to}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
            >
              {s.cta} <ArrowRight size={16} aria-hidden />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
