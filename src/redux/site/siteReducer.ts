import { SiteType, SiteAction } from './siteTypes'
import { Site } from '../../types/types'

const initialState: Site | null = null

export default function (state = initialState, action: SiteAction) {
  switch (action.type) {
    case SiteType.SET_SITE:
      return action.payload
    default:
      return state
  }
}
