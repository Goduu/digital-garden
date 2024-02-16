"use client"
import { FC } from "react"
import { AppLocale, useTranslation } from "./state"

type Translations = Record<AppLocale, Record<string, string>>
type LocalizedTextProps = {
    translations: Translations,
    translationKey: string
}

export const LocalizedText: FC<LocalizedTextProps> = ({ translations, translationKey }) => {
    const T = useTranslation(translations)

    return (
        <>
            {T[translationKey] || translationKey}
        </>
    )
}