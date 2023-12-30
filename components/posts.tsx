import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { getPagesUnderRoute } from 'nextra/context'

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

const BlogIndex = () => {
  const [sortedPages, setSortedPages] = useState<Page[]>([])

  useEffect(() => {
    const fetchPages = async () => {
      try {
        // Assuming getPagesUnderRoute might be async or requires the component to be mounted
        const pages = (await getPagesUnderRoute('/posts')) || []

        const sorted = pages.sort((a: Page, b: Page) => {
          const dateA =
            a.frontMatter && a.frontMatter.date ? new Date(a.frontMatter.date).getTime() : 0
          const dateB =
            b.frontMatter && b.frontMatter.date ? new Date(b.frontMatter.date).getTime() : 0

          if (isNaN(dateA) || isNaN(dateB)) {
            throw new Error('Invalid date format in frontMatter')
          }

          return dateB - dateA
        })

        setSortedPages(sorted)
      } catch (error) {
        console.error('Error fetching pages:', error)
      }
    }

    fetchPages()
  }, [])

  return (
    <div>
      {sortedPages.map((page: Page) => {
        const frontMatter = page.frontMatter || {}
        const title = page.meta?.title || frontMatter.title || page.name
        const date = frontMatter.date
          ? new Date(frontMatter.date).toLocaleDateString(undefined, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
          : ''

        return (
          <div key={page.route}>
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
      })}
    </div>
  )
}

export default BlogIndex
