export type Project = {
  title: string
  description: string
  technologies: string[]
  href?: string
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
    title: 'Evolionary Algorithm',
    description: `What if genetics mixes with computer science? This is a simple evolutionary algorithm that solve the knapsack problem.`,
    imgSrc: '/static/images/evolutionary-algorithm.jpg',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Python', 'FastAPI', 'WebSocket'],
    href: 'https://evolutionary-algorithm.vercel.app/',
  },
]

export default projectsData
