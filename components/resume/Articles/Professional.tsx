import { FaBriefcase } from 'react-icons/fa6'
import { FC } from 'react'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import ProfessionalItem from './ProfessionalItem'
import { allProfessionalExperiences } from 'contentlayer/generated'

const sortedProfessionalExperiences = allProfessionalExperiences.sort((a, b) => {
  const aOrderNumber = parseInt(a._raw.sourceFileName.replace(/^\D+/g, ''))
  const bOrderNumber = parseInt(b._raw.sourceFileName.replace(/^\D+/g, ''))
  return aOrderNumber - bOrderNumber
})

const Professional: FC = () => {
  return (
    <article className="bg-neutral-3 rounded-xl">
      <div className="container">
        <SectionHeading icon={FaBriefcase} level={2} text="Professional Experience" />

        {sortedProfessionalExperiences.map((professional) => (
          <ProfessionalItem key={professional._id} {...professional} />
        ))}
      </div>
    </article>
  )
}

export default Professional
