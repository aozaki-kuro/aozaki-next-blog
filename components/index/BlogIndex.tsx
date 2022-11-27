import { getPagesUnderRoute } from 'nextra/context'
import Link from 'next/link'

const BlogIndex = () => {
  return getPagesUnderRoute('/posts')
    .sort((a, b) => {
      return (
        Number(new Date('frontMatter' in b ? b.frontMatter?.data : '')) -
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
        <div key={page.route} className="mb-10">
          <Link href={page.route}>
            <a className="post-link font-semibold mt-8 text-2xl flex post-link">
              <h3 className="flex-1 m-0 post-title">
                {page.meta?.title || frontMatter.title || page.name}
              </h3>
              <time className="opacity-50 text-sm whitespace-nowrap date">
                {frontMatter.date}
              </time>
            </a>
          </Link>
        </div>
      )
    })
}

export default BlogIndex
