import React from 'react'

import { Container } from 'react-bootstrap'

import Nav from './nav'

import './header.module.scss'

const Header = ({ title }) => {
  const items = ['Home', 'Menu', 'Reservation', 'Contact']
  return (
    <header>
      <Container>
        <Nav items={items} />
      </Container>
    </header>
  )
}

export default Header
