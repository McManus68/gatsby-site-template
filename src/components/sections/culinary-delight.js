import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import Section from '../ui/section'
import Container from '../ui/container'
import Row from '../ui/row'
import Headline from '../ui/headline'
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
        <Fade left>
          <div className='padding-right'>
            <Headline>
              <h2>Culinary</h2>
              <h1>Delight</h1>
              <HeadlineSeparator />
            </Headline>
            <LoremIpsum p={1} />
            <Link text='Make a reservation' />
          </div>
        </Fade>

        <ImageGroup>
          <Fade top>
            <img src={img1} alt='' />
          </Fade>
          <Fade bottom>
            <img src={img2} alt='' />
          </Fade>
        </ImageGroup>
      </Row>
    </Container>
  </Section>
)

export default CulinaryDelight
