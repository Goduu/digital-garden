"use client"
import { FC, ReactNode, useEffect, useRef, useState } from "react"
import { AppLocale, locales, useLocale, useTranslation } from "./state"
import { BR, US, FR, DE, FlagComponent } from 'country-flag-icons/react/3x2'
import { hasUrlLocale } from "./hasUrlLocale"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"


const languageFlags: Record<AppLocale, ReactNode> = {
  "en": <US width={20} />, "fr": <FR width={20} />, "de": <DE width={20} />, "pt": <BR width={20} />
}

export const LocaleSwitcher: FC = () => {
  const T = useTranslation({ de, en, fr, pt })
  const { locale, setLocale } = useLocale()
  const [open, setOpen] = useState(false)
  const componentRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const currentUrl = usePathname()

  const handleChangeLocale = (language: AppLocale) => {
    setLocale(language)
    setOpen(false)
    if (hasUrlLocale(currentUrl)) {
      router.push(currentUrl.replace(`/${locale}/`, `/${language}/`))
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className="max-w-sm mx-auto" ref={componentRef}>
      <div className="flex">
        <button
          id="states-button"
          onClick={() => setOpen(!open)}
          className="flex-shrink-0 z-10 gap-2 w-22 inline-flex items-center py-2 px-4 text-sm font-medium text-center border border-slate-300 rounded-s-lg hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-100 dark:hover:bg-slate-600 dark:focus:ring-slate-700 dark:border-slate-600" type="button">
          {languageFlags[locale]}
          {locale}
        </button>
        <div className={`z-10 ${!open && "hidden"} absolute bg-white divide-y divide-slate-100 rounded-s-lg shadow dark:bg-slate-700`}>
          <ul className="py-2 text-sm" aria-label="language-button">
            {locales.map((language) => (
              <li key={language}>
                <button
                  type="button"
                  aria-label={language}
                  className="inline-flex w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-white"
                  onClick={() => handleChangeLocale(language)}
                >
                  <div className="inline-flex items-center gap-2">
                    {languageFlags[language]}
                    {language}
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

const en = {
  language: "Language",
}
const de: typeof en = {
  language: "Sprache",
}
const fr: typeof en = {
  language: "Langue",
}
const pt: typeof en = {
  language: "Língua",
}
