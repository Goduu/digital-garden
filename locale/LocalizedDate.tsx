"use client"
import { useLocale } from "@/locale/useLocale"
import { formatDate } from "pliny/utils/formatDate"
import { FC } from "react"

type LocalizedDateProps = {
    date: string
}

export const LocalizedDate: FC<LocalizedDateProps> = ({ date }) => {
    const { locale } = useLocale()

    return (
        <dd className="text-gray-500 dark:text-gray-400">
            <time dateTime={date}>{formatDate(date, locale)}</time>
        </dd>
    )
}