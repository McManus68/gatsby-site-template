import React from 'react'

import UIGlobalHeadline from '../ui/ui-global-headline'

import style from './tasteful-recipes.module.scss'

const TastefulRecipes = () => (
  <section className={style.tastefulRecipes + ' between'} id='recipes'>
    <div className='container'>
      <UIGlobalHeadline title='Tasteful' subtitle='Recipes' asterisk={false} />
    </div>
  </section>
)

export default TastefulRecipes
