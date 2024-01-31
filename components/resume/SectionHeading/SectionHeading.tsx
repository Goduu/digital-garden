import { FC } from 'react'

import { Heading, HeadingProps } from '../Heading/Heading'
import { IconType } from 'react-icons'

interface SectionHeadingProps {
  icon?: IconType
  level?: HeadingProps['level']
  text: string
}

export const SectionHeading: FC<SectionHeadingProps> = (props) => {
  const { icon, level = 3, text } = props

  return (
    <Heading level={level}>
      <div className="flex items-center gap-2">
        {props.icon && <span className="hidden md:flex">{props.icon && <props.icon />}</span>}
        <div>{text}</div>
      </div>
    </Heading>
  )
}
