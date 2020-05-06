import React from 'react'
import PropTypes from 'prop-types'

import style from './container.module.scss'

const Container = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
