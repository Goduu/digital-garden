export type Project = {
  title: string
  description: string
  technologies: string[]
  href?: string
  npmUrl?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Trattoria Goduu',
    description: `A simple restaurant menu.`,
    imgSrc: '/static/images/trattoria.png',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    href: 'https://trattoria-goduu.vercel.app/',
  },
  {
    title: 'Evolutionary Algorithm',
    description: `What if genetics mixes with computer science? This is a simple evolutionary algorithm that solve the knapsack problem.`,
    imgSrc: '/static/images/evolutionary-algorithm.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Python', 'FastAPI', 'WebSocket'],
    href: 'https://evolutionary-algorithm.vercel.app/',
  },
  {
    title: 'Aura Beam Annotator',
    description: `The AuraBeam Annotator library offers a set of React components designed to enhance the visual appeal of your application with annotated highlights and decorative elements. This library includes the AuraBeamAnnotator, AuraBeamAnnotatorContainer, and AuraBeamVerticalDivider components, each customizable with various props for color and positioning.`,
    imgSrc: '/static/images/aura-beam-annotator.png',
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'NPM'],
    href: 'https://aura-beam-annotator.vercel.app/',
    npmUrl: 'https://www.npmjs.com/package/aura-beam-annotator'
  },
]

export default projectsData
