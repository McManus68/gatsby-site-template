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
  ],
}

// REMOTE VERSION - We fetch the date via an external API
if (process.env.SERVER === 'REMOTE') {
  module.exports.plugins.push({
    resolve: `gatsby-source-thirdparty`,
    options: {
      url: `${process.env.API_URL}/${process.env.SITE_ID}/pages`,
      name: `pages`,
    },
  })

  module.exports.plugins.push({
    resolve: `gatsby-source-thirdparty`,
    options: {
      url: `${process.env.API_URL}/${process.env.SITE_ID}/info`,
      name: `siteInfo`,
    },
  })
}

// LOCAL VERSION - We use local JSON data files
else {
  module.exports.plugins.push(`gatsby-transformer-json`)
  module.exports.plugins.push({
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/assets/data/`,
    },
  })
}
