import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ site }) => {
  return <Helmet />
}

export default SEO

SEO.propTypes = {
  site: PropTypes.object,
}
