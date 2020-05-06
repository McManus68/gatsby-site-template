import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import { Container, Row, Col } from 'react-bootstrap'

import Content from './ui/content'
import BackToTop from './ui/back-to-top'
import HeadlineSeparator from './ui/headline-separator'

import Fade from 'react-reveal/Fade'

import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaLinkedinIn,
  FaTripadvisor,
  FaEnvelope,
} from 'react-icons/fa'

import style from './footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <BackToTop />

        <Row>
          <Col>
            <Fade top>
              <Content>
                <h4>About Rosa</h4>
                <HeadlineSeparator className={style.headlineSeparator} />
                <LoremIpsum p={1} />
              </Content>
            </Fade>
          </Col>
        </Row>

        <Fade bottom>
          <Row>
            <Col md='6'>
              <Content>
                <h4>Follow along</h4>
                <ul>
                  <li>
                    <a href='/'>
                      <FaTwitter className={style.socialIcon} />
                    </a>
                    <a href='#'>
                      <FaFacebook className={style.socialIcon} />
                    </a>
                    <a href='#'>
                      <FaPinterest className={style.socialIcon} />
                    </a>
                    <a href='#'>
                      <FaLinkedinIn className={style.socialIcon} />
                    </a>
                    <a href='#'>
                      <FaTripadvisor className={style.socialIcon} />
                    </a>
                  </li>
                </ul>
              </Content>
            </Col>

            <Col md='6'>
              <Content>
                <h4>Newsletter</h4>
                <form action=''>
                  <input type='text' placeholder='Your email address...' />
                  <button type='submit'>
                    <FaEnvelope />
                  </button>
                </form>
              </Content>
            </Col>
          </Row>
        </Fade>
      </Container>
    </footer>
  )
}

export default Footer
