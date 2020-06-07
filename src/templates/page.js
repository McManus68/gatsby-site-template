import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { setImages, setSite } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import SectionFactory from '../components/factories/section-factory'

export default props => {
  const site = useSelector(state => state.site)
  const images = useSelector(state => state.image.images)

  // Save all images into Redux store cause Gatsby can't dynamically load images
  const dispatch = useDispatch()
  const lib = new Map(
    props.data.allFile.nodes.map(node => [
      node.childImageSharp.fluid.originalName,
      node.childImageSharp.fluid,
    ])
  )
  if (images === null) dispatch(setImages(lib))
  if (site === null) {
    console.log('situs2', site)
    dispatch(setSite(props.pageContext.site))
  }

  // Build dynamically each page - building it's section
  const page = props.pageContext.page
  return (
    <Layout>
      <SEO title={page.title} description={page.description} />
      {page.sections.map((section, i) => (
        <SectionFactory key={i} section={section} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
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
