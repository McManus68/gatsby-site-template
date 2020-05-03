import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setNavOpen } from '../state'

import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'gatsby'

import logo from '../assets/images/logo-rosa.png'
import style from './header.module.scss'

const Header = ({ title }) => {
  const isNavOpen = useSelector(state => state.ui.isNavOpen)
  const dispatch = useDispatch()

  return (
    <header className={style.header}>
      <div className='container'>
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
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Menu
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Reservations
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                News
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Shop
              </a>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link'>
                Comment
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
