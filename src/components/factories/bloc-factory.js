import React from 'react'
import PropTypes from 'prop-types'

import { Col } from 'react-bootstrap'

import BlocImageGallery from '../ui/bloc-image-gallery'
import BlocContent from '../ui/bloc-content'

const BlocFactory = ({ bloc }) => {
  return (
    <Col className={bloc.classes} {...bloc.responsive}>
      {(() => {
        switch (bloc.type) {
          case 'bloc-content':
            return <BlocContent {...bloc.params} />
          case 'bloc-gallery':
            return <BlocImageGallery {...bloc.params} />
          default:
            return ''
        }
      })()}
    </Col>
  )
}

BlocFactory.propTypes = {
  bloc: PropTypes.object.isRequired,
}

export default BlocFactory
