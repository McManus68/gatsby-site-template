import { SiteType, SiteAction } from './siteTypes'
import { Site } from '../../types/types'

export function setSite(site: Site): SiteAction {
  return {
    type: SiteType.SET_SITE,
    payload: site,
  }
}