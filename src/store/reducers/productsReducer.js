const INITIAL_STATE = {
  list: [],
  product: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return { ...state, list: action.payload };
    case "PRODUCT_ADDED":
      return { ...state, product: action.payload}
    default:
      return state;
  }
}
