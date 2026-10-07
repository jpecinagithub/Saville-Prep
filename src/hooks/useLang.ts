import { useCallback, useState } from "react";

export type Lang = "en" | "es";

const STORAGE_KEY = "saville-prep-lang";

function readInitial(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* ignore */
  }
  return "en"; // EN default per standing spec
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(readInitial);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next;
  }, []);

  return { lang, setLang };
}
