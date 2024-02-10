import { LinkArrow } from '@/components/LinkArrow'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle, AuraBeamVerticalDivider } from 'aura-beam-annotator'
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
        <div>
            <div >
                <AuraBeamVerticalDivider color='teal' direction='r-to-l' />
                <AuraBeamAnnotator color='teal'>
                    <AuraBeamTitle title="Latest Notes" />
                    <AuraBeamBody>
                        The latest notes I've written. I hope you can get something out of them!
                    </AuraBeamBody>
                    {!posts.length && 'No posts found.'}
                    {posts.slice(0, MAX_DISPLAY).map((post) => {
                        const { slug, date, title, summary, tags } = post
                        return (
                            <AuraBeamAnnotator color='teal'>
                                <AuraBeamTitle title={
                                    <Link
                                        href={`/leaveNotes/${slug}`}
                                        className="text-gray-900 dark:text-gray-100"
                                    >
                                        {title}
                                    </Link>}
                                    type='secondary' />
                                <AuraBeamBody>
                                    <article>
                                        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                                <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                                            </dd>
                                            <div className="space-y-5 xl:col-span-3">
                                                <div className="space-y-6">
                                                    <div>
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
                                </AuraBeamBody>
                            </AuraBeamAnnotator>
                        )
                    })}
                </AuraBeamAnnotator>
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
        </div>
    )
}

export default LatestPosts