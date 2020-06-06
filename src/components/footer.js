import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Content from '@bit/mcmanus68.ui-react.content'
import BackToTop from '@bit/mcmanus68.ui-react.back-to-top'

import FooterSimpleContent from '@bit/mcmanus68.ui-react.footer-simple-content'
import FooterSocial from '@bit/mcmanus68.ui-react.footer-social'
import FooterNewsletter from '@bit/mcmanus68.ui-react.footer-newsletter'

import style from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <BackToTop />
        <Row>
          <Col>
            <FooterSimpleContent />
          </Col>
        </Row>

        <Row>
          <Col md='6'>
            <FooterSocial />
          </Col>

          <Col md='6'>
            <FooterNewsletter />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
