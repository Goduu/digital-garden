import { FC } from 'react'

import { FaBuildingColumns } from 'react-icons/fa6'
import { Achievement } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { Heading } from '../Heading/Heading'

const AchievementItem: FC<Achievement> = ({ achievement, body, organization, completionYear }) => {
  return (
    <article className="border-neutral-6 border-t-2 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading level={3}>{achievement}</Heading>

      <div className="mt-1 flex items-center gap-2 font-medium tracking-wide">
        <FaBuildingColumns />
        {organization}
        <> - {completionYear}</>
      </div>

      <MDXLayoutRenderer code={body.code} />
    </article>
  )
}

export default AchievementItem
