import { SET_NAV_OPEN, SET_NAV_ITEM } from './uiTypes'

export const setNavOpen = (open = false) => {
  return {
    type: SET_NAV_OPEN,
    payload: open,
  }
}

export const setNavItem = item => {
  return {
    type: SET_NAV_ITEM,
    payload: item,
  }
}
