"use client";

import { type LanguageCode, translations } from "@/translations";
import { useEffect, useState } from "react";

export function useTranslation() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("preferred-language") as LanguageCode;
    if (stored && translations[stored]) {
      setLanguage(stored);
    }

    // Listen for language changes
    const handleStorageChange = () => {
      const newLang = localStorage.getItem(
        "preferred-language",
      ) as LanguageCode;
      if (newLang && translations[newLang]) {
        setLanguage(newLang);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("languagechange", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("languagechange", handleStorageChange);
    };
  }, []);

  if (!mounted) {
    return { t: translations.en, language: "en" as LanguageCode };
  }

  return { t: translations[language], language };
}
