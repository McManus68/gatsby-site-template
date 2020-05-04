import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import UILink from '../ui/ui-link'

import img1 from '../../assets/images/menu-group-1.jpg'
import img2 from '../../assets/images/menu-group-2.jpg'
import img3 from '../../assets/images/menu-group-3.jpg'
import img4 from '../../assets/images/menu-group-4.jpg'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <section className={style.discoverMenu} id='menu'>
    <div className='container'>
      <div className='restaurant-info'>
        <div className='image-group padding-right animate-left'>
          <img src={img1} alt='' />
          <img src={img2} alt='' />
          <img src={img3} alt='' />
          <img src={img4} alt='' />
        </div>
        <div className={style.restaurantDescription + ' animate-right'}>
          <UIGlobalHeadline title='Discover' subtitle='Menu' />

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            error quo praesentium consectetur itaque est saepe officiis corporis
            magni alias dolorum quisquam neque soluta unde quis, nemo facilis
            distinctio repellat.
          </p>
          <UILink text='View the full menu' />
        </div>
      </div>
    </div>
  </section>
)

export default DiscoverMenu
