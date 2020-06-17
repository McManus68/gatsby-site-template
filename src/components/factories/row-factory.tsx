import React from 'react'
import { Row as RowBS } from 'react-bootstrap'
import { Row } from '@bit/mcmanus68.webmaker.types.types'
import BlockFactory from './block-factory'

interface Props {
  row: Row
}

const RowFactory: React.FC<Props> = ({ row }) => (
  <RowBS>
    {row.blocks.map((block, i) => (
      <BlockFactory key={i} block={block} />
    ))}
  </RowBS>
)

export default RowFactory
