import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { api } from '../middleware/api'
import { logger, crashReporter } from '../middleware/logging'
import rootReducer from '../reducers/root_reducer'

function configureStore(history, initialState){
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      api,
      logger,
      crashReporter
    )
  )
}

export default configureStore;