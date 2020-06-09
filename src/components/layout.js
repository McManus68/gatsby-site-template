import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'
import Theme from './theme'
import '../styles/main.scss'

const Layout = ({ children }) => {
  const site = useSelector(state => state.site)

  return (
    <Theme>
      <Header site={site} />
      <main>{children}</main>
      <Footer footer={site.footer} />
    </Theme>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
