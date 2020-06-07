import React from 'react'
import PropTypes from 'prop-types'
import { Col } from 'react-bootstrap'
import BlockImageGallery from '@bit/mcmanus68.ui-react.block-image-gallery'
import BlockSimpleContent from '@bit/mcmanus68.ui-react.block-simple-content'
import AnimationFactory from './animation-factory'
import FooterSimpleContent from '@bit/mcmanus68.ui-react.footer-simple-content'
import FooterSocial from '@bit/mcmanus68.ui-react.footer-social'
import FooterNewsletter from '@bit/mcmanus68.ui-react.footer-newsletter'

const BlockFactory = ({ block }) => {
  const params = block.params.reduce((obj, current) => {
    obj[current.name] = current.value
    return obj
  }, {})
  var content = (() => {
    switch (block.type) {
      case 'BLOCK_SIMPLE_CONTENT':
        return <BlockSimpleContent {...params} />
      case 'BLOCK_GALLERY':
        return <BlockImageGallery {...params} />
      case 'FOOTER_SIMPLE_CONTENT':
        return <FooterSimpleContent {...params} />
      case 'FOOTER_SOCIAL':
        return <FooterSocial {...params} />
      case 'FOOTER_NEWSLETTER':
        return <FooterNewsletter {...params} />
      default:
        return null
    }
  })()

  if (block.animation && block.animation.type !== '') {
    content = (
      <AnimationFactory animation={block.animation}>{content}</AnimationFactory>
    )
  }
  return (
    <Col className={`${block.classes} my-auto`} {...block.responsive}>
      {content}
    </Col>
  )
}

export default BlockFactory

BlockFactory.propTypes = {
  block: PropTypes.object.isRequired,
}
