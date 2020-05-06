import React from 'react'

import Section from '../ui/section'
import { Container } from 'react-bootstrap'
import Button from '../ui/button'
import HeadlineSeparator from '../ui/headline-separator'

import style from './hero.module.scss'

import { navigate } from 'gatsby'

const Hero = () => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <Section className={style.hero} id='hero'>
      <Container>
        <h2>Welcome</h2>
        <h1>The Rosa</h1>
        <div className={style.headlineDescription}>
          <div className={style.separator}>
            <div className={`${style.line} ${style.lineLeft} `}></div>
            <HeadlineSeparator className={style.headlineSeparator} />
            <div className={`${style.line} ${style.lineRight} `}></div>
          </div>
          <div className={style.singleAnimation}>
            <h5>Ready to be opened</h5>
            <Button text='Explore' onClick={goToHome} />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default Hero
