"use client"
import { Dispatch, FC, ReactNode, SetStateAction, createContext, useState } from "react"
import { AppLocale } from "./state"

export const defaultLocale: AppLocale = "en"
export const fallbackLocale: AppLocale = "en"
export const testLocale: AppLocale = "en"

type TranslationContextType = {
    locale: AppLocale
    setLocale: Dispatch<SetStateAction<"de" | "en" | "fr" | "pt">>
}

export const TranslationContext = createContext<TranslationContextType>({
    locale: defaultLocale,
    setLocale: () => null,
})

type TranslationProviderProps = {
    children: ReactNode
}

export const TranslationProvider: FC<TranslationProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState<AppLocale>(defaultLocale)

    return (
        <TranslationContext.Provider value={{ locale, setLocale }}>
            {children}
        </TranslationContext.Provider>
    )
}
