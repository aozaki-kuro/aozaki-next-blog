import { Nextdotjs, Tailwindcss, Typescript } from '@icons-pack/react-simple-icons'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="text-sm text-center pt-12 pb-6 text-gray-500 dark:text-gray-400">
      <div className="space-x-2 inline-flex items-center my-2">
        <Nextdotjs size={18} />
        <Tailwindcss size={18} />
        <Typescript size={18} />
      </div>
      <div className="mb-1">
        Built by{' '}
        <Link
          href="https://aozaki.cc"
          className="hover:text-primary-600 dark:hover:text-primary-400"
        >
          {siteMetadata.author}
        </Link>
      </div>
      <div>© 2014 - {new Date().getFullYear()}</div>
    </footer>
  )
}
