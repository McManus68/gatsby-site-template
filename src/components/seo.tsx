import React from 'react'
import { Site } from '@bit/mcmanus68.webmaker.types.types'
import { Helmet } from 'react-helmet'

interface Props {
  site: Site
}

const SEO: React.FC<Props> = ({ site }) => {
  return <Helmet />
}

export default SEO
