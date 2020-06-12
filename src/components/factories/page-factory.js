import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../seo'
import SectionFactory from './section-factory'

const PageFactory = ({ page }) => (
  <>
    {/*<SEO title={page.title} description={page.description} />*/}
    {page.sections.map((section, i) => (
      <SectionFactory key={i} section={section} />
    ))}
  </>
)

export default PageFactory

PageFactory.propTypes = {
  page: PropTypes.object.isRequired,
}
