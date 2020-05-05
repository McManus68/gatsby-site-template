import React from 'react'
import { navigate } from 'gatsby'

import Fade from 'react-reveal/Fade'

import {
  FaChevronUp,
  FaAsterisk,
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
    <footer className={style.footer}>
      <div className='container'>
        <div className={style.backToTop}>
          <FaChevronUp
            className={style.chevron}
            onClick={() => navigate('#hero')}
          />
        </div>
        <div className={style.content}>
          <Fade top>
            <div className={style.about}>
              <h4>About Rosa</h4>
              <FaAsterisk className={style.asterisk} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                nihil, nostrum voluptatibus, numquam nobis repellat assumenda
                itaque, et neque modi soluta sit nam similique labore tenetur
                praesentium? Soluta, numquam deleniti?
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div className={style.contentDivider}>
              <div className={style.socialMedia}>
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
              </div>
              <div className={style.newsletterContainer}>
                <h4>Newsletter</h4>
                <form action=''>
                  <input type='text' placeholder='Your email address...' />
                  <button type='submit'>
                    <FaEnvelope />
                  </button>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  )
}

export default Footer
