if (process.env.ENVIROMENT !== 'production') {
  require('dotenv').config()
}

const contentfulConfig = {
  spaceId: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: 'Lev Kowalski Curriculum Vitae',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Lev Kowalski Curriculum Vitae',
        short_name: 'Lev Kowalski CV',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/lambda.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-typescript`,
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
  ],
}
