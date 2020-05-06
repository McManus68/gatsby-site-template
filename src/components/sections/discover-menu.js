import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import Section from '../ui/section'
import Container from '../ui/container'
import Row from '../ui/row'
import Column from '../ui/column'

import Headline from '../ui/headline'
import ImageGroup from '../ui/image-group'
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
        <Column>
          <Fade left delay={300}>
            <ImageGroup>
              <img src={img1} alt='' />
              <img src={img2} alt='' />
              <img src={img3} alt='' />
              <img src={img4} alt='' />
            </ImageGroup>
          </Fade>
        </Column>
        <Column>
          <Fade right delay={600}>
            <div className={style.restaurantDescription}>
              <Headline>
                <h2>Discover</h2>
                <h1>Menu</h1>
                <HeadlineSeparator />
              </Headline>
              <LoremIpsum p={1} />
              <Link text='View the full menu' />
            </div>
          </Fade>
        </Column>
      </Row>
    </Container>
  </Section>
)

export default DiscoverMenu
