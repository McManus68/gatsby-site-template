import React from 'react'

import UIHeadline from '../ui/ui-headline'
import UILink from '../ui/ui-link'

import img1 from '../../assets/images/menu-group-1.jpg'
import img2 from '../../assets/images/menu-group-2.jpg'
import img3 from '../../assets/images/menu-group-3.jpg'
import img4 from '../../assets/images/menu-group-4.jpg'

import Fade from 'react-reveal/Fade'
import { FaAsterisk } from 'react-icons/fa'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <section className={style.discoverMenu} id='menu'>
    <div className='container'>
      <div className='restaurant-info'>
        <Fade left delay={300}>
          <div className='image-group padding-right'>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
          </div>
        </Fade>
        <Fade right delay={600}>
          <div className={style.restaurantDescription}>
            <div className='global-headline'>
              <UIHeadline title='Discover' />
              <h1>Menu</h1>
              <FaAsterisk className={style.asterisk} />
            </div>

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
