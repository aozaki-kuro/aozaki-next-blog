import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useEffect, useState, ReactNode } from 'react'
import LogoSwitch from '@/components/custom/LogoSwitch'

interface Props {
  children: ReactNode
}

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true)
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0)
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return isTop
}

const LayoutWrapper = ({ children }: Props) => {
  const [navShow, setNavShow] = useState(false)
  const onToggleNav = () => setNavShow((status) => !status)
  const isTop = useIsScrollTop()

  return (
    <>
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <header
        className={`overflow-x-hidden backdrop-blur-apl backdrop-saturate-apl bg-navday dark:backdrop-saturate-apld dark:bg-navdark py-3 sticky top-0 z-40 ${
          isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
        }`}
      >
        <div className="mx-auto max-w-3xl xl:max-w-5xl flex items-center justify-between px-3 xl:px-0">
          <div>
            <Link href="/" aria-label="Aozaki's blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  <LogoSwitch />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <button
              className="w-8 h-8 ml-2 mr-1 rounded sm:hidden"
              type="button"
              aria-label="Toggle Menu"
              onClick={onToggleNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-gray-900 dark:text-gray-100"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="pt-4 max-w-3xl px-6 md:px-3 xl:px-0 mx-auto sm:px-6 xl:max-w-[62rem]">
        <div className="flex flex-col justify-between">
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default LayoutWrapper
