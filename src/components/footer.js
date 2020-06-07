import React from 'react'
import PropTypes from 'prop-types'
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

const Footer = ({ footer }) => {
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

export default Footer

Footer.propTypes = {
  footer: PropTypes.object.isRequired,
}
