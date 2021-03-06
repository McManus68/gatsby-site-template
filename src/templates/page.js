import React from 'react'
import Layout from '../components/layout'
import { setSite } from '../redux/index'
import { useDispatch, useSelector } from 'react-redux'
import FactoryPage from '@bit/mcmanus68.webmaker.factory.factory-page'
import SEO from '../components/seo'

export default props => {
  var site = useSelector(state => state.site)
  const dispatch = useDispatch()
  if (site === null) {
    dispatch(setSite(props.pageContext.site))
    site = props.pageContext.site
  }

  // Build dynamically each page - building it's section
  const page = site.pages.find(page => page.title === props.pageContext.title)
  return (
    <Layout>
      {/*<SEO title={page.title} description={page.description} />*/}
      <FactoryPage page={page} />
    </Layout>
  )
}
