import { SET_NAV_OPEN } from './uiTypes'

const initialState = {
  isNavOpen: false,
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAV_OPEN:
      return {
        ...state,
        isNavOpen: action.payload,
      }
    default:
      return state
  }
}

export default uiReducer
