"use client";

import {
  createContext, useContext, useState, useEffect, useCallback,
  type ReactNode,
} from "react";
import { type Language, resolve } from "@/lib/i18n";

const STORAGE_KEY = "ss_lang";
const VALID: Language[] = ["de", "en", "tr"];

interface LangCtx {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const Ctx = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start with "de" so server and first client render match exactly.
  const [lang, setLangState] = useState<Language>("de");

  // After hydration, read localStorage and sync.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (stored && VALID.includes(stored)) setLangState(stored);
  }, []);

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback(
    (key: string) => resolve(lang, key),
    [lang],
  );

  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
