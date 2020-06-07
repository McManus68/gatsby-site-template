var path = require('path')
var axios = require('axios')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await axios.get(
    `${process.env.API_URL}/${process.env.SITE_ID}`
  )

  // Create all pages
  result.data.pages.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        page: page,
        site: result.data,
      },
    })
  })

  // Redirect home page to gallery
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/home`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}
