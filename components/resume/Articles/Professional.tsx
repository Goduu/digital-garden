"use client"
import { FaBriefcase } from 'react-icons/fa6'
import { FC } from 'react'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import ProfessionalItem from './ProfessionalItem'
import { allProfessionalExperiences } from '@contentlayer/generated'
import { useLocale } from '@/locale/useLocale'
import { useTranslation } from '@/locale/useTranslation'

const sortedProfessionalExperiences = allProfessionalExperiences.sort((a, b) => {
  const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''))
  const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''))
  return aOrderNumber - bOrderNumber
})


const Professional: FC = () => {
  const T = useTranslation({ en, de, fr, pt })
  const { locale } = useLocale()
  const localizedProfessionalExperiences = sortedProfessionalExperiences.filter((experience) => experience.locale === locale)

  return (
    <article className="bg-neutral-3 rounded-xl">
      <div className="container">
        <SectionHeading icon={FaBriefcase} level={2} text={T.title} />

        {localizedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  )
}

export default Professional

const en = {
  title: 'Professional Experience',
}
const de: typeof en = {
  title: 'Berufserfahrung',
}
const fr: typeof en = {
  title: 'Expérience professionnelle',
}
const pt: typeof en = {
  title: 'Experiência Profissional',
}
