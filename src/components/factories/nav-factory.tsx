import React from 'react'
import NavDefault from '@bit/mcmanus68.ui-react.nav-default'
import { Site, NavType } from '../../types/types'

interface Props {
  site: Site
}

const NavFactory: React.FC<Props> = ({ site }) => {
  switch (site.header.nav) {
    case NavType.NavDefault:
      return <NavDefault site={site} />
    default:
      return null
  }
}

export default NavFactory
