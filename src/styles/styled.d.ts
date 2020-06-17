import { Theme } from '@bit/mcmanus68.webmaker.types.types'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
