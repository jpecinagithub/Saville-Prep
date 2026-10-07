import { createContext, useContext, type ReactNode } from "react";
import { useLang, type Lang } from "../hooks/useLang";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const { lang, setLang } = useLang();
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLangContext() {
  return useContext(LangContext);
}
