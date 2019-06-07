const config = {
  siteTitle: 'Razaqul Tegar',
  siteTitleShort: 'Razaqul Tegar',
  siteTitleAlt: 'Razaqul Tegar',
  siteLogo: '/logos/razaqultegar.jpg',
  siteUrl: 'https://www.razaqultegar.web.id',
  repo: 'https://github.com/razaqultegar/razaqultegar.web.id',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'dddd - MMMM D, YYYY',
  siteDescription:
    'Razaqul Tegar adalah seorang pemuda beruntung kelahiran Banyumas, 30 Januari. Sekarang sedang menempuh karir profesionalnya sebagai Full Stack Developer sekaligus CTO di Puskomedia Indonesia',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-42068444-1',
  disqusShortname: 'razaqultegar',
  postDefaultCategoryID: 'Personal',
  userName: 'Razaqul',
  userEmail: 'myrazaqul@gmail.com',
  userTwitter: 'razaqultegar',
  userLocation: 'Purwokerto, ID',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'Saya sering membuat aplikasi/program dan menulis semua yang saya ketahui.',
  menuLinks: [
    {
      name: 'Artikel',
      link: '/blog/',
    },
    {
      name: 'Tentang',
      link: '/tentang/',
    },
    {
      name: 'Tool',
      link: '/tool/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
