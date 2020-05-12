import React from 'react'
import PropTypes from 'prop-types'

import Fade from 'react-reveal/Fade'
import Reveal from 'react-reveal/Reveal'

const AnimationFactory = ({ animation, children }) => {
  switch (animation.type) {
    case 'fade':
      return <Fade {...animation}>{children}</Fade>
    case 'reveal':
      return <Reveal {...animation}>{children}</Reveal>
    default:
      return ''
  }
}

AnimationFactory.propTypes = {
  animation: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default AnimationFactory
