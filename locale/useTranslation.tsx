"use client"
import { TranslationContext, fallbackLocale } from "./TranslationProvider"
import { useContext } from "react";
import { AppLocale } from "./useLocale";

export type TranslationMessages<T> = Record<AppLocale, T>

export function useTranslation<T>(messages: TranslationMessages<T>) {
  const locale = typeof window !== 'undefined' ? useContext(TranslationContext).locale : fallbackLocale;
  return messages[locale];
}


