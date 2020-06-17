import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/rootReducer'
import Theme from './theme'
import FactoryHeader from '@bit/mcmanus68.webmaker.factory.factory-header'
import FactoryFooter from '@bit/mcmanus68.webmaker.factory.factory-footer'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const site = useSelector((state: RootState) => state.site)
  return (
    <Theme>
      <FactoryHeader site={site} />
      <main>{children}</main>
      <FactoryFooter footer={site.footer} />
    </Theme>
  )
}

export default Layout
