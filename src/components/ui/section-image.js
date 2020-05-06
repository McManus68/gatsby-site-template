import React from 'react'
import PropTypes from 'prop-types'

const SectionImage = ({ children, id, className, image, height }) => {
  return (
    <section
      style={{
        background: `url(${image}) center no-repeat`,
        backgroundSize: 'cover',
        height: `${height}vh`,
        display: 'flex',
        alignItems: 'center',
      }}
      className={className}
      id={id}
    >
      {children}
    </section>
  )
}

export default SectionImage

SectionImage.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.object.isRequired,
  height: PropTypes.number,
}

SectionImage.defaultProps = {
  className: '',
  height: 100,
}
