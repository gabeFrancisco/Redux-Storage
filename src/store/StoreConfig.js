import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({

})

function storeConfig(){
  return createStore(reducers)
}

export default storeConfig
