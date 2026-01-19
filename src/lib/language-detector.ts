"use client";

export function detectLanguage(): string {
  if (typeof window === "undefined") return "en";

  // Get browser language
  const browserLang = navigator.language || (navigator as any).userLanguage;

  // Extract language code (e.g., "en-US" -> "en")
  const langCode = browserLang.split("-")[0].toLowerCase();

  // Supported languages
  const supportedLanguages = [
    "en",
    "ru",
    "de",
    "es",
    "fr",
    "pt",
    "ar",
    "hi",
    "ja",
    "zh",
    "vi",
    "ms",
    "th",
  ];

  // Check if detected language is supported
  if (supportedLanguages.includes(langCode)) {
    return langCode;
  }

  // Default to English
  return "en";
}

export function getLanguageName(code: string): string {
  const languageNames: Record<string, string> = {
    en: "English",
    ru: "Русский",
    de: "Deutsch",
    es: "Español",
    fr: "Français",
    pt: "Português",
    ar: "العربية",
    hi: "हिन्दी",
    ja: "日本語",
    zh: "中文",
    vi: "Tiếng Việt",
    ms: "Bahasa Melayu",
    th: "ไทย",
  };

  return languageNames[code] || "English";
}
