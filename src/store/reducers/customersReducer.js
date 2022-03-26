const INITIAL_STATE = {
  list: [],
  customer: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CUSTOMERS_FETCHED":
      return { ...state, list: action.list };
    case "CUSTOMER_ADDED":
      return { ...state };
    case "CUSTOMER_READED":
      return { ...state, customer: action.customer };
    default:
      return state;
  }
}
