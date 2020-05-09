import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'
import Section from '../ui/section'
import SectionHeadline from '../ui/section-headline'
import Hero from '../sections/hero'

import BlocFactory from './bloc-factory'

const SectionFactory = ({ section, getImage }) => {
  switch (section.type) {
    case 'section-hero':
      return <Hero {...section.params} />

    case 'section-headline':
      return <SectionHeadline {...section.params} />

    case 'section-custom':
      return (
        <Section>
          <Container>
            {section.rows.map((row, i) => {
              return (
                <Row key={i}>
                  {row.blocs.map((bloc, j) => {
                    return <BlocFactory key={j} bloc={bloc} />
                  })}
                </Row>
              )
            })}
          </Container>
        </Section>
      )

    default:
      return ''
  }
}

SectionFactory.propTypes = {
  section: PropTypes.object.isRequired,
}

export default SectionFactory
