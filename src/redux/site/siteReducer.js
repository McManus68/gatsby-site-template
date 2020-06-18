import { SET_SITE } from './siteTypes'

const initialState = null
const siteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SITE:
      return action.payload
    default:
      return state
  }
}

export default siteReducer
