import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import UILink from '../ui/ui-link'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/our-story-1.jpg'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <section className={style.discoverOurStory} id='discover'>
    <div className='container'>
      <div className='restaurant-info'>
        <Fade left>
          <div className='restaurant-description padding-right '>
            <UIGlobalHeadline title='Discover' subtitle='Our Story' />
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati
            </p>
            <UILink text='About us' />
          </div>
        </Fade>
        <Fade right>
          <div className='restaurant-info-img'>
            <img src={image} alt='' />
          </div>
        </Fade>
      </div>
    </div>
  </section>
)

export default DiscoverOurStory
