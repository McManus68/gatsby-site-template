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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${process.env.IMAGES_PATH}/${process.env.SITE_ID}`,
        ignore: [`**/thumbnail*`],
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
        icon: `${process.env.IMAGES_PATH}/${process.env.SITE_ID}/logo.png`,
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
  ],
}
