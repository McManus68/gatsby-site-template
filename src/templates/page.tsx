import React from 'react'
import { RootState } from '../redux/rootReducer'
import Layout from '../components/layout'
import { setSite } from '../redux/index'
import { useDispatch, useSelector } from 'react-redux'
import PageFactory from '../components/factories/page-factory'

export default (props: { pageContext: { site: any; title: any } }) => {
  var site = useSelector((state: RootState) => state.site)
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
