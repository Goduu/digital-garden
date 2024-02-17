"use client"
import siteMetadata from '@/data/siteMetadata'
import { AuraBeamAnnotator, AuraBeamBody, AuraBeamTitle } from 'aura-beam-annotator'
import { useTranslation } from '@/locale/useTranslation'
import React from 'react'

export const SiteSummary = () => {
    const T = useTranslation({ de, en, fr, pt })

    return (
        <AuraBeamAnnotator color='teal' positioning='left'>
            <AuraBeamTitle title={T.description} />
            <AuraBeamBody>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    {T.summary1}
                </p>
                <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                    {T.summary2}
                </p>
            </AuraBeamBody>
        </AuraBeamAnnotator>
    )
}

const en = {
    description: "A simple web app for sharing knowledge",
    summary1: "This website serves as a platform to share some thoughts and ideas. I will regularly post new projects where I test out cutting-edge technologies or simply share my creative endeavors for fun.",
    summary2: "Additionally, it's synchronized with my Obsidian repository, featuring various themed notes that offer insights into my thoughts on the world. I hope you like it!",
}
const de: typeof en = {
    description: "Eine einfache Web-App zum Teilen von Wissen",
    summary1: "Diese Website dient als Plattform, um einige Gedanken und Ideen zu teilen. Ich werde regelmäßig neue Projekte veröffentlichen, in denen ich modernste Technologien teste oder einfach meine kreativen Bestrebungen zum Spaß teile.",
    summary2: "Zusätzlich ist es mit meinem Obsidian-Repository synchronisiert, das verschiedene thematische Notizen enthält, die Einblicke in meine Gedanken zur Welt bieten. Ich hoffe es gefällt dir!",
}
const fr: typeof en = {
    description: "Une application Web simple pour partager connaissance",
    summary1: "Ce site Web sert de plateforme pour partager quelques réflexions et idées. Je publierai régulièrement de nouveaux projets où je teste des technologies de pointe ou partage simplement mes entreprises créatives pour le plaisir.",
    summary2: "De plus, il est synchronisé avec mon référentiel Obsidian, présentant diverses notes thématiques qui offrent des aperçus de mes réflexions sur le monde. J'espère que ça vous plaira!",
}
const pt: typeof en = {
    description: "Um aplicativo da web simples para partilhar conhecimento",
    summary1: "Este site serve como uma plataforma para compartilhar alguns pensamentos e ideias. Regularmente postarei novos projetos onde testo tecnologias de ponta ou simplesmente compartilho meus empreendimentos criativos para me divertir.",
    summary2: "Além disso, está sincronizado com meu repositório Obsidian, apresentando várias notas temáticas que oferecem insights sobre meus pensamentos sobre o mundo. Espero que goste!",
}
