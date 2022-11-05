/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://blog.aozaki.cc',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
