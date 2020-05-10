import React from 'react'
import PropTypes from 'prop-types'

import { Col } from 'react-bootstrap'

import BlocImageGallery from '@bit/mcmanus68.ui-react.bloc-image-gallery'
import BlocSimpleContent from '@bit/mcmanus68.ui-react.bloc-simple-content'

import AnimationFactory from './animation-factory'

const BlocFactory = ({ bloc }) => {
  var content = (() => {
    switch (bloc.type) {
      case 'bloc-simple-content':
        return <BlocSimpleContent {...bloc.params} />
      case 'bloc-image-gallery':
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
