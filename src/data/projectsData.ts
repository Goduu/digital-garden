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
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Python', 'FastAPI', 'WebSocket', "Mobile"],
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
        title: 'Annotateur de faisceau d\'aura',
        description: 'La bibliothèque AuraBeam Annotator propose un ensemble de composants React conçus pour améliorer l\'attrait visuel de votre application avec des points forts annotés et des éléments décoratifs. Cette bibliothèque comprend les composants AuraBeamAnnotator, AuraBeamAnnotatorContainer et AuraBeamVerticalDivider, chacun personnalisable avec diverses props pour la couleur et le positionnement.',
      },
      pt: {
        title: 'Anotador de feixe de aura',
        description: 'A biblioteca AuraBeam Annotator oferece um conjunto de componentes React projetados para melhorar o apelo visual de sua aplicação com destaques anotados e elementos decorativos. Esta biblioteca inclui os componentes AuraBeamAnnotator, AuraBeamAnnotatorContainer e AuraBeamVerticalDivider, cada um personalizável com várias props para cor e posicionamento.',
      }
    }
  },
  {
    imgSrc: '/static/images/trattoria.png',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
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
