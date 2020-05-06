import React from 'react'
import PropTypes from 'prop-types'

const ImageGroup = ({ children, className }) => {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(2, 1fr)`,
        gap: '1.5rem',
      }}
    >
      {children}
    </div>
  )
}

export default ImageGroup

ImageGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

ImageGroup.defaultProps = {
  className: '',
}
