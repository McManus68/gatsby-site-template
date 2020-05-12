require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Site Template`,
    description: `A Template for Creating Gatsby Sites`,
    author: `@etarrou`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/assets/data/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-template-restaurant`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0e141f`,
        theme_color: `#0e141f`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `css`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-thirdparty`,
      options: {
        url: `${process.env.API_URL}/${process.env.SITE_ID}/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-thirdparty`,
      options: {
        url: `${process.env.API_URL}/${process.env.SITE_ID}/info`,
        name: `siteInfo`,
      },
    },
  ],
}
