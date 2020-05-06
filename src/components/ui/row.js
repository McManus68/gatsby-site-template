import React from 'react'
import PropTypes from 'prop-types'

import style from './row.module.scss'

const Row = ({ className, children }) => {
  return <div className={`${style.row} ${className}`}>{children}</div>
}

export default Row

Row.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Row.defaultProps = {
  className: '',
}
