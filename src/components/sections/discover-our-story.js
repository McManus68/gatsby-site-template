import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import Section from '../ui/section'
import Container from '../ui/container'
import Row from '../ui/row'
import Column from '../ui/column'

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
        <Column>
          <Fade left delay={300}>
            <div>
              <Headline>
                <h2>Discover</h2>
                <h1>Our Story</h1>
                <HeadlineSeparator />
              </Headline>
              <LoremIpsum p={1} />

              <Link text='About us' />
            </div>
          </Fade>
        </Column>
        <Column>
          <Fade right delay={600}>
            <div>
              <img src={image} alt='' />
            </div>
          </Fade>
        </Column>
      </Row>
    </Container>
  </Section>
)

export default DiscoverOurStory
