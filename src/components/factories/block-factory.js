import React from 'react'
import PropTypes from 'prop-types'

import { Col } from 'react-bootstrap'

import BlockImageGallery from '@bit/mcmanus68.ui-react.block-image-gallery'
import BlockSimpleContent from '@bit/mcmanus68.ui-react.block-simple-content'

import AnimationFactory from './animation-factory'

const BlockFactory = ({ block }) => {
  var content = (() => {
    switch (block.type) {
      case 'block-simple-content':
        return <BlockSimpleContent {...block.params} />
      case 'block-image-gallery':
        return <BlockImageGallery {...block.params} />
      default:
        return null
    }
  })()

  if (block.animation) {
    content = (
      <AnimationFactory animation={block.animation}>{content}</AnimationFactory>
    )
  }
  return (
    <Col className={block.classes} {...block.responsive}>
      {content}
    </Col>
  )
}

export default BlockFactory

BlockFactory.propTypes = {
  block: PropTypes.object.isRequired,
}
