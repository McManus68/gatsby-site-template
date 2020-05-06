import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import HeadlineSeparator from '../ui/headline-separator'
import ImageGroup from '../ui/image-group'
import Link from '../ui/link'

import Fade from 'react-reveal/Fade'

import img1 from '../../assets/images/delight-group-1.jpg'
import img2 from '../../assets/images/delight-group-2.jpg'

import style from './culinary-delight.module.scss'

const CulinaryDelight = () => (
  <Section className={style.culinaryDelight} id='culinary-delight'>
    <Container>
      <Row>
        <Col md='12' lg='6'>
          <Fade left>
            <Content>
              <h2>Culinary</h2>
              <h1>Delight</h1>
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='Make a reservation' />
            </Content>
          </Fade>
        </Col>

        <Col md='12' lg='6' className='pt-5 pt-lg-0 px-lg-5 px-0 my-auto'>
          <ImageGroup>
            <Fade top>
              <img src={img1} alt='' />
            </Fade>
            <Fade bottom>
              <img src={img2} alt='' />
            </Fade>
          </ImageGroup>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default CulinaryDelight
