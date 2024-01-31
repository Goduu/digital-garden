import { PropsWithChildren, createElement } from 'react'
import { twMerge } from 'tailwind-merge'

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  color?: 'danger' | 'neutral' | 'neutralSubtle' | 'primary'
}
const variants = {
  color: {
    danger: 'text-danger-11',
    neutral: 'text-neutral-12',
    neutralSubtle: 'text-neutral-11',
    primary: 'text-primary-11',
  },
  size: {
    1: 'text-4xl md:text-5xl',
    2: 'text-2xl md:text-3xl',
    3: 'text-xl md:text-2xl',
    4: 'text-lg md:text-xl',
    5: 'text-base md:text-lg',
    6: 'text-sm md:text-base',
  },
}

export function Heading({ children, level, color }: PropsWithChildren<HeadingProps>) {
  // make a background the counter-color of the main theme background with border-radius and the text visible accordingly
  const elementClass = 'flex items-center gap-2'
  const classes = twMerge(
    elementClass,
    variants.color[color ?? 'neutral'],
    variants.size[level ?? 3]
  )
  return createElement(`h${level}`, { className: classes }, children)
}
