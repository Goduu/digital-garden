import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from '@contentlayer/generated'
import Comments from 'src/components/Comments'
import Link from 'src/components/Link'
import PageTitle from 'src/components/PageTitle'
import SectionContainer from 'src/components/SectionContainer'
import Image from 'src/components/Image'
import Tag from 'src/components/Tag'
import siteMetadata from 'src/data/siteMetadata'
import ScrollTopAndComment from 'src/components/ScrollTopAndComment'
import { LocalizedDate } from 'src/locale/LocalizedDate'
import { LocalizedText } from 'src/locale/LocalizedText'

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/master/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]
  const translations = { en, de, fr, pt }

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only"><LocalizedText translations={translations} translationKey='publishedOn' /></dt>
                  <LocalizedDate date={date} />
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0">
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only"><LocalizedText translations={translations} translationKey='author' /></dt>
              <dd>
                <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={38}
                          height={38}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only"><LocalizedText translations={translations} translationKey='name' /></dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
              <div className="pb-6 pt-6 text-sm text-gray-700 dark:text-gray-300">
                <Link href={discussUrl(path)} rel="nofollow">
                  <LocalizedText translations={translations} translationKey='discussOnTwitter' />
                </Link>
                {` • `}
                <Link href={editUrl(filePath)}><LocalizedText translations={translations} translationKey='viewOnGitHub' /></Link>
              </div>
              {siteMetadata.comments && (
                <div
                  className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300"
                  id="comment"
                >
                  <Comments slug={slug} />
                </div>
              )}
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      <LocalizedText translations={translations} translationKey='tags' />
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex flex-col gap-4 justify-between py-4 xl:block xl:py-8">
                    {prev && prev.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          <LocalizedText translations={translations} translationKey='previousArticle' />
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${prev.path}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && next.path && (
                      <div>
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          <LocalizedText translations={translations} translationKey='nextArticle' />
                        </h2>
                        <div className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/${next.path}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${basePath}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="Back to the leave notes"
                >
                  &larr; <LocalizedText translations={translations} translationKey='backToTheLeaveNotes' />
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}

const en = {
  author: 'Author',
  publishedOn: 'Published on',
  name: 'Name',
  discussOnTwitter: 'Discuss on Twitter',
  viewOnGitHub: 'View on GitHub',
  tags: 'Tags',
  previousArticle: 'Previous Article',
  nextArticle: 'Next Article',
  backToTheLeaveNotes: 'Back to the leave notes',
}

const de: typeof en = {
  author: 'Autor',
  publishedOn: 'Veröffentlicht am',
  name: 'Name',
  discussOnTwitter: 'Auf Twitter diskutieren',
  viewOnGitHub: 'Auf GitHub ansehen',
  tags: 'Tags',
  previousArticle: 'Vorheriger Artikel',
  nextArticle: 'Nächster Artikel',
  backToTheLeaveNotes: 'Zurück zu den Notizen',
}
const fr: typeof en = {
  author: 'Auteur',
  publishedOn: 'Publié le',
  name: 'Nom',
  discussOnTwitter: 'Discuter sur Twitter',
  viewOnGitHub: 'Voir sur GitHub',
  tags: 'Tags',
  previousArticle: 'Article précédent',
  nextArticle: 'Article suivant',
  backToTheLeaveNotes: 'Retour aux notes',
}
const pt: typeof en = {
  author: 'Autor',
  publishedOn: 'Publicado em',
  name: 'Nome',
  discussOnTwitter: 'Discutir no Twitter',
  viewOnGitHub: 'Ver no GitHub',
  tags: 'Tags',
  previousArticle: 'Artigo anterior',
  nextArticle: 'Próximo artigo',
  backToTheLeaveNotes: 'Voltar para as notas',
}
