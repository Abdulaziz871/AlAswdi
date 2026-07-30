"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "ar" | "en";

type LanguageContextType = {
  language: Language;
  isRTL: boolean;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("portfolio-language") as Language | null;
    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isRTL: language === "ar",
      setLanguage: (nextLanguage: Language) => setLanguageState(nextLanguage),
      toggleLanguage: () => setLanguageState((prev) => (prev === "ar" ? "en" : "ar")),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
