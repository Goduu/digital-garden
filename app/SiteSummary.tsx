import { LinkArrow } from '@/components/LinkArrow'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'

export const SiteSummary = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div>
                {siteMetadata.description}
            </div>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                This website serves as a platform to share some thoughts and ideas. I will regularly post new projects where I test out cutting-edge technologies or simply share my creative endeavors for fun.
            </p>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Additionally, it's synchronized with my Obsidian repository, featuring various themed notes that offer insights into my thoughts on the world. I hope you like it!
            </p>
            <LinkArrow href='/portfolio' text='Check out my portfolio' />
            <LinkArrow href='/about' text='About me' />

        </div>
    )
}


