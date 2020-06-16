import { combineReducers } from 'redux'
import uiReducer from './ui/uiReducer'
import siteReducer from './site/siteReducer'
import contextReducer from './context/contextReducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  site: siteReducer,
  context: contextReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
