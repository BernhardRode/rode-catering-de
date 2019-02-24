module.exports = {
  siteMetadata: {
    title: 'Metzgerei Rode Beilstein',
    author: 'Bernhard Rode',
    description: 'Webseite des Partyservice Metzgerei Rode in Beilstein.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'metzgerei-rode-beilstein-de',
        short_name: 'metzgerei-rode-beilstein',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
