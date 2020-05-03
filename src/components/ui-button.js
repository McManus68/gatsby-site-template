import React from 'react'

import style from './ui-button.module.scss'

const UIButton = ({ title }) => {
  return (
    <h2 className={style.uiHeadline}>
      <span className={style.firstLetter}>{title.charAt(0)}</span>
      {title.substr(1, title.length)}
    </h2>
  )
}

export default UIButton
