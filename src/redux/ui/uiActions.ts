import { UiType, UiAction } from './uiTypes'

export function setNavOpen(open: boolean): UiAction {
  return {
    type: UiType.SET_NAV_OPEN,
    payload: open,
  }
}

export function setNavItem(item: string): UiAction {
  return {
    type: UiType.SET_NAV_ITEM,
    payload: item,
  }
}
