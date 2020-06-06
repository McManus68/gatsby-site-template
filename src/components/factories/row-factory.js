import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'
import BlockFactory from './block-factory'

const RowFactory = ({ row }) => (
  <Row>
    {row.blocks.map((block, i) => {
      return <BlockFactory key={i} block={block} />
    })}
  </Row>
)

export default RowFactory

RowFactory.propTypes = {
  row: PropTypes.object.isRequired,
}
