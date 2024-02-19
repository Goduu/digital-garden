"use client"
import { FC } from 'react'
import { allAuthors, type Authors } from '@contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Languages from '@/components/resume/Articles/Languages'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import Skills from '@/components/resume/Articles/Skills'
import { useLocale } from '@/locale/useLocale'
import { useTranslation } from '@/locale/useTranslation'
import PDFDownloadButton from '@/components/resume/PDF/PDFDownloadButton'


export const AuthorLayout: FC = () => {
  const T = useTranslation({ en, de, fr, pt })
  const { locale } = useLocale()
  const author = allAuthors.find((p) => p.slug === `${locale}/default`) as Authors

  if (!author) return null

  const { name, avatar, occupation, company, email, twitter, linkedin, github, body } = author

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5 flex justify-between">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {T.title}
          </h1>
          < PDFDownloadButton />
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center gap-y-2 space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <Languages />
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <MDXLayoutRenderer code={body.code} />
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}

const en = {
  title: 'About',
}
const de: typeof en = {
  title: 'Über mich',
}
const fr: typeof en = {
  title: 'À propos',
}
const pt: typeof en = {
  title: 'Sobre',
}