import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Section from '../ui/section'
import BlocContent from '../ui/bloc-content'
import BlocImageGallery from '../ui/bloc-image-gallery'

import Fade from 'react-reveal/Fade'

import style from './discover-our-story.module.scss'

const DiscoverOurStory = () => (
  <Section className={style.discoverOurStory} id='discover'>
    <Container>
      <Row>
        <Col sm='12' md='6'>
          <Fade left delay={300}>
            <BlocContent
              title='Our Story'
              subtitle='Discover'
              buttonText='About us'
            />
          </Fade>
        </Col>
        <Col sm='12' md='6' className='my-auto'>
          <Fade right delay={600}>
            <BlocImageGallery images={['our-story-1.jpg']} />
          </Fade>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default DiscoverOurStory
