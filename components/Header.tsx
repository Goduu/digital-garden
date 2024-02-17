import siteMetadata from '@/data/siteMetadata'
import { headerNavLinks } from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './search/SearchButton'
import { LocaleSwitcher } from 'locale/LocaleSwitcher'
import { HeaderLink } from './HeaderLink'

const Header = () => {

  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            <div className="mr-3">
              <Logo className="h-20 w-20" />
            </div>
            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => (
            <HeaderLink link={link} />
          )
          )}
        <SearchButton />
        <ThemeSwitch />
        <LocaleSwitcher />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
