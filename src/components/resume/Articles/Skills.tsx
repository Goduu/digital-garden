"use client"
import React, { FC } from 'react'
import { Heading } from '../Heading/Heading'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { StarRating } from '../StarRating/StarRating'
import { FaCheck } from 'react-icons/fa6'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { Skill, allSkills } from '@contentlayer/generated'
import { useLocale } from 'src/locale/useLocale'

const Skills: FC = () => {
  const { locale } = useLocale()
  const localizedSkills = allSkills.filter((experience) => experience.locale === locale)

  return (
    <article>
      <SectionHeading icon={FaCheck} level={3} text="Skills &amp; Expertise" />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">
        {localizedSkills.map((skill) => {
          skill = skill as Skill
          return (
            <div key={skill._id}>
              <Heading level={4}>
                <div className="flex items-center gap-2">
                  <StarRating stars={skill.rating} />
                  {skill.title}
                </div>
              </Heading>
              {/* renders the skill */}
              <MDXLayoutRenderer code={skill.body.code} />
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default Skills
