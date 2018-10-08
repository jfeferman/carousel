import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

/* redux logger configuration */
const logger = createLogger({
  level: 'info',
  collapsed: false,
  logger: console,
  predicate: (getState, action) => true
})

/* redux middlewares */
let middlewares = [
  thunk
]

/* Add logger if process environment is not production */
if (process.env.NODE_ENV !== 'production') {
  middlewares = [...middlewares, logger]
}

let createStoreWithMiddleware
if (process.env.NODE_ENV !== 'production') {
  createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
}

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState)
  return store
}
