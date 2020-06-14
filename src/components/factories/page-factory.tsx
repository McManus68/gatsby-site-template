import React from 'react'
import { Page, Section } from '../../types/types'
import SEO from '../seo'
import SectionFactory from './section-factory'

interface Props {
  page: Page
}

const PageFactory: React.FC<Props> = ({ page }) => (
  <>
    {/*<SEO title={page.title} description={page.description} />*/}
    {page.sections.map((section: Section, i: number) => (
      <SectionFactory key={i} section={section} />
    ))}
  </>
)

export default PageFactory
