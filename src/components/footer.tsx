import React from 'react'
import { Container } from 'react-bootstrap'
import { Footer } from '@bit/mcmanus68.webmaker.types.types'
import BackToTop from '@bit/mcmanus68.webmaker.ui.back-to-top'
import RowFactory from './factories/row-factory'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.footer.bg};
  color: ${props => props.theme.footer.color};
  text-align: center;
  position: relative;
`

interface Props {
  footer: Footer
}

const FooterComponent: React.FC<Props> = ({ footer }) => {
  return (
    <StyledFooter>
      <Container>
        <BackToTop />
        {footer.rows.map((row, i) => (
          <RowFactory key={i} row={row} />
        ))}
      </Container>
    </StyledFooter>
  )
}

export default FooterComponent
