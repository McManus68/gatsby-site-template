import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import { Container, Row, Col } from 'react-bootstrap'

import BlocImageGallery from '../components/ui/bloc-image-gallery'
import BlocContent from '../components/ui/bloc-content'
import Section from '../components/ui/section'
import SectionHeadline from '../components/ui/section-headline'
import Hero from '../components/sections/hero'

import style from './page.module.scss'

export default ({ data }) => {
  const getImage = name => {
    const image = data.allFile.nodes.find(
      ({ childImageSharp }) => name === childImageSharp.fluid.originalName
    )
    return image.childImageSharp.fluid.src
  }
  return (
    <Layout>
      <SEO title={'Details about '} />

      {data.dataJson.site.pages[0].sections.map((section, i) => {
        switch (section.type) {
          case 'section-hero':
            return (
              <Hero
                key={i}
                title={section.params.title}
                subtitle={section.params.subtitle}
                image={getImage(section.params.image)}
              />
            )

          case 'section-headline':
            return (
              <SectionHeadline
                key={i}
                title={section.params.title}
                subtitle={section.params.subtitle}
                image={getImage(section.params.image)}
              />
            )

          case 'section':
            return (
              <Section>
                <Container>
                  {section.rows.map((row, i) => {
                    return (
                      <Row>
                        {row.blocs.map((bloc, j) => {
                          console.log('classname = ' + bloc.classes)
                          return (
                            <Col
                              className={bloc.classes}
                              sm={bloc.responsive.sm}
                              md={bloc.responsive.md}
                              lg={bloc.responsive.lg}
                              xl={bloc.responsive.xl}
                            >
                              {(() => {
                                switch (bloc.type) {
                                  case 'bloc-content':
                                    return (
                                      <BlocContent
                                        title={bloc.params.title}
                                        subtitle={bloc.params.subtitle}
                                        buttonText={bloc.params.buttonText}
                                      />
                                    )
                                  case 'bloc-gallery':
                                    return (
                                      <BlocImageGallery
                                        images={bloc.params.images}
                                      />
                                    )
                                  default:
                                    return ''
                                }
                              })()}
                            </Col>
                          )
                        })}
                      </Row>
                    )
                  })}
                </Container>
              </Section>
            )

          default:
            return ''
        }
      })}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    dataJson(
      site: { pages: { elemMatch: { slug: { eq: $slug } } }, id: { eq: 2 } }
    ) {
      site {
        pages {
          slug
          description
          sections {
            type
            params {
              title
              subtitle
              image
            }
            rows {
              blocs {
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
                }
              }
            }
          }
          title
        }
        description
        title
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
