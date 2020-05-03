import { SET_NAV_OPEN } from './uiTypes'

export const setNavOpen = (open = false) => {
  return {
    type: SET_NAV_OPEN,
    payload: open,
  }
}
