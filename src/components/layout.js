import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

import Theme from '../themes/theme-default'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Menus {
      pages: allThirdPartyPages(filter: { title: { ne: "DUMMY_PAGE" } }) {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <Theme>
      <Header items={data.pages.nodes} />
      <main>{children}</main>
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
