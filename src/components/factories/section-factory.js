import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'
import Section from '../ui/section'
import SectionHeadline from '../ui/section-headline'
import Hero from '../sections/hero'

import BlocFactory from './bloc-factory'

const SectionFactory = ({ section, getImage }) => {
  const params = section.params
  switch (section.type) {
    case 'section-hero':
      return <Hero {...params} />

    case 'section-headline':
      return <SectionHeadline {...params} />

    case 'section':
      return (
        <Section>
          <Container>
            {section.rows.map((row, i) => {
              return (
                <Row key={i}>
                  {row.blocs.map((bloc, j) => {
                    return (
                      <Col
                        key={j}
                        className={bloc.classes}
                        {...bloc.responsive}
                      >
                        <BlocFactory bloc={bloc} />
                      </Col>
                    )
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
