import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Nav from './nav'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
`

const Header = ({ pages }) => {
  return (
    <StyledHeader>
      <Container>
        <Nav items={pages} />
      </Container>
    </StyledHeader>
  )
}

export default Header

Header.propTypes = {
  pages: PropTypes.array.isRequired,
}
