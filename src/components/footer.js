import React from 'react'
import { LoremIpsum } from 'react-lorem-ipsum'

import { Container, Row, Col } from 'react-bootstrap'

import Content from '@bit/mcmanus68.ui-react.content'
import BackToTop from '@bit/mcmanus68.ui-react.back-to-top'
import HeadlineSeparator from '@bit/mcmanus68.ui-react.headline-separator'

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
                    <a href='/t'>
                      <FaTwitter className={style.socialIcon} />
                    </a>
                    <a href='#home'>
                      <FaFacebook className={style.socialIcon} />
                    </a>
                    <a href='#t'>
                      <FaPinterest className={style.socialIcon} />
                    </a>
                    <a href='#t'>
                      <FaLinkedinIn className={style.socialIcon} />
                    </a>
                    <a href='#t'>
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
