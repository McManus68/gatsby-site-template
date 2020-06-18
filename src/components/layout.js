import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global-styles'
import FactoryHeader from '@bit/mcmanus68.webmaker.factory.factory-header'
import FactoryFooter from '@bit/mcmanus68.webmaker.factory.factory-footer'
import { createTheme } from '@bit/mcmanus68.webmaker.factory.factory-theme'

const Layout = ({ children }) => {
  const site = useSelector(state => state.site)
  const theme = createTheme(site.theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <FactoryHeader site={site} />
      <main>{children}</main>
      <FactoryFooter footer={site.footer} />
    </ThemeProvider>
  )
}

export default Layout
