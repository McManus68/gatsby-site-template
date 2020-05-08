import React from 'react'

import SectionParralax from '../ui/section-parallax'
import { Container } from 'react-bootstrap'
import Content from '../ui/content'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/perfect-blend.jpg'

const PerfectBlend = () => (
  <SectionParralax image={image} height={65}>
    <Container>
      <Content>
        <Fade bottom delay={300}>
          <h2>The perfect</h2>
        </Fade>
        <Fade top delay={600}>
          <h1>Blend</h1>
        </Fade>
      </Content>
    </Container>
  </SectionParralax>
)

export default PerfectBlend
