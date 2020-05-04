import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import UILink from '../ui/ui-link'

import img1 from '../../assets/images/delight-group-1.jpg'
import img2 from '../../assets/images/delight-group-2.jpg'

import style from './culinary-delight.module.scss'

const CulinaryDelight = () => (
  <section className={style.culinaryDelight} id='culinary-delight'>
    <div className='container'>
      <div className='restaurant-info'>
        <div className='restaurant-description padding-right animate-left'>
          <UIGlobalHeadline title='Culinary' subtitle='Delight' />
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati
          </p>
          <UILink text='Make a reservation' />
        </div>
        <div className='image-group'>
          <img src={img1} className='animate-top' alt='' />
          <img src={img2} className='animate-bottom' alt='' />
        </div>
      </div>
    </div>
  </section>
)

export default CulinaryDelight
