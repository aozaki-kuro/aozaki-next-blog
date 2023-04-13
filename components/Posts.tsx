import { useMemo } from 'react' // Importing `useMemo` hook from React library
import { getPagesUnderRoute } from 'nextra/context' // Importing function `getPagesUnderRoute` from custom module
import Link from 'next/link' // Importing `Link` component from Next.js

// Defining a component called `BlogIndex`
const BlogIndex = () => {
  // Defining a sorted list of pages under `/posts` route, sorted by date in descending order
  const sortedPages = useMemo(() => {
    return getPagesUnderRoute('/posts').sort((a, b) => {
      return (
        Number(new Date('frontMatter' in b ? b.frontMatter?.date : '')) -
        Number(new Date('frontMatter' in a ? a.frontMatter?.date : ''))
      )
    })
  }, []) // Only compute once, on component mount

  // Returning an array of `Link` components mapped to each page in `sortedPages`
  return sortedPages.map(page => {
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
            {/* Displaying either `page.meta.title`, `frontMatter.title`, or `page.name` */}
            {page.meta?.title || frontMatter.title || page.name}
          </h3>
          <time className="date shrink-0 whitespace-nowrap text-sm text-gray-400">
            {/* Displaying the date from `frontMatter` */}
            {frontMatter.date}
          </time>
        </Link>
      </div>
    )
  })
}

export default BlogIndex // Exporting the component `BlogIndex` as default
