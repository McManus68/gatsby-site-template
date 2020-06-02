import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { setImages } from '../state'
import { useDispatch } from 'react-redux'

import SectionFactory from '../components/factories/section-factory'

export default ({ data }) => {
  // Save all images into Redux store cause Gatsby can't dynamically load images
  const dispatch = useDispatch()
  const images = new Map(
    data.allFile.nodes.map(node => [
      node.childImageSharp.fluid.originalName,
      node.childImageSharp.fluid,
    ])
  )
  dispatch(setImages(images))

  // Build dynamically each page - building it's section
  const page = data.page
  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      {page.sections.map((section, i) => {
        return <SectionFactory key={i} section={section} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    page: thirdPartyPages(slug: { eq: $slug }) {
      slug
      description
      title
      sections {
        type
        params {
          title
          subtitle
          image
          overlay
        }
        rows {
          blocks {
            classes
            type
            responsive {
              sm
              md
              lg
              xl
            }
            params {
              title
              subtitle
              buttonText
              images
              display
            }
            animation {
              type
              delay
              left
              right
            }
          }
        }
      }
    }
    allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1800) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
