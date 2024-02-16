import { LinkArrow } from "@/components/LinkArrow";
import Tag from "@/components/Tag";
import { siteMetadata } from "@/data/siteMetadata";
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle } from "aura-beam-annotator";
import Link from "next/link";
import { formatDate } from "pliny/utils/formatDate";
import { FC } from "react";
import { CoreContent, MDXDocumentDate } from "pliny/utils/contentlayer";

export type Post = CoreContent<MDXDocumentDate>

type PostSummaryProps = {
    post: Post
}
export const PostSummary: FC<PostSummaryProps> = ({ post }) => {
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
}