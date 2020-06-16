export enum UiType {
  SET_NAV_OPEN = 'SET_NAV_OPEN',
  SET_NAV_ITEM = 'SET_NAV_ITEM',
}

export interface UiState {
  isNavOpen: boolean
  navItem: string
}

interface SetNavOpen {
  type: UiType.SET_NAV_OPEN
  payload: boolean
}

interface SetNavItem {
  type: UiType.SET_NAV_ITEM
  payload: string
}

export type UiAction = SetNavOpen | SetNavItem
