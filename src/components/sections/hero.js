import React from 'react'
import { navigate } from 'gatsby'

import SectionImage from '../ui/section-image'
import { Container } from 'react-bootstrap'
import Button from '../ui/button'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'

import image from '../../assets/images/hero.jpg'
import style from './hero.module.scss'

const Hero = () => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <SectionImage className={style.hero} image={image} id='hero'>
      <Container>
        <Headline title='The Rosa' subtitle='Welcome' />
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
    </SectionImage>
  )
}

export default Hero
