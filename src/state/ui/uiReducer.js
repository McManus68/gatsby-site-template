import { SET_NAV_OPEN, SET_NAV_ITEM } from './uiTypes'

const initialState = {
  isNavOpen: false,
  navItem: 'Home',
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_OPEN:
      return {
        ...state,
        isNavOpen: action.payload,
      }

    case SET_NAV_ITEM:
      return {
        ...state,
        navItem: action.payload,
      }
    default:
      return state
  }
}

export default uiReducer
