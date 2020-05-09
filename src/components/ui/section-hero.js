import React from 'react'
import PropTypes from 'prop-types'

import { navigate } from 'gatsby'

import SectionParralax from './section-parallax'
import { Container } from 'react-bootstrap'
import Button from './button'
import Headline from './headline'
import HeadlineSeparator from './headline-separator'

import style from './section-hero.module.scss'

const SectionHero = ({ title, subtitle, image, overlay }) => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <SectionParralax
      className={style.hero}
      image={image}
      overlay={overlay}
      id='hero'
    >
      <Container>
        <Headline title={title} subtitle={subtitle} />
        <div className={style.separator}>
          <div className={`${style.line} ${style.lineLeft} `}></div>
          <HeadlineSeparator className={style.headlineSeparator} />
          <div className={`${style.line} ${style.lineRight} `}></div>
        </div>
        <div className={style.singleAnimation}>
          <h5>Ready to be opened</h5>
          <Button text='Explore' onClick={goToHome} />
        </div>
      </Container>
    </SectionParralax>
  )
}

export default SectionHero

SectionHero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  overlay: PropTypes.string,
}

SectionHero.defaultProps = {
  overlay: 'none',
}