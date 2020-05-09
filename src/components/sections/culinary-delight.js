import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import BlocImageGallery from '../ui/bloc-image-gallery'
import BlocContent from '../ui/bloc-content'

import Link from '../ui/link'

import Fade from 'react-reveal/Fade'

import style from './culinary-delight.module.scss'

const CulinaryDelight = () => (
  <Section className={style.culinaryDelight} id='culinary-delight'>
    <Container>
      <Row>
        <Col sm='12' md='6'>
          <Fade left>
            <BlocContent
              title='Delight'
              subtitle='Culinary'
              buttonText='Make a reservation'
            />
          </Fade>
        </Col>

        <Col sm='12' md='6' className='my-auto'>
          <Fade right>
            <BlocImageGallery
              images={['delight-group-1.jpg', 'delight-group-2.jpg']}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default CulinaryDelight
