import { combineReducers } from 'redux'
import uiReducer from './ui/uiReducer'
import imageReducer from './image/imageReducer'
import siteReducer from './site/siteReducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  image: imageReducer,
  site: siteReducer,
})

export default rootReducer
