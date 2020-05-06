import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNavOpen } from '../state'

import { Container } from 'react-bootstrap'

import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../assets/images/logo-rosa.png'
import style from './header.module.scss'

const Header = ({ title }) => {
  const isNavOpen = useSelector(state => state.ui.isNavOpen)
  const dispatch = useDispatch()

  return (
    <header className={style.header}>
      <Container>
        <nav className={isNavOpen ? style.open : ''}>
          <div className={style.menuToggle}>
            <FaBars
              className={style.faBars}
              onClick={() => dispatch(setNavOpen(true))}
            />
            <FaTimes
              className={style.faTimes}
              onClick={() => dispatch(setNavOpen(false))}
            />
          </div>
          <a href='index.html' className='logo'>
            <img src={logo} alt={title} />
          </a>
          <ul>
            <li>
              <a className={style.active} href='#'>
                Home
              </a>
            </li>
            <li>
              <a href='#'>Menu</a>
            </li>
            <li>
              <a href='#'>Reservations</a>
            </li>
            <li>
              <a href='#'>News</a>
            </li>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>Comment</a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
