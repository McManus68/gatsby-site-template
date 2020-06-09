import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import NavFactory from './factories/nav-factory'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.header.bg};
`

const Header = ({ site }) => {
  return (
    <StyledHeader>
      <Container>
        <NavFactory site={site} />
      </Container>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  site: PropTypes.object.isRequired,
}
