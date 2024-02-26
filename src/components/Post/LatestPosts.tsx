"use client"
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle, AuraBeamVerticalDivider } from 'aura-beam-annotator'
import { useTranslation } from 'src/locale/useTranslation'
import { useLocale } from 'src/locale/useLocale'
import Link from 'next/link'
import React, { FC } from 'react'
import { Post, PostSummary } from './PostSummary'
import { filterPostsByLocale } from './filterPostsByLocale'

const MAX_DISPLAY = 5

type LatestPostProps = {
    posts: Post[]
}

const LatestPosts: FC<LatestPostProps> = ({ posts }) => {
    const T = useTranslation({ en, de, fr, pt })
    const { locale } = useLocale()
    const localizedPosts = filterPostsByLocale(posts, locale)

    return (
        <div className='pt-24'>
            <div >
                <AuraBeamAnnotator color='pink'>
                    <AuraBeamTitle title={T.latestNotes} />
                    <AuraBeamBody>
                        {T.latestNotesBody}
                    </AuraBeamBody>
                    {!localizedPosts.length && T.noPosts}
                    {localizedPosts.slice(0, MAX_DISPLAY).map((post) => (
                        <PostSummary post={post} />
                    ))}
                </AuraBeamAnnotator>
            </div>
            {localizedPosts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base font-medium leading-6">
                    <Link
                        href="/leaveNotes"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        aria-label={T.allPosts}
                    >
                        {T.allPosts} &rarr;
                    </Link>
                </div>
            )}
        </div>
    )
}

export default LatestPosts

const en = {
    latestNotes: 'Latest Notes',
    latestNotesBody: 'The latest notes I\'ve written. I hope you can get something out of them!',
    noPosts: 'No posts found.',
    allPosts: 'All Posts'
}

const de = {
    latestNotes: 'Neueste Notizen',
    latestNotesBody: 'Die neuesten Notizen, die ich geschrieben habe. Ich hoffe, Sie können etwas daraus ziehen!',
    noPosts: 'Keine Beiträge gefunden.',
    allPosts: 'Alle Beiträge'
}

const fr = {
    latestNotes: 'Dernières notes',
    latestNotesBody: 'Les dernières notes que j\'ai écrites. J\'espère que vous pourrez en tirer quelque chose!',
    noPosts: 'Aucun article trouvé.',
    allPosts: 'Tous les articles'
}

const pt = {
    latestNotes: 'Notas mais recentes',
    latestNotesBody: 'As notas mais recentes que escrevi. Espero que você possa tirar algo delas!',
    noPosts: 'Nenhum post encontrado.',
    allPosts: 'Todos os posts'
}