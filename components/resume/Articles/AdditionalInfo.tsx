import { FaPaintBrush } from 'react-icons/fa'
import { FC } from 'react'

import { SectionHeading } from '../SectionHeading/SectionHeading'
import { additionalInfo } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export const AdditionalInfo: FC = () => {
  return (
    <article>
      <div className="mt-1 flex items-center gap-2 font-medium tracking-wide">
        <SectionHeading icon={FaPaintBrush} level={2} text={additionalInfo.title} />
      </div>

      <MDXLayoutRenderer code={additionalInfo.body.code} />
    </article>
  )
}
