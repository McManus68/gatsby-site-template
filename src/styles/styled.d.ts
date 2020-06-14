import { Theme } from '../types/types'
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
