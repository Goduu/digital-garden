"use client"
import { useTranslation } from "src/locale/useTranslation";
import NewsletterForm from "pliny/ui/NewsletterForm";
import { FC } from "react";

export const NewsLetter: FC = () => {
    const T = useTranslation({ en, de, fr, pt })

    return (
        <NewsletterForm title={T.subscribe} />
    )
}

const en = {
    subscribe: 'Subscribe to our newsletter'
}
const de: typeof en = {
    subscribe: 'Hol dir unseren Newsletter'
}
const fr: typeof en = {
    subscribe: 'Abonne toi à notre newsletter'
}
const pt: typeof en = {
    subscribe: 'Inscreva-se na nossa newsletter'
}