import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'
import RSS from 'rss'

// Message definition
const msgError = '\x1b[0m[\x1b[31m ERROR \x1b[0m]'
const msgDone = '\x1b[0m[\x1b[32m DONE \x1b[0m]'
// const msgInfo = '\x1b[0m[\x1b[33m INFO \x1b[0m]'
// const msgWarn = '\x1b[0m[\x1b[33m WARN \x1b[0m]'

async function generate() {
  try {
    const feed = new RSS({
      title: "Aozaki's Blog",
      site_url: 'https://blog.aozaki.cc',
      feed_url: 'https://blog.aozaki.cc/feed.xml',
    })

    const dirPath = join('./pages/posts')
    const posts = await fs.readdir(dirPath)

    for (const post of posts.filter(fileName => !fileName.startsWith('index.'))) {
      const content = await fs.readFile(join(dirPath, post))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `/posts/${post.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author,
      })
    }

    await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))

    console.log(msgDone, 'RSS feed generated successfully!')
  } catch (error) {
    console.error(msgError, 'Failed to generate RSS feed:', error)
  }
}

generate()
