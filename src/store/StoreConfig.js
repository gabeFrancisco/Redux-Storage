import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import productsReducer from './reducers/productsReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  products: productsReducer
})

function storeConfig(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storeConfig
