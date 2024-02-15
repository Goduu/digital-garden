import { locales } from "./state"

export const hasUrlLocale = (url: string) => {
    return locales.reduce((acc, locale) => {
        console.log(`url.includes(${locale})`, url.includes(`/${locale}/`))
        if (url.includes(`/${locale}/`)) {
            acc = true
        }
        return acc
    }, false)
}