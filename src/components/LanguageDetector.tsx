"use client";

import { useEffect, useState } from "react";
import { detectLanguage } from "@/lib/language-detector";

export function LanguageDetector() {
  const [_detectedLang, setDetectedLang] = useState<string>("");

  useEffect(() => {
    const lang = detectLanguage();
    setDetectedLang(lang);

    // Store in localStorage for future visits
    localStorage.setItem("preferred-language", lang);

    // Set HTML lang attribute
    document.documentElement.lang = lang;

    // Log detected language for debugging
    console.log(`🌍 Detected language: ${lang}`);
  }, []);

  // Component doesn't render anything visible
  return null;
}
