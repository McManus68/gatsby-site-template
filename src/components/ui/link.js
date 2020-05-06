import React from 'react'
import PropTypes from 'prop-types'

import style from './link.module.scss'

const Link = ({ text, className }) => {
  return <a className={`${style.link}${className}`}>{text}</a>
}

export default Link

Link.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}

Link.defaultProps = {
  text: null,
  className: '',
}
