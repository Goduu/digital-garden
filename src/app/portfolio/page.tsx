import projectsData from 'src/data/projectsData'
import Card from 'src/components/Card'
import { genPageMetadata } from 'src/app/seo'
import { LocalizedText } from 'src/locale/LocalizedText'
import { QrCodeLink } from '@/components/QrCodeLink/QrCodeLink'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Portfolio() {
  const translations = { en, fr, de, pt }

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className='justify-between flex'>
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <LocalizedText translations={translations} translationKey={'portfolio'} />
          </h1>
          <QrCodeLink />
        </div>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          <LocalizedText translations={translations} translationKey="showcaseOfMyProjects" />
        </p>
      </div>
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map((d) => (
            <Card
              key={d.href}
              translations={d.translations}
              imgSrc={d.imgSrc}
              technologies={d.technologies}
              href={d.href}
              npmUrl={d.npmUrl}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const en = {
  portfolio: 'Portfolio',
  showcaseOfMyProjects: 'Showcase of my projects',
}
const fr: typeof en = {
  portfolio: 'Portfolio',
  showcaseOfMyProjects: 'Vitrine de mes projets',
}
const de: typeof en = {
  portfolio: 'Portfolio',
  showcaseOfMyProjects: 'Showcase meiner Projekte',
}
const pt: typeof en = {
  portfolio: 'Portifólio',
  showcaseOfMyProjects: 'Showcase dos meus projetos',
}
