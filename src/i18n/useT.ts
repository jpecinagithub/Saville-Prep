import { useMemo } from "react";
import { useLangContext } from "../context/LangContext";
import { t } from "./translations";

export function useT() {
  const { lang } = useLangContext();
  return useMemo(() => {
    const fn = (key: string, vars?: Record<string, string | number>): string => {
      let s = t(lang, key);
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          s = s.replace(`{${k}}`, String(v));
        }
      }
      return s;
    };
    const split = (key: string, vars?: Record<string, string | number>): string[] =>
      fn(key, vars).split("|");
    const loc = (x: { en: string; es: string }): string => (lang === "es" ? x.es : x.en);
    return { t: fn, ts: split, loc, lang };
  }, [lang]);
}
