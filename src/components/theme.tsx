import React from 'react'
import { ThemeProvider } from 'styled-components'
import { LightenDarkenColor } from '../utils/color-utils'
import { GlobalStyle } from '../styles/global-styles'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import '../styles/main.scss'

interface Props {
  children: React.ReactNode
}

const Theme: React.FC<Props> = ({ children }) => {
  var theme = useSelector((state: RootState) => state.site).theme
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
