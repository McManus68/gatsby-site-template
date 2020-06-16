import React from 'react'
import { Container } from 'react-bootstrap'
import { Site } from '../types/types'
import HeaderFactory from './factories/header-factory'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: ${props => props.theme.header.bg};
`

interface Props {
  site: Site
}

const Header: React.FC<Props> = ({ site }) => (
  <StyledHeader>
    <Container>
      <HeaderFactory site={site} />
    </Container>
  </StyledHeader>
)

export default Header
