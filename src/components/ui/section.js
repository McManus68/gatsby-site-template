import React from 'react'
import PropTypes from 'prop-types'

import style from './section.module.scss'

const Section = ({ id, className, children }) => {
  return (
    <section className={`${style.section} ${className}`} id={id}>
      {children}
    </section>
  )
}

export default Section

Section.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
}

Section.defaultProps = {
  className: '',
}
