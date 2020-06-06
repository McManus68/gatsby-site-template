import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Theme from '../themes/theme-default'

const Layout = ({ children }) => {
  return (
    <Theme>
      <Header />
      <main>{children}</main>
      <Footer />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
