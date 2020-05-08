import React from 'react'
import PropTypes from 'prop-types'

import Image from './image'

import style from './image-gallery.module.scss'

const ImageGallery = ({ images, className }) => {
  const columns = Math.ceil(Math.sqrt(images.length))

  return (
    <div
      className={`${style.imageGallery} ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1.5rem',
      }}
    >
      {images.map((image, i) => {
        return <Image src={image} key={i} />
      })}
    </div>
  )
}

export default ImageGallery

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
}

ImageGallery.defaultProps = {
  className: '',
}
