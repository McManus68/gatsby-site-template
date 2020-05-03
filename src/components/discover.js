import React from 'react'

import UIHeadline from './ui-headline'

import image1 from '../assets/images/our-story-1.jpg'

import style from './discover.module.scss'

const Discover = () => (
  <section className={style.discover} id='discover'>
    <div className='container'>
      <div className='restaurant-info'>
        <div className='restaurant-description padding-right animate-left'>
          <div className='global-headline'>
            <UIHeadline title='Discover' />
            <h1 className='headline headline-dark'>Our Story</h1>
          </div>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <a href='' className='btn body-btn'>
            About us
          </a>
        </div>
        <div className='restaurant-info-img animate-right'>
          <img src={image1} alt='' />
        </div>
      </div>
    </div>
  </section>
)

export default Discover
