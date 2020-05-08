import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import ImageGallery from '../ui/image-gallery'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'
import Link from '../ui/link'

import Fade from 'react-reveal/Fade'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <Section className={style.discoverMenu} id='menu'>
    <Container>
      <Row>
        <Col sm='12' md='6' className='order-md-2'>
          <Fade right delay={600}>
            <Content>
              <Headline title='Menu' subtitle='Discover' />
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='View the full menu' />
            </Content>
          </Fade>
        </Col>
        <Col sm='12' md='6' className='my-auto order-md-1'>
          <Fade left delay={300}>
            <ImageGallery
              images={[
                'menu-group-1.jpg',
                'menu-group-2.jpg',
                'menu-group-3.jpg',
                'menu-group-4.jpg',
              ]}
            />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default DiscoverMenu
