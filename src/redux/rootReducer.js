import { combineReducers } from 'redux'
import uiReducer from './ui/uiReducer'
import imageReducer from './image/imageReducer'

const rootReducer = combineReducers({
  ui: uiReducer,
  image: imageReducer,
})

export default rootReducer
