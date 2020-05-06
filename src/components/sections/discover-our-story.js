import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'
import Link from '../ui/link'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/our-story-1.jpg'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <Section className={style.discoverOurStory} id='discover'>
    <Container>
      <Row>
        <Col md='12' lg='6'>
          <Fade left delay={300}>
            <Content>
              <Headline title='Our Story' subtitle='Discover' />
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='About us' />
            </Content>
          </Fade>
        </Col>
        <Col md='12' lg='6' className='pt-5 pt-lg-0 px-lg-5 px-0 my-auto'>
          <Fade right delay={600}>
            <img src={image} alt='' />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default DiscoverOurStory
