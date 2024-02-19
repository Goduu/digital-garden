import Tag from "@/components/Tag";
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle } from "aura-beam-annotator";
import Link from "next/link";
import { FC } from "react";
import { CoreContent } from "pliny/utils/contentlayer";
import { Blog } from "@contentlayer/generated";
import { LocalizedDate } from "@/locale/LocalizedDate";
import { LocalizedText } from "@/locale/LocalizedText";

export type Post = CoreContent<Blog>

type PostSummaryProps = {
    post: Post
}
export const PostSummary: FC<PostSummaryProps> = ({ post }) => {
    const { slug, date, title, summary, tags } = post

    return (
        <AuraBeamAnnotator color='pink'>
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
                        <LocalizedDate date={date} />
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
                                <Link
                                    href={`/leaveNotes/${slug}`}
                                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                    aria-label="Read more"
                                >
                                    <LocalizedText translations={{ en, de, fr, pt }} translationKey="readMore" />
                                    &rarr;
                                </Link>

                            </div>
                        </div>
                    </div>
                </article>
            </AuraBeamBody>
        </AuraBeamAnnotator>
    )
}

const en = {
    readMore: "Read more"
}
const de: typeof en = {
    readMore: "Weiterlesen"
}
const fr: typeof en = {
    readMore: "Lire la suite"
}
const pt: typeof en = {
    readMore: "Leia mais"
}