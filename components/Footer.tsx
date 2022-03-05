import { Nextdotjs, Tailwindcss, Typescript } from '@icons-pack/react-simple-icons'
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16 mb-8 ">
        <div className="space-x-2 inline-flex items-center my-2 text-gray-500 dark:text-gray-400">
          <Nextdotjs size={20} />
          <Tailwindcss size={20} />
          <Typescript size={20} />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400 pt-2">
          <div>{`© 2014 - ${new Date().getFullYear()}`}</div>
          <Link
            href="https://blog.aozaki.cc"
            className="hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.author}
          </Link>
        </div>
      </div>
    </footer>
  )
}
