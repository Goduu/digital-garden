import { AppLocale } from "src/locale/useLocale"

type LocalStorageInitialValues = {
    locale: AppLocale
}

export const localStorageInitialValues: LocalStorageInitialValues = {
    locale: "en"
}