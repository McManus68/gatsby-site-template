import React from 'react'
import { navigate } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import { FaChevronUp } from 'react-icons/fa'

import style from './back-to-top.module.scss'

const BackToTop = () => {
  const url = window.location.href
  const slug = url.substr(url.lastIndexOf('/'), url.length)
  return (
    <div className={style.backToTop}>
      <AnchorLink to={slug + '#hero'}>
        <FaChevronUp className={style.chevron} />
      </AnchorLink>
    </div>
  )
}

export default BackToTop
