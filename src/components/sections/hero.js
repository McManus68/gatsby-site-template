import React from 'react'
import { FaAsterisk } from 'react-icons/fa'

import UIHeadline from '../ui/ui-headline'
import UIButton from '../ui/ui-button'

import style from './hero.module.scss'

import { navigate } from 'gatsby'

const Hero = () => {
  const goToHome = () => {
    navigate('/')
  }

  return (
    <section className={style.hero} id='hero'>
      <div className='container'>
        <UIHeadline title='Welcome' />
        <h1>The Rosa</h1>
        <div className={style.headlineDescription}>
          <div className={style.separator}>
            <div className={`${style.line} ${style.lineLeft} `}></div>
            <FaAsterisk className={style.asterisk} />
            <div className={`${style.line} ${style.lineRight} `}></div>
          </div>
          <div className='single-animation'>
            <h5>Ready to be opened</h5>
            <UIButton text='Explore' onClick={goToHome} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
