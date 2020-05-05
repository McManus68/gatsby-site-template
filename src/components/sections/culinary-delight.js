import React from 'react'

import UIHeadline from '../ui/ui-headline'
import UILink from '../ui/ui-link'

import Fade from 'react-reveal/Fade'
import { FaAsterisk } from 'react-icons/fa'

import img1 from '../../assets/images/delight-group-1.jpg'
import img2 from '../../assets/images/delight-group-2.jpg'

import style from './culinary-delight.module.scss'

const CulinaryDelight = () => (
  <section className={style.culinaryDelight} id='culinary-delight'>
    <div className='container'>
      <div className='restaurant-info'>
        <Fade left>
          <div className='restaurant-description padding-right'>
            <div className='global-headline'>
              <UIHeadline title='Culinary' />
              <h1>Delight</h1>
              <FaAsterisk className='asterisk' />
            </div>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati
            </p>
            <UILink text='Make a reservation' />
          </div>
        </Fade>

        <div className='image-group'>
          <Fade top>
            <img src={img1} alt='' />
          </Fade>
          <Fade bottom>
            <img src={img2} alt='' />
          </Fade>
        </div>
      </div>
    </div>
  </section>
)

export default CulinaryDelight
