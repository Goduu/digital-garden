import React, { FC } from 'react'
import { Heading } from '../Heading/Heading'
import { SectionHeading } from '../SectionHeading/SectionHeading'
import { StarRating } from '../StarRating/StarRating'
import { FaCheck } from 'react-icons/fa6'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { Skill, allSkills } from '@contentlayer/generated'

const Skills: FC = () => {
  return (
    <article>
      <SectionHeading icon={FaCheck} level={3} text="Skills &amp; Expertise" />

      <div className="mt-2 grid grid-flow-row gap-6 lg:grid-flow-col">
        {allSkills.map((skill, skillIndex) => {
          skill = skill as Skill
          return (
            <div key={skill._id}>
              <Heading level={4}>
                <div className="flex items-center gap-2">
                  <StarRating stars={(allSkills.length - skillIndex) as 1 | 2 | 3} />
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
