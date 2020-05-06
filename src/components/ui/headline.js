import React from 'react'
import PropTypes from 'prop-types'

import style from './headline.module.scss'

const Headline = ({ children }) => {
  return <div className={style.headline}>{children}</div>
}

export default Headline

Headline.propTypes = {
  children: PropTypes.node.isRequired,
}
