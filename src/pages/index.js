import React from 'react'

import Hero from '../components/sections/hero'
import DiscoverOurStory from '../components/sections/discover-our-story'
import TastefulRecipes from '../components/sections/tasteful-recipes'
import DiscoverMenu from '../components/sections/discover-menu'
import PerfectBlend from '../components/sections/perfect-blend'
import CulinaryDelight from '../components/sections/culinary-delight'

import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
    <DiscoverOurStory />
    <TastefulRecipes />
    <DiscoverMenu />
    <PerfectBlend />
    <CulinaryDelight />
  </Layout>
)

export default IndexPage
