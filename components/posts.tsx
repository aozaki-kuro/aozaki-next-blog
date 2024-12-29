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

// 将页面获取逻辑封装在一个自定义 Hook 中
const usePages = () => {
  const [pages, setPages] = useState<Page[]>([])

  useEffect(() => {
    try {
      const fetchedPages = getPagesUnderRoute('/posts')
      if (Array.isArray(fetchedPages)) {
        const sortedPages = fetchedPages.sort((a: Page, b: Page) => {
          const dateA = new Date(a.frontMatter?.date || '').getTime()
          const dateB = new Date(b.frontMatter?.date || '').getTime()

          if (isNaN(dateA) && isNaN(dateB)) return 0
          if (isNaN(dateA)) return 1
          if (isNaN(dateB)) return -1

          return dateB - dateA
        })
        setPages(sortedPages)
      }
    } catch (error) {
      console.error('Error getting pages:', error)
    }
  }, [])

  return pages
}

const BlogIndex = () => {
  const pages = usePages()

  if (!pages.length) {
    return (
      <div className="blog-post-item">
        <p>Loading posts...</p>
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
