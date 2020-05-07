import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import ImageGroup from '../ui/image-group'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'
import Link from '../ui/link'

import img1 from '../../assets/images/menu-group-1.jpg'
import img2 from '../../assets/images/menu-group-2.jpg'
import img3 from '../../assets/images/menu-group-3.jpg'
import img4 from '../../assets/images/menu-group-4.jpg'

import Fade from 'react-reveal/Fade'

import style from './discover-menu.module.scss'

const DiscoverMenu = () => (
  <Section className={style.discoverMenu} id='menu'>
    <Container>
      <Row>
        <Col sm='12' md='6' className='my-auto order-sm-2'>
          <Fade left delay={300}>
            <ImageGroup>
              <img src={img1} alt='' />
              <img src={img2} alt='' />
              <img src={img3} alt='' />
              <img src={img4} alt='' />
            </ImageGroup>
          </Fade>
        </Col>
        <Col sm='12' md='6' className='order-sm-1'>
          <Fade right delay={600}>
            <Content>
              <Headline title='Menu' subtitle='Discover' />
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='View the full menu' />
            </Content>
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default DiscoverMenu
