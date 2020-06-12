import React from 'react'
import Layout from '../components/layout'
import { setSite } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import PageFactory from '../components/factories/page-factory'

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
      <PageFactory page={page} />
    </Layout>
  )
}
