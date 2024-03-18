"use client"
import { FC } from 'react'
import { allAuthors, type Authors } from '@contentlayer/generated'
import SocialIcon from 'src/components/social-icons'
import Languages from 'src/components/resume/Articles/Languages'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import Skills from 'src/components/resume/Articles/Skills'
import { useLocale } from 'src/locale/useLocale'
import Image from 'next/image'


export const AuthorLayout: FC = () => {
  const { locale } = useLocale()
  const author = allAuthors.find((p) => p.slug === `${locale}/default`) as Authors

  if (!author) return null

  const { name, avatar, occupation, company, email, twitter, linkedin, github, body } = author

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center gap-y-4 space-x-2">
            {avatar && (
              <img
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="rounded-full"
              />
            )}
            <h3 className="text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <Languages />
            <div className="flex space-x-3">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none dark:prose-invert xl:col-span-2">
            <MDXLayoutRenderer code={body.code} />
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}
