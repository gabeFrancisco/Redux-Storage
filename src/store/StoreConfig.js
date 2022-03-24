import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import productsReducer from './reducers/productsReducer'

import thunk from 'redux-thunk'
import categoriesReducer from './reducers/categoriesReducer'

const reducers = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
})

function storeConfig(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storeConfig
