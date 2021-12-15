import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk' // para trabajar de manera asincrona "no esta entendido del todo"

// The combine Reducers
import rootReducers from './reducers/rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(
  applyMiddleware(thunk)
))

export default store
