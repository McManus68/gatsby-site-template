import React from 'react'
import PropTypes from 'prop-types'

import UIHeadline from './ui-headline'

import { FaAsterisk } from 'react-icons/fa'

import style from './ui-global-headline.module.scss'

const UIGlobalHeadline = ({
  title,
  subtitle,
  animateTitleClass,
  animateSubTitleClass,
  asterisk,
}) => {
  return (
    <div className={style.uiGlobalHeadline}>
      <div className={animateTitleClass}>
        <UIHeadline title={title} className={style.headline} />
      </div>
      <div className={animateSubTitleClass}>
        <h1>{subtitle}</h1>
        {asterisk ? <FaAsterisk className={style.asterisk} /> : ''}
      </div>
    </div>
  )
}

UIGlobalHeadline.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  animateTitleClass: PropTypes.object,
  animateSubTitleClass: PropTypes.object,
  asterisk: PropTypes.bool,
}

UIGlobalHeadline.defaultProps = {
  animateTitleClass: null,
  animateSubTitleClass: null,
  asterisk: true,
}

export default UIGlobalHeadline
