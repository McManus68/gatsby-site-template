import React from 'react'
import { Section, Row, SectionType } from '@bit/mcmanus68.webmaker.model.types'
import { Container } from 'react-bootstrap'
import { reduceParams } from '../../utils/params-utils'
import RowFactory from './row-factory'
import SectionCustom from '@bit/mcmanus68.webmaker.section.section-custom'
import SectionHeadline from '@bit/mcmanus68.webmaker.section.section-headline'
import SectionHero from '@bit/mcmanus68.webmaker.section.section-hero'

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
