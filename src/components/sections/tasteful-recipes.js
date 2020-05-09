import React from 'react'

import { Container } from 'react-bootstrap'

import Content from '../ui/content'
import SectionParralax from '../ui/section-parallax'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/theme-1/theme1-tasteful-recipes.jpg'

const TastefulRecipes = () => (
  <SectionParralax image={image} height={65}>
    <Container>
      <Content>
        <Fade bottom delay={300}>
          <h2>Tasteful</h2>
        </Fade>
        <Fade top delay={600}>
          <h1>Recipes</h1>
        </Fade>
      </Content>
    </Container>
  </SectionParralax>
)

export default TastefulRecipes
