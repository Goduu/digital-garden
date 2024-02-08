import { FC } from 'react'
import Image from './Image'
import Link from './Link'
import { Project } from '@/data/projectsData'

export const Card: FC<Project> = ({ title, description, imgSrc, technologies, href, npmUrl }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        <div>
          {technologies.map(technology => {
            return (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100 mr-2 mb-2">
                {technology}
              </span>
            )
          })}
        </div>
        <div className='flex gap-4 py-4'>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              View Live &rarr;
            </Link>
          )}
          {npmUrl && (
            <Link
              href={npmUrl}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to npm`}
            >
              View NPM package &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card
