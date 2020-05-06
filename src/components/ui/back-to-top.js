import React from 'react'
import { navigate } from 'gatsby'

import { FaChevronUp } from 'react-icons/fa'

import style from './back-to-top.module.scss'

const BackToTop = () => {
  return (
    <div className={style.backToTop}>
      <FaChevronUp
        className={style.chevron}
        onClick={() => navigate('#hero')}
      />
    </div>
  )
}

export default BackToTop
