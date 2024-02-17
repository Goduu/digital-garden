/* eslint-disable jsx-a11y/anchor-is-valid */
'use client'

import { usePathname } from 'next/navigation'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from '@contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import { genPageMetadata } from 'app/seo'
import { TagLinks } from '@/components/TagLinks'
import { Pagination, PaginationProps } from '@/components/Pagination'
import { useLocale, useTranslation } from '@/locale/state'
import { filterPostsByLocale } from '@/components/Post/filterPostsByLocale'
import { LocalizedDate } from '@/components/date/LocalizedDate'

interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

export const metadata = genPageMetadata({ title: 'Leaves' })

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const T = useTranslation({ en, de, fr, pt })
  const pathname = usePathname()
  const { locale } = useLocale()

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts
  const localizedPosts = filterPostsByLocale(displayPosts, locale)

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
            <div className="px-6 py-4">
              {pathname.startsWith('/leaveNotes') ? (
                <h3 className="font-bold uppercase text-primary-500">{T.allPosts}</h3>
              ) : (
                <Link
                  href={`/leaveNotes`}
                  className="font-bold uppercase text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-500"
                >
                  {T.allPosts}
                </Link>
              )}
              <ul>
                <TagLinks tags={tagData} />
              </ul>
            </div>
          </div>
          <div>
            <ul>
              {localizedPosts.map((post) => {
                const { path, date, title, summary, tags } = post
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">{T.publishedOn}</dt>
                        <LocalizedDate date={date} />
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

const en = {
  allPosts: "All Posts",
  publishedOn: "Published on",
}
const de: typeof en = {
  allPosts: "Alle Beiträge",
  publishedOn: "Veröffentlicht am",
}
const fr: typeof en = {
  allPosts: "Tous les articles",
  publishedOn: "Publié le",
}
const pt: typeof en = {
  allPosts: "Todos os posts",
  publishedOn: "Publicado em",
}
