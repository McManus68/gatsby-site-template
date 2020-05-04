import React from 'react'

import UIHeadline from './ui-headline'
import { FaAsterisk } from 'react-icons/fa'

import image1 from '../assets/images/our-story-1.jpg'

import style from './discover.module.scss'

const Discover = () => (
  <section className={style.discover} id='discover'>
    <div className='container'>
      <div className={style.restautantInfo}>
        <div
          className={`${style.restaurantDescription} ${style.paddingRight} ${style.animateLeft}`}
        >
          <div className={style.globalHeadline}>
            <UIHeadline title='Discover' className={style.headline} />
            <h1>Our Story</h1>
            <FaAsterisk className={style.asterisk} />
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
