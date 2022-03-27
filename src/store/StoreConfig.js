import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import productsReducer from './reducers/productsReducer'
import categoriesReducer from './reducers/categoriesReducer'
import customersReducer from './reducers/customersReducer'
import notificationsReducer from './reducers/notificationsReducer'

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  customers: customersReducer,
  notifications: notificationsReducer
})

function storeConfig(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storeConfig
