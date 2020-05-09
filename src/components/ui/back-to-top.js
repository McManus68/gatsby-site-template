import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { FaChevronUp } from 'react-icons/fa'

import style from './back-to-top.module.scss'

const BackToTop = () => {
  return (
    <div className={style.backToTop}>
      <AnchorLink to={'#hero'}>
        <FaChevronUp className={style.chevron} />
      </AnchorLink>
    </div>
  )
}

export default BackToTop
