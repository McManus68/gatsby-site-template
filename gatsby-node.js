var path = require('path')
var axios = require('axios')
var siteUtils = require('./src/utils/site-utils')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Fetch site data
  const result = await axios.get(
    `${process.env.API_URL}/${process.env.SITE_ID}`
  )

  // Fetch all images stored into GraphQL schema
  const images = await graphql(`
    query {
      allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1800) {
              originalName
              aspectRatio
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  `)

  // Set all images into the site content
  const site = siteUtils.linkImages(result.data, images.data.allFile.nodes)

  // Create all pages
  site.pages.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        name: page.name,
        site: site,
      },
    })
  })

  createRedirect({
    fromPath: `/`,
    toPath: `/home`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
