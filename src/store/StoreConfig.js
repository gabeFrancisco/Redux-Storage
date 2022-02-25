import { createStore, combineReducers, applyMiddleware } from 'redux'
import productsReducer from './reducers/productsReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  products: productsReducer
})

function storeConfig(){
  return createStore(reducers, applyMiddleware(thunk))
}

export default storeConfig
