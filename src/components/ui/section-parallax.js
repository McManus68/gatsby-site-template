import React from 'react'
import PropTypes from 'prop-types'

import { Parallax } from 'react-parallax'

import style from './section-parallax.module.scss'

const SectionParallax = ({ id, children, className, image, height }) => {
  return (
    <section className={className} id={id}>
      <Parallax
        bgImage={image}
        strength={300}
        className={style.sectionParallax}
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

export default SectionParallax

SectionParallax.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  height: PropTypes.number,
}

SectionParallax.defaultProps = {
  className: '',
  height: 100,
}
