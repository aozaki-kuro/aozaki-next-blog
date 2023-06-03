import { useMemo } from 'react' // Importing `useMemo` hook from React library
import { getPagesUnderRoute } from 'nextra/context' // Importing function `getPagesUnderRoute` from custom module
import Link from 'next/link' // Importing `Link` component from Next.js

// Defining a type for the front matter object
interface FrontMatter {
  date?: string
  title?: string
}

// Defining a type for the nextra page object
interface Page {
  route: string
  name: string
  meta?: { title?: string }
  frontMatter?: FrontMatter
}

// Defining a component called `BlogIndex`
const BlogIndex = () => {
  // Defining a sorted list of pages under `/posts` route, sorted by date in descending order
  const sortedPages = useMemo(() => {
    const pages = getPagesUnderRoute('/posts')
    return pages.sort((a: Page, b: Page) => {
      // Reformatting the dates to make them comparable
      const dateA = new Date(a.frontMatter?.date || '').getTime()
      const dateB = new Date(b.frontMatter?.date || '').getTime()
      return dateB - dateA // Sorting by date in descending order
    })
  }, []) // Only compute once, on component mount

  // Returning an array of `Link` components mapped to each page in `sortedPages`
  return sortedPages.map((page: Page) => {
    // Extracting frontMatter object from the page and handling missing values
    const frontMatter = page.frontMatter || {}

    // Extracting title from either `page.meta`, `frontMatter`, or `page.name`
    const title = page.meta?.title || frontMatter.title || page.name

    // Extracting date from `frontMatter` and formatting it
    const date = new Date(frontMatter.date || '').toLocaleDateString(
      undefined,
      {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }
    )

    // Returning the Link component
    return (
      <div key={page.route}>
        <Link
          href={page.route}
          className="flex items-baseline text-2xl font-semibold text-inherit !no-underline"
        >
          <h3 className="font-variation-500 my-[0.3rem] mr-4 flex-1 text-[1.1rem] font-medium text-zinc-900 dark:text-inherit">
            {title}
          </h3>
          <time className="date shrink-0 whitespace-nowrap text-sm text-gray-400">
            {date}
          </time>
        </Link>
      </div>
    )
  })
}

export default BlogIndex
