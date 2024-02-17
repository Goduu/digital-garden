"use client"
import { AppLocale, useTranslation } from "./state"

type Translations = Record<AppLocale, Record<string, string>>

type ValuesOf<T> = T[keyof T];
type InnerKeys<T> = keyof ValuesOf<T>;
interface LocalizedTextProps<T extends Record<string, Record<string, string>>> {
    translations: T;
    translationKey: InnerKeys<T>;
}

export const LocalizedText = <T extends Translations>({ translations, translationKey }: LocalizedTextProps<T>) => {
    const T = useTranslation(translations)

    return (
        <>
            {T[translationKey as string] || translationKey}
        </>
    )
}