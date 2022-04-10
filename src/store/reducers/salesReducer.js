const INITIAL_STATE = {
  list: [],
  sale: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SALES_FETCHED":
      return { ...state, list: action.list}
    default:
      return state;
  }
}
