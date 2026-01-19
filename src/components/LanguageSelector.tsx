"use client";

import { Globe } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
];

export function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("preferred-language");
    if (saved) {
      setCurrentLanguage(saved);
    } else {
      const browserLang = navigator.language.split("-")[0];
      const supported = languages.find((l) => l.code === browserLang);
      if (supported) {
        setCurrentLanguage(browserLang);
        localStorage.setItem("preferred-language", browserLang);
      }
    }
  }, []);

  const changeLanguage = () => {
    const currentIndex = languages.findIndex((l) => l.code === currentLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex].code;
    
    setCurrentLanguage(nextLang);
    localStorage.setItem("preferred-language", nextLang);
    document.documentElement.lang = nextLang;
    window.dispatchEvent(new StorageEvent("storage", { key: "preferred-language", newValue: nextLang }));
    window.dispatchEvent(new CustomEvent("languagechange", { detail: { language: nextLang } }));
  };

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <Globe className="h-5 w-5" />
      </Button>
    );
  }

  const current = languages.find((l) => l.code === currentLanguage) || languages[0];

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={changeLanguage}
      title={current.name}
    >
      <span className="text-lg">{current.flag}</span>
    </Button>
  );
}