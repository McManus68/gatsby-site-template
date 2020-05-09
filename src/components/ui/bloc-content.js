import React from 'react'
import PropTypes from 'prop-types'

import { LoremIpsum } from 'react-lorem-ipsum'

import Content from '../ui/content'
import Headline from '@bit/mcmanus68.ui-react.headline'

import Link from '../ui/link'
import HeadlineSeparator from '../ui/headline-separator'

const BlocContent = ({
  title,
  subtitle,
  description,
  className,
  buttonText,
}) => {
  return (
    <Content className={className}>
      <Headline title={title} subtitle={subtitle} />
      <HeadlineSeparator />
      {description ? <p>{description}</p> : <LoremIpsum p={1} />}
      <Link text={buttonText} />
    </Content>
  )
}

export default BlocContent

BlocContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string,
}

BlocContent.defaultProps = {
  className: '',
}
