import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { setSite } from '../redux'
import { useDispatch, useSelector } from 'react-redux'
import SectionFactory from '../components/factories/section-factory'

export default props => {
  var site = useSelector(state => state.site)
  const dispatch = useDispatch()
  if (site === null) {
    dispatch(setSite(props.pageContext.site))
    site = props.pageContext.site
  }

  console.log('props.pageContext.name', props.pageContext.title)
  // Build dynamically each page - building it's section
  const page = site.pages.find(page => page.title === props.pageContext.title)
  return (
    <Layout>
      {/*<SEO title={page.title} description={page.description} />*/}
      {page.sections.map((section, i) => (
        <SectionFactory key={i} section={section} />
      ))}
    </Layout>
  )
}
