import React from 'react'

import style from './ui-link.module.scss'

const UILink = ({ text, className }) => {
  return <a className={`${style.uiLink} ${className} `}>{text}</a>
}

export default UILink
