"use client"
import { FaPaintBrush } from 'react-icons/fa'
import { FC } from 'react'

import { SectionHeading } from '../SectionHeading/SectionHeading'
import { allAdditionalInfos } from '@contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { useLocale } from 'src/locale/useLocale'

export const AdditionalInfo: FC = () => {
  const { locale } = useLocale()
  const additionalInfoLocalized = allAdditionalInfos.find(info => info.locale === locale)

  if (!additionalInfoLocalized) return null

  return (
    <article>
      <SectionHeading icon={FaPaintBrush} level={2} text={additionalInfoLocalized.title} />

      <MDXLayoutRenderer code={additionalInfoLocalized.body.code} />
    </article>
  )
}
