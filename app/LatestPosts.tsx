import { LinkArrow } from '@/components/LinkArrow'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { formatDate } from 'pliny/utils/formatDate'
import React, { FC } from 'react'

const MAX_DISPLAY = 5

type LatestPostProps = {
    posts: any

}

const LatestPosts: FC<LatestPostProps> = ({ posts }) => {
    return (
        <div><div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-10 md:space-y-5">
                <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-5xl md:leading-14">
                    Latest Notes
                </h2>
            </div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {!posts.length && 'No posts found.'}
                {posts.slice(0, MAX_DISPLAY).map((post) => {
                    const { slug, date, title, summary, tags } = post
                    return (
                        <li key={slug} className="py-12">
                            <article>
                                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                    <dl>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                                        </dd>
                                    </dl>
                                    <div className="space-y-5 xl:col-span-3">
                                        <div className="space-y-6">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <Link
                                                        href={`/leaveNotes/${slug}`}
                                                        className="text-gray-900 dark:text-gray-100"
                                                    >
                                                        {title}
                                                    </Link>
                                                </h2>
                                                <div className="flex flex-wrap">
                                                    {tags.map((tag) => (
                                                        <Tag key={tag} text={tag} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                                {summary}
                                            </div>
                                        </div>
                                        <div className="text-base font-medium leading-6">
                                            <LinkArrow href={`/leaveNotes/${slug}`} text="Read more" />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
            {posts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/leaveNotes"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label="All posts"
                    >
                        All Posts &rarr;
                    </Link>
                </div>
            )}

            {siteMetadata.newsletter?.provider && (
                <div className="flex items-center justify-center pt-4">
                    <NewsletterForm />
                </div>
            )}</div>
    )
}

export default LatestPosts