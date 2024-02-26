import { locales } from "./useLocale"

export const hasUrlLocale = (url: string) => {
    return locales.reduce((acc, locale) => {
        if (url.includes(`/${locale}/`)) {
            acc = true
        }
        return acc
    }, false)
}