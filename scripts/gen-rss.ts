import { promises as fs } from 'fs'
import { join } from 'path'
import RSS from 'rss'
import matter from 'gray-matter'

async function generate() {
  try {
    const feed = new RSS({
      title: "Aozaki's Blog",
      site_url: 'https://blog.aozaki.cc',
      feed_url: 'https://blog.aozaki.cc/feed.xml'
    })

    const dirPath = join('./pages/posts')
    const posts = await fs.readdir(dirPath)

    for (const post of posts.filter(
      fileName => !fileName.startsWith('index.')
    )) {
      const content = await fs.readFile(join(dirPath, post))
      const frontmatter = matter(content)

      feed.item({
        title: frontmatter.data.title,
        url: `/posts/${post.replace(/\.mdx?/, '')}`,
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        author: frontmatter.data.author
      })
    }

    await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))

    console.log(
      '\x1b[42m%s\x1b[0m',
      ' DONE ',
      'RSS feed generated successfully!'
    )
  } catch (error) {
    console.error(
      '\x1b[41m%s\x1b[0m',
      ' FAIL ',
      'Failed to generate RSS feed:',
      error
    )
  }
}

generate()
