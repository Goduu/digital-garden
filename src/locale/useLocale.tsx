import { useContext } from "react";
import { TranslationContext } from "./TranslationProvider";
export type AppLocale = "de" | "en" | "fr" | "pt"

export const locales: AppLocale[] = ["de", "en", "fr", "pt"] as const

export function useLocale() {
    const { locale, setLocale } = useContext(TranslationContext);
    return { locale, setLocale }
}