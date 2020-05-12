import React from 'react'
import PropTypes from 'prop-types'

import { Container } from 'react-bootstrap'

import Nav from './nav'

import './header.module.scss'

const Header = ({ items }) => {
  return (
    <header>
      <Container>
        <Nav items={items} />
      </Container>
    </header>
  )
}

export default Header

Header.propTypes = {
  items: PropTypes.array.isRequired,
}
