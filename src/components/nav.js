import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { setNavOpen, setNavItem } from '../state'

import { FaBars, FaTimes } from 'react-icons/fa'

import logo from '../assets/images/logo-rosa.png'
import style from './nav.module.scss'

const Nav = ({ items }) => {
  const isNavOpen = useSelector(state => state.ui.isNavOpen)
  const navItem = useSelector(state => state.ui.navItem)
  const dispatch = useDispatch()

  return (
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
        <img src={logo} alt='logo' />
      </a>
      <ul>
        {items.map((item, i) => {
          return (
            <li key={i} className={navItem === item ? style.active : ''}>
              <a href='#' onClick={() => dispatch(setNavItem(item))}>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav

Nav.propTypes = {
  items: PropTypes.array.isRequired,
}
