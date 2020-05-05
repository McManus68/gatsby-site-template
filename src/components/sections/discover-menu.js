import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import UILink from '../ui/ui-link'

import img1 from '../../assets/images/menu-group-1.jpg'
import img2 from '../../assets/images/menu-group-2.jpg'
import img3 from '../../assets/images/menu-group-3.jpg'
import img4 from '../../assets/images/menu-group-4.jpg'

import Fade from 'react-reveal/Fade'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <section className={style.discoverMenu} id='menu'>
    <div className='container'>
      <div className='restaurant-info'>
        <Fade left>
          <div className='image-group padding-right'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
          </div>
        </Fade>
        <Fade right>
          <div className={style.restaurantDescription}>
            <UIGlobalHeadline title='Discover' subtitle='Menu' />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              error quo praesentium consectetur itaque est saepe officiis
              corporis magni alias dolorum quisquam neque soluta unde quis, nemo
              facilis distinctio repellat.
            </p>
            <UILink text='View the full menu' />
          </div>
        </Fade>
      </div>
    </div>
  </section>
)

export default DiscoverMenu
