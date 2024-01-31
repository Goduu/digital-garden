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
    title: 'The Time Machine',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten headphones with this simple yet affordable solution.`,
    imgSrc: '/static/images/time-machine.jpg',
    technologies: [],
    href: '/blog/the-time-machine',
  },
]

export default projectsData
