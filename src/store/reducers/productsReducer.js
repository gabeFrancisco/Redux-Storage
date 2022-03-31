const INITIAL_STATE = {
  list: [],
  product: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED":
      return { ...state, list: action.list };
    case "PRODUCT_ADDED":
      return { ...state };
    case "PRODUCT_UPDATED":
      return { ...state };
    case "PRODUCT_REMOVED":
      return { ...state };
    default:
      return state;
  }
}
