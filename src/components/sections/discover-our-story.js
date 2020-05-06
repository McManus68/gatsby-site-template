import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import Section from '../ui/section'
import Container from '../ui/container'
import Row from '../ui/row'
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
        <Fade left delay={300}>
          <div className='padding-right'>
            <Headline>
              <h2>Discover</h2>
              <h1>Our Story</h1>
              <HeadlineSeparator />
            </Headline>
            <LoremIpsum p={1} />

            <Link text='About us' />
          </div>
        </Fade>
        <Fade right delay={600}>
          <div className='restaurant-info-img'>
            <img src={image} alt='' />
          </div>
        </Fade>
      </Row>
    </Container>
  </Section>
)

export default DiscoverOurStory
