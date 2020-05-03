import React from 'react'

import Hero from '../components/hero'
import Layout from '../components/layout'
import SEO from '../components/seo'

import '../styles/main.scss'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Hero />
  </Layout>
)

export default IndexPage
