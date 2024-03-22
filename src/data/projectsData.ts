import { AppLocale } from "src/locale/useLocale"

export type Project = {
  technologies: string[]
  href?: string
  npmUrl?: string
  imgSrc?: string
  translations: Record<AppLocale, Record<string, string>>
}

const projectsData: Project[] = [
  {
    imgSrc: '/static/images/evolutionary-algorithm.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Python', 'FastAPI', "Mobile"],
    href: 'https://evolutionary-algorithm.vercel.app/',
    translations: {
      en: {
        title: 'Evolutionary Algorithm',
        description: `What if genetics mixes with computer science? This is a simple evolutionary algorithm that solve the knapsack problem.`,
      },
      de: {
        title: 'Evolutionärer Algorithmus',
        description: `Was passiert, wenn Genetik mit Informatik vermischt wird? Dies ist ein einfacher evolutionärer Algorithmus, der das Rucksackproblem löst.`,
      },
      fr: {
        title: 'Algorithme évolutif',
        description: `Et si la génétique se mélangeait à l'informatique ? Il s'agit d'un algorithme évolutif simple qui résout le problème du sac à dos.`,
      },
      pt: {
        title: 'Algoritmo evolucionário',
        description: `E se a genética se misturasse com a ciência da computação? Este é um algoritmo evolutivo simples que resolve o problema da mochila.`,
      },
    }
  },
  {
    imgSrc: '/static/images/gym.jpg',
    technologies: ['React', 'NextJs', 'Tailwind CSS', 'TypeScript', 'ContentLayer', "MDX"],
    href: 'https://code-gym.vercel.app/',
    translations: {
      en: {
        title: 'Gym',
        description: `The Gym application is a simple platform for learning and practicing programming languages. It includes a code editor, exercises with some tests to prove you have great skills as a developer. The application is built with React, Tailwind CSS, and TypeScript.`,
      },
      de: {
        title: 'Gym',
        description: `Die Gym-Anwendung ist eine einfache Plattform zum Erlernen und Üben von Programmiersprachen. Sie enthält einen Code-Editor, Übungen mit einigen Tests, um zu beweisen, dass Sie großartige Fähigkeiten als Entwickler haben. Die Anwendung ist mit React, Tailwind CSS und TypeScript erstellt.`,
      },
      fr: {
        title: 'Gym',
        description: 'L\'application Gym est une plateforme simple pour apprendre et pratiquer les langages de programmation. Elle comprend un éditeur de code, des exercices avec quelques tests pour prouver que vous avez de grandes compétences en tant que développeur. L\'application est construite avec React, Tailwind CSS et TypeScript.'
      },
      pt: {
        title: 'Gym',
        description: 'A aplicação Gym é uma plataforma simples para aprender e praticar linguagens de programação. Inclui um editor de código, exercícios com alguns testes para provar que você tem ótimas habilidades como desenvolvedor. A aplicação é construída com React, Tailwind CSS e TypeScript.',
      }
    }
  },
  {
    imgSrc: '/static/images/aura-beam-annotator.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'NPM'],
    href: 'https://aura-beam-annotator.vercel.app/',
    npmUrl: 'https://www.npmjs.com/package/aura-beam-annotator',
    translations: {
      en: {
        title: 'Aura Beam Annotator',
        description: `The AuraBeam Annotator library offers a set of React components designed to enhance the visual appeal of your application with annotated highlights and decorative elements. This library includes the AuraBeamAnnotator, AuraBeamAnnotatorContainer, and AuraBeamVerticalDivider components, each customizable with various props for color and positioning.`,
      },
      de: {
        title: 'Aura Beam Annotator',
        description: `Die AuraBeam Annotator-Bibliothek bietet eine Reihe von React-Komponenten, die entwickelt wurden, um die visuelle Attraktivität Ihrer Anwendung mit annotierten Highlights und dekorativen Elementen zu verbessern. Diese Bibliothek enthält die Komponenten AuraBeamAnnotator, AuraBeamAnnotatorContainer und AuraBeamVerticalDivider, die jeweils mit verschiedenen Props für Farbe und Positionierung anpassbar sind.`,
      },
      fr: {
        title: 'Aura Beam Annotator',
        description: 'La bibliothèque AuraBeam Annotator propose un ensemble de composants React conçus pour améliorer l\'attrait visuel de votre application avec des points forts annotés et des éléments décoratifs. Cette bibliothèque comprend les composants AuraBeamAnnotator, AuraBeamAnnotatorContainer et AuraBeamVerticalDivider, chacun personnalisable avec diverses props pour la couleur et le positionnement.',
      },
      pt: {
        title: 'Aura Beam Annotator',
        description: 'A biblioteca AuraBeam Annotator oferece um conjunto de componentes React projetados para melhorar o apelo visual de sua aplicação com destaques anotados e elementos decorativos. Esta biblioteca inclui os componentes AuraBeamAnnotator, AuraBeamAnnotatorContainer e AuraBeamVerticalDivider, cada um personalizável com várias props para cor e posicionamento.',
      }
    }
  },
  {
    imgSrc: '/static/images/trattoria.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    href: 'https://trattoria-goduu.vercel.app/',
    translations: {
      en: {
        title: 'Trattoria Goduu',
        description: `A simple restaurant menu.`,
      },
      de: {
        title: 'Trattoria Goduu',
        description: `Ein einfaches Restaurantmenü.`,
      },
      fr: {
        title: 'Trattoria Goduu',
        description: `Un simple menu de restaurant.`,
      },
      pt: {
        title: 'Trattoria Goduu',
        description: `Um menu de restaurante simples.`,
      },
    }
  },

]

export default projectsData
