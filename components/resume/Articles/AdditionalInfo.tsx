import { FaPaintBrush } from 'react-icons/fa'
import { FC } from 'react'

import { SectionHeading } from '../SectionHeading/SectionHeading'
import { additionalInfo } from '@contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

export const AdditionalInfo: FC = () => {
  return (
    <article>
      <SectionHeading icon={FaPaintBrush} level={2} text={additionalInfo.title} />

      <MDXLayoutRenderer code={additionalInfo.body.code} />
    </article>
  )
}
