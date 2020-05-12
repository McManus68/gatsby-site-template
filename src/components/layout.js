import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query Menus {
      allThirdPartyPages {
        nodes {
          slug
          title
        }
      }
    }
  `)

  return (
    <>
      <Header items={data.allThirdPartyPages.nodes} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
