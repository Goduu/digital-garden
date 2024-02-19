"use client"
import { FaMortarPestle } from 'react-icons/fa6'
import { FC } from 'react'

import { SectionHeading } from '../SectionHeading/SectionHeading'
import AchievementItem from './AchievementItem'
import { allAchievements } from '@contentlayer/generated'
import { useLocale } from '@/locale/useLocale'

const sortedAchievements = allAchievements.sort((a, b) => {
  const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''))
  const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''))
  return aOrderNumber - bOrderNumber
})

const Achievements: FC = () => {
  const { locale } = useLocale()
  const localizedAchievements = sortedAchievements.filter((achievement) => achievement.locale === locale)

  return (
    <article className="bg-neutral-3 rounded-xl">
      <div className="container">
        <SectionHeading icon={FaMortarPestle} level={2} text="Achievements" />

        {localizedAchievements.map((achievement) => (
          <AchievementItem key={achievement._id} {...achievement} />
        ))}
      </div>
    </article>
  )
}

export default Achievements
