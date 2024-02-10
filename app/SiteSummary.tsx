import { LinkArrow } from '@/components/LinkArrow'
import siteMetadata from '@/data/siteMetadata'
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle, AuraBeamVerticalDivider } from 'aura-beam-annotator'
import React from 'react'

export const SiteSummary = () => {
    return (
        <AuraBeamAnnotator color='teal' positioning='left'>
            <AuraBeamTitle title={siteMetadata.description} />
            <AuraBeamBody>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    This website serves as a platform to share some thoughts and ideas. I will regularly post new projects where I test out cutting-edge technologies or simply share my creative endeavors for fun.
                </p>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    Additionally, it's synchronized with my Obsidian repository, featuring various themed notes that offer insights into my thoughts on the world. I hope you like it!
                </p>
            </AuraBeamBody>
        </AuraBeamAnnotator>
    )
}


