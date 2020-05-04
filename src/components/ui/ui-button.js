import React from 'react'

import style from './ui-button.module.scss'

const UIButton = ({ text, onClick, className }) => {
  return (
    <a className={`${style.uiButton} ${className} `} onClick={onClick}>
      {text}
    </a>
  )
}

export default UIButton
