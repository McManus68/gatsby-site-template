import React from 'react'
import HeaderClassic from '@bit/mcmanus68.webmaker.header.header-classic'
import { Site, HeaderType } from '@bit/mcmanus68.webmaker.types.types'

interface Props {
  site: Site
}

const NavigationFactory: React.FC<Props> = ({ site }) => {
  switch (site.header.type) {
    case HeaderType.HeaderClassic:
      return <HeaderClassic site={site} />
    default:
      return null
  }
}

export default NavigationFactory
