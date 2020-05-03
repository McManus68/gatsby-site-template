import React from 'react'
import { Link } from 'gatsby'
import { FaAsterisk } from 'react-icons/fa'

import style from './hero.module.scss'

const Hero = () => (
  <section className={style.hero} id='hero'>
    <div className='container'>
      <h2 className='sub-headline'>
        <span className='first-letter'>W</span>elcome
      </h2>
      <h1 className='headline'>The Rosa</h1>
      <div className='headline-description'>
        <div className='separator'>
          <div className='line line-left'></div>
          <div className='asterix'>
            <FaAsterisk />
          </div>
          <div className='line line-right'></div>
        </div>
        <div className='single-animation'>
          <h5>Ready to be opened</h5>
          <a href='#' className='btn cta-btn'></a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
