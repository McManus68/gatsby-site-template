import React from 'react'
import PropTypes from 'prop-types'

import { FaAsterisk } from 'react-icons/fa'

import style from './headline-separator.module.scss'

const HeadlineSeparator = ({ className }) => {
  return <FaAsterisk className={`${style.headlineSeparator} ${className}`} />
}

export default HeadlineSeparator

HeadlineSeparator.propTypes = {
  className: PropTypes.string,
}

HeadlineSeparator.defaultProps = {
  className: '',
}
