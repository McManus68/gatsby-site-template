import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'
import style from './perfect-blend.module.scss'

const PerfectBlend = () => (
  <section className={style.perfectBlend + ' between'} id='blend'>
    <div className='container'>
      <UIGlobalHeadline
        title='The perfect'
        subtitle='Blend'
        asterisk={false}
        animateTitleClass='animate-top'
        animateSubTitleClass='animate-bottom'
      />
    </div>
  </section>
)

export default PerfectBlend
