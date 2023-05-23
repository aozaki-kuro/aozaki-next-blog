import { promises as fs } from 'fs'
import { join } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

// @TODO: for now let's generate with all posts, unsorted
async function generate() {
  const feed = new RSS({
    title: "Aozaki's Blog",
    site_url: 'https://blog.aozaki.cc',
    feed_url: 'https://blog.aozaki.cc/feed.xml'
  })

  const dirPath = join(
    new URL('.', import.meta.url).pathname,
    '..',
    'pages',
    'posts'
  )
  const posts = await fs.readdir(dirPath)

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].startsWith('index.')) continue

    const content = await fs.readFile(join(dirPath, posts[i]))
    const frontmatter = matter(content)

    feed.item({
      title: frontmatter.data.title,
      url: '/posts/' + posts[i].replace(/\.mdx?/, ''),
      date: frontmatter.data.date,
      description: frontmatter.data.description,
      author: frontmatter.data.author
    })
  }

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
