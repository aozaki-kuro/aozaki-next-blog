import Link from 'next/link'
import { getPagesUnderRoute } from 'nextra/context'
import { useEffect, useState } from 'react'

interface FrontMatter {
  date?: string
  title?: string
}

interface Page {
  route: string
  name: string
  meta?: { title?: string }
  frontMatter?: FrontMatter
}

const usePages = () => {
  const [pages, setPages] = useState<Page[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPages = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const fetchedPages = getPagesUnderRoute('/posts')

        if (Array.isArray(fetchedPages)) {
          const sortedPages = fetchedPages.sort((a: Page, b: Page) => {
            const dateA = new Date(a.frontMatter?.date || '').getTime()
            const dateB = new Date(b.frontMatter?.date || '').getTime()
            return dateB - dateA
          })
          setPages(sortedPages)
        }
      } catch (err) {
        setError('Failed to load posts')
        console.error('Error getting pages:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPages()
  }, [])

  return { pages, isLoading, error }
}

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-8 text-gray-500">
    <svg className="mr-3 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
    <span>Loading posts...</span>
  </div>
)

const ErrorMessage = ({ message }: { message: string }) => (
  <div className="flex items-center justify-center py-8 text-red-500">
    <span>{message}</span>
  </div>
)

const BlogIndex = () => {
  const { pages, isLoading, error } = usePages()

  if (isLoading) {
    return (
      <div className="blog-post-item">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="blog-post-item">
        <ErrorMessage message={error} />
      </div>
    )
  }

  if (!pages.length) {
    return (
      <div className="blog-post-item">
        <p className="text-center text-gray-500">No posts found.</p>
      </div>
    )
  }

  return pages.map((page: Page) => {
    const frontMatter = page.frontMatter || {}
    const title = page.meta?.title || frontMatter.title || page.name

    const dateObj = new Date(frontMatter.date || '')
    const date = !isNaN(dateObj.getTime())
      ? dateObj.toLocaleDateString(undefined, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
      : 'No date'

    return (
      <div key={page.route} className="blog-post-item" data-custom="true">
        <Link
          href={page.route}
          className="flex items-baseline text-2xl font-semibold text-inherit !no-underline"
        >
          <h3 className="font-variation-500 my-[0.3rem] mr-4 flex-1 text-[1.1rem] font-medium text-zinc-900 dark:text-inherit">
            {title}
          </h3>
          <time className="date shrink-0 whitespace-nowrap text-sm text-gray-400">{date}</time>
        </Link>
      </div>
    )
  })
}

export default BlogIndex
