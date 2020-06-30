import { createGlobalStyle } from 'styled-components'
import 'styled-components'
import '../styles/main.scss'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    html {
      font-family: ${props => props.theme.font.body};
      color: ${props => props.theme.color.font};
      background-color: ${props => props.theme.header.bg};
      scroll-behavior: smooth;
    }
    body {
      background-color: ${props => props.theme.color.bg}; 
      overflow-x: hidden;
    }
    a {
      text-decoration: none;
    }
    .container {
      max-width: 1140px !important;
    }
    @media (max-width: ${props => props.theme.breakpoint.sm}) { 
      html {
        font-size: 10px;
      }
    }
    @media (max-width: ${props => props.theme.breakpoint.md}) {
      html {
        font-size: 12px;
      }
    }
    @media (max-width: ${props => props.theme.breakpoint.lg}) {
      html {
        font-size: 14px;
      }
    }
    @media (max-width: ${props => props.theme.breakpoint.xl}) {
      html {
        font-size: 16px;
      }
    }
  `
