import { AppLocale, locales } from "./useLocale"

export const findLocaleInUrl = (url: string): AppLocale | "" => {
    return locales.find(locale => url.includes(`/${locale}/`)) || ''
}