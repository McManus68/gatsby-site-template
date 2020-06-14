import React from 'react'
import { Section, Row, SectionType } from '../../types/types'
import { Container } from 'react-bootstrap'
import { reduceParams } from '../../utils/params-utils'
import RowFactory from './row-factory'
import { default as SectionCustom } from '@bit/mcmanus68.ui-react.section'
import SectionHeadline from '@bit/mcmanus68.ui-react.section-headline'
import SectionHero from '@bit/mcmanus68.ui-react.section-hero'

interface Props {
  section: Section
}

const SectionFactory: React.FC<Props> = ({ section }) => {
  const params = reduceParams(section.params)
  switch (section.type) {
    case SectionType.SectionHero:
      return <SectionHero {...params} />
    case SectionType.SectionHeadline:
      return <SectionHeadline {...params} />
    case SectionType.SectionCustom:
      return (
        <SectionCustom>
          <Container>
            {section.rows.map((row: Row, i: number) => (
              <RowFactory key={i} row={row} />
            ))}
          </Container>
        </SectionCustom>
      )

    default:
      return null
  }
}

export default SectionFactory
