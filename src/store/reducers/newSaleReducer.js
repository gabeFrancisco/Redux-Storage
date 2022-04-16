const INITIAL_STATE = {
  customer: {},
  productOrders: [ ],
  totalValue: 0.0
}

export default function(state = INITIAL_STATE, action){
  switch(action.type){
    case 'CUSTOMER_ADDED':
      return { ...state, customer: action.customer}
    default:
      return state;
  }
}
