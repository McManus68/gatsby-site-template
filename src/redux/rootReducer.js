import { combineReducers } from 'redux'
import uiReducer from './ui/uiReducer'
import siteReducer from './site/siteReducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  site: siteReducer,
})

export default rootReducer
