import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import UILink from '../ui/ui-link'

import image from '../../assets/images/our-story-1.jpg'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <section className={style.discoverOurStory} id='discover'>
    <div className='container'>
      <div className='restaurant-info'>
        <div className='restaurant-description padding-right animate-left'>
          <UIGlobalHeadline title='Discover' subtitle='Our Story' />
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <UILink text='About us' />
        </div>
        <div className='restaurant-info-img animate-right'>
          <img src={image} alt='' />
        </div>
      </div>
    </div>
  </section>
)

export default DiscoverOurStory
