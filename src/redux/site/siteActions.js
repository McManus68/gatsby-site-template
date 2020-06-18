import { SET_SITE } from './siteTypes'

export const setSite = site => {
  return {
    type: SET_SITE,
    payload: site,
  }
}
