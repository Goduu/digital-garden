import { AppLocale } from "@/locale/useLocale"

type LocalStorageInitialValues = {
    locale: AppLocale
}

export const localStorageInitialValues: LocalStorageInitialValues = {
    locale: "en"
}