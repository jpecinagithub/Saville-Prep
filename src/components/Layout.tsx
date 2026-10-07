import { Link, NavLink, useLocation } from "react-router-dom";
import { Languages, Menu, X, RefreshCw } from "lucide-react";
import { useState } from "react";
import { useLangContext } from "../context/LangContext";
import { useT } from "../i18n/useT";
import { usePwaUpdate } from "../hooks/usePwaUpdate";

const NAV_ITEMS = [
  { to: "/overview", key: "nav.overview" },
  { to: "/learn", key: "nav.learn" },
  { to: "/practice", key: "nav.practice" },
  { to: "/mock", key: "nav.mock" },
  { to: "/quick-maths", key: "nav.quickMaths" },
  { to: "/diagram-trainer", key: "nav.diagramTrainer" },
  { to: "/history", key: "nav.history" },
  { to: "/plan", key: "nav.plan" },
  { to: "/exam-day", key: "nav.examDay" },
  { to: "/sources", key: "nav.sources" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, lang } = useT();
  const { setLang } = useLangContext();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { updateAvailable, applyUpdate } = usePwaUpdate();

  // Distraction-free shell during the mock run
  const inMockRun =
    location.pathname.startsWith("/mock/run") ||
    location.pathname.startsWith("/mock/result") ||
    location.pathname.startsWith("/mock/review");

  if (inMockRun) return <>{children}</>;

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-lg font-bold text-white">
              S
            </span>
            <span className="whitespace-nowrap text-lg font-bold tracking-tight text-ink">
              Saville Prep
            </span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-brand-light text-brand"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
              aria-label="Switch language / Cambiar idioma"
            >
              <Languages size={16} aria-hidden />
              <span aria-hidden={lang === "en"} className={lang === "en" ? "font-bold text-brand" : ""}>EN</span>
              <span className="text-slate-300">|</span>
              <span aria-hidden={lang === "es"} className={lang === "es" ? "font-bold text-brand" : ""}>ES</span>
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 py-2 lg:hidden" aria-label="Mobile">
            {[{ to: "/", key: "nav.home" }, ...NAV_ITEMS].map((item) => (
              <NavLink
                key={item.to + item.key}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm font-medium ${
                    isActive ? "bg-brand-light text-brand" : "text-slate-700"
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      {updateAvailable && (
        <div className="bg-brand px-4 py-2 text-center text-sm text-white">
          {t("footer.updateAvailable")}{" "}
          <button
            type="button"
            onClick={applyUpdate}
            className="ml-2 inline-flex items-center gap-1 rounded bg-white/20 px-3 py-1 font-semibold hover:bg-white/30"
          >
            <RefreshCw size={14} aria-hidden /> {t("footer.update")}
          </button>
        </div>
      )}

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
          <p className="mb-4 max-w-4xl leading-relaxed">{t("footer.disclaimer")}</p>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <p>{t("footer.about")}</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
