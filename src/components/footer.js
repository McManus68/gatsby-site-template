import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Container } from 'react-bootstrap'
import BackToTop from '@bit/mcmanus68.ui-react.back-to-top'
import RowFactory from '../components/factories/row-factory'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.footer.bg};
  color: ${props => props.theme.footer.color};
  text-align: center;
  position: relative;
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    query Footer {
      site: thirdPartySiteInfo {
        footer {
          type
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
    }
  `)

  return (
    <StyledFooter>
      <Container>
        <BackToTop />
        {data.site.footer.rows.map((row, i) => (
          <RowFactory key={i} row={row} />
        ))}
      </Container>
    </StyledFooter>
  )
}

export default Footer
