import React from 'react'

import Fade from 'react-reveal/Fade'
import UIHeadline from '../ui/ui-headline'

import style from './tasteful-recipes.module.scss'

const TastefulRecipes = () => (
  <section className={style.tastefulRecipes + ' between'} id='recipes'>
    <div className='container'>
      <div className='global-headline'>
        <Fade bottom delay={300}>
          <UIHeadline title='Tasteful' />
        </Fade>
        <Fade top delay={600}>
          <h1>Recipes</h1>
        </Fade>
      </div>
    </div>
  </section>
)

export default TastefulRecipes
