import { UiType, UiAction, UiState } from './uiTypes'

const initialState: UiState = {
  isNavOpen: false,
  navItem: '',
}

export default function (state = initialState, action: UiAction) {
  switch (action.type) {
    case UiType.SET_NAV_OPEN:
      return {
        ...state,
        isNavOpen: action.payload,
      }
    case UiType.SET_NAV_ITEM:
      return {
        ...state,
        navItem: action.payload,
      }
    default:
      return state
  }
}
