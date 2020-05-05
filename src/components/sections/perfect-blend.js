import React from 'react'

import Fade from 'react-reveal/Fade'

import UIHeadline from '../ui/ui-headline'
import style from './perfect-blend.module.scss'

const PerfectBlend = () => (
  <section className={style.perfectBlend + ' between'} id='blend'>
    <div className='container'>
      <div className='global-headline'>
        <Fade bottom delay={300}>
          <UIHeadline title='The perfect' />
        </Fade>
        <Fade top delay={600}>
          <h1>Blend</h1>
        </Fade>
      </div>
    </div>
  </section>
)

export default PerfectBlend
