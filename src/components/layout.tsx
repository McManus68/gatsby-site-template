import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import Header from './header'
import Footer from './footer'
import Theme from './theme'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const site = useSelector((state: RootState) => state.site)
  return (
    <Theme>
      <Header site={site} />
      <main>{children}</main>
      <Footer footer={site.footer} />
    </Theme>
  )
}

export default Layout
