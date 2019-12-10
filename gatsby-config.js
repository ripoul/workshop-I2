module.exports = {
  siteMetadata: {
    description: `A Gatsby starter with Sass and no assumptions`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://gatsby-starter-zurg.netlify.com/',
    title: 'TalentMining',
    backend: 'http://localhost:8000'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'TalentMining',
        short_name: 'TalentMining',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/assets/images/icon.png'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ]
};
