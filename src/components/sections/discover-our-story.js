import React from 'react'

import UIHeadline from '../ui/ui-headline'
import UILink from '../ui/ui-link'

import Fade from 'react-reveal/Fade'
import { FaAsterisk } from 'react-icons/fa'

import image from '../../assets/images/our-story-1.jpg'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <section className={style.discoverOurStory} id='discover'>
    <div className='container'>
      <div className='restaurant-info'>
        <Fade left delay={300}>
          <div className='restaurant-description padding-right '>
            <div className='global-headline'>
              <UIHeadline title='Discover' />
              <h1>Our Story</h1>
              <FaAsterisk className='asterisk' />
            </div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati
            </p>
            <UILink text='About us' />
          </div>
        </Fade>
        <Fade right delay={600}>
          <div className='restaurant-info-img'>
            <img src={image} alt='' />
          </div>
        </Fade>
      </div>
    </div>
  </section>
)

export default DiscoverOurStory
