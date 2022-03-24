const INITIAL_STATE = {
  list: [],
  category: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CATEGORIES_FETCHED":
      return { ...state, list: action.list };
    case "CATEGORY_ADDED":
      return { ...state };
    default:
      return state;
  }
}
