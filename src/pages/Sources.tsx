import { ExternalLink } from "lucide-react";
import { useT } from "../i18n/useT";

const SOURCES: { label: { en: string; es: string }; url: string }[] = [
  {
    label: { en: "Saville Assessment — Swift Analysis Aptitude", es: "Saville Assessment — Swift Analysis Aptitude" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/analysis-range/swift-analysis-aptitude/",
  },
  {
    label: { en: "Saville Assessment — Swift Executive Aptitude", es: "Saville Assessment — Swift Executive Aptitude" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/analysis-range/swift-executive-aptitude/",
  },
  {
    label: { en: "Saville Assessment — Swift Analysis Verbal & Numerical", es: "Saville Assessment — Swift Analysis Verbal & Numerical" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/analysis-range/swift-analysis-verbal-and-numerical/",
  },
  {
    label: { en: "Saville Assessment — Swift Global Aptitude", es: "Saville Assessment — Swift Global Aptitude" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/swift-global-aptitude/",
  },
  {
    label: { en: "Saville Assessment — Swift Comprehension Aptitude", es: "Saville Assessment — Swift Comprehension Aptitude" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/comprehension-range/swift-comprehension-aptitude/",
  },
  {
    label: { en: "Saville Assessment — Swift Comprehension Verbal & Numerical", es: "Saville Assessment — Swift Comprehension Verbal & Numerical" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/comprehension-range/swift-comprehension-verbal-numerical/",
  },
  {
    label: { en: "Saville Assessment — Swift Technical range", es: "Saville Assessment — gama Swift Technical" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/technical-range/swift-technical-range/",
  },
  {
    label: { en: "Saville Assessment — Swift Apprentice Aptitude", es: "Saville Assessment — Swift Apprentice Aptitude" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/swift-apprentice-aptitude/",
  },
  {
    label: { en: "Saville Assessment — Aptitude assessments overview", es: "Saville Assessment — resumen de aptitude assessments" },
    url: "https://www.savilleassessment.com.au/products/aptitude-assessments/",
  },
  {
    label: { en: "Saville Assessment — Candidate preparation (practice tests & FAQ)", es: "Saville Assessment — preparación del candidato (practice tests y FAQ)" },
    url: "https://www.savilleassessment.com.au/resources/candidate-preparation/",
  },
  {
    label: { en: "Saville Assessment — Introducing Swift Global", es: "Saville Assessment — presentación de Swift Global" },
    url: "http://www.savilleassessment.com/introducing-swift-global/",
  },
  {
    label: { en: "WTW — Official Saville aptitude tests brochure (test-time table)", es: "WTW — folleto oficial de tests de aptitud Saville (tabla de duraciones)" },
    url: "https://wtwco.com/-/media/wtw/solutions/services/talent-assessment-aptitude-tests-japan.pdf",
  },
];

export function Sources() {
  const { t, loc } = useT();

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="text-3xl font-extrabold text-ink md:text-4xl">{t("sources.title")}</h1>
      <p className="mt-2 text-lg text-slate-600">{t("sources.subtitle")}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-slate-700">{t("sources.intro")}</p>

      <div className="mt-6 rounded-xl bg-brand-light p-4 text-brand-dark">
        <strong>{t("sources.lastReview")}: </strong>
        <time dateTime="2026-10-07">2026-10-07</time>
      </div>

      <h2 className="mt-8 text-xl font-bold text-ink">{t("sources.official")}</h2>
      <ul className="mt-3 space-y-2">
        {SOURCES.map((s) => (
          <li key={s.url} className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-brand hover:underline"
            >
              {loc(s.label)}
              <ExternalLink size={14} aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <h2 className="mt-8 text-xl font-bold text-ink">{t("sources.unconfirmedTitle")}</h2>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-700">{t("sources.unconfirmed")}</p>
      <p className="mt-4 text-sm text-slate-500">{t("sources.note")}</p>
    </div>
  );
}
