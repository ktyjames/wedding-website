import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { api } from '../middleware/api'
import { logger, crashReporter } from '../middleware/logging'
import rootReducer from '../reducers/root_reducer'

function configureStore(history, initialState){
  const store =  createStore(
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

  // Uncomment for Webpack hot module replacement.
  // if (module.hot) {
  //   module.hot.accept('../reducers/root_reducer', () => {
  //     const nextRootReducer = require('../reducers/root_reducer').default
  //     store.replaceReducer(nextRootReducer)
  //   })
  // }

  return store
}

export default configureStore
