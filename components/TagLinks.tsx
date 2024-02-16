"use client"
import { AppLocale, useLocale, useTranslation } from "@/locale/state"
import { FC } from "react"
import Tag from "./Tag"
import { slug } from 'github-slugger'
import Link from "next/link"

type TagLinks = {
    tags: Record<AppLocale, Record<string, number>>
}

export const TagLinks: FC<TagLinks> = ({ tags }) => {
    const { locale } = useLocale()
    const T = useTranslation({ en, de, fr, pt })
    const localizedTags = tags[locale]
    const tagKeys = Object.keys(localizedTags)
    const sortedTags = tagKeys.sort((a, b) => localizedTags[b] - localizedTags[a])

    return (
        <>
            {tagKeys.length === 0 && T.noTagsFound}
            {sortedTags.map((t) => {
                return (
                    <div key={t} className="mb-2 mr-5 mt-2">
                        <Tag text={t} />
                        <Link
                            href={`/tags/${slug(t)}`}
                            className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                            aria-label={`View posts tagged ${t}`}
                        >
                            {` (${localizedTags[t]})`}
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

const en = {
    noTagsFound: 'No tags found.'
}
const de: typeof en = {
    noTagsFound: 'Keine Tags gefunden.'
}
const fr: typeof en = {
    noTagsFound: 'Aucun tag trouvé.'
}
const pt: typeof en = {
    noTagsFound: 'Nenhum tag encontrado.'
}