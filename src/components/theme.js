import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightenDarkenColor } from '../utils/color-utils'
import { GlobalStyle } from '../styles/global-styles'
import { useSelector } from 'react-redux'

const Theme = ({ children }) => {
  var site = useSelector(state => state.site)

  const theme = {
    color: {
      primary: '#2f7208',
      primaryLight: LightenDarkenColor('#2f7208', 20),
      primaryDark: LightenDarkenColor('#2f7208', -20),
      secondary: '#b72222',
      secondaryLight: LightenDarkenColor('#b72222', 20),
      secondaryDark: LightenDarkenColor('#b72222', -20),
      font: '#515151',
      bg: '#fff',
    },
    footer: {
      bg: '#121212',
      color: '#fff',
    },
    header: {
      bg: '#121212',
      color: '#fff',
    },
    block: {
      padding: '2.4rem',
      spacing: '1.2rem',
    },
    section: {
      padding: '2.2rem 1.8rem',
    },
    font: {
      primary: 'Source Sans Pro, sans-serif',
      secondary: 'Herr Von Muellerhoff, cursive',
      body: 'Cabin, sans-serif',
    },
    breakpoint: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
