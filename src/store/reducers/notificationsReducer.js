const INITIAL_STATE = {
  list: [],
  notification: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "NOTIFICATION_ADD":
      return { ...state, list: state.list.concat(action.message)}
    default:
      return state;
  }
}
