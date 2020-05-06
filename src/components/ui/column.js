import React from 'react'
import PropTypes from 'prop-types'

import style from './column.module.scss'

const Column = ({ className, children }) => {
  return <div className={`${style.column} ${className}`}>{children}</div>
}

export default Column

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Column.defaultProps = {
  className: '',
}
