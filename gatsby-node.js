var path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      pages: allThirdPartyPages(filter: { title: { ne: "DUMMY_PAGE" } }) {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.pages.nodes.forEach(page => {
    createPage({
      path: page.slug,
      component: path.resolve(`./src/templates/page.js`),
      context: {
        slug: page.slug,
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
