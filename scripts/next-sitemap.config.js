/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blog.aozaki.cc',
  generateRobotsTxt: true,
  autoLastmod: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 1,
  exclude: ['/portrait*']
}
