export type HeaderNavLinks = {
  href: string
  title: keyof typeof en
}

export const headerNavLinks: HeaderNavLinks[] = [
  { href: '/', title: 'home' },
  { href: '/leaveNotes', title: 'leaveNotes' },
  { href: '/tags', title: 'tags' },
  { href: '/portfolio', title: 'portfolio' },
  // { href: '/about', title: 'about' },
]

const en = {
  home: "Home",
  leaveNotes: "Notes",
  tags: "Tags",
  portfolio: "Projects",
  about: "About",
}
const de: typeof en = {
  home: "Startseite",
  leaveNotes: "Notizen",
  tags: "Tags",
  portfolio: "Projekten",
  about: "Über",
}
const fr: typeof en = {
  home: "Accueil",
  leaveNotes: "Notes",
  tags: "Tags",
  portfolio: "Projets",
  about: "À propos",
}
const pt: typeof en = {
  home: "Início",
  leaveNotes: "Notas",
  tags: "Tags",
  portfolio: "Projetos",
  about: "Sobre",
}

export const headerNavLinkTranslations = { en, de, fr, pt }
