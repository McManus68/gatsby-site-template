import React from 'react'
import PropTypes from 'prop-types'
import NavDefault from '@bit/mcmanus68.ui-react.nav-default'

const NavFactory = ({ site }) => {
  switch (site.header.nav) {
    case 'NAV_DEFAULT':
      return <NavDefault site={site} />
    default:
      return ''
  }
}

export default NavFactory

NavFactory.propTypes = {
  site: PropTypes.object.isRequired,
}
