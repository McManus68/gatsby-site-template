import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Theme from '../themes/theme-default'

const Layout = ({ children }) => {
  const site = useSelector(state => state.site)

  return (
    <Theme>
      <Header pages={site.pages} />
      <main>{children}</main>
      <Footer footer={site.footer} />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
