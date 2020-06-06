import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#2f7208',
    primaryDark: '#2b6308',
    secondary: '#b72222',
    secondaryDark: '#a01c1c',
    fontDark: '#515151',
    fontLight: '#fff',
  },
  footer: {
    bg: '#121212',
    font: '#fff',
  },
  block: {
    padding: '2.4rem',
    spacing: '1.2rem',
  },
  section: {
    padding: '2.2rem 1.8rem',
  },
  fonts: {
    primary: 'Source Sans Pro, sans-serif',
    secondary: 'Herr Von Muellerhoff, cursive',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
