import React from 'react'

import SectionImage from '../ui/section-image'
import Container from '../ui/container'
import Headline from '../ui/headline'

import Fade from 'react-reveal/Fade'

import image from '../../assets/images/tasteful-recipes.jpg'

const TastefulRecipes = () => (
  <SectionImage image={image} height={65}>
    <Container>
      <Headline>
        <Fade bottom delay={300}>
          <h2>Tasteful</h2>
        </Fade>
        <Fade top delay={600}>
          <h1>Recipes</h1>
        </Fade>
      </Headline>
    </Container>
  </SectionImage>
)

export default TastefulRecipes
