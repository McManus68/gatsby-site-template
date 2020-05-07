import React from 'react'
import PropTypes from 'prop-types'

import { Parallax } from 'react-parallax'

import style from './section-image.module.scss'

const SectionImage = ({ children, id, className, image, height }) => {
  return (
    <section className={className} id={id}>
      <Parallax
        bgImage={image}
        strength={300}
        className={style.sectionImage}
        bgImageStyle={{
          objectFit: 'cover',
        }}
      >
        <div
          style={{
            height: `${height}vh`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
      </Parallax>
    </section>
  )
}

export default SectionImage

SectionImage.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
}

SectionImage.defaultProps = {
  className: '',
  height: 100,
}
