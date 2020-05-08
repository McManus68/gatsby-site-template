import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import Content from '../ui/content'
import Headline from '../ui/headline'
import HeadlineSeparator from '../ui/headline-separator'
import Link from '../ui/link'
import ImageGallery from '../ui/image-gallery'

import Fade from 'react-reveal/Fade'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <Section className={style.discoverOurStory} id='discover'>
    <Container>
      <Row>
        <Col sm='12' md='6'>
          <Fade left delay={300}>
            <Content>
              <Headline title='Our Story' subtitle='Discover' />
              <HeadlineSeparator />
              <LoremIpsum p={1} />
              <Link text='About us' />
            </Content>
          </Fade>
        </Col>
        <Col sm='12' md='6' className='my-auto'>
          <Fade right delay={600}>
            <ImageGallery images={['our-story-1.jpg']} />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default DiscoverOurStory
