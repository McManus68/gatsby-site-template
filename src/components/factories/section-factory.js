import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import RowFactory from './row-factory'
import Section from '@bit/mcmanus68.ui-react.section'
import SectionHeadline from '@bit/mcmanus68.ui-react.section-headline'
import SectionHero from '@bit/mcmanus68.ui-react.section-hero'

const SectionFactory = ({ section }) => {
  const params = section.params.reduce((obj, current) => {
    obj[current.name] = current.value
    return obj
  }, {})

  switch (section.type) {
    case 'SECTION_HERO':
      return <SectionHero {...params} />

    case 'SECTION_HEADLINE':
      return <SectionHeadline {...params} />

    case 'SECTION_CUSTOM':
      return (
        <Section>
          <Container>
            {section.rows.map((row, i) => (
              <RowFactory key={i} row={row} />
            ))}
          </Container>
        </Section>
      )

    default:
      return ''
  }
}

export default SectionFactory

SectionFactory.propTypes = {
  section: PropTypes.object.isRequired,
}
