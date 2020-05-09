import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import BlocContent from '../ui/bloc-content'
import BlocImageGallery from '../ui/bloc-image-gallery'

import Fade from 'react-reveal/Fade'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <Section className={style.discoverMenu} id='menu'>
    <Container>
      <Row>
        <Col sm='12' md='6' className='order-md-2'>
          <Fade right delay={600}>
            <BlocContent
              title='Menu'
              subtitle='Discover'
              buttonText='View the full menu'
            />
          </Fade>
        </Col>
        <Col sm='12' md='6' className='my-auto order-md-1'>
          <Fade left delay={300}>
            <BlocImageGallery
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
