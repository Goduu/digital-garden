import { FaCalendar } from 'react-icons/fa6'
import { FC } from 'react'
import { ProfessionalExperience } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { Heading } from '../Heading/Heading'

const ProfessionalItem: FC<ProfessionalExperience> = ({
  body,
  endDate,
  organization,
  organizationUrl,
  startDate,
  technologies,
  title,
}) => {
  return (
    <article className="border-neutral-6 border-t-2 py-6 first-of-type:border-none last-of-type:pb-0">
      <Heading level={3}>
        <span className="rounded-md bg-zinc-400 px-2 text-slate-50 dark:bg-slate-50 dark:text-slate-950">
          {title}
        </span>
        <span>
          at{' '}
          <a href={organizationUrl} className="text-blue-500" target="_blank">
            {organization}
          </a>
        </span>
      </Heading>

      <div className="mt-1 flex items-center gap-2 font-medium tracking-wide">
        <FaCalendar />
        {startDate}–{!endDate ? 'Current' : endDate}
        <div className="ml-auto flex items-center gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-neutral-5 border-neutral-5 rounded-md border px-2 py-1 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      <MDXLayoutRenderer code={body.code} />
    </article>
  )
}

export default ProfessionalItem
