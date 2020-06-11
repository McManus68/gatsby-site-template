import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightenDarkenColor } from '../utils/color-utils'
import { GlobalStyle } from '../styles/global-styles'
import { useSelector } from 'react-redux'

const Theme = ({ children }) => {
  var theme = useSelector(state => state.site).theme
  theme.color.primaryLight = LightenDarkenColor(theme.color.primary, 20)
  theme.color.primaryDark = LightenDarkenColor(theme.color.primary, -20)
  theme.color.secondaryLight = LightenDarkenColor(theme.color.secondary, 20)
  theme.color.secondaryDark = LightenDarkenColor(theme.color.secondary, -20)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

export default Theme
