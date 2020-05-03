import React from 'react'
import { Link } from 'gatsby'
import { FaAsterisk } from 'react-icons/fa'

import UIHeadline from './ui-headline'

import style from './hero.module.scss'

const Hero = () => (
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
          <a href='#' className={`${style.btn} ${style.ctaBtn} `}>
            Explore
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
