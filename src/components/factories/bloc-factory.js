import React from 'react'
import PropTypes from 'prop-types'

import { Col } from 'react-bootstrap'

import BlocImageGallery from '../ui/bloc-image-gallery'
import BlocContent from '../ui/bloc-content'

import AnimationFactory from './animation-factory'

const BlocFactory = ({ bloc }) => {
  var content = (() => {
    switch (bloc.type) {
      case 'bloc-content':
        return <BlocContent {...bloc.params} />
      case 'bloc-gallery':
        return <BlocImageGallery {...bloc.params} />
      default:
        return null
    }
  })()

  if (bloc.animation) {
    content = (
      <AnimationFactory animation={bloc.animation}>{content}</AnimationFactory>
    )
  }
  return (
    <Col className={bloc.classes} {...bloc.responsive}>
      {content}
    </Col>
  )
}

BlocFactory.propTypes = {
  bloc: PropTypes.object.isRequired,
}

export default BlocFactory
