import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { pt } from "./pt";
import { ru } from "./ru";

export const translations = {
  en,
  ru,
  de,
  es,
  fr,
  pt,
  ar: en, // Fallback to English
  hi: en,
  ja: en,
  vi: en,
  ms: en,
  th: en,
};

export type LanguageCode = keyof typeof translations;
