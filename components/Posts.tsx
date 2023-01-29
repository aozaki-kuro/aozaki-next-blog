import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'

const BlogIndex = () => {
  return getPagesUnderRoute('/posts')
    .sort((a, b) => {
      return (
        Number(new Date('frontMatter' in b ? b.frontMatter?.date : '')) -
        Number(new Date('frontMatter' in a ? a.frontMatter?.date : ''))
      )
    })
    .map(page => {
      let frontMatter = 'frontMatter' in page ? page.frontMatter : {}
      if (frontMatter === undefined) {
        console.log('Missing FrontMatter, please check.')
        frontMatter = {}
      }
      return (
        <div key={page.route}>
          <Link
            href={page.route}
            className="flex items-baseline text-2xl font-semibold text-inherit !no-underline"
          >
            <h3 className="font-variation-500 my-[0.3rem] mr-4 flex-1 text-[1.1rem] font-medium text-zinc-900 dark:text-inherit">
              {page.meta?.title || frontMatter.title || page.name}
            </h3>
            <time className="date shrink-0 whitespace-nowrap text-sm text-gray-400">
              {frontMatter.date}
            </time>
          </Link>
        </div>
      )
    })
}

export default BlogIndex
