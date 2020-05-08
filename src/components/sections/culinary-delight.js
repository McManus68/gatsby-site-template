import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'
import ImageGallery from '../ui/image-gallery'
import Link from '../ui/link'

import Fade from 'react-reveal/Fade'

import style from './culinary-delight.module.scss'

const CulinaryDelight = () => (
  <Section className={style.culinaryDelight} id='culinary-delight'>
    <Container>
      <Row>
        <Col sm='12' md='6'>
          <Fade left>
            <Content>
              <Headline title='Delight' subtitle='Culinary' />
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='Make a reservation' />
            </Content>
          </Fade>
        </Col>

        <Col sm='12' md='6' className='my-auto'>
          <Fade right>
            <ImageGallery
              images={['delight-group-1.jpg', 'delight-group-2.jpg']}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default CulinaryDelight
