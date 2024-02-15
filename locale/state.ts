import { Locale as DateFnsLocale } from "date-fns"
import dateFnsDe from "date-fns/locale/de"
import dateFnsEn from "date-fns/locale/en-GB"
import dateFnsPt from "date-fns/locale/pt-BR"
import dateFnsFr from "date-fns/locale/fr"
import { TranslationContext, fallbackLocale } from "./TranslationProvider"
import { useContext } from "react";

export const locales = ["de", "en", "fr", "pt"] as const

export type AppLocale = (typeof locales)[number]

export function useLocale() {
  const { locale, setLocale } = useContext(TranslationContext);
  return { locale, setLocale }
}

// const dateFnsLocaleMap: Record<AppLocale, DateFnsLocale> = {
//   "de": dateFnsDe,
//   "en": dateFnsEn,
//   "fr": dateFnsFr,
//   "pt": dateFnsPt,
// }


// export function useDateFnsLocale() {
//   const locale = useLocale()
//   return dateFnsLocaleMap[locale]
// }

// export function getDateFnsLocale() {
//   const locale = getLocale()
//   return dateFnsLocaleMap[locale]
// }

export type TranslationMessages<T> = Record<AppLocale, T>

export function useTranslation<T>(messages: TranslationMessages<T>) {
  const locale = typeof window !== 'undefined' ? useContext(TranslationContext).locale : fallbackLocale;
  return messages[locale];
}


