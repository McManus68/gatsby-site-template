import React from 'react'
import { Provider } from 'react-redux'
import { createStore as reduxCreateStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './redux/rootReducer'

const createStore = () =>
  reduxCreateStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
